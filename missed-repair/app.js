(function () {
  const topics = [
    {
      id: "lowest-bac",
      title: "Lowest BAC",
      question: "If the same number of standard drinks is consumed, which guest will most likely have the lowest BAC?",
      answer: "Choose the guest with the lowest BAC on the chart. All else equal, that usually means higher body weight, more time since drinking, and male sex on the BAC chart.",
      why: "Tolerance can hide signs of intoxication, but it does not lower BAC. Food can slow absorption, but only time lowers BAC.",
      memory: "Same drinks: heavier body, more time, male chart usually means lower BAC."
    },
    {
      id: "deny-entry",
      title: "Deny Entry",
      question: "Who must be denied entry to a licensed establishment?",
      answer: "Deny entry to someone already intoxicated or apparently intoxicated. Also stop unsafe, violent, disorderly, barred/ejected, or over-capacity situations.",
      why: "You are expected to manage who enters and stays so the premises remains lawful and safe.",
      memory: "Already drunk, unsafe, violent, or over-capacity means they do not come in."
    },
    {
      id: "private-sop",
      title: "Private SOP",
      question: "Which things are not allowed under a private Special Occasion Permit?",
      answer: "No public advertising, no admitting the general public, no intention to profit from alcohol sales, no drinking contests, no serving under 19, and no service outside permit conditions.",
      why: "A private SOP is for occasional invited-guest events, not a public or profit-making alcohol event.",
      memory: "Private SOP means invited only, no public ads, no alcohol profit, no minors."
    },
    {
      id: "agco-suspension",
      title: "AGCO Suspension",
      question: "Which activities could lead the AGCO to suspend a licence?",
      answer: "The clearest answer is serving or selling alcohol to anyone under 19. Other high-risk answers include serving intoxicated people, illegal hours, unsafe conduct, illegal activity, blocked inspections, or licence-condition breaches.",
      why: "Serious LLCA violations can lead to monetary penalties, licence conditions, suspension, or revocation.",
      memory: "Minors, intoxicated service, illegal hours, unsafe premises, ignored conditions."
    },
    {
      id: "underage",
      title: "Underage Service",
      question: "Serving or selling alcohol to an underage customer can lead to what?",
      answer: "AGCO or police penalties, fines, employer liability, licence suspension or revocation, and personal responsibility.",
      why: "Selling or serving alcohol to anyone under 19 is illegal in Ontario.",
      memory: "Under 19 equals stop. No valid ID, no sale."
    },
    {
      id: "sandys-law",
      title: "Sandy's Law",
      question: "Which statements are true about Sandy's Law?",
      answer: "It is the FASD/pregnancy alcohol warning sign. It must be prominently posted in licensed establishments and must be at least 8 x 10 inches.",
      why: "Failure to post the sign properly is an LLCA offence.",
      memory: "Pregnancy/FASD warning, visible, 8 x 10 minimum."
    },
    {
      id: "tampered-id",
      title: "Tampered ID",
      question: "How can you tell if an I.D. has been tampered with?",
      answer: "Look for scratched dates, dull or faded colours, different fonts, misspellings, uneven edges, cuts or bubbles in laminate, abnormal size/weight/shape, or photo/description mismatch.",
      why: "Smart Serve expects you to visually and manually inspect ID and refuse if it appears altered.",
      memory: "Dates, fonts, laminate, edges, photo, description. Mismatch means refuse."
    },
    {
      id: "health-card",
      title: "Health Card",
      question: "What is true about the Ontario Health Card as age identification?",
      answer: "Do not ask for it. If the guest voluntarily offers it, it can only be used as secondary ID and acceptance is at your discretion.",
      why: "Smart Serve specifically says you should not ask for the Ontario Health Card as identification.",
      memory: "Never ask. Secondary only if offered."
    },
    {
      id: "convenience-licence",
      title: "Convenience Licence",
      question: "What criteria must be met for a Convenience Store Liquor Licence?",
      answer: "No more than 4,000 sq ft of retail floor space, at least half the retail floor space in food products, at least five listed food categories, and not primarily identified as a pharmacy.",
      why: "This is from Ontario's convenience store definition in the liquor licensing regulation.",
      memory: "4,000 or less, half food, five food categories, not mainly pharmacy."
    },
    {
      id: "over-service",
      title: "Prevent Over-Service",
      question: "What strategies can you use to prevent over-service?",
      answer: "Count drinks, observe guests, talk with staff, slow service, offer food and water, use measured pours, avoid self-serve/circulating refills, avoid multiple tickets, stop service early, arrange a safe ride, and document incidents.",
      why: "Over-service creates safety risk and liability. Prevention means active monitoring plus early intervention.",
      memory: "Count, slow, food/water, stop early, safe ride, document."
    }
  ];

  const trapTopics = [
    {
      title: "Health Card Trap",
      remembered: "Are Ontario Health Cards acceptable as ID?",
      answer: "Do not ask for an Ontario Health Card. If the guest voluntarily offers it, Smart Serve says it can only be used as secondary ID and accepted at your discretion.",
      avoid: "Do not choose answers saying you can demand it, require it, use it as primary ID, or that Ministry of Health is involved in alcohol service."
    },
    {
      title: "Laminated Photo Trap",
      remembered: "Laminated photo for tampering.",
      answer: "A valid plastic or laminated government photo ID is not automatically bad. The red flag is when the photo, lettering, size, weight, shape, or lamination looks switched, altered, cut, bubbled, uneven, or tampered with.",
      avoid: "Do not accept a phone photo, photocopy, student card, homemade laminated picture, expired ID, or an ID where the laminate/photo looks altered."
    },
    {
      title: "Underage Charge Trap",
      remembered: "Serving underage: who can charge, Ministry of Health or police?",
      answer: "For the test, separate the roles: police can lay charges/provincial offence tickets; AGCO can issue monetary penalties and suspend, revoke, or add conditions to licences. Ministry of Health is not the alcohol-enforcement answer.",
      avoid: "Do not pick Ministry of Health for serving-underage enforcement. Pick police for charges and AGCO for licence discipline."
    },
    {
      title: "Regular Forgot ID Trap",
      remembered: "A regular customer buys often but forgot ID.",
      answer: "If you need to verify age because they look under 25, appear under 19, or you have doubt, ask for valid ID. If they cannot produce valid acceptable ID, refuse alcohol service or sale even if they are a regular.",
      avoid: "Do not choose serve because you know them, because they bought before, because a friend vouches, or because they show a phone photo."
    },
    {
      title: "LLBO / AGCO / LCBO Trap",
      remembered: "The weird LLBO stuff.",
      answer: "Use current names: AGCO regulates and issues alcohol licences in Ontario. LLCA is the current law. LCBO is a retailer/wholesaler, not the regulator. LLBO is the old licensing board name, not the current test answer.",
      avoid: "Do not mix up AGCO with LCBO, Smart Serve, federal government, municipality, or old LLBO wording."
    },
    {
      title: "Licence Consequence Trap",
      remembered: "Who suspends or revokes the licence?",
      answer: "AGCO/Registrar handles licence discipline such as monetary penalties, conditions, suspension, or revocation. Police handle enforcement/charges. Courts handle convictions and civil lawsuits.",
      avoid: "Do not pick Ministry of Health, Smart Serve, or the LCBO as the body that suspends a liquor licence."
    }
  ];

  const quizQuestions = [
    {
      category: "BAC",
      q: "Two guests drink the same number of standard drinks. Which factor usually points to the lower BAC?",
      choices: ["Higher body weight", "Higher tolerance", "More confidence", "Drinking coffee"],
      answer: 0,
      why: "Higher body weight usually lowers BAC on the chart when other factors are equal."
    },
    {
      category: "BAC",
      q: "What does high tolerance do?",
      choices: ["It hides signs but does not lower BAC", "It instantly lowers BAC", "It makes ID unnecessary", "It counts as food"],
      answer: 0,
      why: "Tolerance can make a person look less impaired, but the BAC can still be high."
    },
    {
      category: "BAC",
      q: "What actually lowers BAC?",
      choices: ["Only time", "Coffee", "Cold showers", "A heavy meal after drinking"],
      answer: 0,
      why: "Only time lowers BAC. Food can slow absorption, but it does not sober someone up instantly."
    },
    {
      category: "Entry",
      q: "A guest arrives already intoxicated. What is the safest lawful action?",
      choices: ["Deny entry and keep the situation safe", "Let them in if they promise not to drink", "Serve water then alcohol", "Ignore it because they drank elsewhere"],
      answer: 0,
      why: "Already intoxicated people should not be allowed in or served."
    },
    {
      category: "Entry",
      q: "Which situation is a valid reason to deny entry?",
      choices: ["The premises would exceed legal capacity", "The guest asks for food", "The guest has a valid passport", "The guest is 25"],
      answer: 0,
      why: "You must keep the premises within lawful capacity."
    },
    {
      category: "SOP",
      q: "What is a private-event SOP for?",
      choices: ["Invited guests only", "Anyone from the public", "A regular bar night", "A convenience store sale"],
      answer: 0,
      why: "Private SOP events are for invited guests only."
    },
    {
      category: "SOP",
      q: "What is not allowed for a private SOP event?",
      choices: ["Public advertising", "Invited guests", "Food service", "Checking ID"],
      answer: 0,
      why: "A private SOP event cannot be advertised to the public."
    },
    {
      category: "SOP",
      q: "Can a private SOP holder run the event with the intention of profiting from alcohol sales?",
      choices: ["No", "Yes, always", "Only after midnight", "Only if guests are 25"],
      answer: 0,
      why: "Private Event SOPs cannot be used with the intention of profiting from alcohol sales."
    },
    {
      category: "AGCO",
      q: "Which activity is the clearest AGCO suspension risk?",
      choices: ["Serving or selling alcohol to someone under 19", "Offering water", "Calling a taxi", "Checking ID"],
      answer: 0,
      why: "Serving or selling to anyone under 19 is a serious LLCA violation."
    },
    {
      category: "AGCO",
      q: "Which situation can also put a licence at risk?",
      choices: ["Serving an intoxicated person", "Refusing an invalid ID", "Offering food", "Documenting an incident"],
      answer: 0,
      why: "Serving intoxicated people is a major compliance and safety problem."
    },
    {
      category: "Underage",
      q: "What age must a customer be to buy, possess, accept delivery, or consume alcohol in Ontario?",
      choices: ["19", "18", "21", "25"],
      answer: 0,
      why: "In Ontario, the legal age to buy, possess, accept delivery, or consume alcohol is 19."
    },
    {
      category: "Underage",
      q: "Serving or selling to an underage guest can lead to what?",
      choices: ["Fines, penalties, and licence suspension or revocation", "A discount", "A longer service window", "No consequence if they look mature"],
      answer: 0,
      why: "Underage service can create personal, employer, police, and AGCO consequences."
    },
    {
      category: "Sandy's Law",
      q: "What does Sandy's Law signage warn about?",
      choices: ["Alcohol use during pregnancy and FASD risk", "Fire exits", "Drink specials", "Food allergies"],
      answer: 0,
      why: "Sandy's Law is the pregnancy/FASD alcohol warning sign."
    },
    {
      category: "Sandy's Law",
      q: "What is the minimum size of the Sandy's Law sign?",
      choices: ["8 x 10 inches", "4 x 6 inches", "5 x 7 inches", "11 x 17 inches only"],
      answer: 0,
      why: "The required sign must be at least 8 x 10 inches."
    },
    {
      category: "ID",
      q: "Which clue can show an ID has been tampered with?",
      choices: ["Scratched birth date or expiry date", "Government photo", "Readable name", "Valid expiry"],
      answer: 0,
      why: "Scratched or altered dates are a tampering clue."
    },
    {
      category: "ID",
      q: "Which ID should you never accept?",
      choices: ["Expired ID", "Valid passport", "Valid Ontario photo card", "Valid driver's licence"],
      answer: 0,
      why: "Expired ID is not acceptable."
    },
    {
      category: "Health Card",
      q: "Can you ask a guest for an Ontario Health Card as age ID?",
      choices: ["No", "Yes, always", "Only after 11 p.m.", "Only if they look under 25"],
      answer: 0,
      why: "You should not ask for an Ontario Health Card as identification."
    },
    {
      category: "Health Card",
      q: "If a guest voluntarily offers an Ontario Health Card, how can it be used?",
      choices: ["Secondary ID only, at your discretion", "Primary ID only", "It replaces checking date of birth", "It must always be accepted"],
      answer: 0,
      why: "It can only be secondary ID if offered voluntarily."
    },
    {
      category: "Convenience Licence",
      q: "What is the maximum retail floor space for a convenience store definition?",
      choices: ["No more than 4,000 sq ft", "Exactly 10,000 sq ft", "At least 20,000 sq ft", "No limit"],
      answer: 0,
      why: "A convenience store is no more than 4,000 sq ft of retail floor space."
    },
    {
      category: "Convenience Licence",
      q: "How much of the convenience store retail floor space must be occupied by food products?",
      choices: ["At least half", "At least 10 percent", "All of it", "None of it"],
      answer: 0,
      why: "Food products must occupy at least half of retail floor space."
    },
    {
      category: "Convenience Licence",
      q: "How many listed food categories must the convenience store offer?",
      choices: ["At least five", "At least one", "Exactly two", "Ten only"],
      answer: 0,
      why: "The store must offer a variety of at least five listed food categories."
    },
    {
      category: "Convenience Licence",
      q: "Which store is not a match for the convenience-store definition?",
      choices: ["A store primarily identified as a pharmacy", "A store with snack foods", "A store with canned food", "A store with non-alcoholic beverages"],
      answer: 0,
      why: "It cannot be primarily identified to the public as a pharmacy."
    },
    {
      category: "Over-Service",
      q: "Which action helps prevent over-service?",
      choices: ["Count drinks and monitor behaviour", "Use self-serve alcohol", "Sell unlimited tickets", "Refill glasses while circulating"],
      answer: 0,
      why: "Counting drinks and watching behaviour helps you intervene early."
    },
    {
      category: "Over-Service",
      q: "Why are self-serve bars risky?",
      choices: ["They make consumption hard to monitor", "They reduce intoxication", "They replace ID checks", "They make guests sober faster"],
      answer: 0,
      why: "Self-service makes it harder to monitor drink counts and intoxication."
    },
    {
      category: "Over-Service",
      q: "What should you arrange for a guest who cannot safely drive?",
      choices: ["Safe transportation", "One last drink", "A discount", "A larger serving"],
      answer: 0,
      why: "Duty of care includes arranging safe transportation where needed."
    },
    {
      category: "Scenario",
      q: "If you are unsure about age or ID validity, what is the safest answer?",
      choices: ["Refuse service", "Serve quickly", "Ask for a student card", "Ignore the doubt"],
      answer: 0,
      why: "If doubt remains, refuse service."
    },
    {
      category: "Scenario",
      q: "If you are unsure about intoxication, what is the safest answer?",
      choices: ["Refuse service and get support", "Serve another drink", "Offer stronger alcohol", "Let them drive"],
      answer: 0,
      why: "Choose the action that protects safety and follows the law."
    },
    {
      category: "Health Card Trap",
      q: "A guest offers an Ontario Health Card for age verification. What is the correct Smart Serve pattern?",
      choices: ["It can only be secondary ID if voluntarily offered", "You must demand it as primary ID", "It is never allowed even if offered", "It replaces checking date of birth"],
      answer: 0,
      why: "Do not ask for it. If voluntarily offered, it may only be secondary ID and accepted at your discretion."
    },
    {
      category: "ID Trap",
      q: "Which laminated-ID situation is a tampering red flag?",
      choices: ["Cuts or bubbles in the laminate around the photo", "A valid government photo ID made of plastic", "A passport with a photo", "A card that clearly matches the guest"],
      answer: 0,
      why: "Cuts, bubbles, uneven edges, or switched photo/lettering/lamination are tampering clues."
    },
    {
      category: "ID Trap",
      q: "A regular shows a photo of their driver's licence on their phone because they forgot the physical card. What should you do if you need ID?",
      choices: ["Refuse alcohol service or sale", "Accept the phone photo", "Serve because they are a regular", "Ask their friend to confirm"],
      answer: 0,
      why: "If valid ID is required and they cannot produce it, refuse. Regular status does not replace valid ID."
    },
    {
      category: "Underage Trap",
      q: "Who is the test answer for laying charges/tickets for serving or selling to a minor?",
      choices: ["Police", "Ministry of Health", "Smart Serve Ontario", "LCBO cashier"],
      answer: 0,
      why: "Police can lay charges/provincial offence tickets. AGCO handles licence discipline."
    },
    {
      category: "Underage Trap",
      q: "Who can suspend, revoke, or place conditions on a liquor licence?",
      choices: ["AGCO/Registrar", "Ministry of Health", "Smart Serve Ontario", "The regular customer"],
      answer: 0,
      why: "AGCO/Registrar is the regulator for alcohol licensing consequences."
    },
    {
      category: "LLCA Trap",
      q: "Which name is the current Ontario alcohol regulator?",
      choices: ["AGCO", "LLBO", "LCBO only", "Federal government"],
      answer: 0,
      why: "AGCO is the regulator. LLBO is old wording; LCBO is not the regulator."
    },
    {
      category: "LLCA Trap",
      q: "What is the current Ontario alcohol law name you should recognize?",
      choices: ["Liquor Licence and Control Act, 2019", "Ministry of Health Act", "Old LLBO Act", "Federal Bar Service Act"],
      answer: 0,
      why: "Smart Serve refers to the LLCA, the Liquor Licence and Control Act, 2019."
    }
  ];

  const lockLines = [
    "Under 19: refuse.",
    "Looks under 25: check valid government photo ID.",
    "Health Card: do not ask. Secondary only if offered.",
    "Tampered ID: refuse.",
    "Intoxicated: deny entry, refuse service, arrange safe ride.",
    "BAC: sex, weight, drinks, time. Tolerance does not lower BAC.",
    "Sandy's Law: pregnancy/FASD warning sign, visible, 8 x 10 minimum.",
    "Private SOP: invited only, no public advertising, no alcohol-sale profit.",
    "Police can lay charges/tickets; AGCO can suspend, revoke, add conditions, or issue monetary penalties.",
    "Regular with no valid ID: if you need to verify age, refuse.",
    "LLBO is old wording. AGCO is the regulator. LCBO is not the regulator.",
    "Convenience licence: 4,000 sq ft or less, half food, five food categories, not mainly pharmacy.",
    "Over-service: count, slow, food/water, stop early, safe ride, document."
  ];

  const miniDrill = [
    ["Same drinks: who usually has lower BAC, 120 lb or 200 lb?", "200 lb, all else equal."],
    ["Does high tolerance lower BAC?", "No. It can hide signs only."],
    ["Can a private SOP be advertised publicly?", "No."],
    ["What is the biggest age-related AGCO risk?", "Serving or selling to anyone under 19."],
    ["Can you ask for an Ontario Health Card?", "No. Secondary only if offered."],
    ["Who lays charges/tickets for underage service?", "Police."],
    ["Who suspends or revokes a liquor licence?", "AGCO/Registrar."],
    ["Regular forgot ID and you need to verify age?", "Refuse alcohol service or sale."],
    ["LLBO, LCBO, or AGCO as regulator?", "AGCO."],
    ["Convenience licence memory line?", "4,000 or less, half food, five categories, not pharmacy."]
  ];

  const storageKey = "smartserve-missed-repair-v1";
  const state = loadState();
  const $ = (id) => document.getElementById(id);

  let topicIndex = 0;
  let autoTimer = null;
  let quizPool = [];
  let quizIndex = 0;
  let quizCorrect = 0;
  let answered = false;

  function loadState() {
    try {
      return { mastered: [], bestScore: 0, ...(JSON.parse(localStorage.getItem(storageKey)) || {}) };
    } catch {
      return { mastered: [], bestScore: 0 };
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
    renderMetrics();
  }

  function renderMetrics() {
    $("topicCount").textContent = String(topics.length);
    $("masteredCount").textContent = String(state.mastered.length);
    $("bestScore").textContent = `${state.bestScore || 0}%`;
  }

  function renderTopic() {
    const topic = topics[topicIndex];
    $("autoTitle").textContent = topic.title;
    $("autoProgress").textContent = `${topicIndex + 1}/${topics.length}`;
    $("autoBar").style.width = `${((topicIndex + 1) / topics.length) * 100}%`;
    $("autoQuestion").textContent = topic.question;
    $("autoAnswer").textContent = topic.answer;
    $("autoWhy").textContent = topic.why;
    $("autoMemory").textContent = topic.memory;
    $("focusCard").classList.remove("pulse");
    window.requestAnimationFrame(() => $("focusCard").classList.add("pulse"));
  }

  function moveTopic(direction) {
    topicIndex = (topicIndex + direction + topics.length) % topics.length;
    renderTopic();
  }

  function startAutoRun() {
    if (autoTimer) {
      stopAutoRun();
      return;
    }
    $("autoRun").textContent = "Stop";
    autoTimer = window.setInterval(() => moveTopic(1), 5200);
  }

  function stopAutoRun() {
    if (autoTimer) window.clearInterval(autoTimer);
    autoTimer = null;
    $("autoRun").textContent = "Auto-Run";
  }

  function markKnown() {
    const id = topics[topicIndex].id;
    if (!state.mastered.includes(id)) state.mastered.push(id);
    saveState();
    renderCards();
  }

  function renderCards() {
    $("cardList").innerHTML = topics.map((topic) => {
      const known = state.mastered.includes(topic.id);
      return `
        <article class="${known ? "mastered" : ""}">
          <div class="card-title">
            <strong>${escapeHtml(topic.title)}</strong>
            ${known ? '<span class="known-badge">Known</span>' : ""}
          </div>
          <span>Question pattern</span>
          <p>${escapeHtml(topic.question)}</p>
          <span>Correct answer</span>
          <p>${escapeHtml(topic.answer)}</p>
          <span>Memory line</span>
          <p>${escapeHtml(topic.memory)}</p>
        </article>
      `;
    }).join("");
  }

  function renderTraps() {
    $("trapCount").textContent = `${trapTopics.length} traps`;
    $("trapList").innerHTML = trapTopics.map((trap) => `
      <article>
        <strong>${escapeHtml(trap.title)}</strong>
        <span>What you remembered</span>
        <p>${escapeHtml(trap.remembered)}</p>
        <span>Correct answer pattern</span>
        <p class="trap-answer">${escapeHtml(trap.answer)}</p>
        <span>Do not choose</span>
        <p class="trap-warning">${escapeHtml(trap.avoid)}</p>
      </article>
    `).join("");
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function startQuiz() {
    quizPool = shuffle(quizQuestions).slice(0, 20);
    quizIndex = 0;
    quizCorrect = 0;
    answered = false;
    renderQuestion();
    showView("quiz");
  }

  function renderQuestion() {
    const item = quizPool[quizIndex];
    if (!item) return;
    answered = false;
    $("quizTitle").textContent = `Score ${quizCorrect}/${quizIndex}`;
    $("quizProgress").textContent = `${quizIndex + 1}/${quizPool.length}`;
    $("quizBar").style.width = `${(quizIndex / quizPool.length) * 100}%`;
    $("quizCategory").textContent = item.category;
    $("questionText").textContent = item.q;
    $("feedback").hidden = true;
    $("feedback").className = "feedback";
    $("nextQuestion").hidden = true;
    $("choices").innerHTML = item.choices.map((choice, index) => (
      `<button class="choice-button" type="button" data-index="${index}">${escapeHtml(choice)}</button>`
    )).join("");
  }

  function answerQuestion(choiceIndex) {
    if (answered) return;
    answered = true;
    const item = quizPool[quizIndex];
    const correct = choiceIndex === item.answer;
    if (correct) quizCorrect += 1;

    document.querySelectorAll(".choice-button").forEach((button) => {
      const buttonIndex = Number(button.dataset.index);
      button.disabled = true;
      if (buttonIndex === item.answer) button.classList.add("correct");
      if (buttonIndex === choiceIndex && !correct) button.classList.add("wrong");
    });

    $("feedback").hidden = false;
    $("feedback").className = `feedback ${correct ? "good" : "bad"}`;
    $("feedback").textContent = correct
      ? `Correct. ${item.why}`
      : `Correct answer: ${item.choices[item.answer]}. ${item.why}`;
    $("nextQuestion").hidden = false;
    $("quizTitle").textContent = `Score ${quizCorrect}/${quizIndex + 1}`;
  }

  function nextQuestion() {
    if (quizIndex + 1 >= quizPool.length) {
      const percent = Math.round((quizCorrect / quizPool.length) * 100);
      state.bestScore = Math.max(state.bestScore || 0, percent);
      saveState();
      $("quizTitle").textContent = `Finished ${percent}%`;
      $("quizProgress").textContent = `${quizCorrect}/${quizPool.length}`;
      $("quizBar").style.width = "100%";
      $("questionText").textContent = percent >= 90
        ? "Strong. Run the cards once more, then close the app before the proctored test."
        : "Run it again. The missed topics are close, but not locked yet.";
      $("quizCategory").textContent = "Result";
      $("choices").innerHTML = "";
      $("feedback").hidden = true;
      $("nextQuestion").hidden = true;
      return;
    }

    quizIndex += 1;
    renderQuestion();
  }

  function renderLock() {
    $("lockList").innerHTML = lockLines.map((line) => (
      `<article><p>${escapeHtml(line)}</p></article>`
    )).join("");
    $("miniDrill").innerHTML = miniDrill.map(([question, answer]) => `
      <div class="drill-row">
        <span>${escapeHtml(question)}</span>
        <p>${escapeHtml(answer)}</p>
      </div>
    `).join("");
  }

  function showView(view) {
    if (view !== "auto") stopAutoRun();
    const views = {
      auto: $("autoView"),
      cards: $("cardsView"),
      traps: $("trapsView"),
      quiz: $("quizView"),
      lock: $("lockView")
    };
    Object.entries(views).forEach(([name, element]) => {
      element.hidden = name !== view;
    });
    [
      ["autoTab", "auto"],
      ["cardsTab", "cards"],
      ["trapsTab", "traps"],
      ["quizTab", "quiz"],
      ["lockTab", "lock"]
    ].forEach(([id, name]) => $(id).classList.toggle("active", name === view));

    if (view === "cards") renderCards();
    if (view === "traps") renderTraps();
    if (view === "lock") renderLock();
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
    $("autoTab").addEventListener("click", () => showView("auto"));
    $("cardsTab").addEventListener("click", () => showView("cards"));
    $("trapsTab").addEventListener("click", () => showView("traps"));
    $("quizTab").addEventListener("click", startQuiz);
    $("lockTab").addEventListener("click", () => showView("lock"));
    $("prevTopic").addEventListener("click", () => moveTopic(-1));
    $("nextTopic").addEventListener("click", () => moveTopic(1));
    $("autoRun").addEventListener("click", startAutoRun);
    $("markKnown").addEventListener("click", markKnown);
    $("resetKnown").addEventListener("click", () => {
      state.mastered = [];
      saveState();
      renderCards();
    });
    $("choices").addEventListener("click", (event) => {
      const button = event.target.closest(".choice-button");
      if (!button) return;
      answerQuestion(Number(button.dataset.index));
    });
    $("nextQuestion").addEventListener("click", nextQuestion);
    $("restartQuiz").addEventListener("click", startQuiz);
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js?v=2").catch(() => {});
  }

  bindEvents();
  renderMetrics();
  renderTopic();
  renderCards();
  renderTraps();
  renderLock();
  startQuiz();
  showView("auto");

  const params = new URLSearchParams(window.location.search);
  if (params.get("mode") === "quiz") startQuiz();
  if (params.get("mode") === "traps") showView("traps");
  if (params.get("autoplay") === "1") startAutoRun();
})();
