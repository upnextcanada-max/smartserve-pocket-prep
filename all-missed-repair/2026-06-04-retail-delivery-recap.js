// SmartServe add-on from the 2026-06-04 retail/delivery study session.
// Sources: Zd5A2WIfpt.mp4 extracted frames, Gemini contact-sheet notes, Smart Serve, AGCO, and Ontario LLCA/O. Reg. references.
(function () {
  window.STUDY_DATA = window.STUDY_DATA || { facts: [], flashcards: [], questions: [] };

  const facts = [
    {
      category: "June 4 Retail Delivery",
      title: "Today Recap",
      text: "Today's study session focused on retail sale rules, grocery/convenience stores, wine boutiques, display/storage, deposit returns, sampling, advertising, online sales, liquor delivery, record keeping, second-party purchasers, and retail refusals."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Retail Licence Types",
      text: "Retail store permissions shown include Grocery Store Licence, Convenience Store Licence, Beer Store/Brewers Retail, LCBO Agency Store, Offsite Winery Retail Store, Wine Boutique endorsement, and Manufacturer's On-Site Retail Store."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Convenience Store Truth",
      text: "The module quiz's true convenience-store statement was that selling liquor, including ordering and payment, must be done in person within the store, except for online sales."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Convenience Store Limits",
      text: "Licensed convenience stores cannot sell every alcoholic beverage type just because staff are trained; they must sell only eligible products within licence, product, display, and hour limits."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Retail Staff",
      text: "People involved in retail alcohol sales, including ordering and delivery tasks, must meet the legal age and training requirements. Smart Serve training is the course focus."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Grocery Store Size",
      text: "The module references grocery-store requirements such as minimum retail floor area of 4,000 square feet and a broad variety of food products."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Retail Hours",
      text: "Retail sale and pickup hours are 7:00 a.m. to 11:00 p.m., Monday to Sunday. Retailers may operate shorter alcohol hours, but cannot sell outside permissible hours."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Display Area",
      text: "The retail display area must be controlled and visible to staff. The module flags a contiguous display, no customer access outside sale hours, and no energy drinks or immediate-consumption products in the liquor display area."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Display Container Rule",
      text: "The retail display slides flagged a 3 litre display-container limit. Keep this separate from broader product/container rules you studied earlier."
    },
    {
      category: "June 4 Retail Delivery",
      title: "VQA Trap",
      text: "The module contrasts grocery display and wine boutique display: grocery display may have a VQA cap, while wine boutique display must include at least 50% VQA wine and at least half of that VQA wine must come from the winery that owns the boutique."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Wine Boutique",
      text: "Wine boutiques are connected to an offsite winery retail store/wine boutique endorsement. They must be separate and identifiable, and wine must not be consumed on site unless another permission applies."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Storage On Premises",
      text: "Liquor not on display must be stored securely and not accessible to customers unless it is for sale/display, already purchased, or ordered for delivery."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Storage Off Premises",
      text: "The module flags off-premises liquor storage traps: secure area, exclusively for liquor, under the licensee's control, within 5 km of the retail store, and in the same municipality."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Restrict Access",
      text: "During no-sale times, access can be restricted by locking refrigerators or displays, using a physical barrier/partition, locking the point-of-sale system, and ensuring staff follow store policy."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Deposit Return",
      text: "Retail deposit rules include collecting deposits on regulated containers, accepting empty container returns where required, keeping deposit records, allowing authorized audits, and remitting collected amounts as required."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Oct 31 2024 Return Rule",
      text: "Starting October 31, 2024, grocery stores were required to accept empty regulated container returns. Convenience stores are not required to accept returns, but if they choose to, they must clearly post the refund amount and follow return rules."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Sampling",
      text: "Licensed grocery stores may offer liquor sampling under conditions. Convenience stores may not offer liquor sampling."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Sampling Staff",
      text: "Sampling staff must be at least 18 years old and Smart Serve certified. Sampling must happen only during permissible liquor sale hours."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Sampling Area",
      text: "Samples must be consumed in the designated sampling area. Do not serve samples to an intoxicated person and do not let customers remove samples from the sampling area."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Advertising Basics",
      text: "Alcohol advertising must not be contrary to the public interest, target minors, promote excessive consumption or intoxication, or associate alcohol with driving, machinery, hazardous activity, sexual context, or improved performance."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Personality Endorsement",
      text: "The retail advertising section flags that a well-known personality in alcohol advertising must be at least 25 years old and must not appear to be a minor."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Cross Promotion",
      text: "Cross promotions must not create an inducement to purchase liquor. The trap is that a free or discounted item tied to buying alcohol can become an unlawful inducement."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Loyalty Programs",
      text: "Loyalty/reward programs must not promote excessive consumption, minors' consumption, a specific liquor brand, or manufacturer control. Values and redemption rules must be clear and responsible."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Inducements",
      text: "Licensed grocery/convenience stores cannot request, demand, or receive inducements from manufacturers or their representatives, and manufacturers/representatives cannot offer or give those inducements."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Online Sales",
      text: "Online liquor sales must follow dedicated online sale rules. The module quiz's correct online answer was that liquor ordered or paid for online must be supplied from the inventory of the respective grocery store, wine boutique, or convenience store."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Online Advertising Trap",
      text: "Liquor should not be advertised alongside unrelated products on a general website/application area. Keep liquor in the dedicated liquor section and follow age-access rules."
    },
    {
      category: "June 4 Retail Delivery",
      title: "No Exchanges",
      text: "The module quiz confirmed that grocery and convenience stores cannot allow exchanges for alcohol products."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Liquor Delivery Definition",
      text: "Liquor delivery means transporting liquor directly to customers for consumption. It does not include a customer transporting liquor after pickup."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Who Can Deliver",
      text: "Eligible delivery parties include licensed liquor delivery services, liquor sales licensees and staff, licensed grocery/convenience and other retail store staff, manufacturer's retail store staff, and auction permit holders where allowed."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Delivery Certification",
      text: "Individuals delivering liquor must be Smart Serve certified. Liquor delivery service staff must carry a copy of the Licence to Deliver while purchasing or delivering liquor."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Delivery With Food",
      text: "The module repeatedly flags that liquor sold by eligible licensees for takeout or delivery is tied to food where that rule applies. Restaurant liquor-only delivery without food is not allowed in the quiz."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Delivery Destination",
      text: "Delivery must be to a residence or private place. Do not deliver to public places, schools, parking lots, arenas, recreational facilities, or patients in medical/addiction treatment facilities."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Delivery Recipient",
      text: "Delivery must not be made to anyone under 19 or anyone who is or appears intoxicated. The recipient must provide valid ID when required."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Delivery Condition",
      text: "Liquor must remain unopened and untampered with throughout delivery and must be stored securely before delivery."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Delivery Records",
      text: "Delivery records must be kept for one year. The module flags licensee/order details, kinds and quantities, purchase/delivery date and time, and delivery address."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Second-Party Purchaser",
      text: "A second-party purchaser is someone buying liquor for an underage or intoxicated person. Refuse the sale or delivery even if the person at the till looks sober and is 19 or older."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Second-Party Clues",
      text: "Clues include an intoxicated person pointing to alcohol, giving money to another person, waiting outside, accompanying the buyer, or asking someone else to buy after being refused."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Retail Refusal",
      text: "When refusing a retail alcohol sale, be polite and clear, state the reason, avoid moral judgments, remove the alcohol from reach if safe, tell coworkers/supervisor, and document according to store policy."
    },
    {
      category: "June 4 Retail Delivery",
      title: "Police Escalation",
      text: "If an intoxicated customer may drive, refuses to leave, becomes unsafe, or the situation cannot be settled peacefully, call police/911. Record licence plate and description only if it is safe."
    }
  ];

  const flashcards = [
    { category: "Today Recap", q: "What new topic cluster did you study today?", a: "Retail sales, display/storage, deposit returns, sampling, advertising, online sales, delivery, delivery records, second-party purchasers, and retail refusals." },
    { category: "Retail", q: "What are retail sale and pickup hours?", a: "7:00 a.m. to 11:00 p.m., Monday to Sunday." },
    { category: "Retail", q: "What is the true convenience-store quiz answer from the video?", a: "Ordering and payment must be done in person within the store, except online sales." },
    { category: "Retail", q: "Can convenience stores sell any alcoholic beverage if staff are trained?", a: "No. They can sell only eligible products under their licence and rules." },
    { category: "Display", q: "What does contiguous display mean in your test brain?", a: "Liquor display is kept together/controlled, not scattered in unrelated areas." },
    { category: "Display", q: "What products should not be in the liquor display area?", a: "Energy drinks and products that promote immediate consumption of liquor." },
    { category: "Storage", q: "What is the off-premises storage distance trap?", a: "Within 5 km, same municipality, under licensee control, secure, and exclusively for liquor." },
    { category: "Deposit", q: "As of October 31, 2024, who must accept empty regulated container returns?", a: "Grocery stores. Convenience stores are not required, but if they choose to accept returns, they must follow the rules and post the refund amount." },
    { category: "Sampling", q: "Where is liquor sampling allowed?", a: "Licensed grocery stores only, under conditions. Not in convenience stores." },
    { category: "Sampling", q: "Who can conduct sampling?", a: "Staff at least 18 years old with Smart Serve certification." },
    { category: "Sampling", q: "Can samples leave the sampling area?", a: "No. They must be consumed in the designated sampling area." },
    { category: "Advertising", q: "What age must a well-known alcohol-ad personality be?", a: "At least 25 and not appear to be a minor." },
    { category: "Advertising", q: "What advertising associations are unsafe?", a: "Minors, excessive consumption, intoxication, driving, machinery, hazardous activity, sexual context, and improved performance." },
    { category: "Loyalty", q: "What is the loyalty/reward trap?", a: "Rewards must not promote specific liquor brands, minors, excessive consumption, or manufacturer control." },
    { category: "Inducements", q: "Can manufacturers give inducements to licensed grocery/convenience stores?", a: "No. Stores cannot request/receive them and manufacturers/representatives cannot offer/give them." },
    { category: "Online", q: "What was the correct online-sales quiz answer?", a: "Liquor ordered or paid for online must be supplied from the inventory of the respective grocery store, wine boutique, or convenience store." },
    { category: "Online", q: "Can alcohol be exchanged at grocery/convenience stores?", a: "No. The module quiz confirmed no exchanges for alcohol products." },
    { category: "Delivery", q: "What is liquor delivery?", a: "Transporting liquor directly to customers for consumption, not a customer carrying away their own pickup." },
    { category: "Delivery", q: "Who must be Smart Serve certified in delivery?", a: "Individuals delivering liquor." },
    { category: "Delivery", q: "Where can liquor be delivered?", a: "To a residence or private place, not public places or prohibited facilities." },
    { category: "Delivery", q: "Who must not receive delivery?", a: "Anyone under 19 or anyone intoxicated/apparently intoxicated." },
    { category: "Delivery", q: "What condition must delivered liquor be in?", a: "Unopened and untampered with." },
    { category: "Delivery", q: "How long are delivery records kept?", a: "One year." },
    { category: "Delivery", q: "Can restaurants deliver liquor only with no food?", a: "No. The module quiz says restaurant liquor-only delivery without food is false." },
    { category: "Second Party", q: "What is a second-party purchaser?", a: "Someone buying liquor for an underage or intoxicated person." },
    { category: "Second Party", q: "What should you do if a sober buyer is clearly buying for an intoxicated person?", a: "Refuse the sale." },
    { category: "Refusal", q: "What if an intoxicated customer may drive?", a: "Call police/911 if needed, record plate/description only if safe, tell supervisor/coworkers, and document." },
    { category: "Refusal", q: "How should you speak during refusal?", a: "Calm, polite, clear, and professional. State the legal/safety reason and avoid judgment." }
  ];

  const questions = [
    {
      category: "June 4 Today Recap",
      q: "Which topic set best summarizes the material added from today's video?",
      choices: ["Retail sales, online sales, delivery, second-party purchasers, and retail refusals", "Only BAC charts and standard drinks", "Only Sandy's Law signage", "Only food safety temperatures"],
      answer: 0,
      why: "The new 61-minute video focused heavily on retail and delivery rules, plus refusal scenarios."
    },
    {
      category: "June 4 AGCO Review",
      q: "Which of the following is NOT a responsibility of the AGCO?",
      choices: ["Issuing licences to establishments that sell or serve alcohol", "Establishing training requirements", "Enforcing the LLCA and regulations", "Operating the LCBO as a retail store chain"],
      answer: 3,
      why: "AGCO regulates and enforces; it does not operate the LCBO."
    },
    {
      category: "June 4 AGCO Review",
      q: "The AGCO is responsible for issuing liquor sales licences.",
      choices: ["True", "False"],
      answer: 0,
      why: "This appeared in the quiz review and is a core AGCO role."
    },
    {
      category: "June 4 AGCO Review",
      q: "The LLCA is enforced by which Ontario regulator in the module?",
      choices: ["AGCO", "LCBO only", "Smart Serve only", "A private insurance company"],
      answer: 0,
      why: "The module reinforces AGCO enforcement of the LLCA and related rules."
    },
    {
      category: "June 4 Licence Types",
      q: "Which retail permission type appeared in the retail-store licence list?",
      choices: ["Convenience Store Licence", "Student Card Licence", "Private House Party Licence", "Taxi Licence"],
      answer: 0,
      why: "Convenience Store Licence is one of the retail licence types."
    },
    {
      category: "June 4 Licence Types",
      q: "A wine boutique is connected to which permission?",
      choices: ["Wine Boutique Endorsement to an Offsite Winery Retail Store Licence", "A police event permit", "A driver's licence endorsement", "A private residence SOP"],
      answer: 0,
      why: "The retail licence list includes wine boutique endorsement permissions."
    },
    {
      category: "June 4 Licence Types",
      q: "The module notes that endorsements are transferable from one location to another whenever a business moves.",
      choices: ["True", "False"],
      answer: 1,
      why: "The retail detail notes flag endorsements as not transferable."
    },
    {
      category: "June 4 Retail",
      q: "What are the permissible retail sale and pickup hours for licensed grocery/convenience alcohol sales?",
      choices: ["7:00 a.m. to 11:00 p.m.", "9:00 a.m. to 2:00 a.m.", "9:00 a.m. to 10:00 p.m. by someone 18+", "24 hours if the store is open"],
      answer: 0,
      why: "Smart Serve lists retail sale hours as 7 a.m. to 11 p.m."
    },
    {
      category: "June 4 Retail",
      q: "A licensed retail store can choose shorter alcohol sale hours than the maximum 7:00 a.m. to 11:00 p.m. window.",
      choices: ["True", "False"],
      answer: 0,
      why: "The maximum window is permissible hours; stores may choose shorter hours."
    },
    {
      category: "June 4 Retail",
      q: "Which convenience-store statement was the true statement in the video quiz?",
      choices: ["All parts of selling liquor, including ordering and payment, are done in person within the store, except online sales", "They can sell any alcoholic beverage if the cashier is trained", "They can sell alcohol 24 hours if the store is open", "They do not have to restrict alcohol access outside sale hours"],
      answer: 0,
      why: "The visible quiz marked this rule pattern as the correct convenience-store statement."
    },
    {
      category: "June 4 Retail",
      q: "A convenience store can sell any type of alcoholic beverage as long as the cashier has AGCO Board-approved training.",
      choices: ["True", "False"],
      answer: 1,
      why: "Training is required, but product eligibility is still limited by the licence and rules."
    },
    {
      category: "June 4 Retail",
      q: "The module's grocery-store rules include a minimum retail floor area of:",
      choices: ["4,000 square feet", "400 square feet", "10,000 square feet", "No size requirement ever"],
      answer: 0,
      why: "The retail detail slides reference 4,000 square feet."
    },
    {
      category: "June 4 Retail",
      q: "Which item should NOT be placed in the liquor display area because it promotes immediate consumption?",
      choices: ["Energy drinks", "A permitted VQA wine sign", "A shelf label", "A locked refrigerator"],
      answer: 0,
      why: "The display rules flag energy drinks and immediate-consumption products as not permitted in the liquor display area."
    },
    {
      category: "June 4 Retail",
      q: "The retail display area must be controlled/contiguous and visible to staff.",
      choices: ["True", "False"],
      answer: 0,
      why: "The display rules focus on controlled display and staff visibility."
    },
    {
      category: "June 4 Retail",
      q: "In the display rule shown in the module, liquor containers on display must not exceed:",
      choices: ["3 litres", "30 litres", "300 mL", "No limit"],
      answer: 0,
      why: "The June 4 retail display notes flag a 3 litre display-container limit."
    },
    {
      category: "June 4 Wine Boutique",
      q: "A wine boutique's display area must include at least what percentage of VQA wine?",
      choices: ["50%", "10%", "100%", "5%"],
      answer: 0,
      why: "The wine boutique slide flags at least 50% VQA wine."
    },
    {
      category: "June 4 Wine Boutique",
      q: "At least half of the VQA wine displayed in a wine boutique must come from:",
      choices: ["The winery that owns the boutique", "Any grocery store", "The police service", "Only out-of-province wineries"],
      answer: 0,
      why: "The wine boutique display rule says at least half of the VQA wine must be from the winery that owns the boutique."
    },
    {
      category: "June 4 Wine Boutique",
      q: "Wine may be consumed on site inside a wine boutique just because it is winery-affiliated.",
      choices: ["True", "False"],
      answer: 1,
      why: "The slide flags that wine must not be consumed on site unless another specific permission applies."
    },
    {
      category: "June 4 Storage",
      q: "Off-premises liquor storage for a retail store must be within what distance of the retail store?",
      choices: ["5 km", "50 km", "500 m", "No distance limit"],
      answer: 0,
      why: "The storage slide flags a 5 km limit."
    },
    {
      category: "June 4 Storage",
      q: "Off-premises liquor storage must be used exclusively for liquor.",
      choices: ["True", "False"],
      answer: 0,
      why: "The module notes say off-premises storage is a secure area used exclusively for liquor."
    },
    {
      category: "June 4 Storage",
      q: "Which is an acceptable way to restrict access to liquor during no-sale times?",
      choices: ["Lock the display/refrigerator or create a physical barrier", "Leave the alcohol accessible but post a tiny sign", "Let customers carry it to the till after 11 p.m.", "Hide the cash register receipt paper"],
      answer: 0,
      why: "The module lists locks, barriers/partitions, POS controls, and staff policy controls."
    },
    {
      category: "June 4 Storage",
      q: "The video quiz asked how grocery/convenience stores can restrict access during no-sale times. The correct pattern was:",
      choices: ["All of the above: locking refrigerators, partitioning display aisles, and locking the POS system", "Only locking refrigerators", "Only telling customers verbally", "No access restriction is needed"],
      answer: 0,
      why: "The contact sheet showed the all-of-the-above access restriction pattern."
    },
    {
      category: "June 4 Deposit Return",
      q: "Starting October 31, 2024, which stores were required to accept returns of empty regulated containers?",
      choices: ["Grocery stores", "Convenience stores only", "Only restaurants", "Only private residences"],
      answer: 0,
      why: "The Oct. 31, 2024 rule in the module makes grocery-store returns mandatory."
    },
    {
      category: "June 4 Deposit Return",
      q: "Convenience stores are required to accept empty container returns in every case.",
      choices: ["True", "False"],
      answer: 1,
      why: "The module says convenience stores are not required to accept returns, but if they choose to, they must follow the return rules."
    },
    {
      category: "June 4 Deposit Return",
      q: "If a convenience store chooses to accept empty regulated container returns, it must clearly post:",
      choices: ["The refund amount", "The owner's birthday", "A private guest list", "The customer's licence plate"],
      answer: 0,
      why: "The convenience-store return rule says the refund amount must be clearly posted if returns are accepted."
    },
    {
      category: "June 4 Deposit Return",
      q: "Retail deposit records may be subject to audit by a person authorized by which office?",
      choices: ["Minister of Finance", "A random customer", "The customer's employer", "A bartender from another store"],
      answer: 0,
      why: "The deposit return notes flag audits authorized by the Minister of Finance."
    },
    {
      category: "June 4 Deposit Return",
      q: "Collected deposit amounts are remitted as required to:",
      choices: ["The LCBO", "The customer's friend", "A private tip jar", "The cashier's personal account"],
      answer: 0,
      why: "The deposit-return notes identify remitting collected amounts to the LCBO."
    },
    {
      category: "June 4 Sampling",
      q: "Which retail store type may offer liquor sampling under the conditions shown in the module?",
      choices: ["Licensed grocery store", "Convenience store", "Any gas station", "Any private home"],
      answer: 0,
      why: "The module says grocery stores may offer sampling; convenience stores may not."
    },
    {
      category: "June 4 Sampling",
      q: "Liquor sampling is allowed in convenience stores.",
      choices: ["True", "False"],
      answer: 1,
      why: "The module explicitly flags no sampling in convenience stores."
    },
    {
      category: "June 4 Sampling",
      q: "Staff conducting liquor sampling must be:",
      choices: ["At least 18 and Smart Serve certified", "At least 16 with no training", "At least 19 only if sampling wine", "Any age if supervised"],
      answer: 0,
      why: "Sampling staff must be 18+ and Smart Serve certified."
    },
    {
      category: "June 4 Sampling",
      q: "A grocery-store sampling event may occur:",
      choices: ["Only during permissible liquor sale hours", "Any time the store is open", "Only after 11 p.m.", "Only before 7 a.m."],
      answer: 0,
      why: "Sampling must be scheduled during permissible liquor sale hours."
    },
    {
      category: "June 4 Sampling",
      q: "A customer may leave the designated sampling area with a liquor sample if the sample is small.",
      choices: ["True", "False"],
      answer: 1,
      why: "Customers must consume samples in the designated area and cannot remove samples."
    },
    {
      category: "June 4 Sampling",
      q: "If a customer appears intoxicated at a sampling event, what must staff do?",
      choices: ["Refuse the sample", "Offer a smaller sample", "Serve them quickly", "Let them take it outside"],
      answer: 0,
      why: "Do not provide samples to someone who is intoxicated or appears intoxicated."
    },
    {
      category: "June 4 Advertising",
      q: "Alcohol advertising can target minors if the product is beer or cider rather than spirits.",
      choices: ["True", "False"],
      answer: 1,
      why: "Alcohol advertising must not target or appeal to minors."
    },
    {
      category: "June 4 Advertising",
      q: "Which advertising association is prohibited?",
      choices: ["Alcohol with driving, vehicles, or hazardous activities", "A responsible product description", "A legal price list", "A compliant VQA availability sign"],
      answer: 0,
      why: "Advertising must not connect alcohol with driving, machinery, vehicles, or hazardous activity."
    },
    {
      category: "June 4 Advertising",
      q: "A well-known personality used in alcohol advertising must be at least:",
      choices: ["25 years old", "18 years old", "19 years old", "No age requirement"],
      answer: 0,
      why: "The module's advertising section flags 25 as the personality endorsement age."
    },
    {
      category: "June 4 Advertising",
      q: "Alcohol advertising may suggest that drinking improves problem-solving or performance.",
      choices: ["True", "False"],
      answer: 1,
      why: "Advertising cannot suggest improved performance, problem-solving, or similar benefits."
    },
    {
      category: "June 4 Cross Promotion",
      q: "A store offers a free snack only if the customer buys a bottle of wine. What is the concern?",
      choices: ["It can be an unlawful inducement to purchase liquor", "It is always required by law", "It makes the sale a Special Occasion Permit", "It turns the store into a wine boutique"],
      answer: 0,
      why: "Cross promotions cannot create an inducement to purchase liquor."
    },
    {
      category: "June 4 Loyalty",
      q: "A loyalty/rewards program must not be operated by a liquor manufacturer or its representative.",
      choices: ["True", "False"],
      answer: 0,
      why: "The loyalty rules in the module flag manufacturer control as not allowed."
    },
    {
      category: "June 4 Loyalty",
      q: "Which loyalty/reward practice is NOT allowed?",
      choices: ["Promoting a specific liquor brand or excessive consumption", "Clearly communicating the value of points", "Having values consistent and responsible", "Allowing a general non-liquor loyalty program where permitted"],
      answer: 0,
      why: "Loyalty programs must not promote specific brands, minors' consumption, or excessive/irresponsible consumption."
    },
    {
      category: "June 4 Inducements",
      q: "Licensed grocery/convenience stores may request inducements from manufacturers for better display placement.",
      choices: ["True", "False"],
      answer: 1,
      why: "Stores cannot request, demand, or receive inducements from manufacturers or representatives."
    },
    {
      category: "June 4 Inducements",
      q: "Manufacturers and their representatives may offer inducements to licensed grocery/convenience stores if the inducement is only a promotional opportunity.",
      choices: ["True", "False"],
      answer: 1,
      why: "The module notes specifically include promotional opportunities in the inducement restriction."
    },
    {
      category: "June 4 Online Sales",
      q: "The correct answer in the online-sales quiz was that liquor ordered or paid for online must be:",
      choices: ["Supplied from the inventory of the respective grocery store, wine boutique, or convenience store", "Picked up by someone 18 years old between 9 a.m. and 10 p.m.", "Advertised alongside all other products", "Modified from another store's inventory"],
      answer: 0,
      why: "The screenshot showed this as the correct online-sales answer after an incorrect selection."
    },
    {
      category: "June 4 Online Sales",
      q: "Liquor can be advertised alongside unrelated products anywhere on the website/application.",
      choices: ["True", "False"],
      answer: 1,
      why: "The online-sales rules point to dedicated liquor sections and controlled advertising."
    },
    {
      category: "June 4 Online Sales",
      q: "Individuals using an online retail liquor sales flow must be at least:",
      choices: ["19", "18", "16", "No age applies online"],
      answer: 0,
      why: "The customer must be legal drinking age to purchase liquor."
    },
    {
      category: "June 4 Online Sales",
      q: "Grocery and convenience stores can allow exchanges for alcohol products.",
      choices: ["True", "False"],
      answer: 1,
      why: "The visible quiz marked this false."
    },
    {
      category: "June 4 Delivery",
      q: "Liquor delivery means:",
      choices: ["Transporting liquor directly to customers for their consumption", "A customer carrying alcohol after pickup", "A server moving a bottle from one table to another", "Any retail shelf display"],
      answer: 0,
      why: "The delivery module defines liquor delivery as transporting liquor to customers."
    },
    {
      category: "June 4 Delivery",
      q: "Which person must be Smart Serve certified?",
      choices: ["An individual delivering liquor", "Only the customer receiving liquor", "Only the person who designed the website", "Nobody involved in delivery"],
      answer: 0,
      why: "The delivery module flags Smart Serve certification for individuals delivering liquor."
    },
    {
      category: "June 4 Delivery",
      q: "A licensed liquor delivery service employee must carry a copy of the Licence to Deliver while purchasing or delivering liquor.",
      choices: ["True", "False"],
      answer: 0,
      why: "The delivery section states this documentation requirement."
    },
    {
      category: "June 4 Delivery",
      q: "Restaurants can charge to sell and deliver liquor only, even without food service.",
      choices: ["True", "False"],
      answer: 1,
      why: "The visible delivery quiz marked this false; restaurant delivery of liquor is tied to food where that rule applies."
    },
    {
      category: "June 4 Delivery",
      q: "If liquor is sold for takeout or delivery with food under the relevant rule, what quantity limit did the module note?",
      choices: ["No limit on the amount sold with food", "Exactly one bottle only", "Two beers maximum", "Only 12 oz total"],
      answer: 0,
      why: "The delivery notes flag no quantity limit when purchased with food."
    },
    {
      category: "June 4 Delivery",
      q: "Liquor delivery must be made to:",
      choices: ["A residence or private place", "A school hallway", "A public parking lot", "An arena concourse"],
      answer: 0,
      why: "Delivery must be to a private place/residence, not public places."
    },
    {
      category: "June 4 Delivery",
      q: "Liquor may be delivered to patients in medical facilities or addiction treatment facilities.",
      choices: ["True", "False"],
      answer: 1,
      why: "The delivery slide flags those as prohibited delivery destinations."
    },
    {
      category: "June 4 Delivery",
      q: "The delivery recipient must be:",
      choices: ["At least 19 and not intoxicated", "At least 18 and intoxicated", "Any age if someone else paid", "A friend of the cashier"],
      answer: 0,
      why: "Do not deliver to an underage or intoxicated recipient."
    },
    {
      category: "June 4 Delivery",
      q: "Liquor delivered to the customer must remain unopened and untampered with.",
      choices: ["True", "False"],
      answer: 0,
      why: "The delivery quiz showed this as true."
    },
    {
      category: "June 4 Delivery",
      q: "If you cannot verify valid government-issued ID for a delivery recipient who needs ID, what should you do?",
      choices: ["Refuse delivery", "Leave it at the door", "Ask a neighbour to sign", "Deliver only beer"],
      answer: 0,
      why: "Valid ID and age verification are required when needed."
    },
    {
      category: "June 4 Delivery Records",
      q: "A liquor delivery licensee must keep records of each order for:",
      choices: ["One year", "One week", "One month", "Forever with no exceptions"],
      answer: 0,
      why: "The delivery record-keeping quiz marked one year as true."
    },
    {
      category: "June 4 Delivery Records",
      q: "Which item belongs in delivery records?",
      choices: ["Kinds and quantities of liquor and delivery address", "The customer's favourite sports team", "The cashier's lunch order", "The customer's horoscope"],
      answer: 0,
      why: "Delivery records include practical order and delivery details."
    },
    {
      category: "June 4 Delivery Records",
      q: "The delivery record trap is that records are only needed if the customer complains.",
      choices: ["True", "False"],
      answer: 1,
      why: "Records are required for each order, not just complaints."
    },
    {
      category: "June 4 Second Party",
      q: "A second-party purchaser is someone buying alcohol for:",
      choices: ["An underage or intoxicated person", "A sober 19+ person who forgot cash", "The store manager", "A licensed supplier"],
      answer: 0,
      why: "The key definition is buying for someone under 19 or intoxicated."
    },
    {
      category: "June 4 Second Party",
      q: "An intoxicated person points to a case of beer, gives money to a sober friend, and the friend brings it to the cash. What should you do?",
      choices: ["Refuse the sale as a second-party purchase", "Sell because the person at the till is sober", "Sell if the friend tips", "Ignore the intoxicated person"],
      answer: 0,
      why: "A sober buyer can still be a second-party purchaser."
    },
    {
      category: "June 4 Second Party",
      q: "An intoxicated person waits outside while another person comes in to buy the alcohol they requested. This can indicate a second-party purchase.",
      choices: ["True", "False"],
      answer: 0,
      why: "The second-party purchaser indicators include waiting outside and using another person to buy."
    },
    {
      category: "June 4 Retail Refusal",
      q: "A retail customer appears intoxicated and wants to buy a 6-pack of beer. Can you sell it?",
      choices: ["No", "Yes, if they are 19+", "Yes, if they pay cash", "Only if they are a regular"],
      answer: 0,
      why: "The visible grocery-store quiz asked this scenario and the correct answer was no."
    },
    {
      category: "June 4 Retail Refusal",
      q: "Which refusal approach is best?",
      choices: ["Politely state the reason, stay professional, and avoid judgment", "Insult the customer", "Argue about their personal life", "Sell one item to avoid conflict"],
      answer: 0,
      why: "The refusal tips emphasize professionalism and respect."
    },
    {
      category: "June 4 Retail Refusal",
      q: "If an intoxicated customer may drive or the situation cannot be settled peacefully, what should you do?",
      choices: ["Call police/911 if needed", "Ignore the risk", "Offer them a discount", "Tell another customer to handle it"],
      answer: 0,
      why: "The refusal tips say to phone police if they may drive or the situation cannot be settled peacefully."
    },
    {
      category: "June 4 Retail Refusal",
      q: "If safe, what information can help after an intoxicated customer leaves and may drive?",
      choices: ["Licence plate, vehicle description, and customer description", "Their favourite drink only", "Their horoscope", "Nothing should ever be recorded"],
      answer: 0,
      why: "The refusal module says to record plate/description only while keeping personal safety in mind."
    },
    {
      category: "June 4 Retail Refusal",
      q: "After a retail refusal incident, who should be informed?",
      choices: ["Supervisor or another coworker", "No one ever", "Only the customer's friend", "Only social media"],
      answer: 0,
      why: "The refusal tips include informing a supervisor or coworker and following store procedure."
    },
    {
      category: "June 4 Retail Refusal",
      q: "If safe, consider physically removing the alcohol from the customer or placing it out of reach during a refusal.",
      choices: ["True", "False"],
      answer: 0,
      why: "The refusal notes include this as a practical safety/control step."
    },
    {
      category: "June 4 Today Recap",
      q: "Which pair is the most important retail-hours distinction?",
      choices: ["Retail sale/pickup 7 a.m.-11 p.m.; delivery to customers 9 a.m.-11 p.m.", "Retail sale 9 a.m.-2 a.m.; delivery 24 hours", "Retail sale 24 hours; delivery 7 a.m.-11 p.m.", "Retail sale 2 a.m.-7 a.m.; delivery noon-midnight"],
      answer: 0,
      why: "Smart Serve lists retail sale/pickup as 7 a.m.-11 p.m. and delivery as 9 a.m.-11 p.m."
    },
    {
      category: "June 4 Today Recap",
      q: "Which number pair should be locked in from today's retail/delivery work?",
      choices: ["25 for well-known personality endorsement; one year for delivery records", "16 for sampling staff; two years for delivery records", "21 for online sales; five years for delivery records", "No age or record numbers matter"],
      answer: 0,
      why: "The video highlighted 25 for well-known personality endorsement and one year for delivery records."
    },
    {
      category: "June 4 Today Recap",
      q: "Which answer is the safest Smart Serve instinct in retail?",
      choices: ["Refuse underage, intoxicated, unsafe, invalid-ID, or second-party purchases", "Sell quickly to keep the line moving", "Accept any ID if the person is polite", "Assume delivery recipients are sober"],
      answer: 0,
      why: "The retail module reinforces lawful refusal and prevention of second-party purchases."
    }
  ];

  window.STUDY_DATA.facts.push(...facts);
  window.STUDY_DATA.flashcards.push(...flashcards);
  window.STUDY_DATA.questions.push(...questions);
})();
