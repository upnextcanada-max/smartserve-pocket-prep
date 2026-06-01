(function () {
  const data = window.STUDY_DATA || { facts: [], flashcards: [], questions: [] };
  const storageKey = "smartserve-pocket-quiz";

  const $ = (id) => document.getElementById(id);
  const state = loadState();

  let pool = [];
  let index = 0;
  let correct = 0;
  let answered = false;
  let modeLength = 33;
  let deferredInstallPrompt = null;
  let factPool = [];
  let cardIndex = 0;
  let cardFlipped = false;
  let boardTimer = null;
  let boardIndex = 0;

  function loadState() {
    try {
      return { totalAnswered: 0, missed: [], ...(JSON.parse(localStorage.getItem(storageKey)) || {}) };
    } catch {
      return { totalAnswered: 0, missed: [] };
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
    renderStats();
    renderReview();
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function startQuiz(length, missedOnly = false) {
    const missedQuestions = new Set(state.missed.map((item) => item.q));
    const source = missedOnly
      ? data.questions.filter((question) => missedQuestions.has(question.q))
      : data.questions;

    pool = shuffle(source).slice(0, Math.min(length, source.length));
    if (!pool.length) {
      pool = shuffle(data.questions).slice(0, Math.min(10, data.questions.length));
    }

    index = 0;
    correct = 0;
    answered = false;
    modeLength = length;
    renderQuestion();
    renderStats();
    showView("quiz");
  }

  function renderQuestion() {
    const item = pool[index];
    if (!item) {
      $("questionText").textContent = "No questions loaded.";
      $("choices").innerHTML = "";
      return;
    }

    answered = false;
    $("progressText").textContent = `Question ${index + 1} of ${pool.length}`;
    $("categoryText").textContent = item.category || "SmartServe";
    $("scoreCount").textContent = `${correct}/${index}`;
    $("progressBar").style.width = `${(index / pool.length) * 100}%`;
    $("questionText").textContent = item.q;
    $("feedback").hidden = true;
    $("feedback").className = "feedback";
    $("nextButton").hidden = true;
    $("nextButton").textContent = index + 1 >= pool.length ? "Finish" : "Next";
    $("choices").innerHTML = item.choices.map((choice, choiceIndex) => (
      `<button class="choice-button" type="button" data-index="${choiceIndex}">${escapeHtml(choice)}</button>`
    )).join("");
  }

  function answer(choiceIndex) {
    if (answered) return;
    answered = true;

    const item = pool[index];
    const isCorrect = choiceIndex === item.answer;
    state.totalAnswered += 1;
    if (isCorrect) correct += 1;
    if (!isCorrect) addMissed(item);

    document.querySelectorAll(".choice-button").forEach((button) => {
      const buttonIndex = Number(button.dataset.index);
      button.disabled = true;
      if (buttonIndex === item.answer) button.classList.add("correct");
      if (buttonIndex === choiceIndex && !isCorrect) button.classList.add("wrong");
    });

    const feedback = $("feedback");
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
    feedback.textContent = isCorrect
      ? `Correct. ${item.why || ""}`.trim()
      : `Wrong. Correct answer: ${item.choices[item.answer]}. ${item.why || ""}`.trim();

    $("scoreCount").textContent = `${correct}/${index + 1}`;
    $("nextButton").hidden = false;
    saveState();
  }

  function addMissed(item) {
    if (state.missed.some((missed) => missed.q === item.q)) return;
    state.missed.unshift({
      q: item.q,
      answer: item.choices[item.answer],
      why: item.why || "",
      category: item.category || "SmartServe"
    });
  }

  function next() {
    if (index + 1 >= pool.length) {
      const percent = Math.round((correct / pool.length) * 100);
      $("questionText").textContent = `Finished: ${percent}%`;
      $("categoryText").textContent = "Score";
      $("progressText").textContent = `${correct} correct out of ${pool.length}`;
      $("progressBar").style.width = "100%";
      $("choices").innerHTML = "";
      $("feedback").hidden = false;
      $("feedback").className = percent >= 80 ? "feedback correct" : "feedback wrong";
      $("feedback").textContent = percent >= 80
        ? "Good run. Now hit Missed to tighten the weak spots."
        : "Run Missed, then try Exam Sim again.";
      $("nextButton").hidden = true;
      return;
    }

    index += 1;
    renderQuestion();
  }

  function renderStats() {
    $("answeredCount").textContent = state.totalAnswered;
    $("scoreCount").textContent = pool.length ? `${correct}/${answered ? index + 1 : index}` : "0/0";
    $("missedCount").textContent = state.missed.length;
  }

  function renderReview() {
    if (!state.missed.length) {
      $("reviewList").innerHTML = `<div class="review-item"><strong>Clean</strong><p>No missed questions yet.</p></div>`;
      return;
    }

    $("reviewList").innerHTML = state.missed.slice(0, 8).map((item) => `
      <div class="review-item">
        <strong>${escapeHtml(item.category)}</strong>
        <p>${escapeHtml(item.q)}</p>
        <p>Answer: ${escapeHtml(item.answer)}</p>
      </div>
    `).join("");
  }

  function renderFacts() {
    factPool = factPool.length ? factPool : shuffle(data.facts || []);
    $("factList").innerHTML = factPool.slice(0, 12).map((item) => `
      <article class="fact-item">
        <span>${escapeHtml(item.category || "SmartServe")}</span>
        <strong>${escapeHtml(item.title || "Study note")}</strong>
        <p>${escapeHtml(item.text || "")}</p>
      </article>
    `).join("");
  }

  function renderCard() {
    const cards = data.flashcards || [];
    const item = cards[cardIndex] || { category: "SmartServe", q: "No cards loaded.", a: "" };
    $("cardCounter").textContent = cards.length ? `${cardIndex + 1}/${cards.length}` : "0/0";
    $("cardCategory").textContent = item.category || "SmartServe";
    $("cardPrompt").textContent = item.q || item.prompt || "No prompt loaded.";
    $("cardAnswer").textContent = item.a || item.answer || "";
    $("cardAnswer").hidden = !cardFlipped;
    $("flashcard").classList.toggle("flipped", cardFlipped);
  }

  function moveCard(direction) {
    const cards = data.flashcards || [];
    if (!cards.length) return;
    cardIndex = (cardIndex + direction + cards.length) % cards.length;
    cardFlipped = false;
    renderCard();
  }

  function showView(view) {
    const views = {
      quiz: $("quizView"),
      cram: $("cramView"),
      cards: $("cardsView"),
      audio: $("audioView")
    };

    if (view !== "cram" && boardTimer) stopBoardAutoplay("Auto-run paused.");

    Object.entries(views).forEach(([name, element]) => {
      element.hidden = name !== view;
    });
    [
      ["quizTab", "quiz"],
      ["cramTab", "cram"],
      ["cardsTab", "cards"],
      ["audioTab", "audio"]
    ].forEach(([id, name]) => {
      $(id).classList.toggle("active", name === view);
    });

    if (view === "cram") renderFacts();
    if (view === "cards") renderCard();
  }

  function boardItems() {
    return Array.from(document.querySelectorAll(".board-grid article"));
  }

  function setBoardStatus(message) {
    const status = $("boardStatus");
    if (status) status.textContent = message;
  }

  function stopBoardAutoplay(message = "Auto-run paused.") {
    if (boardTimer) {
      window.clearInterval(boardTimer);
      boardTimer = null;
    }

    boardItems().forEach((item) => item.classList.remove("active"));
    setBoardStatus(message);
  }

  function advanceBoard() {
    const items = boardItems();
    if (!items.length) {
      stopBoardAutoplay("No answer-pattern cards found.");
      return;
    }

    items.forEach((item) => item.classList.remove("active"));
    const position = boardIndex % items.length;
    const item = items[position];
    item.classList.add("active");
    item.scrollIntoView({ behavior: "smooth", block: "center" });

    const title = item.querySelector("strong")?.textContent || "Study card";
    setBoardStatus(`Auto-running ${position + 1}/${items.length}: ${title}`);
    boardIndex += 1;
  }

  function startBoardAutoplay() {
    showView("cram");
    if (boardTimer) window.clearInterval(boardTimer);
    boardIndex = 0;
    advanceBoard();
    boardTimer = window.setInterval(advanceBoard, 4200);
  }

  function clearMissed() {
    state.missed = [];
    saveState();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function bindEvents() {
    $("examSim").addEventListener("click", () => startQuiz(33));
    $("quick10").addEventListener("click", () => startQuiz(10));
    $("missedOnly").addEventListener("click", () => startQuiz(Math.max(1, Math.min(33, state.missed.length)), true));
    $("choices").addEventListener("click", (event) => {
      const button = event.target.closest(".choice-button");
      if (!button) return;
      answer(Number(button.dataset.index));
    });
    $("nextButton").addEventListener("click", next);
    $("clearMissed").addEventListener("click", clearMissed);
    $("quizTab").addEventListener("click", () => showView("quiz"));
    $("cramTab").addEventListener("click", () => showView("cram"));
    $("cardsTab").addEventListener("click", () => showView("cards"));
    $("audioTab").addEventListener("click", () => showView("audio"));
    $("autoBoard").addEventListener("click", startBoardAutoplay);
    $("stopBoard").addEventListener("click", () => stopBoardAutoplay());
    $("shuffleFacts").addEventListener("click", () => {
      factPool = shuffle(data.facts || []);
      renderFacts();
    });
    $("flashcard").addEventListener("click", () => {
      cardFlipped = !cardFlipped;
      renderCard();
    });
    $("flipCard").addEventListener("click", () => {
      cardFlipped = !cardFlipped;
      renderCard();
    });
    $("prevCard").addEventListener("click", () => moveCard(-1));
    $("nextCard").addEventListener("click", () => moveCard(1));
    $("installButton").addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      $("installButton").hidden = true;
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $("installButton").hidden = false;
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js?v=33").catch(() => {});
  }

  bindEvents();
  renderReview();
  renderFacts();
  renderCard();
  startQuiz(modeLength);
  const initialView = new URLSearchParams(window.location.search).get("view");
  if (["quiz", "cram", "cards", "audio"].includes(initialView)) {
    showView(initialView);
  }
  const autoplay = new URLSearchParams(window.location.search).get("autoplay");
  if (autoplay === "1" || autoplay === "true") {
    window.setTimeout(startBoardAutoplay, 500);
  }
})();
