// SmartServe questionnaire add-on from 2026-06-03 module screen recording.
// Sources: chrome_T8la1ROMfE.mp4 extracted frames, Gemini contact-sheet notes, and Smart Serve/Ontario rules.
(function () {
  window.STUDY_DATA = window.STUDY_DATA || { facts: [], flashcards: [], questions: [] };

  const facts = [
    {
      category: "June 3 Video",
      title: "ID Scenario Pattern",
      text: "When the ID photo, date, expiry, or condition creates doubt, do not guess. Ask verifying questions, ask for a second valid piece when appropriate, and refuse if doubt remains."
    },
    {
      category: "June 3 Video",
      title: "Sexual Violence Module",
      text: "The module focuses on recognizing sexual violence, sexual harassment, drug-facilitated sexual assault, consent, and safe intervention strategies."
    },
    {
      category: "June 3 Video",
      title: "Consent",
      text: "Consent is a clear, conscious, voluntary agreement. It cannot be assumed from silence, past consent, accepting a drink, or arriving together. A person who is unconscious or substantially impaired cannot consent."
    },
    {
      category: "June 3 Video",
      title: "Drug-Facilitated Sexual Assault Signs",
      text: "Warning signs include sudden confusion, dizziness, sweating or chills, passing out, crying or appearing upset, loss of balance, loss of bladder control, and fuzzy memory."
    },
    {
      category: "June 3 Video",
      title: "Sexual Harassment",
      text: "Sexual harassment can include catcalling, sexual comments, threats, rumours, stalking, unwanted touching, unwanted requests, groping, or photos/videos without permission."
    },
    {
      category: "June 3 Video",
      title: "Safe Intervention",
      text: "Do not make assumptions. Give drinks directly to the person consuming them, check in when something feels wrong, use open communication, follow house policy, document incidents, and get help from staff or police when needed."
    },
    {
      category: "June 3 Video",
      title: "Licensed Intoxication Decisions",
      text: "Assess guests before each drink. You have the right and obligation to refuse alcohol to anyone who is or appears intoxicated, even if a manager or friend pressures you."
    },
    {
      category: "June 3 Video",
      title: "Retail Intoxication Decisions",
      text: "Retail alcohol must be refused if the customer is intoxicated or appears intoxicated. Communicate clearly, avoid judgmental language, explain the refusal, and alert co-workers."
    },
    {
      category: "June 3 Video",
      title: "Cannabis And Alcohol",
      text: "Cannabis can affect intoxication signs and risk. Burnt cannabis smell alone is not proof of intoxication, but it should trigger closer observation for other signs."
    },
    {
      category: "June 3 Video",
      title: "Cannabis Signs",
      text: "Cannabis-specific signs include bloodshot eyes, increased appetite, excessive coughing, and smell of burnt cannabis plus other behavioural or physical signs."
    },
    {
      category: "June 3 Video",
      title: "Alcohol Basics",
      text: "Alcohol is a depressant. Liquor and alcohol are used interchangeably in the course. Beer, wine, and spirits differ by alcohol percentage, not by how intoxication works."
    },
    {
      category: "June 3 Video",
      title: "Standard Drinks",
      text: "One standard drink contains 0.6 oz or about 17 mL/13.6 g of pure alcohol: 12 oz beer/cider/RTD at 5%, 5 oz wine at 12%, or 1.5 oz spirits at 40%."
    },
    {
      category: "June 3 Video",
      title: "Standard Drink Formula",
      text: "Use 60 divided by alcohol percentage to estimate the ounces for one standard drink. Example: 30% alcohol equals 2 oz for one standard drink."
    },
    {
      category: "June 3 Video",
      title: "BAC Chart",
      text: "BAC charts are estimates. Use sex, weight, number of standard drinks, and time spent drinking. Never use a chart to prove a guest is safe to drive."
    },
    {
      category: "June 3 Video",
      title: "Traffic Light System",
      text: "Green is under 0.05, yellow is 0.05 to 0.079, and red is 0.08 or more. Yellow means slow down and reassess; red means stop service."
    },
    {
      category: "June 3 Video",
      title: "Signs Of Intoxication",
      text: "Watch physical, mental/cognitive, and social signs: slurred speech, loss of balance, poor coordination, red/glassy eyes, slow response, memory loss, poor decisions, reduced inhibitions, and bothering other guests."
    }
  ];

  const flashcards = [
    { category: "June 3 ID", q: "If an ID photo might not match the person, what should you do?", a: "Ask verifying questions or request another valid piece of ID. Refuse if doubt remains." },
    { category: "June 3 ID", q: "What if the ID photo clearly does not match the guest?", a: "Do not accept the ID and refuse alcohol service or sale." },
    { category: "June 3 ID", q: "What if an out-of-province ID is unfamiliar?", a: "Ask for a second valid piece of ID and compare details." },
    { category: "June 3 Sexual Violence", q: "What are the two major sexual violence topics visible in the module?", a: "Sexual harassment and drug-facilitated sexual assault." },
    { category: "June 3 Sexual Violence", q: "Can accepting a drink mean consent to attention, leaving, or sexual contact?", a: "No. A drink does not create consent." },
    { category: "June 3 Consent", q: "Can a substantially impaired or unconscious person consent?", a: "No. Consent must be clear, conscious, and voluntary." },
    { category: "June 3 DFSA", q: "Name warning signs of drug-facilitated sexual assault.", a: "Sudden dizziness, confusion, sweating or chills, passing out, crying, loss of balance, loss of bladder control, and fuzzy memory." },
    { category: "June 3 Safety", q: "What should you do when someone orders a drink for another guest?", a: "Check whether the intended guest wants the drink and give it directly to the person who will consume it." },
    { category: "June 3 Safety", q: "What if you see harassment or a potentially dangerous situation?", a: "Act early, check in, get backup, follow house policy, document, and call police when safety requires it." },
    { category: "June 3 Licensed", q: "Should a server assess a guest before each drink?", a: "Yes. Assessment is ongoing, not a one-time check." },
    { category: "June 3 Licensed", q: "What if a manager asks you to serve someone you think is intoxicated?", a: "You still have the right and obligation to refuse service." },
    { category: "June 3 Retail", q: "What should a cashier do when a customer may be intoxicated?", a: "Assess through observation and communication, refuse alcohol if they are or appear intoxicated, and tell staff." },
    { category: "June 3 Retail", q: "What if a refused customer tries to buy through another cashier or friend?", a: "Intervene, tell the cashier or manager, and prevent the alcohol sale." },
    { category: "June 3 Cannabis", q: "Is burnt cannabis smell alone a sign of intoxication?", a: "No. It is a trigger to look for other signs, not proof by itself." },
    { category: "June 3 Cannabis", q: "What are cannabis-specific signs?", a: "Bloodshot eyes, increased appetite, excessive coughing, and smell of burnt cannabis with other signs." },
    { category: "June 3 Standard Drinks", q: "What is one standard drink?", a: "0.6 oz/17 mL/13.6 g pure alcohol: 12 oz at 5%, 5 oz at 12%, or 1.5 oz at 40%." },
    { category: "June 3 Standard Drinks", q: "How many ounces is one standard drink at 30% alcohol?", a: "2 oz, because 60 divided by 30 equals 2." },
    { category: "June 3 BAC", q: "What information do you need to read a BAC chart?", a: "Sex, weight, number of standard drinks, and time spent drinking." },
    { category: "June 3 BAC", q: "What does the traffic light system mean?", a: "Green under 0.05, yellow 0.05 to 0.079, red 0.08 or more." },
    { category: "June 3 Signs", q: "What are major signs of intoxication?", a: "Physical, mental/cognitive, and social changes such as slurred speech, poor coordination, memory loss, slow responses, poor decisions, and reduced inhibitions." }
  ];

  const questions = [
    {
      category: "June 3 ID",
      q: "A customer looks young and the ID photo may not be the person in front of you. What is the safest Smart Serve action?",
      choices: ["Accept the ID because the date of birth is old enough", "Ask verifying questions or request another valid piece of ID", "Ignore the photo if the customer is polite", "Ask the customer's friend to confirm"],
      answer: 1,
      why: "If the photo match is uncertain, verify. If doubt remains, refuse."
    },
    {
      category: "June 3 ID",
      q: "A guest presents an ID with a photo that clearly does not match them. What should you do?",
      choices: ["Do not accept the ID", "Accept it if the birth date is old enough", "Serve only one drink", "Ask for a tip first"],
      answer: 0,
      why: "A photo mismatch means the ID is not valid for that person."
    },
    {
      category: "June 3 ID",
      q: "Which ID issue is a valid reason to reject the ID?",
      choices: ["The guest is smiling", "The photo area looks altered or does not match", "The guest wants food", "The guest pays cash"],
      answer: 1,
      why: "The video included ID rejection based on the photo/photo area."
    },
    {
      category: "June 3 ID",
      q: "A customer shows an unfamiliar out-of-province ID. What should you do if you are not sure it is valid?",
      choices: ["Ask for a second valid piece of ID", "Always accept it", "Always destroy it", "Ask for a Health Card specifically"],
      answer: 0,
      why: "For unfamiliar ID, ask for secondary valid ID and compare details."
    },
    {
      category: "June 3 ID",
      q: "Which detail should you check when deciding whether to accept ID?",
      choices: ["Photo, birth date, expiry date, and card condition", "Only the customer's outfit", "Only the price of the drink", "Only whether the customer is a regular"],
      answer: 0,
      why: "Valid ID checks include photo, DOB, expiry, and signs of tampering."
    },
    {
      category: "June 3 ID",
      q: "A regular customer forgot ID and says you served them before. What should you do if you need ID?",
      choices: ["Serve because they are a regular", "Accept a phone photo", "Refuse unless valid ID is produced", "Let their friend vouch"],
      answer: 2,
      why: "Regular status does not replace valid ID."
    },
    {
      category: "June 3 ID",
      q: "Which item is not acceptable as proof of age for alcohol service?",
      choices: ["Valid passport", "Valid Ontario driver's licence", "Employment security card", "Valid Permanent Resident Card"],
      answer: 2,
      why: "Employment security cards are not acceptable proof of age."
    },
    {
      category: "June 3 ID",
      q: "What is the Ontario Health Card rule for alcohol age checks?",
      choices: ["You must demand it", "You may ask for it when busy", "Do not ask for it; if voluntarily offered, do not collect or record its information", "It replaces all other ID"],
      answer: 2,
      why: "You cannot require or record Health Card information."
    },
    {
      category: "June 3 Sexual Violence",
      q: "Which two types of sexual violence were emphasized in the Smart Serve sexual violence module?",
      choices: ["Tax fraud and theft", "Sexual harassment and drug-facilitated sexual assault", "Noise complaints and smoking", "Forgery and trespassing"],
      answer: 1,
      why: "The visible module covered sexual harassment and drug-facilitated sexual assault."
    },
    {
      category: "June 3 Sexual Violence",
      q: "Which is an example of sexual harassment?",
      choices: ["Ordering food", "Unwanted sexual comments, requests, touching, or following", "Showing valid ID", "Asking for water"],
      answer: 1,
      why: "Unwanted sexual behaviour, comments, and contact are harassment."
    },
    {
      category: "June 3 Sexual Violence",
      q: "A group repeatedly blocks someone from leaving and keeps making unwanted comments. Should staff view this as sexual harassment risk?",
      choices: ["Yes", "No, because it is only words", "No, because groups are allowed to flirt", "Only if alcohol has already been served"],
      answer: 0,
      why: "Blocking someone, unwanted attention, and sexual comments can create a harassment risk."
    },
    {
      category: "June 3 Consent",
      q: "What is consent?",
      choices: ["A clear, conscious, voluntary agreement", "Silence", "Past agreement", "Accepting a drink from someone"],
      answer: 0,
      why: "Consent must be clear, conscious, and voluntary."
    },
    {
      category: "June 3 Consent",
      q: "A guest accepts a drink that someone else bought. Does that mean they consent to leave with that person?",
      choices: ["Yes", "No", "Only if the drink was expensive", "Only after midnight"],
      answer: 1,
      why: "Accepting a drink is not consent to attention, leaving, or sexual contact."
    },
    {
      category: "June 3 Consent",
      q: "Can consent be assumed because two guests arrived together or danced together earlier?",
      choices: ["Yes, always", "No", "Only if they are regulars", "Only if the server saw them talking"],
      answer: 1,
      why: "Past behaviour or arriving together does not create ongoing consent."
    },
    {
      category: "June 3 Consent",
      q: "Can a guest who is unconscious or substantially impaired give consent?",
      choices: ["Yes, if they came with friends", "Yes, if they accepted a drink earlier", "No", "Only if they are over 19"],
      answer: 2,
      why: "A person who is unconscious or substantially impaired cannot give valid consent."
    },
    {
      category: "June 3 DFSA",
      q: "Which could be a warning sign of drug-facilitated sexual assault?",
      choices: ["Sudden dizziness, confusion, or passing out", "Ordering a meal", "Showing a passport", "Asking for the bill"],
      answer: 0,
      why: "Sudden confusion, dizziness, and passing out are warning signs."
    },
    {
      category: "June 3 DFSA",
      q: "Which set contains possible DFSA warning signs?",
      choices: ["Sweating or chills, fuzzy memory, loss of balance", "Valid ID, ordering water, paying cash", "Being 19, ordering food, smiling", "Wearing a coat, sitting down, using a debit card"],
      answer: 0,
      why: "Those signs may indicate drug-facilitated sexual assault or serious impairment."
    },
    {
      category: "June 3 Safety",
      q: "Someone orders a drink for another guest. What is the safest delivery practice?",
      choices: ["Give the drink directly to the person who ordered it only", "Ask whether the intended recipient wants it and give it directly to the person consuming it", "Leave it unattended", "Assume consent"],
      answer: 1,
      why: "The module warns not to give someone a drink they did not order without checking."
    },
    {
      category: "June 3 Safety",
      q: "Why should guests avoid leaving drinks unattended?",
      choices: ["It increases tax", "It creates risk of tampering or unwanted control", "It lowers BAC", "It makes ID unnecessary"],
      answer: 1,
      why: "Unattended drinks are a safety risk."
    },
    {
      category: "June 3 Safety",
      q: "If you see something that may be sexual violence or harassment, what should you do?",
      choices: ["Wait until someone complains", "Be proactive, check in, get support, follow house policy, and document", "Ignore it if the offender is a regular", "Assume it is none of your business"],
      answer: 1,
      why: "The module stresses proactive and responsive action."
    },
    {
      category: "June 3 Safety",
      q: "Which is a bad assumption?",
      choices: ["Offenders can be strangers, friends, partners, co-workers, or regulars", "Sexual violence has no single offender type", "A regular customer cannot be an offender", "Staff should follow house policy"],
      answer: 2,
      why: "Do not ignore behaviour just because the person is a regular."
    },
    {
      category: "June 3 Safety",
      q: "What should staff listen for when using their ears to spot danger?",
      choices: ["Inappropriate comments, aggressive come-ons, rejection, or heated conversations", "Only drink prices", "Only music volume", "Only kitchen orders"],
      answer: 0,
      why: "The module lists listening cues such as inappropriate comments and aggressive tone."
    },
    {
      category: "June 3 Safety",
      q: "Which record should be completed after a serious safety or sexual violence incident?",
      choices: ["Incident log", "Recipe card", "Customer coupon", "Music playlist"],
      answer: 0,
      why: "Document incidents in the establishment's incident log."
    },
    {
      category: "June 3 Licensed",
      q: "Should a server assess the guest before each drink served?",
      choices: ["Yes", "No", "Only for strangers", "Only after 11 p.m."],
      answer: 0,
      why: "Assessment is ongoing and should happen before serving more alcohol."
    },
    {
      category: "June 3 Licensed",
      q: "A manager asks you to serve their friend, but you believe the friend is intoxicated. What is correct?",
      choices: ["Serve because the manager asked", "You still have the right and obligation to refuse service", "Serve if the friend is wealthy", "Serve only spirits"],
      answer: 1,
      why: "You are responsible for refusing service to someone who is or appears intoxicated."
    },
    {
      category: "June 3 Licensed",
      q: "Which is the best first step when a guest's condition is unclear?",
      choices: ["Make eye contact, talk with them, and assess speech, coordination, and behaviour", "Serve quickly", "Ignore them", "Ask another guest to decide"],
      answer: 0,
      why: "Observation and communication help assess intoxication."
    },
    {
      category: "June 3 Licensed",
      q: "A guest is showing signs of intoxication. What must happen?",
      choices: ["Stop alcohol service", "Serve a lighter drink", "Serve coffee then alcohol", "Let their friends decide"],
      answer: 0,
      why: "You must not serve alcohol to an intoxicated or apparently intoxicated guest."
    },
    {
      category: "June 3 Licensed",
      q: "What language style is best when refusing service?",
      choices: ["Clear, respectful, calm, and firm", "Mocking and loud", "Threatening", "Sarcastic"],
      answer: 0,
      why: "Refusals should avoid escalation and judgmental language."
    },
    {
      category: "June 3 Licensed",
      q: "Which action supports duty of care after refusing service?",
      choices: ["Arrange safe transportation if needed", "Give one last drink", "Tell the guest to drive carefully", "Ignore them once the bill is paid"],
      answer: 0,
      why: "Duty of care includes steps to keep the guest and others safe."
    },
    {
      category: "June 3 Retail",
      q: "A retail customer appears intoxicated and wants to buy sealed alcohol. What should the cashier do?",
      choices: ["Refuse the sale", "Sell it because it is sealed", "Sell only beer", "Ask them to drink at home"],
      answer: 0,
      why: "Retail sales to intoxicated or apparently intoxicated customers are not allowed."
    },
    {
      category: "June 3 Retail",
      q: "A cashier suspects a customer may be intoxicated. What should they do first?",
      choices: ["Assess by observing and speaking with the customer", "Sell the alcohol immediately", "Ignore it unless the customer complains", "Wait two hours while holding the bottle"],
      answer: 0,
      why: "The cashier should assess signs and communicate before deciding."
    },
    {
      category: "June 3 Retail",
      q: "Which strategies belong in a retail refusal approach?",
      choices: ["Communicate clearly, avoid confrontational language, and explain the reason", "Insult the customer", "Hide behind the counter without speaking", "Offer stronger alcohol"],
      answer: 0,
      why: "The video's retail scenario focused on clear, respectful refusal."
    },
    {
      category: "June 3 Retail",
      q: "A customer whose sale was refused tries to buy through another cashier or friend. What should you do?",
      choices: ["Intervene and tell the cashier or manager about the refusal", "Ignore it because it is not your till", "Let the sale happen", "Offer a discount"],
      answer: 0,
      why: "Staff must prevent bypassing a refusal."
    },
    {
      category: "June 3 Retail",
      q: "If a customer leaves and returns with groceries but a friend tries to buy alcohol for them, what is the concern?",
      choices: ["Second-party purchase for a refused customer", "Too many groceries", "Wrong payment method", "The store is too bright"],
      answer: 0,
      why: "It may be an attempt to get alcohol for someone already refused."
    },
    {
      category: "June 3 Retail",
      q: "Why should retail staff tell co-workers about alcohol refusals?",
      choices: ["So the customer cannot try another cashier", "To embarrass the customer", "To increase sales", "To avoid checking ID"],
      answer: 0,
      why: "Communication prevents second attempts."
    },
    {
      category: "June 3 Cannabis",
      q: "Which sign is specific to cannabis consumption?",
      choices: ["Bloodshot eyes", "Valid ID", "Ordering food", "Paying with a card"],
      answer: 0,
      why: "Bloodshot eyes are listed as a cannabis-specific sign."
    },
    {
      category: "June 3 Cannabis",
      q: "Is the smell of burnt cannabis alone enough to prove intoxication?",
      choices: ["Yes, always", "No, but it should trigger a closer look for other signs", "Only after midnight", "Only in grocery stores"],
      answer: 1,
      why: "Smell alone is not proof, but it should prompt observation."
    },
    {
      category: "June 3 Cannabis",
      q: "Which is another cannabis-specific sign from the video?",
      choices: ["Increased appetite", "Perfect balance", "Lower BAC instantly", "A valid passport"],
      answer: 0,
      why: "Cannabis can lead to increased appetite."
    },
    {
      category: "June 3 Cannabis",
      q: "What is THC?",
      choices: ["The intoxicating component of cannabis", "The legal drinking age", "A type of ID", "A standard drink formula"],
      answer: 0,
      why: "THC creates the intoxicating effect of cannabis."
    },
    {
      category: "June 3 Cannabis",
      q: "What is CBD in the course context?",
      choices: ["Generally non-intoxicating compared with THC", "A proof of age card", "The criminal BAC threshold", "A kind of beer"],
      answer: 0,
      why: "CBD is not the main intoxicating component."
    },
    {
      category: "June 3 Cannabis",
      q: "Consuming alcohol and cannabis at the same time can do what?",
      choices: ["Increase intoxication and impairment risk", "Make BAC disappear", "Make ID unnecessary", "Guarantee safe driving"],
      answer: 0,
      why: "The course warns that combining substances increases impairment risk."
    },
    {
      category: "June 3 Cannabis",
      q: "Why are edibles tricky?",
      choices: ["They can take longer to feel and last longer", "They instantly lower BAC", "They are proof of age", "They make alcohol legal for minors"],
      answer: 0,
      why: "Edibles have delayed onset and can last longer."
    },
    {
      category: "June 3 Cannabis",
      q: "A customer appears intoxicated from cannabis. Can you sell or serve them alcohol?",
      choices: ["No", "Yes, because it was not alcohol", "Yes, if they are not driving", "Only beer"],
      answer: 0,
      why: "Intoxication from cannabis or drugs still means no alcohol sale or service."
    },
    {
      category: "June 3 Alcohol",
      q: "Alcohol is classified as what?",
      choices: ["A depressant", "A stimulant", "A proof of age", "A food group"],
      answer: 0,
      why: "The course states alcohol is a depressant."
    },
    {
      category: "June 3 Alcohol",
      q: "Which are the three general classes of alcoholic beverages?",
      choices: ["Beer, wine, and spirits", "Tea, coffee, and water", "Juice, soda, and milk", "Cash, debit, and credit"],
      answer: 0,
      why: "The visible course slide lists beer, wine, and spirits."
    },
    {
      category: "June 3 Alcohol",
      q: "Which beer alcohol range appeared in the module?",
      choices: ["About 4.5% to 9%", "About 20% to 60%", "0%", "Only 40%"],
      answer: 0,
      why: "The module lists beer as about 4.5% to 9% alcohol."
    },
    {
      category: "June 3 Alcohol",
      q: "Which wine alcohol range appeared in the module?",
      choices: ["About 6% to over 15%", "Only 1%", "40% to 60%", "0%"],
      answer: 0,
      why: "The module lists wine as about 6% to over 15%."
    },
    {
      category: "June 3 Alcohol",
      q: "Which spirits alcohol range appeared in the module?",
      choices: ["About 15% to over 40%", "Only 5%", "0.5% to 1%", "Only 12%"],
      answer: 0,
      why: "The module lists spirits as about 15% to over 40%."
    },
    {
      category: "June 3 Alcohol",
      q: "What does an alcohol label percentage tell you?",
      choices: ["The percentage of the container that is pure alcohol by volume", "The customer's age", "The BAC after one drink", "The legal serving hour"],
      answer: 0,
      why: "Labels list the alcohol percentage and volume."
    },
    {
      category: "June 3 Standard Drinks",
      q: "How much pure alcohol is in one standard drink?",
      choices: ["0.6 oz or about 17 mL/13.6 g", "3 oz of pure alcohol", "12 oz of pure alcohol", "5 oz of pure alcohol"],
      answer: 0,
      why: "One standard drink contains about 0.6 oz, 17 mL, or 13.6 g of pure alcohol."
    },
    {
      category: "June 3 Standard Drinks",
      q: "Which is one standard beer/cider/ready-to-drink beverage?",
      choices: ["12 oz at 5%", "12 oz at 12%", "1.5 oz at 5%", "5 oz at 40%"],
      answer: 0,
      why: "A standard beer/cider/RTD is 12 oz at 5%."
    },
    {
      category: "June 3 Standard Drinks",
      q: "Which is one standard wine serving?",
      choices: ["5 oz at 12%", "12 oz at 12%", "1.5 oz at 12%", "3 oz at 40%"],
      answer: 0,
      why: "A standard wine is 5 oz at 12%."
    },
    {
      category: "June 3 Standard Drinks",
      q: "Which is one standard spirits serving?",
      choices: ["1.5 oz at 40%", "5 oz at 40%", "12 oz at 40%", "3 oz at 12%"],
      answer: 0,
      why: "A standard spirits serving is 1.5 oz at 40%."
    },
    {
      category: "June 3 Standard Drinks",
      q: "What does 60 divided by alcohol percentage estimate?",
      choices: ["Ounces for one standard drink", "Legal age", "Time until closing", "BAC colour"],
      answer: 0,
      why: "60 / ABV percent gives the ounces for one standard drink."
    },
    {
      category: "June 3 Standard Drinks",
      q: "How many ounces of 30% spirits equals one standard drink?",
      choices: ["1 oz", "2 oz", "3 oz", "6 oz"],
      answer: 1,
      why: "60 divided by 30 equals 2 oz."
    },
    {
      category: "June 3 Standard Drinks",
      q: "How many standard drinks are in 3 oz of 40% spirits?",
      choices: ["1", "2", "3", "4"],
      answer: 1,
      why: "At 40%, 1.5 oz is one standard drink, so 3 oz is two."
    },
    {
      category: "June 3 Standard Drinks",
      q: "Which statement about mixed drinks is true?",
      choices: ["They may contain more than one standard drink", "They are always one standard drink", "They never contain spirits", "They lower BAC"],
      answer: 0,
      why: "Mixed drinks can contain multiple types or amounts of alcohol."
    },
    {
      category: "June 3 Standard Drinks",
      q: "Does glass size alone tell you the number of standard drinks?",
      choices: ["No", "Yes", "Only for beer", "Only for wine"],
      answer: 0,
      why: "Standard drinks depend on pure alcohol amount, not just glass size."
    },
    {
      category: "June 3 BAC",
      q: "What does BAC measure?",
      choices: ["The amount of alcohol in a person's blood", "The amount of food eaten", "The person's age", "The size of the glass"],
      answer: 0,
      why: "BAC means Blood Alcohol Concentration."
    },
    {
      category: "June 3 BAC",
      q: "A BAC of 0.05 means what?",
      choices: ["50 mg of alcohol per 100 mL of blood", "5% of the blood is alcohol", "One drink exactly", "Zero alcohol"],
      answer: 0,
      why: "BAC 0.05 is 50 mg alcohol in 100 mL blood."
    },
    {
      category: "June 3 BAC",
      q: "What does the BAC chart use?",
      choices: ["Sex, weight, standard drinks, and time", "Hair colour and shoe size", "Only tolerance", "Only the type of alcohol"],
      answer: 0,
      why: "The chart estimates BAC from sex, weight, drinks, and time."
    },
    {
      category: "June 3 BAC",
      q: "Which statement about BAC charts is correct?",
      choices: ["They are estimates only", "They prove someone is safe to drive", "They replace observation", "They are exact for every guest"],
      answer: 0,
      why: "BAC charts are estimates and should not be used as proof of safety."
    },
    {
      category: "June 3 BAC",
      q: "Which traffic-light range is yellow?",
      choices: ["0.05 to 0.079", "0.00 only", "0.08 and over only", "Any amount over 0.20"],
      answer: 0,
      why: "Yellow means caution/slow down and matches Ontario's warn range."
    },
    {
      category: "June 3 BAC",
      q: "Which traffic-light range is red?",
      choices: ["0.08 and over", "0.01 only", "0.05 to 0.079", "No alcohol"],
      answer: 0,
      why: "Red is 0.08 or more."
    },
    {
      category: "June 3 BAC",
      q: "What is the only thing that lowers BAC?",
      choices: ["Time", "Coffee", "A cold shower", "Energy drinks"],
      answer: 0,
      why: "Only time lowers BAC."
    },
    {
      category: "June 3 BAC",
      q: "About how quickly does the body process alcohol?",
      choices: ["About one standard drink per hour as a guide", "Ten drinks per hour", "Only after sleep", "Instantly with food"],
      answer: 0,
      why: "The course uses one standard drink per hour as a general guide."
    },
    {
      category: "June 3 BAC",
      q: "What is true about food and BAC?",
      choices: ["Food can slow absorption but does not sober someone up", "Food instantly lowers BAC", "Salty food is always best", "Food replaces ID"],
      answer: 0,
      why: "Food slows absorption; only time lowers BAC."
    },
    {
      category: "June 3 BAC",
      q: "A smaller person and larger person drink the same amount in the same time. Who usually has the higher BAC?",
      choices: ["The smaller person", "The larger person", "Both always equal", "The person with more cash"],
      answer: 0,
      why: "Less body water/blood generally means alcohol is more concentrated."
    },
    {
      category: "June 3 BAC",
      q: "People with more body fat tend to have what BAC compared with more muscular people of the same weight?",
      choices: ["Higher BAC", "Lower BAC", "Always zero BAC", "No BAC"],
      answer: 0,
      why: "Alcohol is less diluted in body fat than in water-rich muscle tissue."
    },
    {
      category: "June 3 BAC",
      q: "Does greater tolerance lower a person's BAC?",
      choices: ["No", "Yes", "Only with coffee", "Only with food"],
      answer: 0,
      why: "Tolerance can hide signs but does not lower BAC."
    },
    {
      category: "June 3 BAC",
      q: "Which factor can increase impairment risk when mixed with alcohol?",
      choices: ["Drugs or medication", "A valid ID", "A clean glass", "Ordering food"],
      answer: 0,
      why: "Other drugs and medications can interact with alcohol."
    },
    {
      category: "June 3 BAC",
      q: "What BAC must novice drivers and drivers age 21 or under have in Ontario?",
      choices: ["Zero", "0.05", "0.08", "Any amount if they feel fine"],
      answer: 0,
      why: "Ontario applies zero tolerance for young and novice drivers."
    },
    {
      category: "June 3 Signs",
      q: "What is intoxication?",
      choices: ["A state where alcohol, cannabis, or drugs impair mental or physical ability", "A valid licence", "A standard drink", "A type of ID"],
      answer: 0,
      why: "The module defines intoxication as impaired mental or physical capacity."
    },
    {
      category: "June 3 Signs",
      q: "Which is a physical sign of intoxication?",
      choices: ["Loss of hand-eye coordination", "Having exact change", "Showing ID", "Ordering water"],
      answer: 0,
      why: "Fumbling, spilling, and poor coordination are physical signs."
    },
    {
      category: "June 3 Signs",
      q: "Which is a mental/cognitive sign of intoxication?",
      choices: ["Slower response to questions or losing train of thought", "Perfect concentration", "Valid passport", "Quietly eating a meal"],
      answer: 0,
      why: "Slow responses and losing train of thought show reduced alertness."
    },
    {
      category: "June 3 Signs",
      q: "Which is a speech sign of intoxication?",
      choices: ["Slurring words or speaking too loudly", "Speaking clearly and calmly", "Asking for a receipt", "Ordering a sandwich"],
      answer: 0,
      why: "Slurring and loud or abnormal speech are common signs."
    },
    {
      category: "June 3 Signs",
      q: "Which is a social/behavioural sign of intoxication?",
      choices: ["Annoying other guests or becoming overly friendly with strangers", "Paying the bill", "Leaving a tip", "Showing a valid ID"],
      answer: 0,
      why: "Reduced inhibitions and bothering others can be signs."
    },
    {
      category: "June 3 Signs",
      q: "Which item is not normally a sign of intoxication by itself?",
      choices: ["Asking for the bill", "Loss of balance", "Slurred speech", "Loss of self-control"],
      answer: 0,
      why: "Asking for the bill is not an intoxication sign by itself."
    },
    {
      category: "June 3 Signs",
      q: "Which eye-related sign may indicate intoxication?",
      choices: ["Red, glassy, or bloodshot eyes", "Normal blinking only", "Wearing glasses", "Reading the menu"],
      answer: 0,
      why: "Red/glassy/bloodshot eyes can be physical signs."
    },
    {
      category: "June 3 Signs",
      q: "Which decision-making sign may indicate intoxication?",
      choices: ["Being careless with money or making poor decisions", "Counting change correctly", "Asking for water", "Ordering food"],
      answer: 0,
      why: "Poor decisions and carelessness are mental/cognitive signs."
    },
    {
      category: "June 3 Missed Repair",
      q: "Who can lay charges for selling or supplying alcohol to a minor?",
      choices: ["Police", "Ministry of Health", "Smart Serve Ontario", "A regular customer"],
      answer: 0,
      why: "Police can lay charges; AGCO handles licence discipline."
    },
    {
      category: "June 3 Missed Repair",
      q: "Who can suspend, revoke, or place conditions on a liquor licence?",
      choices: ["AGCO/Registrar", "Ministry of Health", "LCBO cashier", "The customer"],
      answer: 0,
      why: "AGCO/Registrar handles licence consequences."
    },
    {
      category: "June 3 Missed Repair",
      q: "What is the current Ontario alcohol law name to recognize?",
      choices: ["Liquor Licence and Control Act, 2019", "Old LLBO Act", "Federal Bar Act", "Ministry of Health Service Act"],
      answer: 0,
      why: "Smart Serve uses LLCA, the Liquor Licence and Control Act, 2019."
    },
    {
      category: "June 3 Missed Repair",
      q: "Serving or selling alcohol to someone under 19 can lead to what?",
      choices: ["AGCO penalties, police charges, and licence consequences", "No consequences if they look mature", "A discount", "Automatic certification"],
      answer: 0,
      why: "Underage service is a serious LLCA offence."
    },
    {
      category: "June 3 Missed Repair",
      q: "Which answer is safest when the test asks what to do if you are unsure?",
      choices: ["Refuse or delay service and get support", "Serve quickly", "Ask friends to decide", "Ignore the risk"],
      answer: 0,
      why: "When in doubt, choose the safe legal action."
    }
  ];

  window.STUDY_DATA.facts.push(...facts);
  window.STUDY_DATA.flashcards.push(...flashcards);
  window.STUDY_DATA.questions.push(...questions);
})();
