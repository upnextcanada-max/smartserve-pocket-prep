(function () {
  const data = window.STUDY_DATA;
  const consolidatedQuestions = [
    {
        "category":  "Final Cram",
        "q":  "What is the legal drinking age in Ontario?",
        "choices":  [
                        "18",
                        "19",
                        "21",
                        "25"
                    ],
        "answer":  1,
        "why":  "Ontario\u0027s legal drinking age is 19."
    },
    {
        "category":  "Final Cram",
        "q":  "What is the minimum age to sell, serve, deliver, or handle alcohol in Ontario?",
        "choices":  [
                        "16",
                        "18",
                        "19",
                        "21"
                    ],
        "answer":  1,
        "why":  "You may work with alcohol at 18, but must be 19 to consume, possess, buy, or receive it."
    },
    {
        "category":  "Final Cram",
        "q":  "Alcohol is a stimulant that speeds up the central nervous system.",
        "choices":  [
                        "True",
                        "False"
                    ],
        "answer":  1,
        "why":  "Alcohol is a depressant; it slows the central nervous system."
    },
    {
        "category":  "Final Cram",
        "q":  "Once alcohol gets into the bloodstream, it is carried throughout the body into tissues and organs, including the brain.",
        "choices":  [
                        "True",
                        "False"
                    ],
        "answer":  0,
        "why":  "The course states alcohol travels through the bloodstream to tissues and organs, including the brain."
    },
    {
        "category":  "Final Cram",
        "q":  "The amount of alcohol in the bloodstream is called Blood Alcohol Concentration, or BAC.",
        "choices":  [
                        "True",
                        "False"
                    ],
        "answer":  0,
        "why":  "BAC means Blood Alcohol Concentration."
    },
    {
        "category":  "Final Cram",
        "q":  "The body uses chemicals in the liver to break down, or metabolize, alcohol so it can be eliminated from the body.",
        "choices":  [
                        "True",
                        "False"
                    ],
        "answer":  0,
        "why":  "The liver metabolizes most alcohol so it can be eliminated."
    },
    {
        "category":  "Final Cram",
        "q":  "Approximately 60 percent of alcohol is eliminated from the bloodstream, while the remaining 40 percent leaves through breath, sweat, and urine.",
        "choices":  [
                        "True",
                        "False"
                    ],
        "answer":  1,
        "why":  "About 90 percent is eliminated through liver metabolism; about 10 percent leaves through breath, sweat, and urine."
    },
    {
        "category":  "Final Cram",
        "q":  "One standard drink contains about how much pure alcohol?",
        "choices":  [
                        "0.3 oz / 8 mL",
                        "0.6 oz / 17 mL",
                        "1.5 oz / 43 mL",
                        "5 oz / 142 mL"
                    ],
        "answer":  1,
        "why":  "One standard drink contains about 0.6 oz / 17 mL pure alcohol."
    },
    {
        "category":  "Final Cram",
        "q":  "Which is one standard beer, cider, cooler, or ready-to-drink beverage at 5 percent alcohol?",
        "choices":  [
                        "5 oz / 142 mL",
                        "8 oz / 236 mL",
                        "12 oz / 341 mL",
                        "20 oz / 591 mL"
                    ],
        "answer":  2,
        "why":  "Beer, cider, cooler, or RTD at 5 percent is 12 oz / 341 mL for one standard drink."
    },
    {
        "category":  "Final Cram",
        "q":  "Which is one standard wine serving?",
        "choices":  [
                        "5 oz / 142 mL at 12 percent",
                        "12 oz / 341 mL at 12 percent",
                        "1.5 oz / 43 mL at 12 percent",
                        "20 oz / 591 mL at 12 percent"
                    ],
        "answer":  0,
        "why":  "One standard wine is 5 oz / 142 mL at 12 percent."
    },
    {
        "category":  "Final Cram",
        "q":  "Which is one standard spirits serving?",
        "choices":  [
                        "0.5 oz / 15 mL at 40 percent",
                        "1 oz / 30 mL at 40 percent",
                        "1.5 oz / 43 mL at 40 percent",
                        "5 oz / 142 mL at 40 percent"
                    ],
        "answer":  2,
        "why":  "One standard spirits serving is 1.5 oz / 43 mL at 40 percent."
    },
    {
        "category":  "Final Cram",
        "q":  "1.5 oz / 43 mL with 40 percent alcohol is one standard drink of:",
        "choices":  [
                        "Beer",
                        "Wine",
                        "Spirits"
                    ],
        "answer":  2,
        "why":  "1.5 oz at 40 percent is the standard serving for spirits."
    },
    {
        "category":  "Final Cram",
        "q":  "5 oz / 142 mL with 12 percent alcohol is one standard drink of:",
        "choices":  [
                        "Beer",
                        "Wine",
                        "Spirits"
                    ],
        "answer":  1,
        "why":  "5 oz at 12 percent is the standard serving for wine."
    },
    {
        "category":  "Final Cram",
        "q":  "12 oz / 341 mL with 5 percent alcohol is one standard drink of:",
        "choices":  [
                        "Beer",
                        "Wine",
                        "Spirits"
                    ],
        "answer":  0,
        "why":  "12 oz at 5 percent is the standard serving for beer/cider."
    },
    {
        "category":  "Final Cram",
        "q":  "What is the formula shown in the course for calculating the ounces needed for one standard drink?",
        "choices":  [
                        "10 divided by alcohol percentage = amount in ounces",
                        "25 divided by alcohol percentage = amount in ounces",
                        "60 divided by alcohol percentage = amount in ounces"
                    ],
        "answer":  2,
        "why":  "The course formula is 60 divided by alcohol percentage = ounces for one standard drink."
    },
    {
        "category":  "Final Cram",
        "q":  "How many ounces of 30 percent spirits equals one standard drink?",
        "choices":  [
                        "1 ounce",
                        "2 ounces",
                        "3 ounces"
                    ],
        "answer":  1,
        "why":  "60 divided by 30 equals 2 ounces."
    },
    {
        "category":  "Final Cram",
        "q":  "How many standard drinks are in 3 oz of spirits at 40 percent alcohol?",
        "choices":  [
                        "1 standard drink",
                        "2 standard drinks",
                        "3 standard drinks"
                    ],
        "answer":  1,
        "why":  "At 40 percent, 1.5 oz is one standard drink, so 3 oz is two."
    },
    {
        "category":  "Final Cram",
        "q":  "What does the formula ounces x alcohol percentage / 60 estimate?",
        "choices":  [
                        "Number of standard drinks",
                        "Legal drinking age",
                        "Alcohol service hours",
                        "ID expiry date"
                    ],
        "answer":  0,
        "why":  "Ounces x alcohol percentage / 60 estimates standard drinks."
    },
    {
        "category":  "Final Cram",
        "q":  "A 16 oz beer at 5 percent alcohol is about how many standard drinks?",
        "choices":  [
                        "0.8",
                        "1.0",
                        "1.3",
                        "2.0"
                    ],
        "answer":  2,
        "why":  "16 x 5 / 60 = 1.33, about 1.3 standard drinks."
    },
    {
        "category":  "Final Cram",
        "q":  "A 20 oz beer at 5 percent alcohol is about how many standard drinks?",
        "choices":  [
                        "1.0",
                        "1.3",
                        "1.6",
                        "2.5"
                    ],
        "answer":  2,
        "why":  "20 x 5 / 60 = 1.67, shown in the course as about 1.6."
    },
    {
        "category":  "Final Cram",
        "q":  "A 12 oz cooler at 7 percent alcohol is about how many standard drinks?",
        "choices":  [
                        "0.7",
                        "1.0",
                        "1.4",
                        "2.6"
                    ],
        "answer":  2,
        "why":  "12 x 7 / 60 = 1.4 standard drinks."
    },
    {
        "category":  "Final Cram",
        "q":  "A 13 oz serving of wine at 12 percent alcohol is about how many standard drinks?",
        "choices":  [
                        "1.0",
                        "1.4",
                        "2.0",
                        "2.6"
                    ],
        "answer":  3,
        "why":  "13 x 12 / 60 = 2.6 standard drinks."
    },
    {
        "category":  "Final Cram",
        "q":  "A drink contains 5 oz of liqueur at 30 percent alcohol. About how many standard drinks is it?",
        "choices":  [
                        "1.0",
                        "1.5",
                        "2.5",
                        "3.5"
                    ],
        "answer":  2,
        "why":  "5 x 30 / 60 = 2.5 standard drinks."
    },
    {
        "category":  "Final Cram",
        "q":  "A margarita contains 3 oz of 40 percent alcohol. About how many standard drinks is it?",
        "choices":  [
                        "1",
                        "1.3",
                        "2",
                        "3"
                    ],
        "answer":  2,
        "why":  "3 x 40 / 60 = 2 standard drinks."
    },
    {
        "category":  "Final Cram",
        "q":  "A Long Island Iced Tea contains 2.5 oz of 40 percent alcohol. About how many standard drinks is it?",
        "choices":  [
                        "0.8",
                        "1.0",
                        "1.7",
                        "3.0"
                    ],
        "answer":  2,
        "why":  "2.5 x 40 / 60 = 1.67, about 1.7 standard drinks."
    },
    {
        "category":  "Final Cram",
        "q":  "What are the three general classes of liquor shown in the course?",
        "choices":  [
                        "Beer, wine, and spirits",
                        "Beer, coffee, and spirits",
                        "Wine, water, and coolers",
                        "Cider, juice, and tea"
                    ],
        "answer":  0,
        "why":  "The three general classes are beer, wine, and spirits."
    },
    {
        "category":  "Final Cram",
        "q":  "Which course range matches beer alcohol content?",
        "choices":  [
                        "1 percent to 3 percent",
                        "4.5 percent to 9 percent",
                        "10 percent to 20 percent",
                        "15 percent to over 40 percent"
                    ],
        "answer":  1,
        "why":  "Beer can contain about 4.5 percent to 9 percent alcohol in the course notes."
    },
    {
        "category":  "Final Cram",
        "q":  "Which course range matches wine alcohol content?",
        "choices":  [
                        "4.5 percent to 9 percent",
                        "6 percent to over 15 percent",
                        "15 percent to over 40 percent",
                        "30 percent to 50 percent"
                    ],
        "answer":  1,
        "why":  "Wine can contain about 6 percent to over 15 percent alcohol."
    },
    {
        "category":  "Final Cram",
        "q":  "Which course range matches spirits alcohol content?",
        "choices":  [
                        "1 percent to 5 percent",
                        "4.5 percent to 9 percent",
                        "6 percent to over 15 percent",
                        "15 percent to over 40 percent"
                    ],
        "answer":  3,
        "why":  "Spirits can contain about 15 percent to over 40 percent alcohol."
    },
    {
        "category":  "Final Cram",
        "q":  "Where is the alcohol percentage normally listed?",
        "choices":  [
                        "On the original bottle or serving container",
                        "Only on the receipt",
                        "Only on the menu",
                        "Only on the invoice"
                    ],
        "answer":  0,
        "why":  "The original container or bottle lists the alcohol percentage."
    },
    {
        "category":  "Final Cram",
        "q":  "What does BAC stand for?",
        "choices":  [
                        "Beer Alcohol Content",
                        "Blood Alcohol Concentration",
                        "Beverage Age Check",
                        "Bar Access Control"
                    ],
        "answer":  1,
        "why":  "BAC means Blood Alcohol Concentration."
    },
    {
        "category":  "Final Cram",
        "q":  "A BAC of 0.05 means:",
        "choices":  [
                        "5 mg alcohol per 100 mL blood",
                        "50 mg alcohol per 100 mL blood",
                        "0.5 mg alcohol per litre",
                        "5 percent of the blood is alcohol"
                    ],
        "answer":  1,
        "why":  "BAC 0.05 means 50 mg alcohol per 100 mL blood."
    },
    {
        "category":  "Final Cram",
        "q":  "Which inputs does a BAC chart commonly use?",
        "choices":  [
                        "Sex, weight, number of standard drinks, and time",
                        "Hair colour, shoes, music, and mood",
                        "Menu price, glass colour, and tip amount",
                        "Only number of drinks"
                    ],
        "answer":  0,
        "why":  "BAC charts use sex, weight, number of standard drinks, and time."
    },
    {
        "category":  "Final Cram",
        "q":  "What is the safest way to use a BAC chart or BAC calculator?",
        "choices":  [
                        "As an estimate only, combined with observation and responsible-service judgment",
                        "As proof that someone can drive",
                        "As a replacement for checking signs of intoxication",
                        "As proof that someone is 19 or older"
                    ],
        "answer":  0,
        "why":  "BAC tools are estimates only and do not replace observing the guest."
    },
    {
        "category":  "Final Cram",
        "q":  "What does Smart Serve say is one of the most important BAC factors?",
        "choices":  [
                        "Time",
                        "Glass colour",
                        "Music volume",
                        "Method of payment"
                    ],
        "answer":  0,
        "why":  "Time is critical because drinking speed and elimination both affect BAC."
    },
    {
        "category":  "Final Cram",
        "q":  "Why can BAC continue to rise after someone stops drinking?",
        "choices":  [
                        "Alcohol takes time to enter the bloodstream",
                        "Coffee creates alcohol",
                        "Food creates alcohol",
                        "Breathalyzers raise BAC"
                    ],
        "answer":  0,
        "why":  "Alcohol can continue entering the bloodstream after drinking stops."
    },
    {
        "category":  "Final Cram",
        "q":  "About how fast does the body eliminate alcohol?",
        "choices":  [
                        "About one standard drink per hour, but it varies",
                        "Exactly three standard drinks per hour",
                        "Only after sleep",
                        "Immediately after eating"
                    ],
        "answer":  0,
        "why":  "One standard drink per hour is a rough guide, not a guarantee."
    },
    {
        "category":  "Final Cram",
        "q":  "What is the only thing that lowers BAC?",
        "choices":  [
                        "Coffee",
                        "Cold shower",
                        "Time",
                        "Fresh air"
                    ],
        "answer":  2,
        "why":  "Only time lowers BAC."
    },
    {
        "category":  "Final Cram",
        "q":  "What does food do in relation to alcohol?",
        "choices":  [
                        "It instantly sobers someone up",
                        "It slows absorption but does not immediately lower BAC",
                        "It replaces water",
                        "It makes BAC charts exact"
                    ],
        "answer":  1,
        "why":  "Food slows absorption but does not sober someone up immediately."
    },
    {
        "category":  "Final Cram",
        "q":  "Sheila weighs 125 pounds and has consumed 3 standard drinks in 2 hours. Based on the course BAC activity, what is the estimated BAC level?",
        "choices":  [
                        "0.05, yellow",
                        "0.11, red",
                        "0.08, red"
                    ],
        "answer":  2,
        "why":  "The course activity showed Sheila at 0.08, red."
    },
    {
        "category":  "Final Cram",
        "q":  "In the traffic-light system, what does green generally mean?",
        "choices":  [
                        "BAC below 0.05 and no signs of intoxication",
                        "BAC 0.05 to 0.079 and service should speed up",
                        "BAC 0.08 or higher",
                        "ID is not required"
                    ],
        "answer":  0,
        "why":  "Green means below 0.05 and no visible intoxication signs."
    },
    {
        "category":  "Final Cram",
        "q":  "In the traffic-light system, what does yellow mean?",
        "choices":  [
                        "Go ahead with regular service",
                        "Caution or slow down",
                        "Person is automatically legal to drive",
                        "No need to observe the guest"
                    ],
        "answer":  1,
        "why":  "Yellow means caution/slow down and reassess."
    },
    {
        "category":  "Final Cram",
        "q":  "In the traffic-light system, what does red mean?",
        "choices":  [
                        "Serve normally",
                        "Slow down only",
                        "Stop service or sale",
                        "Offer a larger drink"
                    ],
        "answer":  2,
        "why":  "Red means stop service, sale, or delivery."
    },
    {
        "category":  "Final Cram",
        "q":  "Which BAC range is Ontario\u0027s warn range for driving?",
        "choices":  [
                        "0.00 to 0.049",
                        "0.05 to 0.079",
                        "0.08 to 0.10",
                        "0.15 or higher"
                    ],
        "answer":  1,
        "why":  "Ontario\u0027s warn range is 0.05 to 0.079."
    },
    {
        "category":  "Final Cram",
        "q":  "What BAC is a criminal offence across Canada?",
        "choices":  [
                        "0.01 or higher",
                        "0.05 or higher",
                        "0.08 or higher",
                        "Any amount"
                    ],
        "answer":  2,
        "why":  "0.08 or higher is a criminal offence across Canada."
    },
    {
        "category":  "Final Cram",
        "q":  "What BAC must G1, G2, M1, M2, and drivers age 21 or under have?",
        "choices":  [
                        "Zero",
                        "Below 0.05",
                        "Below 0.08",
                        "Any amount if they feel okay"
                    ],
        "answer":  0,
        "why":  "Novice and young drivers must have zero alcohol."
    },
    {
        "category":  "Final Cram",
        "q":  "If a customer looks younger than what age should you check ID?",
        "choices":  [
                        "21",
                        "25",
                        "30",
                        "35"
                    ],
        "answer":  1,
        "why":  "Check ID when someone looks younger than 25."
    },
    {
        "category":  "Final Cram",
        "q":  "Which is legally acceptable ID if valid?",
        "choices":  [
                        "Student card",
                        "Expired driver\u0027s licence",
                        "LCBO BYID card",
                        "Library card"
                    ],
        "answer":  2,
        "why":  "LCBO BYID is acceptable if valid."
    },
    {
        "category":  "Final Cram",
        "q":  "Which should never be accepted as legal proof of drinking age?",
        "choices":  [
                        "Valid Canadian passport",
                        "Permanent Resident Card",
                        "Expired ID",
                        "Ontario Photo Card"
                    ],
        "answer":  2,
        "why":  "Expired ID is not acceptable."
    },
    {
        "category":  "Final Cram",
        "q":  "How should an Ontario Health Card be handled for alcohol-service ID checks?",
        "choices":  [
                        "Demand it as the main ID",
                        "Accept it as the only required ID",
                        "Do not ask for it; it may be secondary ID only if voluntarily offered",
                        "Never look at it even if voluntarily offered"
                    ],
        "answer":  2,
        "why":  "Do not ask for an Ontario Health Card; it may be secondary ID only if offered."
    },
    {
        "category":  "Final Cram",
        "q":  "Which set best describes what to inspect on ID?",
        "choices":  [
                        "Photo, birth date, expiry date, holograms, lamination, font, spelling, and tampering",
                        "Only the first name",
                        "Only the card colour",
                        "Only whether the person pays cash"
                    ],
        "answer":  0,
        "why":  "Proper ID checks include dates, photo, security features, condition, and tampering clues."
    },
    {
        "category":  "Final Cram",
        "q":  "If the ID photo and description do not seem to match the person, what should you do?",
        "choices":  [
                        "Accept it if the guest is confident",
                        "Ask follow-up questions or request more valid ID; refuse if doubt remains",
                        "Let their friends confirm it",
                        "Serve only one drink"
                    ],
        "answer":  1,
        "why":  "Ask questions or request more valid ID; refuse if doubt remains."
    },
    {
        "category":  "Final Cram",
        "q":  "Which question is appropriate if the person and ID do not match?",
        "choices":  [
                        "What is your birthday?",
                        "How much money do you have?",
                        "What is your favourite beer?",
                        "Who bought your ticket?"
                    ],
        "answer":  0,
        "why":  "Birthday is a proper follow-up question when checking ID."
    },
    {
        "category":  "Final Cram",
        "q":  "Which behaviour is a reason to check ID more carefully?",
        "choices":  [
                        "Avoiding eye contact or rushing the process",
                        "Ordering water",
                        "Paying with debit",
                        "Asking for a menu"
                    ],
        "answer":  0,
        "why":  "Avoiding eye contact or rushing is a reason to examine ID more carefully."
    },
    {
        "category":  "Final Cram",
        "q":  "What is the main Ontario alcohol law introduced in 2019?",
        "choices":  [
                        "Liquor Licence and Control Act, 2019",
                        "Legal Liquor Catering Agreement",
                        "Beverage Sales Contract Act",
                        "Alcohol Menu Pricing Act"
                    ],
        "answer":  0,
        "why":  "The main law is the Liquor Licence and Control Act, 2019."
    },
    {
        "category":  "Final Cram",
        "q":  "What does AGCO stand for?",
        "choices":  [
                        "Alcohol and Gaming Commission of Ontario",
                        "Alcohol Guidelines Council of Ontario",
                        "Approved Guest Control Office",
                        "Association of General Catering Operators"
                    ],
        "answer":  0,
        "why":  "AGCO means Alcohol and Gaming Commission of Ontario."
    },
    {
        "category":  "Final Cram",
        "q":  "Who can be held responsible for serving alcohol to a minor or intoxicated person?",
        "choices":  [
                        "Only the guest",
                        "Only the manager",
                        "The server and the establishment",
                        "Nobody if the guest lied"
                    ],
        "answer":  2,
        "why":  "Both server and establishment can be responsible."
    },
    {
        "category":  "Final Cram",
        "q":  "What sign must be posted in licensed establishments, and what is its minimum size?",
        "choices":  [
                        "Drink-price sign, 4 x 6 inches",
                        "Sandy\u0027s Law/FASD warning sign, at least 8 x 10 inches",
                        "Staff schedule, 8 x 10 inches",
                        "Fire route map, 5 x 7 inches"
                    ],
        "answer":  1,
        "why":  "Sandy\u0027s Law/FASD warning sign must be at least 8 x 10 inches."
    },
    {
        "category":  "Final Cram",
        "q":  "General alcohol service hours for licensed establishments are usually:",
        "choices":  [
                        "7 a.m. to 11 p.m.",
                        "9 a.m. to 2 a.m.",
                        "9 a.m. to midnight",
                        "24 hours"
                    ],
        "answer":  1,
        "why":  "Licensed establishments generally serve 9 a.m. to 2 a.m."
    },
    {
        "category":  "Final Cram",
        "q":  "On New Year\u0027s Eve, licensed establishments can generally serve alcohol until:",
        "choices":  [
                        "2 a.m.",
                        "3 a.m.",
                        "4 a.m.",
                        "Noon the next day"
                    ],
        "answer":  1,
        "why":  "New Year\u0027s Eve generally extends service to 3 a.m."
    },
    {
        "category":  "Final Cram",
        "q":  "General retail alcohol sale hours are usually:",
        "choices":  [
                        "7 a.m. to 11 p.m.",
                        "9 a.m. to 2 a.m.",
                        "9 a.m. to midnight",
                        "24 hours"
                    ],
        "answer":  0,
        "why":  "Retail alcohol sales are generally 7 a.m. to 11 p.m."
    },
    {
        "category":  "Final Cram",
        "q":  "General liquor delivery hours are usually:",
        "choices":  [
                        "7 a.m. to 11 p.m.",
                        "9 a.m. to 11 p.m.",
                        "9 a.m. to 2 a.m.",
                        "24 hours"
                    ],
        "answer":  1,
        "why":  "Liquor delivery is generally 9 a.m. to 11 p.m."
    },
    {
        "category":  "Final Cram",
        "q":  "General manufacturer by-the-glass sale hours are usually:",
        "choices":  [
                        "7 a.m. to 11 p.m.",
                        "9 a.m. to midnight",
                        "9 a.m. to 2 a.m.",
                        "24 hours"
                    ],
        "answer":  1,
        "why":  "Manufacturer by-the-glass is generally 9 a.m. to midnight."
    },
    {
        "category":  "Final Cram",
        "q":  "What can change normal sale or service hours?",
        "choices":  [
                        "Licence or permit conditions",
                        "The guest\u0027s birthday",
                        "The server\u0027s mood",
                        "How busy the room is"
                    ],
        "answer":  0,
        "why":  "Licence or permit conditions can limit hours."
    },
    {
        "category":  "Final Cram",
        "q":  "If a guest shows signs of intoxication, what should you do?",
        "choices":  [
                        "Serve only beer",
                        "Serve only if they are not driving",
                        "Stop alcohol service",
                        "Serve if their friends say they are okay"
                    ],
        "answer":  2,
        "why":  "Do not serve alcohol to someone showing signs of intoxication."
    },
    {
        "category":  "Final Cram",
        "q":  "Intoxication can be caused by:",
        "choices":  [
                        "Alcohol only",
                        "Alcohol, cannabis, medication, other drugs, or combinations",
                        "Water",
                        "Food only"
                    ],
        "answer":  1,
        "why":  "Intoxication may come from alcohol, cannabis, medication, drugs, or combinations."
    },
    {
        "category":  "Final Cram",
        "q":  "Which is a sign of possible intoxication?",
        "choices":  [
                        "Slurred speech",
                        "Valid ID",
                        "Paying by debit",
                        "Ordering food"
                    ],
        "answer":  0,
        "why":  "Slurred speech is a common sign of intoxication."
    },
    {
        "category":  "Final Cram",
        "q":  "Which cannabis-specific sign was shown in the recording?",
        "choices":  [
                        "Bloodshot eyes",
                        "A valid passport",
                        "A black-and-white driver\u0027s licence photo",
                        "Sandy\u0027s Law sign"
                    ],
        "answer":  0,
        "why":  "Bloodshot eyes were shown as a cannabis-specific sign."
    },
    {
        "category":  "Final Cram",
        "q":  "A customer smells like cannabis. What should you remember?",
        "choices":  [
                        "Smell alone proves intoxication",
                        "Smell is not proof by itself, but it should trigger you to look for other signs",
                        "Cannabis never matters for alcohol service",
                        "You must serve if alcohol was not the cause"
                    ],
        "answer":  1,
        "why":  "Cannabis smell alone is not proof, but it should trigger closer observation."
    },
    {
        "category":  "Final Cram",
        "q":  "A guest has red eyes, delayed responses, and poor coordination. What is the best action?",
        "choices":  [
                        "Treat it as possible intoxication and do not serve alcohol",
                        "Serve only wine",
                        "Ignore it if cannabis is involved",
                        "Give coffee"
                    ],
        "answer":  0,
        "why":  "Signs of impairment matter even if cannabis may be involved."
    },
    {
        "category":  "Final Cram",
        "q":  "A customer says coffee will sober them up enough to drive. What is the correct response?",
        "choices":  [
                        "Coffee sobers people up if they also eat",
                        "Only time lowers BAC",
                        "Coffee works faster than food",
                        "Fresh air is better than coffee"
                    ],
        "answer":  1,
        "why":  "Coffee does not lower BAC; only time does."
    },
    {
        "category":  "Final Cram",
        "q":  "In the slowing-service module, which food item was the best choice to slow alcohol absorption?",
        "choices":  [
                        "The house special: a 1/4-pound burger with fries",
                        "Nachos and cheese",
                        "House salad",
                        "Candy"
                    ],
        "answer":  0,
        "why":  "The substantial burger-and-fries option was the best module choice."
    },
    {
        "category":  "Final Cram",
        "q":  "A yellow-zone guest has eaten and has not consumed alcohol for 30 minutes. What should the server do next?",
        "choices":  [
                        "Automatically serve another drink",
                        "Reassess the guest\u0027s BAC/condition before deciding whether service is safe",
                        "Give coffee and ignore the BAC",
                        "Ask a friend to decide"
                    ],
        "answer":  1,
        "why":  "Food and 30 minutes call for reassessment, not automatic service."
    },
    {
        "category":  "Final Cram",
        "q":  "A guest is in the yellow zone. What is the safest general service response?",
        "choices":  [
                        "Speed up service",
                        "Slow down or stop alcohol service",
                        "Offer stronger alcohol",
                        "Ignore them until they ask again"
                    ],
        "answer":  1,
        "why":  "Yellow-zone service should be slowed down or stopped."
    },
    {
        "category":  "Final Cram",
        "q":  "Darren is buying wine at checkout. He is flushed, shaky, and fumbling, but those signs could be intoxication or another condition. What is the best first response?",
        "choices":  [
                        "Sell immediately",
                        "Engage him in conversation to assess further",
                        "Ignore the signs",
                        "Demand a health card"
                    ],
        "answer":  1,
        "why":  "Conversation helps assess whether signs are intoxication or another condition."
    },
    {
        "category":  "Final Cram",
        "q":  "Agata has been in the club for three hours, you have not served her drinks, and she is slurring, has dilated pupils, and behaves oddly. What is the best service decision?",
        "choices":  [
                        "Serve because you did not serve the earlier drinks",
                        "Serve only beer",
                        "Do not serve",
                        "Serve after coffee"
                    ],
        "answer":  2,
        "why":  "Visible intoxication signs mean do not serve, even if you did not serve earlier drinks."
    },
    {
        "category":  "Final Cram",
        "q":  "Tommy has been at the bar for four hours, has had two beers and three shots, is speaking louder than normal, and asks for another shot. The module feedback says he is in the yellow zone. What should you do?",
        "choices":  [
                        "Slow him down with food or non-alcoholic options and less available service",
                        "Automatically serve the shot",
                        "Ignore him",
                        "Let his friends decide"
                    ],
        "answer":  0,
        "why":  "Yellow-zone Tommy should be slowed down with food/non-alcoholic options and less available service."
    },
    {
        "category":  "Final Cram",
        "q":  "Marcus stumbles toward the bar, slurs loudly, has glassy eyes, and wants to buy beer for everyone. What is the safest decision?",
        "choices":  [
                        "Serve because he is cheerful",
                        "Serve because he is buying for a group",
                        "Do not serve",
                        "Serve only one beer"
                    ],
        "answer":  2,
        "why":  "Stumbling, slurring, and glassy eyes indicate do not serve."
    },
    {
        "category":  "Final Cram",
        "q":  "When refusing service, which approach is best?",
        "choices":  [
                        "Calm, firm, private when possible, and safety-focused",
                        "Loud and embarrassing",
                        "Offer one last drink to avoid conflict",
                        "Ignore the guest"
                    ],
        "answer":  0,
        "why":  "Refusal should be calm, firm, private when possible, and safety-focused."
    },
    {
        "category":  "Final Cram",
        "q":  "A group keeps buying drinks for someone you already cut off. What should you do?",
        "choices":  [
                        "Ignore it because you did not sell directly to the cut-off guest",
                        "Stop alcohol from reaching the cut-off guest and get support if needed",
                        "Serve only lower-alcohol drinks",
                        "Let the group accept responsibility"
                    ],
        "answer":  1,
        "why":  "Cutting someone off includes preventing others from supplying alcohol to them."
    },
    {
        "category":  "Final Cram",
        "q":  "Which option helps prevent drinking and driving?",
        "choices":  [
                        "Taxi, rideshare, designated driver, transit, friend pickup, or overnight stay",
                        "Coffee only",
                        "Fresh air only",
                        "A large meal only"
                    ],
        "answer":  0,
        "why":  "Safe transportation options reduce duty-of-care risk."
    },
    {
        "category":  "Final Cram",
        "q":  "A liquor delivery recipient appears intoxicated. What should happen?",
        "choices":  [
                        "Complete the delivery because it was prepaid",
                        "Leave the alcohol at the door",
                        "Do not complete the alcohol delivery",
                        "Deliver only beer or cider"
                    ],
        "answer":  2,
        "why":  "Alcohol cannot be delivered to an intoxicated person."
    },
    {
        "category":  "Final Cram",
        "q":  "At a BYOW licensed restaurant, who should open and serve the customer\u0027s wine?",
        "choices":  [
                        "The customer",
                        "A friend at the table",
                        "Smart Serve certified staff",
                        "Anyone over 19"
                    ],
        "answer":  2,
        "why":  "In BYOW service, Smart Serve certified staff should open and serve the wine."
    },
    {
        "category":  "Final Cram",
        "q":  "A patron walks around with a drink. When is this allowed?",
        "choices":  [
                        "Anywhere in the building",
                        "Only within licensed areas",
                        "Anywhere if they paid",
                        "Never under any circumstances"
                    ],
        "answer":  1,
        "why":  "Drinks must stay within licensed areas."
    },
    {
        "category":  "Final Cram",
        "q":  "Which belongs in a risk management plan?",
        "choices":  [
                        "Safety inspection, emergency plan, house policies, permits/insurance, and safe transportation",
                        "Only the playlist",
                        "Only the drink menu",
                        "Only the staff uniforms"
                    ],
        "answer":  0,
        "why":  "Risk management covers safety, emergencies, policies, permits/insurance, and transportation."
    },
    {
        "category":  "Final Cram",
        "q":  "Which practice increases risk?",
        "choices":  [
                        "Food and water",
                        "Trained staff monitoring guests",
                        "Self-serve bar or unlimited drink tickets",
                        "Low-alcohol options"
                    ],
        "answer":  2,
        "why":  "Self-service and unlimited tickets increase over-service risk."
    },
    {
        "category":  "Final Cram",
        "q":  "Why should salty foods be limited when alcohol is served?",
        "choices":  [
                        "They instantly lower BAC",
                        "They can make guests thirsty and encourage more drinking",
                        "They replace ID checks",
                        "They count as standard drinks"
                    ],
        "answer":  1,
        "why":  "Salty foods can make guests thirsty and encourage more drinking."
    },
    {
        "category":  "Final Cram",
        "q":  "Why close the bar before the event ends?",
        "choices":  [
                        "To encourage last-minute heavy drinking",
                        "To reduce last-minute heavy drinking and support safer departures",
                        "To avoid checking ID",
                        "To increase sales after hours"
                    ],
        "answer":  1,
        "why":  "Closing early helps prevent last-minute heavy drinking."
    },
    {
        "category":  "Final Cram",
        "q":  "Should staff or volunteers drink while working alcohol service?",
        "choices":  [
                        "No",
                        "Yes, if they are under 0.05",
                        "Yes, at private events only",
                        "Yes, if they drink coffee"
                    ],
        "answer":  0,
        "why":  "Staff and volunteers should not drink or be under the influence while working."
    },
    {
        "category":  "Final Cram",
        "q":  "What should be done about legal capacity?",
        "choices":  [
                        "Keep the premises within lawful capacity",
                        "Count only guests who drink alcohol",
                        "Ignore capacity if people are calm",
                        "Count only guests over 19"
                    ],
        "answer":  0,
        "why":  "Legal capacity must be followed."
    },
    {
        "category":  "Final Cram",
        "q":  "When is a Special Occasion Permit generally required?",
        "choices":  [
                        "Alcohol service at many events outside licensed establishments, private places, or residences",
                        "Any time someone has dinner",
                        "Only when beer is served",
                        "Only in restaurants"
                    ],
        "answer":  0,
        "why":  "SOPs are generally required for many alcohol events outside licensed/private/residential settings."
    },
    {
        "category":  "Final Cram",
        "q":  "Which statement best describes a private-event SOP?",
        "choices":  [
                        "Open to the public and advertised widely",
                        "Invited guests only, not advertised to the public",
                        "Required only for restaurants",
                        "Always for profit"
                    ],
        "answer":  1,
        "why":  "Private SOP events are invited guests only and not publicly advertised."
    },
    {
        "category":  "Final Cram",
        "q":  "Under a Special Occasion Permit, when can responsibility for an intoxicated guest continue?",
        "choices":  [
                        "Only until the guest pays",
                        "Only until the guest leaves the event",
                        "Until the guest sobers up",
                        "Only until the bar closes"
                    ],
        "answer":  2,
        "why":  "SOP responsibility can continue until the guest sobers up."
    },
    {
        "category":  "Final Cram",
        "q":  "Which action is not permitted at an SOP event because it encourages immoderate consumption?",
        "choices":  [
                        "Offering non-alcoholic beverages",
                        "Drinking contests or drinking games",
                        "Checking ID",
                        "Safe transportation planning"
                    ],
        "answer":  1,
        "why":  "Drinking contests/games encourage immoderate consumption."
    },
    {
        "category":  "Final Cram",
        "q":  "Which item belongs in a strong house policy?",
        "choices":  [
                        "Refusal of service, ID checks, intoxication, safe transportation, staff roles, emergencies, and sexual violence prevention",
                        "Only staff clothing rules",
                        "Only the food menu",
                        "Only music volume rules"
                    ],
        "answer":  0,
        "why":  "Strong policies cover refusal, ID, intoxication, transportation, staff roles, emergencies, and sexual violence prevention."
    },
    {
        "category":  "Final Cram",
        "q":  "Which action is prohibited during the Smart Serve proctored Final Test?",
        "choices":  [
                        "Sitting in good lighting",
                        "Using AI or outside help",
                        "Showing valid government-issued photo ID",
                        "Keeping your face visible on camera"
                    ],
        "answer":  1,
        "why":  "AI and outside help are prohibited during the proctored test."
    },
    {
        "category":  "Final Cram",
        "q":  "What ID is required for the proctored Final Test?",
        "choices":  [
                        "Valid government-issued photo ID",
                        "Student card only",
                        "A photo of an ID on your phone only",
                        "A library card"
                    ],
        "answer":  0,
        "why":  "Smart Serve says proctored testing requires valid government-issued photo ID."
    },
    {
        "category":  "Final Cram",
        "q":  "What can happen if rules are broken during the proctored test session?",
        "choices":  [
                        "Nothing",
                        "The session can fail and you may have to re-purchase and complete the course again",
                        "You automatically pass",
                        "You get extra time"
                    ],
        "answer":  1,
        "why":  "Broken rules can lead to a failed session and needing to re-purchase/recomplete."
    },
    {
        "category":  "Final Cram",
        "q":  "What is the safest mindset for scenario questions?",
        "choices":  [
                        "Choose the answer that sells more drinks",
                        "Choose the answer that protects public safety and follows the law",
                        "Choose the answer that avoids talking to managers",
                        "Choose the answer that is fastest for the server"
                    ],
        "answer":  1,
        "why":  "Scenario questions reward safety, legal compliance, backup, documentation, and safe transportation."
    },
    {
        "category":  "Final Cram",
        "q":  "If a customer says a BAC calculator shows they are okay to drive, what is the best response?",
        "choices":  [
                        "Let them drive because calculators are exact",
                        "Do not rely on the calculator alone; assess impairment and arrange safe transport if needed",
                        "Serve one more drink",
                        "Give coffee and allow them to leave"
                    ],
        "answer":  1,
        "why":  "BAC calculators are estimates only and should not decide driving or intoxication alone."
    }
];

  data.facts.push(
    { category: "Audio", title: "Answer-key cram track", text: "Use the Audio tab to play the 12.5-minute MP3 answer-key review. It is cached for offline use after the app loads once." },
    { category: "Final Cram", title: "Consolidated test loaded", text: "The app includes the 100-question consolidated Smart Serve practice test covering BAC, standard drinks, ID, intoxication, refusal, SOP, delivery, hours, and proctoring rules." }
  );

  data.flashcards.push(
    { category: "Audio", q: "Where is the voice study recording in the app?", a: "Tap the Audio tab and press play on the answer-key cram track." }
  );

  data.questions.push(...consolidatedQuestions);
})();
