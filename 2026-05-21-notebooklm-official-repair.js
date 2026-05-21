window.STUDY_DATA = window.STUDY_DATA || { facts: [], flashcards: [], questions: [] };

window.STUDY_DATA.facts.push(
  {
    category: "NotebookLM Official Repair",
    title: "Retail products",
    body: "Convenience and grocery stores may sell beer, cider, wine, and ready-to-drink beverages if licensed. Spirits may not be sold in grocery or convenience stores."
  },
  {
    category: "NotebookLM Official Repair",
    title: "Retail and delivery hours",
    body: "Retail alcohol sale, in-store pickup, and curbside pickup are 7 a.m. to 11 p.m. Delivery is 9 a.m. to 11 p.m. A 24-hour store still cannot sell alcohol outside alcohol hours."
  },
  {
    category: "NotebookLM Official Repair",
    title: "Big AGCO penalty numbers",
    body: "Selling alcohol to a minor can mean a monetary penalty up to $100,000. Selling to an intoxicated person or outside permitted hours can mean up to $50,000, plus possible suspension or revocation."
  }
);

window.STUDY_DATA.flashcards.push(
  {
    category: "NotebookLM Official Repair",
    prompt: "What alcohol products can licensed convenience/grocery stores sell?",
    answer: "Beer, cider, wine, and ready-to-drink beverages. Not spirits."
  },
  {
    category: "NotebookLM Official Repair",
    prompt: "What are the retail sale and delivery hours for alcohol?",
    answer: "Retail sale/pickup: 7 a.m. to 11 p.m. Delivery: 9 a.m. to 11 p.m."
  },
  {
    category: "NotebookLM Official Repair",
    prompt: "What are the two most important penalty numbers from the AGCO retail guidance?",
    answer: "Up to $100,000 for selling to a minor; up to $50,000 for selling to an intoxicated person or outside permitted hours."
  }
);

window.STUDY_DATA.questions.push(
  {
    category: "NotebookLM Official Repair",
    q: "A licensed convenience store wants to stock alcohol. Which product group is permitted?",
    choices: [
      "Beer, cider, wine, and ready-to-drink beverages",
      "Beer, cider, wine, ready-to-drink beverages, and spirits",
      "Only beer and wine",
      "Only spirits in sealed containers"
    ],
    answer: 0,
    why: "AGCO convenience/grocery guidance limits these stores to beer, cider, wine, and RTD beverages. Spirits may not be sold."
  },
  {
    category: "NotebookLM Official Repair",
    q: "Which statement about spirits in grocery or convenience stores is correct?",
    choices: [
      "Spirits may not be sold in grocery or convenience stores",
      "Spirits may be sold only after 9 a.m.",
      "Spirits may be sold if the bottle is under 375 mL",
      "Spirits may be sold only to customers over 25"
    ],
    answer: 0,
    why: "The AGCO compliance support page states that spirits may not be sold in grocery or convenience stores."
  },
  {
    category: "NotebookLM Official Repair",
    q: "A 24-hour convenience store is licensed to sell alcohol. When may it sell alcohol for in-store purchase?",
    choices: [
      "7 a.m. to 11 p.m.",
      "9 a.m. to 11 p.m.",
      "24 hours because the store is open",
      "11 a.m. to 2 a.m."
    ],
    answer: 0,
    why: "Retail sale and pickup hours are 7 a.m. to 11 p.m., even when the store itself is open longer."
  },
  {
    category: "NotebookLM Official Repair",
    q: "What are the permissible hours for alcohol delivery in Ontario?",
    choices: [
      "9 a.m. to 11 p.m.",
      "7 a.m. to 11 p.m.",
      "9 a.m. to 2 a.m.",
      "24 hours if the order is sealed"
    ],
    answer: 0,
    why: "AGCO hours guidance lists delivery hours as 9 a.m. to 11 p.m."
  },
  {
    category: "NotebookLM Official Repair",
    q: "Selling alcohol to a minor in a convenience/grocery store could result in which AGCO monetary penalty?",
    choices: [
      "Up to $100,000",
      "Up to $5,000",
      "Up to $500",
      "Only a verbal warning"
    ],
    answer: 0,
    why: "AGCO compliance support says selling to a minor could result in a monetary penalty up to $100,000 or suspension/revocation."
  },
  {
    category: "NotebookLM Official Repair",
    q: "Selling alcohol to an intoxicated customer could result in which AGCO monetary penalty?",
    choices: [
      "Up to $50,000",
      "Up to $100",
      "Only a staff retraining note",
      "No penalty if the alcohol is sealed"
    ],
    answer: 0,
    why: "AGCO compliance support says selling to an intoxicated person could result in a monetary penalty up to $50,000 or suspension/revocation."
  },
  {
    category: "NotebookLM Official Repair",
    q: "A customer appears intoxicated but wants sealed beer to take home from a grocery store. What must staff do?",
    choices: [
      "Refuse the sale",
      "Sell it because it will not be consumed in the store",
      "Sell it if the customer is over 25",
      "Sell it if the customer buys food"
    ],
    answer: 0,
    why: "You may not sell alcohol to a person who is or appears intoxicated. Sealed retail alcohol is still alcohol."
  },
  {
    category: "NotebookLM Official Repair",
    q: "A customer who appears under the legal drinking age tries to buy alcohol at a grocery store. What is staff required to do?",
    choices: [
      "Check valid ID before selling",
      "Sell if the customer seems mature",
      "Sell only beer or cider",
      "Ask the customer to promise they are 19"
    ],
    answer: 0,
    why: "AGCO retail guidance says staff must check ID when a person appears under the legal drinking age."
  },
  {
    category: "NotebookLM Official Repair",
    q: "What is the legal drinking age in Ontario?",
    choices: [
      "19",
      "18",
      "21",
      "25"
    ],
    answer: 0,
    why: "Customers must be at least 19 to buy, possess, accept delivery of, or consume alcohol in Ontario."
  },
  {
    category: "NotebookLM Official Repair",
    q: "What is the minimum age for staff to legally sell, serve, handle, deliver, or sample alcohol in Ontario?",
    choices: [
      "18",
      "19",
      "21",
      "25"
    ],
    answer: 0,
    why: "Smart Serve notes that staff may legally serve alcohol at 18, while customers must be 19 to possess or consume it."
  },
  {
    category: "NotebookLM Official Repair",
    q: "Which answer best explains the high-tolerance trap?",
    choices: [
      "A high-tolerance person may show fewer outward signs while still having a high BAC",
      "A high-tolerance person metabolizes alcohol instantly",
      "A high-tolerance person cannot become intoxicated",
      "A high-tolerance person may always be served more"
    ],
    answer: 0,
    why: "Tolerance can mask visible signs; it does not lower BAC or remove impairment risk."
  },
  {
    category: "NotebookLM Official Repair",
    q: "The Smart Serve BAC chart uses which colour for 0.08 or higher?",
    choices: [
      "Red",
      "Yellow",
      "Green",
      "Blue"
    ],
    answer: 0,
    why: "Smart Serve BAC guidance marks 0.08 or more as red."
  },
  {
    category: "NotebookLM Official Repair",
    q: "The Smart Serve BAC chart uses which colour for 0.05 to 0.079?",
    choices: [
      "Yellow",
      "Red",
      "Green",
      "Purple"
    ],
    answer: 0,
    why: "Smart Serve BAC guidance marks 0.05 to 0.079 as yellow, also known as the warn range for driving."
  },
  {
    category: "NotebookLM Official Repair",
    q: "One standard drink contains about how much pure alcohol?",
    choices: [
      "0.6 oz or 17 mL",
      "1.5 oz or 43 mL",
      "5 oz or 142 mL",
      "12 oz or 341 mL"
    ],
    answer: 0,
    why: "The standard-drink benchmark is about 0.6 oz or 17 mL of pure alcohol."
  },
  {
    category: "NotebookLM Official Repair",
    q: "Which standard-drink formula gives the serving size in ounces for one standard drink?",
    choices: [
      "60 divided by alcohol percentage",
      "Alcohol percentage divided by 60",
      "Ounces divided by age",
      "BAC divided by body weight"
    ],
    answer: 0,
    why: "The course job aid formula is 60 divided by alcohol percentage equals ounces for one standard drink."
  },
  {
    category: "NotebookLM Official Repair",
    q: "A 3 oz glass of 20 percent port is how many standard drinks?",
    choices: [
      "1",
      "0.5",
      "1.5",
      "2"
    ],
    answer: 0,
    why: "60 divided by 20 equals 3 oz, so 3 oz of 20 percent alcohol is exactly one standard drink."
  },
  {
    category: "NotebookLM Official Repair",
    q: "What is the Sandy's Law sign requirement?",
    choices: [
      "A visible FASD warning sign at least 8 by 10 inches",
      "A private sign in the staff room only",
      "A sign only in LCBO stores",
      "A sign only if pregnant customers are present"
    ],
    answer: 0,
    why: "Smart Serve states the Sandy's Law/FASD warning sign must be prominently posted and at least 8 by 10 inches."
  },
  {
    category: "NotebookLM Official Repair",
    q: "Which ID rule is correct?",
    choices: [
      "Expired ID and student cards should not be accepted",
      "Expired ID is fine if the photo matches",
      "Student cards are acceptable if laminated",
      "A verbal birthdate is enough"
    ],
    answer: 0,
    why: "Smart Serve says never accept student cards or expired ID."
  },
  {
    category: "NotebookLM Official Repair",
    q: "What is the Ontario Health Card rule for age checks?",
    choices: [
      "Do not ask for it; it can only be accepted if offered",
      "Always ask for it first",
      "It is never acceptable even if offered",
      "Record the health card number in the log"
    ],
    answer: 0,
    why: "Smart Serve says you should not ask for an Ontario Health Card; it can only be used if offered."
  },
  {
    category: "NotebookLM Official Repair",
    q: "Which answer best describes civil liability after over-service?",
    choices: [
      "The server and establishment may be responsible for foreseeable harm caused by an over-served guest",
      "Only the guest can ever be responsible",
      "Liability ends the moment the guest leaves",
      "There is no liability if the guest looked calm"
    ],
    answer: 0,
    why: "Duty of care can continue after a guest leaves; over-service can create civil liability if the guest harms themselves or others."
  }
);
