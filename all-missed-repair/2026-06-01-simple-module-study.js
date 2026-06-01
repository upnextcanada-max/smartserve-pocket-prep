// SmartServe study add-on from newest screen recording.
// Source: 2026-06-01 chrome_5DttlTbq4B.mp4, modules 6.1 to 6.5.
(function () {
  window.STUDY_DATA = window.STUDY_DATA || { facts: [], flashcards: [], questions: [] };

  const facts = [
    {
      category: "June 1 SIMPLE",
      title: "House Policy",
      text: "A house policy documents the establishment's commitment to safe, responsible alcohol sales and service. It should cover underage guests, intoxicated guests, stopping service, and handling difficult guests."
    },
    {
      category: "June 1 SIMPLE",
      title: "SIMPLE For Licensed Establishments",
      text: "SIMPLE means check Signs of intoxication, ensure ID is valid, Monitor consumption, Prevent over-service, determine Level of intoxication, and Evaluate risk before departure."
    },
    {
      category: "June 1 SIMPLE",
      title: "Signs Before Service",
      text: "If a person is or appears intoxicated, refuse entry or service as required. Watch speech, balance, coordination, eyes, mood, pace, and behaviour."
    },
    {
      category: "June 1 SIMPLE",
      title: "Monitor Consumption",
      text: "Count drinks, ask questions, watch behaviour, and look for changes. A guest may have consumed alcohol, cannabis, medication, or drugs before arriving."
    },
    {
      category: "June 1 SIMPLE",
      title: "Prevent Over-Service",
      text: "Slow service by serving one drink at a time, waiting for reorders, being less available without ignoring guests, offering food, offering water, and offering alcohol-free drinks."
    },
    {
      category: "June 1 SIMPLE",
      title: "Level Of Intoxication",
      text: "Use the green/yellow/red traffic-light thinking. Once a guest is over-served, responsibility continues until the guest is sober or safe, not just until they leave."
    },
    {
      category: "June 1 SIMPLE",
      title: "Evaluate Departure Risk",
      text: "Before an intoxicated or risky guest leaves, assess risk to the guest and others. Arrange safe transportation, involve backup, document, and call police when safety requires it."
    },
    {
      category: "June 1 ID",
      title: "LLCA Underage Rule",
      text: "It is an LLCA violation to knowingly sell or supply alcohol to anyone who is or appears to be under 19. AGCO can discipline licences, and police can lay charges."
    },
    {
      category: "June 1 ID",
      title: "Acceptable ID Pattern",
      text: "Valid age ID must reasonably appear government-issued or LCBO-issued and include a photo and date of birth. Examples include a driver's licence, passport, BYID, Photo Card, Permanent Resident Card, Canadian Armed Forces ID, Secure Indian Status Card, and Canadian Citizenship Card."
    },
    {
      category: "June 1 ID",
      title: "Not Acceptable ID",
      text: "Credit cards, employment security cards, student cards, photos of ID, photocopies, borrowed ID, altered ID, expired ID, and cards without photo/date of birth are not acceptable proof of age."
    },
    {
      category: "June 1 ID",
      title: "Ontario Health Card",
      text: "Do not ask for an Ontario Health Card. If it is voluntarily offered, it may be accepted at your discretion, but you cannot require it and cannot collect or record its information."
    },
    {
      category: "June 1 ID",
      title: "Tampered ID",
      text: "Reject ID with tears, bubbles, creases, folds, extra thickness around the photo or laminated edges, scratched dates, dull colours, mismatched fonts, or a photo/description mismatch."
    },
    {
      category: "June 1 ID",
      title: "Checking ID",
      text: "Check that the ID is government-issued, not expired, in good condition, and matches the person. Verify photo, date of birth, expiry date, name, address, and signature when needed."
    },
    {
      category: "June 1 ID",
      title: "Out-Of-Province ID",
      text: "For unfamiliar out-of-province ID, ask for secondary ID and compare details. If doubt remains, refuse the sale or service."
    },
    {
      category: "June 1 Slow Service",
      title: "Slow Service Tactics",
      text: "Count drinks, serve one drink at a time, slow the rate of service, manage rounds by asking each guest, offer water, offer food, offer alcohol-free drinks, and communicate with staff."
    },
    {
      category: "June 1 Slow Service",
      title: "Food And Water",
      text: "Food can slow alcohol absorption, but it does not sober someone up. Water and alcohol-free drinks help slow the pace; only time lowers BAC."
    },
    {
      category: "June 1 Stop Service",
      title: "Stopping Service",
      text: "Alert backup, seek privacy, use open body language, avoid judgment, show concern, be firm, communicate the decision to staff, and stay on guard so others do not supply the stopped guest."
    },
    {
      category: "June 1 Stop Service",
      title: "Stopped Guest At A Table",
      text: "If one guest at a table is stopped, make sure companions do not give them alcohol. If they do, stop service to the entire table and remove alcohol from the table."
    },
    {
      category: "June 1 Safety",
      title: "Initial Safety Check",
      text: "When a loud or boisterous group arrives and orders shots, check ID, talk with them, make eye contact, observe how they speak and act, and find out if they drank before arrival."
    },
    {
      category: "June 1 Safety",
      title: "Dangerous Situations",
      text: "Danger includes violence, harassment, illegal activity, drug use or sales, illegal gambling, prostitution, and guests bringing alcohol onto the premises. Safety comes first."
    },
    {
      category: "June 1 Safety",
      title: "Harassment",
      text: "If a guest looks uncomfortable with another guest, check in privately and continue monitoring. Do not automatically bring drinks just because the other person ordered them."
    },
    {
      category: "June 1 Safety",
      title: "Fights And Weapons",
      text: "For a physical fight, involve manager/backup and call police. Do not jump between guests or ask other guests to help. If a weapon is present, avoid confrontation and call police."
    },
    {
      category: "June 1 Retail",
      title: "Retail SIMPLE",
      text: "For retail, check signs of intoxication, ensure ID is valid and not tampered, monitor the situation, prevent sales to minors or intoxicated customers, let staff know about refusals, and evaluate the best response."
    },
    {
      category: "June 1 Retail",
      title: "Retail Refusal",
      text: "Refuse retail alcohol sales if the customer is underage, appears intoxicated, has no valid ID when required, or presents fake, expired, altered, borrowed, or stolen ID."
    },
    {
      category: "June 1 Retail",
      title: "Second-Party Purchase",
      text: "Watch for customers trying to buy alcohol for a minor or for someone whose sale was already refused. Tell a manager and co-workers about refusals."
    }
  ];

  const flashcards = [
    {
      category: "June 1 SIMPLE",
      q: "What should a house policy cover?",
      a: "Underage guests, guests who appear intoxicated, how to stop service, and how to handle difficult guests."
    },
    {
      category: "June 1 SIMPLE",
      q: "What does SIMPLE mean in licensed establishments?",
      a: "Signs of intoxication, ID validity, Monitor consumption, Prevent over-service, Level of intoxication, Evaluate risk before departure."
    },
    {
      category: "June 1 SIMPLE",
      q: "What does the S in SIMPLE tell you to do?",
      a: "Check for signs of intoxication before entry or service, and refuse entry/service when required."
    },
    {
      category: "June 1 SIMPLE",
      q: "What does the I in SIMPLE tell you to do?",
      a: "Ensure ID is valid and confirms the customer is at least 19 before serving alcohol."
    },
    {
      category: "June 1 SIMPLE",
      q: "What does the M in SIMPLE tell you to do?",
      a: "Monitor alcohol consumption by counting drinks, asking questions, and observing behaviour."
    },
    {
      category: "June 1 SIMPLE",
      q: "What does the E in SIMPLE tell you to do?",
      a: "Evaluate risk before departure and help make sure the guest and others are safe."
    },
    {
      category: "June 1 ID",
      q: "What happens if alcohol is sold or supplied to someone under 19?",
      a: "It can lead to AGCO monetary penalties or licence action, and police can lay charges."
    },
    {
      category: "June 1 ID",
      q: "Which cards are not acceptable age ID from the module question?",
      a: "Credit cards and employment security cards are not acceptable age ID."
    },
    {
      category: "June 1 ID",
      q: "What is the Ontario Health Card rule?",
      a: "Do not ask for it. If voluntarily offered, it may be accepted at your discretion; do not collect or record its information."
    },
    {
      category: "June 1 ID",
      q: "What condition clues suggest ID tampering?",
      a: "Tears, bubbles, creases, folds, extra thickness around the photo or laminated edges, scratched dates, or mismatched fonts."
    },
    {
      category: "June 1 ID",
      q: "What should you do with unfamiliar out-of-province ID?",
      a: "Ask for secondary ID and compare details. Refuse if doubt remains."
    },
    {
      category: "June 1 Slow Service",
      q: "How do you slow service to a yellow-zone guest?",
      a: "Offer food, bring water, pass the table less often without ignoring them, and tell co-workers or your manager."
    },
    {
      category: "June 1 Slow Service",
      q: "What should you do before a break if you are slowing service?",
      a: "Tell your manager and co-workers so another staff member does not accidentally serve the guest."
    },
    {
      category: "June 1 Stop Service",
      q: "How should stopping service be handled?",
      a: "Get backup, seek privacy, stay calm and firm, avoid judgment, communicate with staff, and prevent others from supplying alcohol."
    },
    {
      category: "June 1 Stop Service",
      q: "Why is saying 'you look drunk, I am cutting you off' loudly a bad move?",
      a: "It is public and confrontational. A better answer is a private, calm, less judgmental statement."
    },
    {
      category: "June 1 Safety",
      q: "A woman looks uncomfortable after a man orders drinks for both of them. What should you do?",
      a: "Check in with her, ask whether she wants the drink, and keep monitoring for safety."
    },
    {
      category: "June 1 Safety",
      q: "What should staff do if guests start physically fighting?",
      a: "Get manager/backup and call police. Do not jump between guests or ask other guests to help."
    },
    {
      category: "June 1 Retail",
      q: "What retail ID problems require refusal?",
      a: "Fake, expired, altered, borrowed, stolen, or missing valid ID when ID is required."
    },
    {
      category: "June 1 Retail",
      q: "Why tell staff after a retail refusal?",
      a: "So the customer cannot try another cashier or have someone else buy alcohol for them."
    },
    {
      category: "June 1 Traps",
      q: "Who can lay charges for serving or selling alcohol to a minor?",
      a: "Police can lay charges. AGCO handles licence discipline such as penalties, conditions, suspension, or revocation."
    }
  ];

  const questions = [
    {
      category: "June 1 House Policy",
      q: "Which topics should be covered in a licensed establishment's house policy?",
      choices: [
        "Only drink recipes and menu pricing",
        "Underage guests, intoxicated guests, stopping service, and difficult guests",
        "Only staff uniforms and scheduling",
        "Only social media and advertising"
      ],
      answer: 1,
      why: "The module listed underage guests, intoxicated guests, stopping service, and difficult guests."
    },
    {
      category: "June 1 House Policy",
      q: "What is the purpose of a house policy?",
      choices: [
        "To replace Ontario law",
        "To let staff serve intoxicated regulars",
        "To document the business's safe-service commitment and procedures",
        "To avoid checking ID"
      ],
      answer: 2,
      why: "A house policy sets out responsible service procedures staff are expected to follow."
    },
    {
      category: "June 1 SIMPLE",
      q: "In the licensed-establishment SIMPLE approach, what does S stand for?",
      choices: [
        "Sell more carefully",
        "Check signs of intoxication",
        "Start a tab",
        "Scan the menu"
      ],
      answer: 1,
      why: "S means checking for signs of intoxication before service or entry decisions."
    },
    {
      category: "June 1 SIMPLE",
      q: "What does the ID step in SIMPLE require before serving alcohol?",
      choices: [
        "A valid ID that confirms the customer is at least 19",
        "A credit card with a matching name",
        "A friend to vouch for the customer",
        "A phone photo of ID"
      ],
      answer: 0,
      why: "Valid ID must reasonably prove age using photo and date of birth."
    },
    {
      category: "June 1 SIMPLE",
      q: "Which action best fits Monitor alcohol consumption?",
      choices: [
        "Assume the guest is fine if they are polite",
        "Count drinks, ask questions, and observe behaviour",
        "Only look at the bill total",
        "Serve faster when the room gets busy"
      ],
      answer: 1,
      why: "Monitoring means actively tracking consumption and signs, not guessing."
    },
    {
      category: "June 1 SIMPLE",
      q: "Which action best fits Prevent over-service?",
      choices: [
        "Offer multiple drinks at once",
        "Avoid food because it slows sales",
        "Slow service, offer food or water, and serve one drink at a time",
        "Wait until the guest is clearly red-zone before acting"
      ],
      answer: 2,
      why: "Prevention happens before a guest is clearly intoxicated."
    },
    {
      category: "June 1 SIMPLE",
      q: "What does Evaluate risk before departure mean?",
      choices: [
        "Your duty ends the second the guest leaves",
        "Only ask whether the bill is paid",
        "Assess whether the guest may harm themselves or others and arrange safety steps",
        "Serve a final drink before they leave"
      ],
      answer: 2,
      why: "Duty of care can continue after service; assess risk and help make a safe plan."
    },
    {
      category: "June 1 ID",
      q: "Under the LLCA, what is true about selling or supplying alcohol to someone who is or appears under 19?",
      choices: [
        "It is allowed if they are with older friends",
        "It is a violation",
        "It is allowed in private rooms",
        "It only matters after midnight"
      ],
      answer: 1,
      why: "Ontario law prohibits selling or supplying alcohol to anyone under 19."
    },
    {
      category: "June 1 ID",
      q: "Who can lay charges for selling or supplying alcohol to a minor?",
      choices: [
        "Police",
        "Ministry of Health",
        "A regular customer",
        "The LCBO cashier"
      ],
      answer: 0,
      why: "Police can lay charges; AGCO handles licensing consequences."
    },
    {
      category: "June 1 ID",
      q: "Who can impose liquor-licence discipline such as monetary penalties, suspension, or revocation?",
      choices: [
        "Ministry of Health",
        "Smart Serve Ontario",
        "AGCO/Registrar",
        "A shift server"
      ],
      answer: 2,
      why: "AGCO/Registrar is the alcohol regulator for licence discipline in Ontario."
    },
    {
      category: "June 1 ID",
      q: "Which pair is not acceptable as age identification?",
      choices: [
        "Passport and Ontario Photo Card",
        "Credit card and employment security card",
        "BYID card and Canadian Armed Forces ID",
        "Permanent Resident Card and Secure Indian Status Card"
      ],
      answer: 1,
      why: "The module question marked credit cards and employment security cards as not acceptable proof of age."
    },
    {
      category: "June 1 ID",
      q: "Which statement about Ontario Health Cards is correct?",
      choices: [
        "You must ask for one from anyone who looks under 25",
        "You can require one if the guest forgot ID",
        "If voluntarily offered, it may be accepted at your discretion; do not require, collect, or record it",
        "It is the only valid age ID"
      ],
      answer: 2,
      why: "Do not ask for a Health Card, and do not collect or record its information."
    },
    {
      category: "June 1 ID",
      q: "Which ID feature should you check?",
      choices: [
        "Only the colour of the card",
        "Photo, date of birth, expiry date, name/address, signature, and card condition",
        "Only whether the customer acts confident",
        "Only whether a friend confirms it"
      ],
      answer: 1,
      why: "The module lists these as important checks for ID validity."
    },
    {
      category: "June 1 ID",
      q: "Which condition clue may indicate ID tampering?",
      choices: [
        "Clear photo and valid expiry date",
        "Government-issued format",
        "Tears, bubbles, folds, creases, or extra thickness near the photo",
        "Matching signature"
      ],
      answer: 2,
      why: "Damaged or altered card condition can indicate tampering."
    },
    {
      category: "June 1 ID",
      q: "What should you do if the date of birth looks scratched, dull, or altered?",
      choices: [
        "Accept it if the person sounds honest",
        "Do not accept the ID",
        "Serve only beer",
        "Ask their friend to confirm"
      ],
      answer: 1,
      why: "Tampered date information means the ID cannot be trusted."
    },
    {
      category: "June 1 ID",
      q: "What is the best action for unfamiliar out-of-province ID?",
      choices: [
        "Ask for secondary ID and compare details",
        "Automatically reject every out-of-province ID",
        "Accept it without checking",
        "Ask for a Health Card"
      ],
      answer: 0,
      why: "Use secondary ID to compare details when the ID is unfamiliar."
    },
    {
      category: "June 1 ID",
      q: "A regular customer forgot physical ID and shows a phone photo. If you need ID, what should you do?",
      choices: [
        "Serve because they are a regular",
        "Accept the phone photo",
        "Refuse the sale or service unless valid ID is produced",
        "Ask a friend to vouch for them"
      ],
      answer: 2,
      why: "Regular status and phone photos do not replace valid ID."
    },
    {
      category: "June 1 Slow Service",
      q: "You rate a guest YELLOW using the traffic-light system. Which response is best?",
      choices: [
        "Offer food, bring water, pass the table less often, and tell staff",
        "Serve faster so they leave sooner",
        "Ignore them until they become red",
        "Give coffee and assume they are sober"
      ],
      answer: 0,
      why: "The module question selected the slow-service bundle: food, water, less frequent passes, and communication."
    },
    {
      category: "June 1 Slow Service",
      q: "Why should you communicate when you are slowing service?",
      choices: [
        "So another staff member does not unknowingly serve the guest",
        "So the guest can order from another section",
        "So you can avoid monitoring",
        "So the guest can have one more round"
      ],
      answer: 0,
      why: "Communication prevents guests from bypassing your decision."
    },
    {
      category: "June 1 Slow Service",
      q: "What should you do when a guest orders a round for the table?",
      choices: [
        "Automatically bring everyone alcohol",
        "Ask each guest whether they want the drink",
        "Bring doubles to save time",
        "Stop checking intoxication"
      ],
      answer: 1,
      why: "Managing rounds means confirming each person's order and condition."
    },
    {
      category: "June 1 Slow Service",
      q: "Why are salty snacks a weaker slow-service choice?",
      choices: [
        "They may increase thirst and drinking",
        "They instantly sober people up",
        "They replace checking ID",
        "They make BAC drop faster"
      ],
      answer: 0,
      why: "The module warns that salty foods can make people thirsty."
    },
    {
      category: "June 1 Slow Service",
      q: "Which statement about coffee is correct?",
      choices: [
        "Coffee lowers BAC",
        "Coffee can be offered as an alcohol-free drink, but only time lowers BAC",
        "Coffee makes driving safe",
        "Coffee lets you restart alcohol service automatically"
      ],
      answer: 1,
      why: "Coffee does not sober someone up; only time lowers BAC."
    },
    {
      category: "June 1 Slow Service",
      q: "After a break, a guest you were slowing has a fresh round. What should you have done before leaving?",
      choices: [
        "Nothing; it is not your table anymore",
        "Let your manager and co-workers know you were slowing service",
        "Served one last drink first",
        "Closed the tab without telling anyone"
      ],
      answer: 1,
      why: "The module's correct answer was to communicate the slow-service decision."
    },
    {
      category: "June 1 Slow Service",
      q: "A table has been drinking for two hours and some guests show signs of intoxication. What helps slow service?",
      choices: [
        "Check the tab to see how much more you can serve",
        "Offer food, water, and non-alcoholic beverages; do not rush to serve",
        "Offer stronger drinks",
        "Ignore signs if they are polite"
      ],
      answer: 1,
      why: "Slow-service actions reduce risk; do not calculate how much more they can drink."
    },
    {
      category: "June 1 Stop Service",
      q: "A guest is approaching RED. Which stopping-service approach is best?",
      choices: [
        "Avoid judgment, be calm but firm, and tell co-workers",
        "Bargain with the guest",
        "Announce loudly that they are drunk",
        "Let friends decide whether to keep serving"
      ],
      answer: 0,
      why: "The module question selected calm, firm, nonjudgmental communication with staff."
    },
    {
      category: "June 1 Stop Service",
      q: "A guest becomes verbally abusive before you stop service. What should you do?",
      choices: [
        "Alert your manager and co-workers",
        "Handle it completely alone",
        "Serve another drink to calm them down",
        "Insult them back"
      ],
      answer: 0,
      why: "Get backup early for safety and witness support."
    },
    {
      category: "June 1 Stop Service",
      q: "You said loudly, 'You look drunk; I am cutting you off,' and the guest became confrontational. What should you do differently?",
      choices: [
        "Say it even louder",
        "Talk privately and use a less confrontational statement",
        "Offer a double",
        "Ask another guest to remove them"
      ],
      answer: 1,
      why: "Privacy and nonjudgmental language reduce confrontation."
    },
    {
      category: "June 1 Stop Service",
      q: "If companions give alcohol to a guest whose service was stopped, what should staff do?",
      choices: [
        "Ignore it because staff did not serve the drink directly",
        "Stop service to the table and remove alcohol if needed",
        "Serve the companions faster",
        "Only warn the stopped guest"
      ],
      answer: 1,
      why: "Staff must prevent alcohol from reaching a guest who has been cut off."
    },
    {
      category: "June 1 Scenario",
      q: "Lily has had two glasses of wine and now has a flushed face, sleepy behaviour, and slurred speech. What should Manuel do?",
      choices: [
        "Stop alcohol service and use backup/support",
        "Serve the third wine because she only had two",
        "Give coffee and then resume alcohol",
        "Ignore signs because she is a regular"
      ],
      answer: 0,
      why: "Visible signs matter even if the drink count seems low; she may have consumed other substances or alcohol before arrival."
    },
    {
      category: "June 1 Scenario",
      q: "Why can a guest show signs after fewer drinks than expected?",
      choices: [
        "They may have had alcohol, cannabis, medication, or drugs before arriving",
        "The BAC chart no longer matters",
        "Tolerance lowers BAC",
        "Coffee raises BAC"
      ],
      answer: 0,
      why: "Staff must consider prior consumption and other impairing substances."
    },
    {
      category: "June 1 Safety",
      q: "A loud, boisterous group arrives and immediately orders shots. What is the best first approach?",
      choices: [
        "Serve quickly before checking anything",
        "Check ID, talk with them, observe speech/behaviour, and assess prior drinking",
        "Refuse everyone automatically",
        "Ask only who is paying"
      ],
      answer: 1,
      why: "The safety scenario emphasizes assessment before service."
    },
    {
      category: "June 1 Safety",
      q: "Which is a dangerous situation that staff must watch for?",
      choices: [
        "Harassment, violence, illegal activity, or guests bringing in alcohol",
        "A guest ordering food",
        "A guest asking for water",
        "A valid ID check"
      ],
      answer: 0,
      why: "These situations can threaten safety and compliance."
    },
    {
      category: "June 1 Safety",
      q: "A female guest appears uncomfortable while a male guest orders two drinks for them. What should you do?",
      choices: [
        "Bring both drinks immediately",
        "Ignore it because they are adults",
        "Make eye contact, ask if she is okay, check whether she wants the drink, and monitor",
        "Tell the male guest to leave without checking"
      ],
      answer: 2,
      why: "The module's safety answer is to check on the uncomfortable guest and continue monitoring."
    },
    {
      category: "June 1 Safety",
      q: "Two guests start physically fighting. What should staff do?",
      choices: [
        "Jump between them",
        "Ask other guests to help restrain them",
        "Involve manager/backup immediately and call police",
        "Keep serving the rest of the room without acting"
      ],
      answer: 2,
      why: "Safety first: get backup and call police instead of entering the fight."
    },
    {
      category: "June 1 Safety",
      q: "If a guest appears to have a weapon, what is the safest response?",
      choices: [
        "Confront the guest yourself",
        "Avoid confrontation and call police",
        "Ask another guest to take it",
        "Continue normal service"
      ],
      answer: 1,
      why: "Do not escalate a weapon situation; call police."
    },
    {
      category: "June 1 Retail",
      q: "In retail sales, what must staff do if a customer appears intoxicated?",
      choices: [
        "Refuse the sale",
        "Sell sealed alcohol because it is not opened",
        "Sell only beer",
        "Ask them to drink it at home"
      ],
      answer: 0,
      why: "The no-intoxicated-customer rule applies to retail alcohol sales too."
    },
    {
      category: "June 1 Retail",
      q: "In the retail situation, which ID problems require refusal?",
      choices: [
        "Fake, expired, altered, borrowed, or stolen ID",
        "A clear valid driver's licence",
        "A valid passport",
        "A valid Ontario Photo Card"
      ],
      answer: 0,
      why: "Retail staff must refuse when ID is invalid or suspicious."
    },
    {
      category: "June 1 Retail",
      q: "Which retail situation is a second-party purchase warning sign?",
      choices: [
        "A customer tries to buy alcohol for a minor or for someone already refused",
        "A customer buys groceries",
        "A customer asks for a receipt",
        "A customer shows valid ID"
      ],
      answer: 0,
      why: "Retail staff must watch for attempts to bypass a refusal."
    },
    {
      category: "June 1 Retail",
      q: "After refusing a retail sale, what should the cashier do?",
      choices: [
        "Tell a manager and co-workers",
        "Keep it secret",
        "Tell the customer to try another cashier",
        "Sell through self-checkout"
      ],
      answer: 0,
      why: "Letting the team know helps prevent another purchase attempt."
    },
    {
      category: "June 1 Retail",
      q: "What does Set yourself up for success mean in the retail module?",
      choices: [
        "Know the rules, know your responsibilities, and work as a team",
        "Memorize prices only",
        "Avoid asking managers for help",
        "Let customers decide ID rules"
      ],
      answer: 0,
      why: "The module lists knowing the rules, responsibilities, and teamwork."
    },
    {
      category: "June 1 Traps",
      q: "Which answer best separates AGCO and police roles?",
      choices: [
        "Police can lay charges; AGCO handles licensing penalties and suspension/revocation",
        "Ministry of Health charges alcohol offences",
        "LCBO suspends every licence",
        "Smart Serve lays criminal charges"
      ],
      answer: 0,
      why: "This directly addresses the underage-service role confusion from the missed questions."
    },
    {
      category: "June 1 Traps",
      q: "Which name should you recognize as the current Ontario alcohol law?",
      choices: [
        "Liquor Licence and Control Act, 2019",
        "Old LLBO Act",
        "Federal Bar Service Act",
        "Ministry of Health Service Act"
      ],
      answer: 0,
      why: "Smart Serve uses the LLCA, Liquor Licence and Control Act, 2019."
    },
    {
      category: "June 1 Traps",
      q: "Which answer best handles a Health Card trap question?",
      choices: [
        "Demand the Health Card if the guest looks young",
        "Do not ask for it; if voluntarily offered, it may be accepted at your discretion and not recorded",
        "Always record the number for proof",
        "Use it instead of checking date of birth"
      ],
      answer: 1,
      why: "The trap is that you cannot require or record a Health Card."
    },
    {
      category: "June 1 Traps",
      q: "Which answer best handles a laminated-photo/tampering trap?",
      choices: [
        "Any laminated card must be accepted",
        "A homemade laminated photo is acceptable",
        "Look for altered laminate, bubbles, cuts, extra thickness, or photo mismatch; refuse if suspicious",
        "Ignore the photo if the birth date is old enough"
      ],
      answer: 2,
      why: "Tampering clues matter; if the card looks altered, refuse."
    }
  ];

  window.STUDY_DATA.facts.push(...facts);
  window.STUDY_DATA.flashcards.push(...flashcards);
  window.STUDY_DATA.questions.push(...questions);
})();
