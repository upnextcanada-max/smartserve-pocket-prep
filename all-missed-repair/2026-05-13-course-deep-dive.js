(function () {
  const data = window.STUDY_DATA;
  if (!data) return;

  data.facts.push(
    { category: "Course Flow", title: "How the Course Unlocks", text: "Smart Serve is module-based. Finish every chapter section before expecting the module to count as complete or the next step to unlock." },
    { category: "Course Flow", title: "Progress Signals", text: "Use the chapter progress bar, section wheels, and module percentage as your checkpoints. If the next button is missing, something in the module is still incomplete." },
    { category: "Course Flow", title: "Videos and Transcripts", text: "Videos usually have to play all the way through before the section counts. Transcripts are useful for review, but the course progress depends on completing the activity itself." },
    { category: "Course Flow", title: "Practice Quizzes", text: "Chapter quizzes and activities are there for learning and feedback. They do not replace the final certification test and do not become your final score." },
    { category: "Final Test", title: "Before the Test", text: "The final test is proctored, requires valid government-issued photo ID, and needs webcam, microphone, screen sharing, a reliable connection, and no distractions." },
    { category: "Final Test", title: "Integrity Rule", text: "Do not use this app, AI, notes, messaging, or outside help during the proctored final test. Use the app only before the test for studying." },
    { category: "Final Test", title: "Timing and Attempts", text: "Smart Serve says the full course usually takes about four hours, access expires after 30 days, and each purchase includes two final-test attempts." },
    { category: "Final Test", title: "Test Shape", text: "The final certification test is 33 randomly generated multiple-choice questions. A passing result requires at least 80 percent and a clean integrity review." },
    { category: "Right Combination", title: "Knowledge", text: "Knowledge means understanding Ontario alcohol rules, your legal duties, age checks, intoxication, delivery, and the risks tied to over-service." },
    { category: "Right Combination", title: "Steps", text: "Steps are the actions you take: verify age, monitor consumption, slow or stop service, get support, document incidents, and arrange safe transportation." },
    { category: "Right Combination", title: "Communication", text: "Communication is how you say it. When someone is intoxicated, be calm, firm, respectful, and focused on safety rather than blame." },
    { category: "Alcohol Basics", title: "Depressant Effect", text: "Alcohol is a depressant. It slows the central nervous system, so thinking, judgement, coordination, reaction time, speech, and movement can all change." },
    { category: "Alcohol Basics", title: "How Alcohol Moves", text: "Alcohol moves from the stomach and intestines into the bloodstream. The heart then circulates it through the body and brain." },
    { category: "BAC", title: "What BAC Means", text: "BAC means blood alcohol concentration: the amount of alcohol found in 100 millilitres of blood. Higher BAC usually means higher impairment risk." },
    { category: "BAC", title: "BAC Keeps Rising", text: "BAC can keep rising after a person stops drinking because alcohol takes time to enter the bloodstream." },
    { category: "BAC", title: "Chart Limits", text: "BAC charts are estimates. They use sex, weight, number of standard drinks, and time, but real people vary because of food, fatigue, health, drugs, and metabolism." },
    { category: "BAC", title: "Elimination Is Approximate", text: "One standard drink per hour is a rough guide, not a guarantee. The course chart assumes about 0.015 BAC eliminated per hour, but actual elimination varies." },
    { category: "Standard Drinks", title: "Benchmark", text: "A standard drink contains about 0.6 oz or 17 mL of pure alcohol. Use that benchmark to compare beer, wine, spirits, and mixed drinks." },
    { category: "Standard Drinks", title: "Common Sizes", text: "Memorize the basics: 12 oz beer or cider at 5 percent, 5 oz wine at 12 percent, and 1.5 oz spirits at 40 percent." },
    { category: "Mixed Drinks", title: "Hidden Alcohol", text: "Mixed drinks can contain more than one standard drink because they may combine several alcohol types or larger pours." },
    { category: "Intoxication", title: "Source Does Not Matter", text: "If someone shows signs of intoxication or impairment, do not serve alcohol, even if alcohol, cannabis, medication, other drugs, or a mix caused it." },
    { category: "Intoxication", title: "Watch Patterns", text: "Look for patterns across speech, balance, alertness, coordination, mood, judgement, and behaviour. One clue matters; several clues matter more." },
    { category: "Refusal", title: "Talk Like Safety", text: "When refusing service, keep it calm and direct: state what you can do, get support, stop others from supplying alcohol, and move toward safe transportation." },
    { category: "Review Stack", title: "Best Exam Instinct", text: "When stuck in a scenario, choose the answer that follows the law, protects safety, checks valid ID, refuses unsafe service, documents, and gets backup." }
  );

  data.flashcards.push(
    { category: "Course Flow", q: "Why might the green Next button not appear after a module?", a: "A chapter section or activity in that module is still incomplete." },
    { category: "Course Flow", q: "Do chapter quizzes become your final Smart Serve score?", a: "No. They provide feedback and practice, but the final test is separate." },
    { category: "Course Flow", q: "What should you do if a course video section will not count as complete?", a: "Replay it fully and check the progress indicator before moving on." },
    { category: "Final Test", q: "Can this app be used during the proctored final test?", a: "No. Use it only before the final test. No AI, notes, messaging, or outside help during the proctored test." },
    { category: "Final Test", q: "How many questions are on the Smart Serve final test?", a: "33 randomly generated multiple-choice questions." },
    { category: "Final Test", q: "What score is needed to pass?", a: "At least 80 percent, with no integrity issues in the proctored session." },
    { category: "Final Test", q: "How long do you have to complete the course and final test after purchase?", a: "30 days." },
    { category: "Right Combination", q: "What are the three parts of the Smart Serve right combination?", a: "Knowledge, steps, and communication." },
    { category: "Right Combination", q: "What does 'steps' mean in responsible service?", a: "Actions like checking age, monitoring drinks, stopping service, documenting, and arranging safe transportation." },
    { category: "Communication", q: "How should you speak to someone who is intoxicated?", a: "Calmly, firmly, respectfully, and with concern for safety." },
    { category: "Alcohol Basics", q: "What kind of drug is alcohol?", a: "A depressant that slows the central nervous system." },
    { category: "Alcohol Basics", q: "Where does alcohol enter the bloodstream?", a: "Through the stomach and intestines." },
    { category: "BAC", q: "What does BAC measure?", a: "The amount of alcohol in 100 millilitres of blood." },
    { category: "BAC", q: "Can BAC rise after someone stops drinking?", a: "Yes. Alcohol takes time to enter the bloodstream." },
    { category: "BAC", q: "What does a BAC chart estimate?", a: "How BAC may change based on sex, weight, standard drinks, and time." },
    { category: "BAC", q: "Why should BAC charts not be used alone?", a: "They are estimates and do not include every factor affecting impairment." },
    { category: "Standard Drinks", q: "What is one standard beer or cider?", a: "12 oz / 341 mL at 5 percent alcohol." },
    { category: "Standard Drinks", q: "What is one standard wine?", a: "5 oz / 142 mL at 12 percent alcohol." },
    { category: "Standard Drinks", q: "What is one standard spirits serving?", a: "1.5 oz / 43 mL at 40 percent alcohol." },
    { category: "Mixed Drinks", q: "Why are mixed drinks tricky for standard drink counting?", a: "They can include multiple alcohol types or larger pours, so one glass may be more than one standard drink." },
    { category: "Intoxication", q: "What can cause intoxication besides alcohol?", a: "Cannabis, medication, other drugs, fatigue, illness, or a combination." },
    { category: "Refusal", q: "What is the safest refusal pattern?", a: "Stay calm, refuse clearly, get backup, document, stop others from supplying alcohol, and arrange a safe ride." }
  );

  data.questions.push(
    { category: "Course Flow", q: "What must happen before a Smart Serve module should count as complete?", choices: ["Only the first chapter is viewed", "All chapter sections are fully completed", "A timer reaches 30 minutes", "You click the menu once"], answer: 1, why: "The course uses chapter sections and progress indicators. Missing one section can block completion." },
    { category: "Course Flow", q: "A course video was opened but skipped. What is most likely?", choices: ["It still counts as complete", "It may not count until watched fully", "It counts only for the final test", "It deletes your progress"], answer: 1, why: "The course transcript says videos must be viewed in their entirety to count toward chapter progress." },
    { category: "Course Flow", q: "What do chapter quizzes and activities mainly do?", choices: ["Replace the final test", "Provide practice and feedback", "Guarantee certification", "Change Ontario alcohol law"], answer: 1, why: "Course quizzes help you learn and give feedback; the certification test is separate." },
    { category: "Final Test", q: "Which final-test behavior is allowed?", choices: ["Using this app during the test", "Messaging someone for help", "Completing it independently with proctoring", "Leaving camera view to check notes"], answer: 2, why: "The final test is proctored and must be completed independently." },
    { category: "Final Test", q: "What should be ready before launching the final test?", choices: ["Valid government photo ID, webcam, microphone, and reliable internet", "Only a phone charger", "Printed notes for reference", "A friend to help if stuck"], answer: 0, why: "Smart Serve requires ID and proctoring setup before the test." },
    { category: "Final Test", q: "What is the final-test format?", choices: ["33 random multiple-choice questions", "One essay", "A live interview only", "Ten true-or-false questions"], answer: 0, why: "Smart Serve describes the certification test as 33 randomly generated multiple-choice questions." },
    { category: "Right Combination", q: "Which set matches Smart Serve's right combination?", choices: ["Speed, sales, style", "Knowledge, steps, communication", "Food, music, atmosphere", "Price, promotion, profit"], answer: 1, why: "The course frames responsible service around knowledge, steps, and communication." },
    { category: "Right Combination", q: "Checking whether someone is at least 19 is mainly an example of what?", choices: ["A responsible-service step", "A drink special", "A final-test score", "A decoration rule"], answer: 0, why: "Age verification is one of the concrete steps that protects customers, the establishment, and the public." },
    { category: "Communication", q: "When stopping service to an intoxicated guest, what tone is best?", choices: ["Calm, firm, and safety-focused", "Sarcastic and loud", "Confusing and vague", "Angry and threatening"], answer: 0, why: "The course stresses calm, thoughtful, firm communication." },
    { category: "Communication", q: "Why practice refusal conversations before you need them?", choices: ["To memorize insults", "To build confidence for difficult moments", "To avoid talking to managers", "To sell faster"], answer: 1, why: "Practice makes it easier to stay calm and clear when a real situation becomes tense." },
    { category: "Alcohol Basics", q: "Alcohol is best described as what?", choices: ["A depressant", "A stimulant", "A vitamin", "A cure for fatigue"], answer: 0, why: "Alcohol slows the central nervous system and affects thinking, behaviour, and movement." },
    { category: "Alcohol Basics", q: "How does alcohol enter the bloodstream?", choices: ["Through the stomach and intestines", "Only through the liver", "Only through the lungs", "Through the skin"], answer: 0, why: "Alcohol moves through the stomach and intestines into the bloodstream." },
    { category: "BAC", q: "What does BAC stand for?", choices: ["Blood Alcohol Concentration", "Beer Alcohol Count", "Basic Alcohol Certificate", "Beverage Approval Code"], answer: 0, why: "BAC means Blood Alcohol Concentration." },
    { category: "BAC", q: "A BAC chart should be treated as what?", choices: ["An estimate", "A guarantee", "A legal breath test", "A reason to ignore behaviour"], answer: 0, why: "BAC charts estimate; they do not replace observation or legal/safety judgment." },
    { category: "BAC", q: "Which factor matters most for BAC over a visit?", choices: ["Time", "Glass colour", "Music volume", "Table number"], answer: 0, why: "Time affects absorption and elimination. More drinks in less time means higher BAC risk." },
    { category: "BAC", q: "Why can BAC rise after the last drink?", choices: ["Alcohol takes time to enter the bloodstream", "Food creates alcohol", "Coffee increases BAC", "Water turns into alcohol"], answer: 0, why: "Alcohol absorption continues after the person stops drinking." },
    { category: "BAC", q: "What is the rough alcohol-elimination guide used for study?", choices: ["About one standard drink per hour", "Five standard drinks per hour", "One bottle per hour", "No alcohol is ever eliminated"], answer: 0, why: "One standard drink per hour is a rough estimate only; people vary." },
    { category: "Standard Drinks", q: "Which is one standard drink?", choices: ["12 oz beer/cider at 5 percent", "20 oz beer at 8 percent", "10 oz wine at 14 percent", "3 oz spirits at 40 percent"], answer: 0, why: "The common benchmark is 12 oz beer or cider at 5 percent." },
    { category: "Standard Drinks", q: "Which wine serving is one standard drink?", choices: ["5 oz at 12 percent", "12 oz at 12 percent", "1.5 oz at 12 percent", "20 oz at 12 percent"], answer: 0, why: "One standard wine is 5 oz or 142 mL at 12 percent." },
    { category: "Standard Drinks", q: "Which spirits serving is one standard drink?", choices: ["1.5 oz at 40 percent", "5 oz at 40 percent", "12 oz at 40 percent", "20 oz at 40 percent"], answer: 0, why: "One standard spirits serving is 1.5 oz or 43 mL at 40 percent." },
    { category: "Mixed Drinks", q: "Why can a Long Island-style drink be risky to estimate?", choices: ["It may combine several alcohols", "It contains no alcohol", "It is always one standard drink", "It sobers people up"], answer: 0, why: "Mixed drinks can include multiple alcohol types and can exceed one standard drink." },
    { category: "Intoxication", q: "What can cause intoxication or impairment?", choices: ["Alcohol, cannabis, medications, other drugs, or a mix", "Only beer", "Only wine", "Only spirits"], answer: 0, why: "Service decisions are based on signs of impairment, not only the source." },
    { category: "Intoxication", q: "A customer has poor coordination and delayed responses. What is safest?", choices: ["Treat it as possible intoxication and do not serve alcohol", "Ignore it if they are polite", "Serve faster", "Ask them to drink coffee"], answer: 0, why: "Signs of impairment should trigger responsible service action." },
    { category: "Refusal", q: "A friend tries to buy for someone you cut off. What should you do?", choices: ["Stop alcohol from reaching the cut-off person", "Allow it because the friend paid", "Pretend not to see it", "Offer stronger drinks"], answer: 0, why: "Cutting someone off includes preventing others from supplying them alcohol." },
    { category: "Scenario Pattern", q: "When two answers seem possible, which one usually fits Smart Serve best?", choices: ["The safest lawful action with ID checks, refusal, backup, documentation, and safe transport", "The fastest sale", "The answer that avoids talking to anyone", "The option that keeps serving alcohol"], answer: 0, why: "Smart Serve scenario logic prioritizes safety, lawfulness, documentation, and support." }
  );
})();
