(function () {
  const data = window.STUDY_DATA;

  data.facts.push(
    { category: "Course", title: "Right combination", text: "The course frames responsible service as knowing what you need to know, what you need to do, and what you should say: knowledge, steps, and communication." },
    { category: "Course", title: "Safety goal", text: "Smart Serve is about keeping guests or customers, the establishment, and the community safe during alcohol sales, service, and delivery." },
    { category: "Course", title: "Steps", text: "Key steps include verifying the person is at least 19, monitoring alcohol consumption when alcohol is served, and responding when behaviour threatens safety." },
    { category: "Course", title: "Communication", text: "Effective communication matters because alcohol changes behaviour. Stay calm, firm, and focused on safety when stopping service or refusing a sale." },
    { category: "Course", title: "Practice", text: "Talking with intoxicated people requires a calm and thoughtful approach. Practice makes refusal and safety conversations easier under pressure." },
    { category: "Course", title: "Act", text: "Some situations require fast action. Keep sight of the fact that guest and customer safety can depend on you doing the right thing." },
    { category: "Liquor", title: "Liquor definition", text: "Liquor means beverages such as spirits, wine, and beer, including alcohol suitable for human consumption on its own or mixed with other substances." },
    { category: "Liquor", title: "Alcohol definition", text: "Alcohol is a substance produced through fermentation or distillation of grains, fruits, or other agricultural products." },
    { category: "Alcohol Content", title: "Bottle labels", text: "The original serving container or bottle lists the alcohol percentage for that full volume of liquid." },
    { category: "BAC", title: "Safe-service estimate", text: "To estimate safe service, know standard drink sizes, learn how BAC charts work, and monitor how much guests drink through observation and conversation." },
    { category: "BAC", title: "BAC chart inputs", text: "BAC charts estimate BAC using factors such as sex, weight, number of drinks consumed, and time." },
    { category: "BAC", title: "Time matters", text: "Time is a major BAC factor. More drinks in a shorter time means a higher BAC, and BAC can continue rising after drinking stops." },
    { category: "BAC", title: "Elimination rate", text: "BAC charts often assume alcohol elimination around 0.015 BAC per hour, roughly one standard drink per hour, but the actual rate can vary." },
    { category: "Intoxication", title: "Meaning", text: "Intoxication means normal ability to think, act, and move is impaired by alcohol, cannabis, other drugs, or a combination." },
    { category: "Teamwork", title: "Reflect and share", text: "After situations, reflect on what went well and what you would do differently. Share knowledge with coworkers because the team goal is keeping people safe." }
  );

  data.flashcards.push(
    { category: "Course", q: "What are the three parts of the Smart Serve 'right combination'?", a: "Knowledge, steps, and communication." },
    { category: "Course", q: "What does Smart Serve aim to keep safe?", a: "Guests or customers, the establishment, and the community." },
    { category: "Course", q: "What are two key steps for keeping guests safe?", a: "Verify they are at least 19, monitor consumption, and respond to unsafe behaviour." },
    { category: "Course", q: "Why is communication especially important in alcohol service?", a: "Alcohol changes behaviour, so calm and firm communication helps prevent intoxication and unsafe situations." },
    { category: "Liquor", q: "What does liquor include?", a: "Beer, wine, spirits, and other alcohol suitable for human consumption, alone or mixed." },
    { category: "Liquor", q: "How is alcohol produced?", a: "Through fermentation or distillation of grains, fruits, or other agricultural products." },
    { category: "BAC", q: "What three things help estimate safe service?", a: "Know standard drink sizes, understand BAC charts, and monitor guest drinking and behaviour." },
    { category: "BAC", q: "What factors do BAC charts use?", a: "Sex, weight, number of drinks consumed, and time." },
    { category: "BAC", q: "Why can BAC keep rising after drinking stops?", a: "Alcohol takes time to enter the bloodstream." },
    { category: "Intoxication", q: "What can cause intoxication besides alcohol?", a: "Cannabis, other drugs, medications, or combinations." },
    { category: "Teamwork", q: "What should you do after handling a difficult alcohol-service situation?", a: "Reflect on what went well, what you would do differently, and share useful knowledge with coworkers." }
  );

  data.questions.push(
    {
      category: "Course",
      q: "What are the three parts of the course's 'right combination'?",
      choices: ["Price, speed, and service", "Knowledge, steps, and communication", "Food, music, and atmosphere", "Licence, menu, and uniform"],
      answer: 1,
      why: "The course uses knowledge, steps, and communication as the combination for responsible service."
    },
    {
      category: "Course",
      q: "What does Smart Serve training help protect?",
      choices: ["Only the server", "Only the owner", "Guests or customers, the establishment, and the community", "Only people who are driving"],
      answer: 2,
      why: "The course focuses on safety for guests/customers, the establishment, and the community."
    },
    {
      category: "Course",
      q: "Which is an example of a key responsible-service step?",
      choices: ["Verify the person is at least 19", "Let the group decide who is intoxicated", "Serve quickly so guests do not wait", "Avoid speaking to upset guests"],
      answer: 0,
      why: "Verifying legal age is a core responsible-service step."
    },
    {
      category: "Course",
      q: "Why is communication vital when serving or selling alcohol?",
      choices: ["It increases tips", "Alcohol can alter behaviour", "It replaces ID checks", "It lets you skip documentation"],
      answer: 1,
      why: "The course stresses that alcohol changes behaviour, so clear communication matters."
    },
    {
      category: "Course",
      q: "When talking to people who are intoxicated by alcohol or drugs, what approach is best?",
      choices: ["Calm, thoughtful, firm, and safety-focused", "Loud and embarrassing", "Ignore them until they leave", "Serve one more drink to avoid conflict"],
      answer: 0,
      why: "A calm, thoughtful, firm approach helps manage risk while showing concern for safety."
    },
    {
      category: "Liquor",
      q: "Which list matches the three general classes of liquor from the course?",
      choices: ["Beer, wine, and spirits", "Coffee, tea, and spirits", "Cider, soda, and water", "Wine, juice, and beer"],
      answer: 0,
      why: "The course lists beer, wine, and spirits as the three general classes."
    },
    {
      category: "Liquor",
      q: "What is alcohol produced through?",
      choices: ["Freezing or filtering only", "Fermentation or distillation", "Carbonation only", "Mixing with water"],
      answer: 1,
      why: "Alcohol is produced through fermentation or distillation of agricultural products."
    },
    {
      category: "Alcohol Content",
      q: "Where can you find the alcohol percentage for a beverage?",
      choices: ["Only on the receipt", "On the original serving container or bottle", "Only on the menu", "Only by asking the guest"],
      answer: 1,
      why: "The original container or bottle lists the alcohol percentage."
    },
    {
      category: "BAC",
      q: "Which set best describes how to estimate what is safe to serve?",
      choices: ["Guess based on mood", "Know standard drinks, use BAC-chart concepts, and monitor guests", "Serve one drink per order only", "Use coffee and food to reset BAC"],
      answer: 1,
      why: "The course ties safe service to standard drink knowledge, BAC chart estimates, and active monitoring."
    },
    {
      category: "BAC",
      q: "What factors do BAC charts commonly incorporate?",
      choices: ["Sex, weight, number of drinks, and time", "Hair colour, height, meal price, and shoes", "Weather, music, table size, and tips", "Only the number of drinks"],
      answer: 0,
      why: "BAC charts incorporate sex, weight, number of drinks consumed, and time."
    },
    {
      category: "BAC",
      q: "According to the course, which factor is especially important for BAC?",
      choices: ["Time", "Glass colour", "Music volume", "Payment method"],
      answer: 0,
      why: "Time is a key factor because drinking speed and elimination both affect BAC."
    },
    {
      category: "BAC",
      q: "What happens when more drinks are consumed in a shorter period of time?",
      choices: ["BAC is lower", "BAC is higher", "BAC cannot change", "BAC depends only on food"],
      answer: 1,
      why: "More drinks in less time produces a higher BAC."
    },
    {
      category: "BAC",
      q: "What elimination rate do BAC charts often assume?",
      choices: ["About 0.015 BAC per hour", "About 0.15 BAC per hour", "Exactly 2 drinks per hour", "No elimination until sleep"],
      answer: 0,
      why: "The course notes a chart assumption around 0.015 BAC per hour, roughly one standard drink per hour, with variation."
    },
    {
      category: "Intoxication",
      q: "What does intoxication impair?",
      choices: ["A person's normal ability to think, act, and move", "Only eyesight", "Only appetite", "Only handwriting"],
      answer: 0,
      why: "Intoxication impairs normal capacity to think, act, and move."
    },
    {
      category: "Teamwork",
      q: "Why should staff reflect on alcohol-service situations afterward?",
      choices: ["To learn what went well and what to do differently next time", "To avoid all future service", "To blame coworkers", "To skip house policy"],
      answer: 0,
      why: "Reflection helps build judgment and improve future safety decisions."
    },
    {
      category: "Teamwork",
      q: "Why should you share knowledge with coworkers?",
      choices: ["Because keeping people safe is a team objective", "Because only coworkers are liable", "Because guests do not matter", "Because it replaces training"],
      answer: 0,
      why: "The course emphasizes that the team works toward the same objective: keeping people safe."
    }
  );
})();
