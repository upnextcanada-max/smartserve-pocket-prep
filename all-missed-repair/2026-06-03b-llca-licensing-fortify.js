// SmartServe fortify add-on from the newest 2026-06-03 LLCA/licensing screen recording.
// Sources: chrome_4GMqaqEFRy.mp4 extracted frames, Gemini contact-sheet notes, Smart Serve, AGCO, and Ontario LLCA/O. Reg. references.
(function () {
  window.STUDY_DATA = window.STUDY_DATA || { facts: [], flashcards: [], questions: [] };

  const facts = [
    {
      category: "June 3 LLCA Fortify",
      title: "LLCA Scope",
      text: "The Liquor Licence and Control Act, 2019 (LLCA), its regulations, and the Registrar's Standards set out requirements for alcohol sale, service, sampling, and delivery in Ontario."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "AGCO Role",
      text: "The Alcohol and Gaming Commission of Ontario (AGCO) is the provincial regulator that issues liquor licences, permits, and endorsements and administers/enforces Ontario liquor rules."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Not Federal",
      text: "Liquor sales licences in Ontario are not issued by the Government of Canada. They are issued provincially through the AGCO."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Licence Types",
      text: "Important licence/permission categories include Liquor Sales Licences, Retail Store Licences, Special Occasion Permits, and endorsements."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Liquor Sales Licence",
      text: "A Liquor Sales Licence allows alcohol sale and service to the public for on-site consumption, such as in restaurants, bars, and other licensed establishments."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Retail Store Licence",
      text: "Retail Store Licences include grocery stores, convenience stores, Brewers Retail Inc., offsite winery retail stores, and related wine boutique permissions."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Training Rule",
      text: "Licensees must ensure people involved in selling, serving, sampling, delivering, or taking orders for liquor complete AGCO Board-approved responsible service training."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Security Training",
      text: "Security staff who monitor legal age, intoxication, or security at licensed establishments or permitted events are part of the responsible-service risk system and may need approved training."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Sandy's Law",
      text: "Premises selling or supplying liquor must prominently display the Sandy's Law/FASD pregnancy warning sign. Smart Serve and AGCO state it must be at least 8 x 10 inches."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Inspection Access",
      text: "AGCO inspectors must be given full/unobstructed access to inspect licensed or permitted premises and records when checking compliance."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Licensed Hours",
      text: "Licensed establishments can generally sell and serve alcohol Monday to Sunday from 9:00 a.m. to 2:00 a.m.; on New Year's Eve, December 31, service may continue until 3:00 a.m."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Stop-Service Rule",
      text: "Orders must be served before the stop-service time. If the stop time is 2:00 a.m., an order placed at 1:55 a.m. cannot be served after 2:00 a.m."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "45 Minute Clear",
      text: "After stop-service time, all alcohol and containers such as glasses and bottles must be cleared within 45 minutes."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "No Minimum Drinks",
      text: "A licensed establishment cannot require guests to buy a minimum number of drinks to enter or remain in the premises."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Endorsement Meaning",
      text: "An endorsement is added to a liquor licence and gives extra permission for specific activities or circumstances beyond the base licence."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Take Home the Rest",
      text: "This endorsement lets a guest take home a partially consumed commercially made bottle of wine served with a meal, if it is recorked, placed in a one-time-use tamper-proof bag, and the guest leaves immediately."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Delivery Endorsement",
      text: "A delivery endorsement allows a liquor sales licensee to sell and deliver liquor to a patron at a different location; the recipient must be at least 19 and not intoxicated."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Temporary Extension",
      text: "A Temporary Extension Endorsement can allow a liquor sales licensee to temporarily extend the licensed area under approved conditions."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Special Occasion Permit",
      text: "A Special Occasion Permit (SOP) is issued for a specific event, date, and location when alcohol will be sold, served, or sampled outside a licensed establishment."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Residence Trap",
      text: "A private event held in a personal residence does not require a Special Occasion Permit, but a private event at a banquet hall or other event venue can."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Private Event SOP",
      text: "A private event is invitation-only, cannot be advertised to the public, cannot be open to the public, and cannot be used for personal gain or business promotion."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Private Event Alcohol",
      text: "At private SOP events, alcohol must come from approved retail/manufacturer sources; homemade alcohol cannot be served, alcohol cannot be sold, cannot be a prize, and cannot be removed by guests."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "SOP Staff Age",
      text: "SOP holders must ensure all staff selling, serving, sampling, handling liquor, or selling drink tickets are at least 18 years old. Smart Serve certification is strongly recommended and may be required by a Municipal Alcohol Policy."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Advertising Rules",
      text: "Alcohol advertising and promotions must support responsible use and cannot target minors, encourage excessive consumption, promote intoxication, or link alcohol with driving, machinery, athletic prowess, or dangerous activity."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Retail Hours",
      text: "Retail sale and pickup hours for licensed grocery/convenience stores are generally 7:00 a.m. to 11:00 p.m.; delivery to customers is generally 9:00 a.m. to 11:00 p.m."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Retail Products",
      text: "Licensed grocery and convenience stores may sell beer, cider, wine, and ready-to-drink beverages, subject to product, ABV, container, display, sales, and delivery rules."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Retail ABV Limits",
      text: "Beer, alcoholic cider, and ready-to-drink beverages must be no greater than 7.1% ABV. Wine other than cider must be no greater than 18% ABV."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Retail Container Limit",
      text: "Beer, wine including cider, and ready-to-drink beverages sold under grocery/convenience retail rules must not be in a container larger than 5 litres."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Package Trap",
      text: "A convenience or grocery store cannot break apart a ready-to-sell package, such as selling individual beer cans taken from a 6-pack."
    },
    {
      category: "June 3 LLCA Fortify",
      title: "Wine Boutique",
      text: "A wine boutique inside a licensed grocery store must be easy to identify as separate from the rest of the store, with its own unique name and clear, prominent signage."
    }
  ];

  const flashcards = [
    { category: "LLCA", q: "Who issues liquor licences and endorsements in Ontario?", a: "The AGCO, not the Government of Canada." },
    { category: "LLCA", q: "What does the LLCA cover?", a: "Sale, service, sampling, delivery, licensing, permitted premises, advertising, records, inspections, and enforcement of alcohol rules in Ontario." },
    { category: "AGCO", q: "What access must AGCO inspectors get?", a: "Full/unobstructed access to inspect premises and records for compliance." },
    { category: "Training", q: "Who must have approved responsible service training?", a: "People involved in sale, service, sampling, delivery, or taking orders for liquor, plus relevant monitoring/security roles." },
    { category: "Sandy's Law", q: "What is Sandy's Law signage?", a: "The FASD/pregnancy alcohol warning sign, prominently displayed and at least 8 x 10 inches." },
    { category: "Hours", q: "What are normal licensed-establishment service hours?", a: "9:00 a.m. to 2:00 a.m., Monday to Sunday." },
    { category: "Hours", q: "What is the New Year's Eve service extension?", a: "On December 31, licensed establishments may serve until 3:00 a.m." },
    { category: "Hours", q: "Can you serve at 2:05 a.m. if the order was placed at 1:55 a.m.?", a: "No. The alcohol must be served before the stop-service time." },
    { category: "Hours", q: "How long after stop-service must alcohol and containers be cleared?", a: "Within 45 minutes." },
    { category: "Endorsements", q: "What is an endorsement?", a: "Extra permission added to a liquor licence for specific circumstances." },
    { category: "Take Home", q: "What can a guest take home under Take Home the Rest?", a: "A partially consumed commercially made bottle of wine served with a meal, recorked and sealed in a tamper-proof bag." },
    { category: "Delivery", q: "What must be true before delivery is completed?", a: "The recipient is at least 19 and not intoxicated." },
    { category: "SOP", q: "When is an SOP generally required?", a: "For sale, service, or sampling of liquor at an event outside a licensed establishment." },
    { category: "SOP", q: "Is an SOP required for a private event in a personal residence?", a: "No." },
    { category: "SOP", q: "Can homemade alcohol be served at a private SOP event?", a: "No." },
    { category: "SOP", q: "Can private-event alcohol be given as a prize?", a: "No." },
    { category: "SOP", q: "Can guests remove alcohol from a private SOP event?", a: "No." },
    { category: "SOP", q: "How old must SOP staff handling liquor or selling tickets be?", a: "At least 18 years old." },
    { category: "Advertising", q: "Can alcohol ads target minors or promote intoxication?", a: "No. Ads must support responsible use." },
    { category: "Retail", q: "What retail hours matter for grocery/convenience stores?", a: "In-store sale/pickup: 7 a.m. to 11 p.m. Delivery to customers: 9 a.m. to 11 p.m." },
    { category: "Retail", q: "What product types can licensed grocery/convenience stores sell?", a: "Beer, cider, wine, and ready-to-drink beverages, within limits." },
    { category: "Retail", q: "What is the ABV cap for beer, cider, and RTDs?", a: "7.1% ABV." },
    { category: "Retail", q: "What is the ABV cap for wine other than cider?", a: "18% ABV." },
    { category: "Retail", q: "What is the container limit for grocery/convenience retail products?", a: "No container larger than 5 litres." },
    { category: "Retail", q: "Can a store sell one beer can from a ready-to-sell 6-pack?", a: "No. It cannot break apart ready-to-sell packages." },
    { category: "Wine Boutique", q: "What must a wine boutique inside a grocery store look like?", a: "Separate and easy to identify, with its own unique name and clear prominent signage." }
  ];

  const questions = [
    {
      category: "June 3 LLCA Fortify",
      q: "The Liquor Licence and Control Act, 2019 (LLCA), its regulations, and the Registrar's Standards set out requirements for the sale, service, sampling, and delivery of alcohol in Ontario.",
      choices: ["True", "False"],
      answer: 0,
      why: "This was a visible module quiz point. The LLCA framework governs alcohol sale, service, sampling, and delivery in Ontario."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "Liquor Sales Licences in Ontario are issued by the Government of Canada.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. Ontario liquor licences are issued provincially by the AGCO."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "Which body issues liquor licences and endorsements to businesses that sell or serve alcohol in Ontario?",
      choices: ["Alcohol and Gaming Commission of Ontario (AGCO)", "Government of Canada passport office", "Ministry of Health", "Municipal by-law office only"],
      answer: 0,
      why: "The AGCO issues liquor licences, permits, and endorsements and regulates alcohol sale/service in Ontario."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "Full access to the licensed premises must be provided to AGCO inspectors so they can conduct inspections.",
      choices: ["True", "False"],
      answer: 0,
      why: "Licensees must provide access for compliance inspections."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "A licensed establishment can display either the Sandy's Law sign or its Liquor Sales Licence, but it does not need both.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. Required signs and required licence/permit postings are separate duties; one does not replace the other."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "What is Sandy's Law mainly about?",
      choices: ["A pregnancy/FASD warning sign about alcohol", "A daily sales receipt", "A police warrant", "A private-event guest list"],
      answer: 0,
      why: "Sandy's Law requires a warning sign that alcohol during pregnancy can cause FASD."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "How large must the Sandy's Law sign be according to Smart Serve/AGCO guidance?",
      choices: ["At least 8 x 10 inches", "Exactly 4 x 6 inches", "Any size if it is in colour", "Only large enough for staff to read"],
      answer: 0,
      why: "The sign must be prominently displayed and at least 8 x 10 inches."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "Which statement best describes a Liquor Sales Licence?",
      choices: ["It allows sale and service of alcohol to the public for on-site consumption", "It is only for home parties", "It is the same as a driver's licence", "It is issued by the Ministry of Health"],
      answer: 0,
      why: "Liquor Sales Licences apply to licensed establishments such as bars and restaurants."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "Which permission is usually for a one-time event outside a licensed establishment?",
      choices: ["Special Occasion Permit (SOP)", "Ontario Health Card", "BYID card", "Driver's licence"],
      answer: 0,
      why: "An SOP is issued for a specific event, date, and location."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "What is an endorsement on a liquor licence?",
      choices: ["An added permission for specific conditions or activities", "A personal ID card", "A criminal charge", "A receipt from the LCBO"],
      answer: 0,
      why: "Endorsements add special permissions to a licence."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "All people involved in selling, serving, sampling, delivering, or taking orders for liquor must be covered by approved responsible-service training requirements.",
      choices: ["True", "False"],
      answer: 0,
      why: "The module says licensees must ensure these workers complete AGCO Board-approved training."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "Which worker is included in responsible-service risk monitoring at a licensed establishment?",
      choices: ["Security staff monitoring age, intoxication, or safety", "Only the accountant who never works during service", "Only the landlord", "Only the customer's friend"],
      answer: 0,
      why: "Security and door roles can be part of monitoring age, intoxication, and safety."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "In a licensed establishment, alcohol can generally be sold and served Monday to Sunday between:",
      choices: ["9:00 a.m. and 2:00 a.m.", "7:00 a.m. and 11:00 p.m.", "Noon and midnight only", "24 hours a day in all bars"],
      answer: 0,
      why: "The licensed-establishment service window is generally 9 a.m. to 2 a.m."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "On New Year's Eve, December 31, licensed establishments may generally sell and serve alcohol until:",
      choices: ["3:00 a.m.", "2:00 a.m. only", "11:00 p.m.", "Noon"],
      answer: 0,
      why: "The module shows the New Year's Eve extension to 3:00 a.m."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "A guest orders a drink at 1:55 a.m., but the order is not ready until 2:05 a.m. when stop-service is 2:00 a.m. Can it be served?",
      choices: ["No, it must be served before the stop-service time", "Yes, because it was ordered before 2:00 a.m.", "Yes, if the guest is a regular", "Yes, if the drink is already poured"],
      answer: 0,
      why: "Orders must be served before the legal stop-service time."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "After stop-service time, all alcohol and containers such as glasses and bottles must be cleared within:",
      choices: ["45 minutes", "5 minutes", "2 hours", "The next business day"],
      answer: 0,
      why: "The course material flags the 45-minute clearing rule."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "A licensed establishment may require every guest to buy two drinks to enter or remain.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. A licensed establishment cannot require a minimum number of drinks."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "During the fall daylight saving change, the Smart Serve rule pattern says clocks are turned back from 2:00 a.m. to 1:00 a.m. and alcohol service may continue until the stop-service time of 2:00 a.m.",
      choices: ["True", "False"],
      answer: 0,
      why: "This is the Smart Serve daylight-saving pattern shown in common module notes: fall back, then continue until stop-service time."
    },
    {
      category: "June 3 LLCA Fortify",
      q: "During the spring daylight saving change, the clock moves forward from 2:00 a.m. to 3:00 a.m. What happens to normal 2:00 a.m. stop service?",
      choices: ["Service stops when the clock moves forward at 2:00 a.m.", "Service gets an extra hour", "Alcohol can be served until 4:00 a.m.", "All rules are suspended"],
      answer: 0,
      why: "Spring forward does not give extra service time; the 2:00 a.m. hour disappears."
    },
    {
      category: "June 3 Endorsements",
      q: "Can a liquor sales licensee temporarily extend its licensed area?",
      choices: ["Yes, with a Temporary Extension Endorsement/approval", "No, never", "Only if every guest is over 25", "Only if no alcohol is sold"],
      answer: 0,
      why: "The temporary-extension endorsement is the permission for this situation."
    },
    {
      category: "June 3 Endorsements",
      q: "Can a liquor sales licensee sell and deliver liquor to patrons at a different location if it has the proper delivery endorsement?",
      choices: ["Yes", "No"],
      answer: 0,
      why: "A Delivery Endorsement is the permission tested in the module."
    },
    {
      category: "June 3 Endorsements",
      q: "Before liquor delivery is completed, the recipient must be:",
      choices: ["At least 19 and not intoxicated", "At least 18 and asleep", "Any age if prepaid", "A regular customer only"],
      answer: 0,
      why: "Delivery must not be made to an underage or intoxicated recipient."
    },
    {
      category: "June 3 Endorsements",
      q: "The By-the-Glass Endorsement for a manufacturer generally allows the manufacturer to:",
      choices: ["Sell and serve its own products for on-site consumption", "Sell student cards", "Ignore Sandy's Law", "Serve homemade alcohol brought by guests"],
      answer: 0,
      why: "By-the-Glass is a manufacturer's permission to sell/serve its own products on site."
    },
    {
      category: "June 3 Endorsements",
      q: "Under Take Home the Rest, what alcohol can a guest take home?",
      choices: ["A partially consumed commercially made bottle of wine served with a meal", "Any opened beer", "A homemade bottle brought by another guest", "All leftover alcohol from the event"],
      answer: 0,
      why: "The endorsement is specifically about a commercially made bottle of wine served with a meal."
    },
    {
      category: "June 3 Endorsements",
      q: "Under Take Home the Rest, the bottle must be:",
      choices: ["Recorked and placed in a one-time-use tamper-proof bag", "Left open on the table", "Poured into a plastic cup", "Given to the designated driver only"],
      answer: 0,
      why: "The module shows recorking and a one-time-use tamper-proof bag."
    },
    {
      category: "June 3 Endorsements",
      q: "After receiving a Take Home the Rest bottle, the guest should:",
      choices: ["Leave immediately", "Open it again at the bar", "Share it with another table", "Drink it in the parking lot"],
      answer: 0,
      why: "The guest must be leaving immediately."
    },
    {
      category: "June 3 Endorsements",
      q: "If a Take Home the Rest bottle is transported in a vehicle, it should be:",
      choices: ["In the trunk or otherwise not readily accessible", "Held by the driver", "Placed in the front cupholder", "Opened to prove it is wine"],
      answer: 0,
      why: "Open/partially consumed alcohol should not be readily accessible in the vehicle."
    },
    {
      category: "June 3 SOP",
      q: "A Special Occasion Permit is required for private events held in a personal residence.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. The module specifically tests that a private event in a residence does not require an SOP."
    },
    {
      category: "June 3 SOP",
      q: "A private wedding reception in a banquet hall where alcohol is served may require an SOP if the venue is not otherwise licensed for the event.",
      choices: ["True", "False"],
      answer: 0,
      why: "The residence exception is narrow. Private events outside a residence often need the correct permit."
    },
    {
      category: "June 3 SOP",
      q: "Can homemade alcohol be served at a private event under the Smart Serve SOP rules shown in the module?",
      choices: ["No", "Yes, if it tastes professional", "Yes, if it is wine only", "Yes, if guests are over 25"],
      answer: 0,
      why: "The module tests this directly: homemade alcohol cannot be served at a private event."
    },
    {
      category: "June 3 SOP",
      q: "At a private SOP event, liquor served or sold must be purchased under authority of the permit from approved sources such as:",
      choices: ["LCBO, Brewers Retail/The Beer Store, or authorized manufacturer retail stores", "A guest's basement bar only", "Any online marketplace", "A homemade supplier"],
      answer: 0,
      why: "The module lists approved retail/manufacturer sources and prohibits homemade alcohol."
    },
    {
      category: "June 3 SOP",
      q: "At a private event, can alcohol be given away as a prize?",
      choices: ["No", "Yes, always", "Only wine", "Only if the prize is under $25"],
      answer: 0,
      why: "Private-event rules prohibit alcohol as a prize."
    },
    {
      category: "June 3 SOP",
      q: "At a private event, can alcohol be sold to guests for personal profit?",
      choices: ["No", "Yes, if guests are invited", "Yes, if the host is Smart Serve certified", "Yes, if the event is indoors"],
      answer: 0,
      why: "Private events cannot be used for personal gain from alcohol sales."
    },
    {
      category: "June 3 SOP",
      q: "At a private event, can guests remove alcohol from the event?",
      choices: ["No", "Yes, any leftover alcohol belongs to guests", "Only if they paid admission", "Only if the bottle is unopened"],
      answer: 0,
      why: "The module lists that alcohol cannot be removed by patrons from a private event."
    },
    {
      category: "June 3 SOP",
      q: "Which statement best describes a private event SOP?",
      choices: ["Invitation-only and not open to the general public", "Open to anyone walking by", "Always advertised on public social media", "Only for professional sports tailgates"],
      answer: 0,
      why: "Private events are for invited guests, not the general public."
    },
    {
      category: "June 3 SOP",
      q: "A private event may be advertised through public social media.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. The module says private events cannot be advertised, including via public social media."
    },
    {
      category: "June 3 SOP",
      q: "Who can attend a private event?",
      choices: ["Only invited guests", "Anyone in the public", "Only AGCO inspectors", "Only people who buy drink tickets"],
      answer: 0,
      why: "Private events are limited to invited guests."
    },
    {
      category: "June 3 SOP",
      q: "A private event cannot promote the sale of liquor.",
      choices: ["True", "False"],
      answer: 0,
      why: "The module lists this as a private-event conduct rule."
    },
    {
      category: "June 3 SOP",
      q: "A private event can be used for personal gain or to help a business if alcohol sales are low.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. Private-event rules prohibit personal gain or business promotion."
    },
    {
      category: "June 3 SOP",
      q: "A private event cannot encourage drinking contests or games that lead to excessive drinking.",
      choices: ["True", "False"],
      answer: 0,
      why: "The course repeatedly flags drinking games/contests as high-risk and not allowed in this context."
    },
    {
      category: "June 3 SOP",
      q: "Under an SOP, staff selling, serving, sampling, handling liquor, or selling drink tickets must be at least:",
      choices: ["18", "16", "19", "25"],
      answer: 0,
      why: "The module states SOP staff in these roles must be at least 18 years old."
    },
    {
      category: "June 3 SOP",
      q: "Smart Serve certification is always legally required under every SOP, with no exceptions.",
      choices: ["True", "False"],
      answer: 1,
      why: "The module says it is strongly recommended and may be required by a Municipal Alcohol Policy, but is not always required solely under the SOP."
    },
    {
      category: "June 3 SOP",
      q: "Which permit is for a public event where alcohol is sold?",
      choices: ["Sale Permit", "No-Sale Permit", "Private residence exception", "BYID permit"],
      answer: 0,
      why: "A Sale Permit is used when alcohol is sold at a public event."
    },
    {
      category: "June 3 SOP",
      q: "Which permit is for a public event where alcohol is served but not sold?",
      choices: ["No-Sale Permit", "Sale Permit", "Wine Boutique Endorsement", "Ontario Photo Card"],
      answer: 0,
      why: "A No-Sale Permit covers service without alcohol sales."
    },
    {
      category: "June 3 SOP",
      q: "A Tailgate Permit is connected to tailgate events tied to eligible sporting events.",
      choices: ["True", "False"],
      answer: 0,
      why: "The module lists Sale Tailgate and No-Sale Tailgate permit types."
    },
    {
      category: "June 3 Advertising",
      q: "Alcohol advertising and promotions should promote responsible use and the product, not excessive consumption.",
      choices: ["True", "False"],
      answer: 0,
      why: "The advertising standards focus on responsible use."
    },
    {
      category: "June 3 Advertising",
      q: "Which alcohol promotion is most likely NOT allowed?",
      choices: ["A promotion encouraging people to get drunk quickly", "A factual product display", "A menu listing available wine", "A responsible sampling notice"],
      answer: 0,
      why: "Promotions must not encourage intoxication or excessive consumption."
    },
    {
      category: "June 3 Advertising",
      q: "Alcohol advertising may appeal mainly to minors if the product is low alcohol.",
      choices: ["True", "False"],
      answer: 1,
      why: "Alcohol advertising cannot target or appeal to minors."
    },
    {
      category: "June 3 Advertising",
      q: "Which association is prohibited in alcohol advertising?",
      choices: ["Alcohol with driving or operating machinery", "Alcohol with a plain price list", "Alcohol with a licence number", "Alcohol with a legal menu description"],
      answer: 0,
      why: "Advertising cannot associate alcohol with driving, machinery, dangerous activities, or similar unsafe ideas."
    },
    {
      category: "June 3 Retail",
      q: "Which licence type is listed in the retail-store module?",
      choices: ["Grocery Store Licence", "Student Card Licence", "Health Card Licence", "Passport Licence"],
      answer: 0,
      why: "Grocery Store Licence is one of the listed retail store licence types."
    },
    {
      category: "June 3 Retail",
      q: "Which one is also a listed retail-store permission?",
      choices: ["Convenience Store Licence", "Ministry of Health Permit", "Taxi Licence", "Private Driver Permit"],
      answer: 0,
      why: "Convenience Store Licence is specifically listed in the retail-sales module."
    },
    {
      category: "June 3 Retail",
      q: "A Wine Boutique Sales Agent Endorsement can allow a licensed grocery store to sell wine in a wine boutique area on behalf of another licensee.",
      choices: ["True", "False"],
      answer: 0,
      why: "The module describes wine boutiques operating inside grocery stores under this endorsement."
    },
    {
      category: "June 3 Retail",
      q: "Licensed convenience and grocery stores may sell which product group, subject to limits?",
      choices: ["Beer, cider, wine, and ready-to-drink beverages", "Only hard spirits in large bottles", "Only homemade alcohol", "Only alcohol brought by customers"],
      answer: 0,
      why: "The visible module text lists beer, cider, wine, and ready-to-drink beverages."
    },
    {
      category: "June 3 Retail",
      q: "In licensed grocery/convenience stores, beer, alcoholic cider, and ready-to-drink beverages may not be greater than:",
      choices: ["7.1% ABV", "18% ABV", "40% ABV", "60% ABV"],
      answer: 0,
      why: "The module shows the 7.1% ABV cap for these product types."
    },
    {
      category: "June 3 Retail",
      q: "In licensed grocery/convenience stores, wine other than cider may not be greater than:",
      choices: ["18% ABV", "7.1% ABV", "40% ABV", "60% ABV"],
      answer: 0,
      why: "The module shows the 18% ABV cap for wine other than cider."
    },
    {
      category: "June 3 Retail",
      q: "Beer, wine including cider, and ready-to-drink beverages sold under grocery/convenience retail rules must not be in containers larger than:",
      choices: ["5 litres", "1 litre", "10 litres", "No limit"],
      answer: 0,
      why: "The module identifies a 5 litre container limit."
    },
    {
      category: "June 3 Retail",
      q: "A convenience store can remove individual cans from a ready-to-sell 6-pack and sell them one by one for extra revenue.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. The module flags this exact trap: do not break apart ready-to-sell packages."
    },
    {
      category: "June 3 Retail",
      q: "All parts of an in-person retail liquor sale, including ordering and payment, must be done within the store, except for online sales rules.",
      choices: ["True", "False"],
      answer: 0,
      why: "The module states ordering and payment must occur in person within the store, excluding online sales."
    },
    {
      category: "June 3 Retail",
      q: "What are the general retail sale and pickup hours for licensed grocery/convenience stores?",
      choices: ["7:00 a.m. to 11:00 p.m.", "9:00 a.m. to 2:00 a.m.", "24 hours", "Noon to 6:00 p.m."],
      answer: 0,
      why: "Smart Serve lists retail sale hours as 7 a.m. to 11 p.m."
    },
    {
      category: "June 3 Retail",
      q: "What are the general alcohol delivery hours to customers from eligible licensed establishments or retail stores?",
      choices: ["9:00 a.m. to 11:00 p.m.", "7:00 a.m. to 2:00 a.m.", "24 hours", "2:00 a.m. to 7:00 a.m."],
      answer: 0,
      why: "Smart Serve lists liquor delivery services from 9 a.m. to 11 p.m."
    },
    {
      category: "June 3 Retail",
      q: "A wine boutique inside a grocery store must be easy to identify as separate from the rest of the grocery store.",
      choices: ["True", "False"],
      answer: 0,
      why: "The module says wine boutiques need a separate, identifiable presence."
    },
    {
      category: "June 3 Retail",
      q: "A wine boutique must have its own unique store name and clear, prominent signage.",
      choices: ["True", "False"],
      answer: 0,
      why: "This is one of the wine boutique requirements shown in the recording."
    },
    {
      category: "June 3 Retail",
      q: "A wine boutique may sell ready-to-drink beverages.",
      choices: ["True", "False"],
      answer: 1,
      why: "The module notes wine boutiques may not sell ready-to-drink beverages."
    },
    {
      category: "June 3 Retail",
      q: "A wine boutique may sell wine, other than cider, with alcohol content greater than 18% ABV.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. Wine other than cider cannot exceed 18% ABV under this rule."
    },
    {
      category: "June 3 Retail",
      q: "A wine boutique may sell cider with alcohol content greater than 7.1% ABV.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. Cider cannot exceed 7.1% ABV under the module's retail limits."
    },
    {
      category: "June 3 Retail",
      q: "A wine boutique may sell liquor containers with a volume over 5 litres.",
      choices: ["True", "False"],
      answer: 1,
      why: "False. The container size limit is 5 litres."
    },
    {
      category: "June 3 Mixed Review",
      q: "Which answer best matches the safest test instinct for AGCO suspension risk?",
      choices: ["Serving or selling alcohol to someone under 19", "Asking for valid ID from someone who looks under 25", "Posting Sandy's Law signage", "Refusing an intoxicated customer"],
      answer: 0,
      why: "Serving/selling to minors is illegal and can lead to AGCO/police penalties and licence consequences."
    },
    {
      category: "June 3 Mixed Review",
      q: "Serving or selling alcohol to an underage customer can lead to which consequences?",
      choices: ["AGCO monetary penalties, police involvement, and suspension/revocation risk", "Only a friendly warning", "No consequence if the customer looked older", "Only a refund"],
      answer: 0,
      why: "Smart Serve says underage service is an LLCA offence and can involve AGCO and police consequences."
    },
    {
      category: "June 3 Mixed Review",
      q: "Which action is most aligned with the LLCA/Smart Serve purpose?",
      choices: ["Prevent underage drinking, intoxication, impaired driving, and alcohol-related harm", "Sell as many drinks as possible no matter what", "Ignore inspectors unless they have a reservation", "Accept any ID that has a photo"],
      answer: 0,
      why: "The LLCA and Smart Serve focus on lawful, responsible sale/service and harm prevention."
    },
    {
      category: "June 3 Mixed Review",
      q: "Which scenario should trigger refusal or extra control?",
      choices: ["A delivery recipient is intoxicated", "A guest presents valid ID and is sober", "Sandy's Law sign is posted", "A staff member asks for backup"],
      answer: 0,
      why: "Do not deliver or sell alcohol to an intoxicated person."
    },
    {
      category: "June 3 Mixed Review",
      q: "Which question is the classic Smart Serve trap?",
      choices: ["Private event in residence requires no SOP", "All private events everywhere need an SOP", "Homemade alcohol is allowed at private events", "Retailers can sell single cans from sealed 6-packs"],
      answer: 0,
      why: "The residence exception is a specific tested distinction."
    },
    {
      category: "June 3 Mixed Review",
      q: "Which statement is correct?",
      choices: ["A licence, permit, or endorsement gives permission only within its rules and conditions", "Once licensed, all alcohol laws stop applying", "A permit holder can ignore the Registrar's Standards", "SOPs are issued by the customer"],
      answer: 0,
      why: "Permissions are conditional and must be used within the LLCA, regulations, standards, and licence/permit terms."
    },
    {
      category: "June 3 Mixed Review",
      q: "Which item should you memorize as a paired retail limit?",
      choices: ["7.1% for beer/cider/RTDs and 18% for wine other than cider", "18% for beer and 7.1% for wine", "40% for all grocery-store alcohol", "No ABV limits"],
      answer: 0,
      why: "The test can swap these values, so memorize the pairing."
    },
    {
      category: "June 3 Mixed Review",
      q: "Which item should you memorize as the paired hours distinction?",
      choices: ["Licensed establishments 9 a.m.-2 a.m.; retail sale/pickup 7 a.m.-11 p.m.", "Licensed establishments 7 a.m.-11 p.m.; retail 9 a.m.-2 a.m.", "Both are 24 hours", "Both end at 6 p.m."],
      answer: 0,
      why: "This is a high-value distinction: on-premise service hours differ from retail sale hours."
    },
    {
      category: "June 3 Mixed Review",
      q: "If a question asks what the LLCA outlines, which answer is strongest?",
      choices: ["Responsible sale, service, delivery, permitted premises, training, advertising, records, and enforcement", "Only food safety temperatures", "Only federal passport rules", "Only employee payroll rules"],
      answer: 0,
      why: "The module lists broad LLCA powers around alcohol operations and compliance."
    },
    {
      category: "June 3 Mixed Review",
      q: "If a question asks what convenience stores are allowed to do, which answer is strongest?",
      choices: ["Sell eligible beer, cider, wine, and ready-to-drink beverages within hours and limits", "Sell any alcohol product at any time", "Serve opened drinks for on-site consumption without a licence", "Break apart packages to sell singles"],
      answer: 0,
      why: "Convenience-store alcohol is limited by product, ABV, container, package, and hours rules."
    }
  ];

  window.STUDY_DATA.facts.push(...facts);
  window.STUDY_DATA.flashcards.push(...flashcards);
  window.STUDY_DATA.questions.push(...questions);
})();
