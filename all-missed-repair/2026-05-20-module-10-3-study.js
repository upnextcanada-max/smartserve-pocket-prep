// SmartServe module video study add-on
// Source: 2026-05-20 SmartServe module screen recording / Module 10.3 Slowing Down Alcohol Consumption
(function () {
  window.STUDY_DATA = window.STUDY_DATA || { facts: [], flashcards: [], questions: [] };

  const facts = [
    {
      category: "Module 10.3",
      title: "Slowing Down Alcohol Consumption",
      text: "Food can slow alcohol absorption, especially heavier food with protein/fat/carbs, but it does not sober someone up. Only time lowers BAC."
    },
    {
      category: "Module 10.3",
      title: "Best Food Choice",
      text: "When choosing food to slow alcohol absorption, pick the heavier meal option. In the module example, the best answer was the house special: a 1/4-pound burger with fries."
    },
    {
      category: "Module 10.3",
      title: "Yellow Zone Guest",
      text: "If a guest is in the yellow zone, do not rush another alcoholic drink. Serve water, slow things down, wait about 15 minutes, and reassess BAC/behaviour before deciding."
    },
    {
      category: "Module 10.3",
      title: "Reassess Before Serving",
      text: "After food or water, reassess the guest. The safe answer is usually to delay service and monitor rather than automatically serving more alcohol."
    },
    {
      category: "Module 10.3",
      title: "Test Pattern",
      text: "For scenario questions, choose the safest lawful action: slow service, offer food/water, wait, reassess, refuse if needed, and document/communicate with staff."
    }
  ];

  const flashcards = [
    {
      category: "Module 10.3",
      prompt: "What kind of food is best for slowing alcohol absorption?",
      answer: "A heavier meal with protein/fat/carbs. In the module example: the house special, a 1/4-pound burger with fries."
    },
    {
      category: "Module 10.3",
      prompt: "Does food lower BAC?",
      answer: "No. Food can slow absorption, but only time lowers BAC."
    },
    {
      category: "Module 10.3",
      prompt: "A guest is in the yellow zone after drinking. What should you do?",
      answer: "Serve water, slow service, wait about 15 minutes, and reassess their BAC/condition before serving more alcohol."
    },
    {
      category: "Module 10.3",
      prompt: "What is the safe Smart Serve answer when unsure about BAC/intoxication?",
      answer: "Do not serve automatically. Slow down, reassess, get backup if needed, and refuse service if safety is uncertain."
    }
  ];

  const questions = [
    {
      category: "Module 10.3",
      q: "In Module 10.3, which food choice was best for slowing alcohol absorption?",
      choices: ["The house special: a 1/4-pound burger with fries", "A light salad only", "Coffee", "Another alcoholic drink"],
      answer: 0,
      why: "The module example chose the heavier food option: the house special, a 1/4-pound burger with fries."
    },
    {
      category: "Module 10.3",
      q: "A guest is in the yellow BAC zone after drinking. What is the safest next step from the module pattern?",
      choices: ["Serve water and wait about 15 minutes before reassessing", "Serve another drink right away", "Ignore the BAC chart", "Give coffee and assume they are sober"],
      answer: 0,
      why: "The safe module answer was to serve water, wait another 15 minutes, and reassess BAC/condition."
    },
    {
      category: "Module 10.3",
      q: "What actually lowers a guest's BAC?",
      choices: ["Time", "Coffee", "A cold shower", "Food after drinking"],
      answer: 0,
      why: "Only time lowers BAC. Food can slow absorption, but it does not sober someone up."
    },
    {
      category: "Module 10.3",
      q: "Why is offering food still useful if it does not lower BAC?",
      choices: ["It can slow alcohol absorption and help slow the pace of drinking", "It instantly makes service legal", "It guarantees the guest can drive", "It replaces the need to monitor the guest"],
      answer: 0,
      why: "Food is useful as part of slowing service, but the server must still monitor and reassess."
    },
    {
      category: "Module 10.3",
      q: "After giving food or water to a guest you are concerned about, what should you do before serving more alcohol?",
      choices: ["Reassess the guest's condition", "Automatically serve the next drink", "Stop checking their behaviour", "Use coffee as proof they are sober"],
      answer: 0,
      why: "The module pattern is to slow down and reassess before making another service decision."
    },
    {
      category: "Module 10.3",
      q: "What is the safest Smart Serve instinct for yellow-zone or borderline scenarios?",
      choices: ["Slow service, offer water/food, wait, reassess, and refuse if needed", "Keep serving until they are red zone", "Let friends decide", "Serve if they seem confident"],
      answer: 0,
      why: "Smart Serve scenario questions reward safety, prevention, reassessment, and refusal when needed."
    }
  ];

  window.STUDY_DATA.facts.push(...facts);
  window.STUDY_DATA.flashcards.push(...flashcards);
  window.STUDY_DATA.questions.push(...questions);
})();
