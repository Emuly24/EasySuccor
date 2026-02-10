const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Variants for diversified phrasing
const variants = {
  // --- Greeting Variants ---
  categoryInfo: {
    "student": [
      "Category: Student. Charges — CV MK6,000, Editable CV MK10,000, Cover letter MK5,000, Resume + Cover Letter MK8,000.",
      "You’re a Student. Pricing: CV MK6,000, Editable CV MK10,000, Cover letter MK5,000, Resume + Cover Letter MK8,000.",
      "As a student starting out, here are your charges: CV MK6,000, Editable CV MK10,000, Cover letter MK5,000, Resume + Cover Letter MK8,000.",
      "Student category selected. Charges: CV MK6,000, Editable CV MK10,000, Cover letter MK5,000, Resume + Cover Letter MK8,000."
    ],
    "recent graduate": [
      "Category: Recent Graduate. Charges — CV MK7,000, Editable CV MK10,000, Cover letter MK5,000, Resume + Cover Letter MK9,000.",
      "You’re a Recent Graduate. Pricing: CV MK7,000, Editable CV MK10,000, Cover letter MK5,000, Resume + Cover Letter MK9,000.",
      "As a recent graduate, here are your charges: CV MK7,000, Editable CV MK10,000, Cover letter MK5,000, Resume + Cover Letter MK9,000.",
      "Recent Graduate category selected. Charges: CV MK7,000, Editable CV MK10,000, Cover letter MK5,000, Resume + Cover Letter MK9,000."
    ],
    "professional": [
      "Category: Professional. Charges — CV MK8,000, Editable CV MK12,000, Cover letter MK7,000, Resume + Cover Letter MK10,000, Editable Resume + Cover Letter MK12,000.",
      "You’re a Working Professional. Pricing: CV MK8,000, Editable CV MK12,000, Cover letter MK7,000, Resume + Cover Letter MK10,000, Editable Resume + Cover Letter MK12,000.",
      "As a professional, here are your charges: CV MK8,000, Editable CV MK12,000, Cover letter MK7,000, Resume + Cover Letter MK10,000, Editable Resume + Cover Letter MK12,000.",
      "Professional category selected. Charges: CV MK8,000, Editable CV MK12,000, Cover letter MK7,000, Resume + Cover Letter MK10,000, Editable Resume + Cover Letter MK12,000."
    ],
    "non-working professional": [
      "Category: Non‑Working Professional. Charges — CV MK8,000, Editable CV MK10,000, Cover letter MK7,000, Resume + Cover Letter MK10,000, Editable Resume + Cover Letter MK12,000.",
      "You’re a Non‑Working Professional. Pricing: CV MK8,000, Editable CV MK10,000, Cover letter MK7,000, Resume + Cover Letter MK10,000, Editable Resume + Cover Letter MK12,000.",
      "As a non‑working professional, here are your charges: CV MK8,000, Editable CV MK10,000, Cover letter MK7,000, Resume + Cover Letter MK10,000, Editable Resume + Cover Letter MK12,000.",
      "Non‑Working Professional category selected. Charges: CV MK8,000, Editable CV MK10,000, Cover letter MK7,000, Resume + Cover Letter MK10,000, Editable Resume + Cover Letter MK12,000."
    ],
    "returning client": [
      "Welcome back, Returning Client. Charges — Minor CV updates MK3,000, Major revisions MK6,000, Editable CV MK10,000, Cover letter MK5,000, CV + Cover Letter update package MK7,000.",
      "Returning Client category selected. Pricing: Minor CV updates MK3,000, Major revisions MK6,000, Editable CV MK10,000, Cover letter MK5,000, CV + Cover Letter update package MK7,000.",
      "As a returning client, here are your charges: Minor CV updates MK3,000, Major revisions MK6,000, Editable CV MK10,000, Cover letter MK5,000, CV + Cover Letter update package MK7,000.",
      "Glad to see you again! Charges: Minor CV updates MK3,000, Major revisions MK6,000, Editable CV MK10,000, Cover letter MK5,000, CV + Cover Letter update package MK7,000."
    ],

  greeting: [
    [
      "Welcome to EasySuccor — your trusted partner in shaping your first impression.",
      "Please tell me your category:",
      "- Student",
      "- Recent Graduate",
      "- Professional",
      "- Non-Working Professional",
      "- Returning Client"
    ],
	
    [
      "Hello and welcome to EasySuccor!",
      "We’re here to help you craft a professional CV or application letter.",
      "Choose your category:",
      "- Student",
      "- Recent Graduate",
      "- Professional",
      "- Non-Working Professional",
      "- Returning Client"
    ],
    [
      "Greetings from EasySuccor!",
      "Let’s get started on building your CV or application letter.",
      "Which category best describes you?",
      "- Student",
      "- Recent Graduate",
      "- Professional",
      "- Non-Working Professional",
      "- Returning Client"
    ]
  ],

  // --- Service Selection Variants ---
  newCVChoice: [
    [
      "You’ve selected New CV Creation.",
      "We’ll craft a professional CV tailored to your details.",
      "Do you agree to proceed with providing your information so we can begin?"
    ],
    [
      "New CV Creation chosen.",
      "This service builds a fresh CV from the ground up using your details.",
      "Do you agree to continue by sharing your personal information?"
    ],
    [
      "You’ve gone with New CV Creation.",
      "We’ll design a new CV that highlights your strengths and achievements.",
      "Do you agree to proceed with giving us your details?"
    ],
    [
      "New CV Creation has been selected.",
      "This option creates a brand‑new CV based on the information you provide.",
      "Do you agree to continue with this service?"
    ]
  ],

  editableCVChoice: [
    [
      "You’ve selected Editable CV.",
      "We will send your CV in Word format so you can edit it yourself.",
      "If you want us to edit it for you, that will fall under CV Update instead.",
      "Do you agree to proceed with Editable CV as described?"
    ],
    [
      "Editable CV chosen.",
      "This option means you’ll receive your CV in Word format for self‑editing.",
      "If you prefer us to make changes, that service is CV Update.",
      "Do you agree to continue with Editable CV?"
    ],
    [
      "You’ve gone with Editable CV.",
      "We’ll provide your CV in Word format, giving you full control to edit it yourself.",
      "If you’d like us to handle edits, that’s covered under CV Update.",
      "Do you agree to proceed with Editable CV?"
    ],
    [
      "Editable CV has been selected.",
      "This service delivers your CV in Word format for your own editing.",
      "If you want EasySuccor to edit it, please choose CV Update instead.",
      "Do you agree to continue with Editable CV?"
    ]
  ],

  coverLetterChoice: [
    [
      "You’ve selected Cover Letter/Application Letter.",
      "We’ll help you craft a professional cover letter tailored to your application.",
      "Do you agree to proceed with providing your cover letter details?"
    ],
    [
      "Cover Letter service chosen.",
      "This option allows us to create a strong application letter for your target role.",
      "Do you agree to continue by sharing your cover letter information?"
    ],
    [
      "You’ve gone with Cover Letter/Application Letter.",
      "We’ll design a letter that highlights your motivation and suitability.",
      "Do you agree to proceed with this service?"
    ],
    [
      "Cover Letter service has been selected.",
      "We’ll prepare a professional application letter based on the details you provide.",
      "Do you agree to continue with Cover Letter creation?"
    ]
  ],

  cvUpdateChoice: [
    [
      "You’ve selected CV Update.",
      "This service applies changes to your existing CV crafted by EasySuccor.",
      "Do you agree to proceed with providing your update details?"
    ],
    [
      "CV Update chosen.",
      "We’ll revise your CV based on the updates you share.",
      "Do you agree to continue with CV Update?"
    ],
    [
      "You’ve gone with CV Update.",
      "This option lets us apply modifications to your current CV.",
      "Do you agree to proceed with this service?"
    ],
    [
      "CV Update has been selected.",
      "We’ll update your CV according to the information you provide.",
      "Do you agree to continue with CV Update?"
    ]
  ],

  // --- Flow Variants (from mother code) ---
  personalInfo: [
    `I’ve noted your personal details: Name \${params.firstName} \${params.lastName}, Phone \${params.phoneNumber}, Email \${params.email}.`,
    `So far, you’ve shared: Name \${params.firstName} \${params.lastName}, Contact \${params.phoneNumber}, Email \${params.email}.`,
    `Your personal information is: \${params.firstName} \${params.lastName}, Phone \${params.phoneNumber}, Email \${params.email}.`,
    `Okay, I’ve recorded your details: Name \${params.firstName} \${params.lastName}, Phone \${params.phoneNumber}, Email \${params.email}.`
  ],

  educationInfo: {
    "Completed": [
      `Your qualification is \${params.qualification} in \${params.fieldOfStudy}, completed at \${params.institutionName}.`,
      `You graduated with \${params.qualification} in \${params.fieldOfStudy} from \${params.institutionName}.`,
      `I’ve noted your completed studies: \${params.qualification}, Field: \${params.fieldOfStudy}.`,
      `So far, your education includes \${params.qualification} in \${params.fieldOfStudy}, Graduation: \${params.graduationDate}.`
    ],
    "Ongoing": [
      `You’re currently pursuing \${params.qualification} in \${params.fieldOfStudy} at \${params.institutionName}.`,
      `I’ve noted your ongoing studies: \${params.qualification}, Field: \${params.fieldOfStudy}.`,
      `Your current education is \${params.qualification} in \${params.fieldOfStudy}, expected graduation: \${params.estimatedGraduationDate}.`,
      `So far, you’re studying \${params.qualification} at \${params.institutionName}.`
    ]
  },

  employmentInfo: {
    "Current": [
      `You are currently working as \${params.jobTitle} at \${params.companyName}.`,
      `Your present role is \${params.jobTitle} with \${params.companyName}.`,
      `I’ve noted your current employment: \${params.jobTitle}, Company: \${params.companyName}.`,
      `So far, you’re employed as \${params.jobTitle} at \${params.companyName}.`
    ],
    "Past": [
      `You previously worked as \${params.jobTitle} at \${params.companyName}.`,
      `Your past role was \${params.jobTitle} with \${params.companyName}.`,
      `I’ve recorded your former employment: \${params.jobTitle}, Company: \${params.companyName}.`,
      `So far, your work history includes \${params.jobTitle} at \${params.companyName}.`
    ]
  },

  certificationInfo: [
    `Certification recorded: \${params.certificateName}, issued by \${params.issuingOrganization}.`,
    `You’ve completed \${params.certificateName} from \${params.issuingOrganization}.`,
    `I’ve noted your certification: \${params.certificateName}, Date: \${params.completionDate || "N/A"}.`,
    `Your certification details are: \${params.certificateName}, Organization: \${params.issuingOrganization}.`
  ],

  refereeInfo: [
    `Referee added: \${params.refereeName}, Position: \${params.refereePosition || "N/A"}, Email: \${params.refereeEmail}.`,
    `I’ve noted your referee: \${params.refereeName}, Company: \${params.refereeCompany || "N/A"}, Email: \${params.refereeEmail}.`,
    `Your referee details are: \${params.refereeName}, Position: \${params.refereePosition || "N/A"}, Email: \${params.refereeEmail}.`,
    `So far, you’ve shared referee: \${params.refereeName}, Contact: \${params.refereeEmail}.`
  ],

    languageInfo: {
    "Fluent": [
      `You speak ${params.language} fluently.`,
      `I’ve noted your fluent language skill: ${params.language}.`,
      `Your language proficiency is fluent in ${params.language}.`,
      `So far, you’ve shared ${params.language} at fluent level.`
    ],
    "Intermediate": [
      `You speak ${params.language} at intermediate level.`,
      `I’ve noted your intermediate skill in ${params.language}.`,
      `Your language proficiency is intermediate in ${params.language}.`,
      `So far, you’ve shared ${params.language} at intermediate level.`
    ],
    "Basic": [
      `You speak ${params.language} at basic level.`,
      `I’ve noted your basic skill in ${params.language}.`,
      `Your language proficiency is basic in ${params.language}.`,
      `So far, you’ve shared ${params.language} at basic level.`
    ]
  },

  paymentMethod: {
    "Airtel Money": [
      `You’ve chosen Airtel Money as your payment option.`,
      `Alright, you’ll be paying via Airtel Money.`,
      `Got it, Airtel Money is your selected method.`,
      `I’ve noted Airtel Money as your payment choice.`
    ],
    "Mo626": [
      `You’ve selected Mo626 for your payment.`,
      `Okay, you’ll be settling the payment through Mo626.`,
      `Got it, Mo626 is your chosen payment method.`,
      `I’ve recorded Mo626 as your payment option.`
    ],
    "Mpamba": [
      `You’ve chosen TNM Mpamba as your payment option.`,
      `Alright, you’ll be paying via Mpamba.`,
      `Got it, Mpamba is your selected method.`,
      `I’ve noted Mpamba as your payment choice.`
    ],
    "Pay Later": [
      `You’ve opted to pay later.`,
      `Alright, you’ll complete the payment at a later stage.`,
      `Got it, you’ve selected the Pay Later option.`,
      `I’ve recorded Pay Later as your payment choice.`
    ]
  },

  paymentProof: [
    `Payment proof received: ${params.paymentProof}.`,
    `I’ve noted your payment confirmation: ${params.paymentProof}.`,
    `Your payment details are: ${params.paymentProof}.`,
    `Alright, I’ve recorded your proof of payment: ${params.paymentProof}.`
  ],

  coverLetter: [
    `Cover letter vacancy captured: Position ${params.positionApplied}, Company ${params.companyApplied}.`,
    `I’ve noted your application: ${params.positionApplied} at ${params.companyApplied}.`,
    `Your cover letter details are: Position ${params.positionApplied}, Company ${params.companyApplied}.`,
    `So far, you’re applying for ${params.positionApplied} at ${params.companyApplied}.`
  ],

  cvUpdateReturning: [
    `Welcome back! Your update has been applied: ${params.updateField} changed to ${params.updateValue}.`,
    `Since you’re a returning client, I’ve updated your CV: ${params.updateField} → ${params.updateValue}.`,
    `Glad to see you again — your CV update is noted: ${params.updateField} updated to ${params.updateValue}.`,
    `As a returning client, your update has been recorded: ${params.updateField} set to ${params.updateValue}.`
  ]
};

// Helper to pick a random variant
function getVariant(intentType, params = {}) {
  const options = variants[intentType];
  if (!options) return ["I’ve noted your details."];

  // Handle nested objects like educationInfo, employmentInfo, languageInfo, paymentMethod
  if (intentType === "educationInfo") {
    const status = params.educationStatus || "Completed";
    return variants.educationInfo[status][Math.floor(Math.random() * variants.educationInfo[status].length)];
  }
  if (intentType === "employmentInfo") {
    const status = params.employmentStatus || "Past";
    return variants.employmentInfo[status][Math.floor(Math.random() * variants.employmentInfo[status].length)];
  }
  if (intentType === "languageInfo") {
    const proficiency = params.proficiency || "Basic";
    return variants.languageInfo[proficiency][Math.floor(Math.random() * variants.languageInfo[proficiency].length)];
  }
  if (intentType === "paymentMethod") {
    const method = params.paymentMethod || "Pay Later";
    return variants.paymentMethod[method][Math.floor(Math.random() * variants.paymentMethod[method].length)];
  }

  // Handle simple arrays
  return options[Math.floor(Math.random() * options.length)];
}

  // fallback for simple arrays
  const options = variants[intentType] || ["I’ve noted your details."];
  return options[Math.floor(Math.random() * options.length)];
}
// 🔧 Agreement helper with reconsider prompt
function buildAgreementResponse(params, session, nextContext, agreeMessages, disagreeMessages) {
  if (params.agreement === "Agree") {
    return {
      fulfillmentMessages: agreeMessages.map(msg => ({ text: { text: [msg] } })),
      outputContexts: nextContext
        ? [{ name: `${session}/contexts/${nextContext}`, lifespanCount: 1 }]
        : []
    };
  } else {
    return {
      fulfillmentMessages: [
        ...disagreeMessages.map(msg => ({ text: { text: [msg] } })),
        { text: { text: ["Would you like to reconsider and proceed with this service?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_agreement`, lifespanCount: 1 }
      ]
    };
  }
}

//  Reconsider case handler
function handleReconsider(params, session) {
  if (params.reconsider === "Yes") {
    const newCVLines = getVariant("newCVChoice", params);
    const editableCVLines = getVariant("editableCVChoice", params);
    const coverLetterLines = getVariant("coverLetterChoice", params);
    const updateLines = getVariant("cvUpdateChoice", params);

    return {
      fulfillmentMessages: [
        { text: { text: ["Thank you for reconsidering. Let’s start again from Service Selection."] } },
        { text: { text: ["Here are your service options again:"] } },
        ...newCVLines.map(line => ({ text: { text: [line] } })),
        ...editableCVLines.map(line => ({ text: { text: [line] } })),
        ...coverLetterLines.map(line => ({ text: { text: [line] } })),
        ...updateLines.map(line => ({ text: { text: [line] } }))
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_service_choice`, lifespanCount: 1 }
      ]
    };
  } else {
    return {
      fulfillmentMessages: [
        { text: { text: ["Understood. We will not proceed further."] } },
        { text: { text: ["Thank you for considering EasySuccor."] } }
      ],
      outputContexts: []
    };
  }
}


// Webhook handler
app.post("/webhook", (req, res) => {
  try {
    const queryResult = req.body.queryResult || {};
    const intent = queryResult.intent?.displayName || "unknown";
    const params = queryResult.parameters || {};
    const session = req.body.session || "default";

    // Expanded logging
    console.log(`[${new Date().toISOString()}] Webhook triggered`);
    console.log("Session:", session);
    console.log("Intent:", intent);
    console.log("Params:", params);
    console.log("Incoming contexts:", queryResult.outputContexts);

    switch (intent) {
      // New CV Choice
      case "CV_NewCVChoice":
        const newCVLines = getVariant("newCVChoice", params);
        const responseNewCV = {
          fulfillmentMessages: newCVLines.map(line => ({ text: { text: [line] } })),
          outputContexts: [
            { name: `${session}/contexts/awaiting_new_cv_agreement`, lifespanCount: 1 }
          ]
        };
        console.log("Response being sent:", JSON.stringify(responseNewCV, null, 2));
        return res.json(responseNewCV);

      // Editable CV Choice
      case "CV_EditableCVChoice":
        const editableCVLines = getVariant("editableCVChoice", params);
        const responseEditableCV = {
          fulfillmentMessages: editableCVLines.map(line => ({ text: { text: [line] } })),
          outputContexts: [
            { name: `${session}/contexts/awaiting_editable_cv_agreement`, lifespanCount: 1 }
          ]
        };
        console.log("Response being sent:", JSON.stringify(responseEditableCV, null, 2));
        return res.json(responseEditableCV);

      // Cover Letter Choice
      case "CV_CoverLetterChoice":
        const coverLetterLines = getVariant("coverLetterChoice", params);
        const responseCoverLetterChoice = {
          fulfillmentMessages: coverLetterLines.map(line => ({ text: { text: [line] } })),
          outputContexts: [
            { name: `${session}/contexts/awaiting_cover_letter_agreement`, lifespanCount: 1 }
          ]
        };
        console.log("Response being sent:", JSON.stringify(responseCoverLetterChoice, null, 2));
        return res.json(responseCoverLetterChoice);

      // CV Update Choice
      case "CV_UpdateChoice":
        const updateLines = getVariant("cvUpdateChoice", params);
        const responseUpdateChoice = {
          fulfillmentMessages: updateLines.map(line => ({ text: { text: [line] } })),
          outputContexts: [
            { name: `${session}/contexts/awaiting_update_agreement`, lifespanCount: 1 }
          ]
        };
        console.log("Response being sent:", JSON.stringify(responseUpdateChoice, null, 2));
        return res.json(responseUpdateChoice);
	 // New CV Agreement
      case "cv_new_cv_agreement":
        const responseNewAgreement = buildAgreementResponse(
          params,
          session,
          "awaiting_personal_info",
          [
            "Thank you for agreeing to proceed with New CV Creation.",
            "Let’s continue with your personal information.",
            "Enter your first name to begin."
          ],
          [
            "We understand you don’t agree to proceed with New CV Creation.",
            "Unfortunately, we cannot continue without your details."
          ]
        );
        console.log("Response being sent:", JSON.stringify(responseNewAgreement, null, 2));
        return res.json(responseNewAgreement);

      // Editable CV Agreement
      case "cv_editable_cv_agreement":
        const responseEditableAgreement = buildAgreementResponse(
          params,
          session,
          "awaiting_personal_info",
          [
            "Thank you for agreeing to proceed with Editable CV.",
            "Let’s continue with your personal information.",
            "Enter your first name to begin."
          ],
          [
            "You’ve chosen not to proceed with Editable CV.",
            "Without agreement, we cannot continue."
          ]
        );
        console.log("Response being sent:", JSON.stringify(responseEditableAgreement, null, 2));
        return res.json(responseEditableAgreement);

      // Cover Letter Agreement
      case "cv_cover_letter_agreement":
        const responseCoverAgreement = buildAgreementResponse(
          params,
          session,
          "awaiting_cover_letter_info",
          [
            "Thank you for agreeing to provide your cover letter details.",
            "Please provide the position you are applying for and the company name."
          ],
          [
            "We cannot proceed without your cover letter details.",
            "Thank you for considering EasySuccor."
          ]
        );
        console.log("Response being sent:", JSON.stringify(responseCoverAgreement, null, 2));
        return res.json(responseCoverAgreement);

      // CV Update Agreement
      case "cv_update_agreement":
        const responseUpdateAgreement = buildAgreementResponse(
          params,
          session,
          "awaiting_update_info",
          [
            "Thank you for agreeing to proceed with CV Update.",
            "Please specify which section of your CV you want to update."
          ],
          [
            "You’ve chosen not to proceed with CV Update.",
            "Without agreement, we cannot continue."
          ]
        );
        console.log("Response being sent:", JSON.stringify(responseUpdateAgreement, null, 2));
        return res.json(responseUpdateAgreement);

      // Reconsider Agreement Case
      case "cv_reconsider_agreement":
        const responseReconsider = handleReconsider(params, session);
        console.log("Response being sent:", JSON.stringify(responseReconsider, null, 2));
        return res.json(responseReconsider);
		
// 0. Greeting → Category selection
case "Greeting":
  const greetingLines = getVariant("greeting", params);
  const responseGreeting = {
    fulfillmentMessages: greetingLines.map(line => ({ text: { text: [line] } })),
    outputContexts: [
      { name: `${session}/contexts/awaiting_cv_category`, lifespanCount: 1 }
    ]
  };
  return res.json(responseGreeting);

// 1. CV Category → Payment Agreement
case "cv_category":
  const categoryRaw = Array.isArray(params.category) ? params.category[0] : params.category;
  const category = categoryRaw ? categoryRaw.toLowerCase() : "";

  // Use getVariant helper for consistency
  const categoryLine = getVariant("categoryInfo", { category });

  const responseCategory = {
    fulfillmentMessages: [
      { text: { text: [categoryLine] } },
      { text: { text: ["Do you agree to proceed with these charges?"] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_agreement`, lifespanCount: 1 }
    ]
  };
  console.log("Response being sent:", JSON.stringify(responseCategory, null, 2));
  return res.json(responseCategory);

// 2. Payment Agreement → Service Selection
case "cv_payment_agreement":
  if (params.agreement === "Agree") {
    const responseAgreement = {
      fulfillmentMessages: [
        { text: { text: ["Thank you for agreeing to the charges."] } },
        { text: { text: ["Let’s continue to Service selection."] } },
        { text: { text: ["Tell me which service you would like:"] } },
        { text: { text: ["- New CV Creation"] } },
        { text: { text: ["- Editable CV"] } },
        { text: { text: ["- Cover Letter/Application Letter"] } },
        { text: { text: ["- Both CV & Cover Letter"] } },
        { text: { text: ["- CV Update"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_service_selection`, lifespanCount: 1 }
      ]
    };
    return res.json(responseAgreement);
  } else {
    const responseDisagree = {
      fulfillmentMessages: [
        { text: { text: ["We understand you don’t agree to the charges. Unfortunately, we cannot proceed further."] } },
        { text: { text: ["Thank you for considering EasySuccor."] } },
        { text: { text: ["Would you like to reconsider and proceed with the service selection?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_payment`, lifespanCount: 1 }
      ]
    };
    return res.json(responseDisagree);
  }
// 3. Service Selection → Personal Info
case "CV_ServiceSelection":
  const responseServiceSelection = {
    fulfillmentMessages: [
      { text: { text: [getVariant("serviceSelection", params)] } },
      { text: { text: ["Let’s move to your personal information."] } },
      { text: { text: ["Enter your first name to begin."] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_personal_info`, lifespanCount: 1 }
    ]
  };
  console.log("Response being sent:", JSON.stringify(responseServiceSelection, null, 2));
  return res.json(responseServiceSelection);


// 4. Personal Info → Education
case "CV_PersonalInfo":
  if (!params.firstName) {
    const responseMissingFirstName = {
      fulfillmentMessages: [
        { text: { text: ["Enter your first name to continue."] } } // ✅ corrected prompt
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_personal_info`, lifespanCount: 1 }
      ]
    };
    console.log("Response being sent:", JSON.stringify(responseMissingFirstName, null, 2));
    return res.json(responseMissingFirstName);
  }

  const responsePersonalInfo = {
    fulfillmentMessages: [
      { text: { text: [getVariant("personalInfo", params)] } },
      { text: { text: ["Now let’s move to your education details."] } },
      { text: { text: ["What is your highest qualification?"] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_qualification`, lifespanCount: 1 }
    ]
  };
  console.log("Response being sent:", JSON.stringify(responsePersonalInfo, null, 2));
  return res.json(responsePersonalInfo);


// Personal Info Agreement
case "cv_personal_info_agreement":
  const responsePersonalAgreement = buildAgreementResponse(
    params,
    session,
    "awaiting_personal_info",
    [
      "Thank you for agreeing to provide your personal information.",
      "Let’s move to your personal details.",
      "Enter your first name to begin."
    ],
    [
      "We cannot proceed without your personal information.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  console.log("Response being sent:", JSON.stringify(responsePersonalAgreement, null, 2));
  return res.json(responsePersonalAgreement);


// Reconsider Personal Info
case "cv_reconsider_personal_info":
  const responseReconsiderPersonal = handleReconsider(params, session);
  console.log("Response being sent:", JSON.stringify(responseReconsiderPersonal, null, 2));
  return res.json(responseReconsiderPersonal);

// 5. Education Info → Loop
case "CV_EducationInfo":
  const responseEducationInfo = {
    fulfillmentMessages: [
      { text: { text: [getVariant("educationInfo", params)] } },
      { text: { text: ["Would you like to add another education detail?"] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/education_loop`, lifespanCount: 1 }
    ]
  };
  console.log("Response being sent:", JSON.stringify(responseEducationInfo, null, 2));
  return res.json(responseEducationInfo);

// Education Agreement
case "cv_education_agreement":
  const responseEducationAgreement = buildAgreementResponse(
    params,
    session,
    "education_loop",
    [
      "Thank you for sharing your education details.",
      "Would you like to add another education detail?"
    ],
    [
      "We cannot proceed without your education details.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  console.log("Response being sent:", JSON.stringify(responseEducationAgreement, null, 2));
  return res.json(responseEducationAgreement);

// Reconsider Education
case "cv_reconsider_education":
  const responseReconsiderEducation = handleReconsider(params, session);
  console.log("Response being sent:", JSON.stringify(responseReconsiderEducation, null, 2));
  return res.json(responseReconsiderEducation);



// 7. Employment → Loop
case "CV_EmploymentInfo":
  const responseEmploymentInfo = {
    fulfillmentMessages: [
      { text: { text: [getVariant("employmentInfo", params)] } },
      { text: { text: ["Do you have another work experience to add?"] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/employment_loop`, lifespanCount: 1 }
    ]
  };
  return res.json(responseEmploymentInfo);

// Employment Agreement
case "cv_employment_agreement":
  const responseEmploymentAgreement = buildAgreementResponse(
    params,
    session,
    "employment_loop",
    [
      "Thank you for providing your employment details.",
      "Do you have another work experience to add?"
    ],
    [
      "We cannot proceed without your employment details.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  return res.json(responseEmploymentAgreement);

// Reconsider Employment
case "cv_reconsider_employment":
  const responseReconsiderEmployment = handleReconsider(params, session);
  return res.json(responseReconsiderEmployment);


// 8. Referees → Loop
case "CV_RefereesInfo":
  const responseRefereeInfo = {
    fulfillmentMessages: [
      { text: { text: [getVariant("refereeInfo", params)] } },
      { text: { text: ["Please add at least one more referee."] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/referee_loop`, lifespanCount: 1 }
    ]
  };
  return res.json(responseRefereeInfo);

// Referees Agreement
case "cv_referees_agreement":
  const responseRefereesAgreement = buildAgreementResponse(
    params,
    session,
    "referee_loop",
    [
      "Thank you for providing referee details.",
      "Please add at least one more referee."
    ],
    [
      "We cannot proceed without referee details.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  return res.json(responseRefereesAgreement);

// Reconsider Referees
case "cv_reconsider_referees":
  const responseReconsiderReferees = handleReconsider(params, session);
  return res.json(responseReconsiderReferees);


// 9. Languages → Loop
case "CV_LanguagesInfo":
  const responseLanguageInfo = {
    fulfillmentMessages: [
      { text: { text: [getVariant("languageInfo", params)] } },
      { text: { text: ["Would you like to add another language?"] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/language_loop`, lifespanCount: 1 }
    ]
  };
  return res.json(responseLanguageInfo);

// Languages Agreement
case "cv_languages_agreement":
  const responseLanguagesAgreement = buildAgreementResponse(
    params,
    session,
    "language_loop",
    [
      "Thank you for providing your language details.",
      "Would you like to add another language?"
    ],
    [
      "We cannot proceed without language details.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  return res.json(responseLanguagesAgreement);

// Reconsider Languages
case "cv_reconsider_languages":
  const responseReconsiderLanguages = handleReconsider(params, session);
  return res.json(responseReconsiderLanguages);

// 10. Payment Method → Proof
case "CV_PaymentMethod":
  const responsePaymentMethod = {
    fulfillmentMessages: [
      { text: { text: [getVariant("paymentMethod", params)] } },
      { text: { text: ["Please upload or provide proof of payment (transaction ID or screenshot)."] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_proof`, lifespanCount: 1 }
    ]
  };
  return res.json(responsePaymentMethod);

// Payment Method Agreement
case "cv_payment_method_agreement":
  const responsePaymentMethodAgreement = buildAgreementResponse(
    params,
    session,
    "awaiting_payment_proof",
    [
      "Thank you for agreeing to provide your payment method.",
      "Please upload or provide proof of payment (transaction ID or screenshot)."
    ],
    [
      "We cannot proceed without a payment method.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  return res.json(responsePaymentMethodAgreement);

// Reconsider Payment Method
case "cv_reconsider_payment_method":
  const responseReconsiderPaymentMethod = handleReconsider(params, session);
  return res.json(responseReconsiderPaymentMethod);


// 11. Payment Proof → Completion
case "CV_PaymentProof":
  const responsePaymentProof = {
    fulfillmentMessages: [
      { text: { text: [getVariant("paymentProof", params)] } },
      { text: { text: ["Thank you! Please also send a screenshot to WhatsApp +265881193707 for verification."] } },
      { text: { text: ["Your CV/cover letter process will now begin."] } }
    ],
    outputContexts: []
  };
  return res.json(responsePaymentProof);

// Payment Proof Agreement
case "cv_payment_proof_agreement":
  const responsePaymentProofAgreement = buildAgreementResponse(
    params,
    session,
    null,
    [
      "Thank you for agreeing to provide payment proof.",
      "Please also send a screenshot to WhatsApp +265881193707 for verification."
    ],
    [
      "We cannot proceed without payment proof.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  return res.json(responsePaymentProofAgreement);

// Reconsider Payment Proof
case "cv_reconsider_payment_proof":
  const responseReconsiderPaymentProof = handleReconsider(params, session);
  return res.json(responseReconsiderPaymentProof);


// 12. Cover Letter → Loop
case "Cover_Letter":
  if (!params.positionApplied || !params.companyApplied) {
    const responseCoverMissing = {
      fulfillmentMessages: [
        { text: { text: ["Provide both the position you are applying for and the company name."] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_cover_letter_info`, lifespanCount: 1 }
      ]
    };
    return res.json(responseCoverMissing);
  } else if (!params.vacancyDetails) {
    const responseCoverDetails = {
      fulfillmentMessages: [
        { text: { text: ["Please paste the vacancy details here as text or share the vacancy URL."] } },
        { text: { text: ["If the details are in image form like a screenshot, you may send them to our WhatsApp number: +265881193707."] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_cover_letter_info`, lifespanCount: 1 }
      ]
    };
    return res.json(responseCoverDetails);
  } else {
    const responseCoverLetter = {
      fulfillmentMessages: [
        { text: { text: [getVariant("coverLetter", params)] } },
        { text: { text: [`Vacancy Details: ${params.vacancyDetails}`] } },
        { text: { text: ["Would you like to add another vacancy detail or refine this cover letter?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/cover_letter_loop`, lifespanCount: 1 }
      ]
    };
    return res.json(responseCoverLetter);
  }

// Cover Letter Agreement
case "cv_cover_letter_agreement":
  const responseCoverAgreement = buildAgreementResponse(
    params,
    session,
    "cover_letter_loop",
    [
      "Thank you for agreeing to provide your cover letter details.",
      "Please paste the vacancy details here or share the vacancy URL."
    ],
    [
      "We cannot proceed without your cover letter details.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  return res.json(responseCoverAgreement);

// Reconsider Cover Letter
case "cv_reconsider_cover_letter":
  const responseReconsiderCover = handleReconsider(params, session);
  return res.json(responseReconsiderCover);


// 13. CV Update → Loop
case "CV_Update":
  if (params.category === "Returning Client") {
    if (params.updateField && params.updateValue) {
      const responseUpdateReturning = {
        fulfillmentMessages: [
          { text: { text: [getVariant("cvUpdateReturning", params)] } },
          { text: { text: ["Do you have another update to make?"] } }
        ],
        outputContexts: [
          { name: `${session}/contexts/update_loop`, lifespanCount: 1 }
        ]
      };
      return res.json(responseUpdateReturning);
    } else {
      const responseUpdateMissing = {
        fulfillmentMessages: [
          { text: { text: ["Specify which section you want to update."] } }
        ],
        outputContexts: [
          { name: `${session}/contexts/awaiting_update_info`, lifespanCount: 1 }
        ]
      };
      return res.json(responseUpdateMissing);
    }
  } else {
    const responseUpdateNewClient = {
      fulfillmentMessages: [
        { text: { text: ["CV updates are only available for returning clients whose CV was crafted by EasySuccor."] } },
        { text: { text: ["For new clients, we’ll create a fresh CV instead."] } }
      ],
      outputContexts: []
    };
    return res.json(responseUpdateNewClient);
  }

// CV Update Agreement
case "cv_update_agreement":
  const responseUpdateAgreement = buildAgreementResponse(
    params,
    session,
    "update_loop",
    [
      "Thank you for agreeing to proceed with CV Update.",
      "Please specify which section of your CV you want to update."
    ],
    [
      "You’ve chosen not to proceed with CV Update.",
      "Would you like to reconsider and continue with this service?"
    ]
  );
  return res.json(responseUpdateAgreement);

// Reconsider CV Update
case "cv_reconsider_update":
  const responseReconsiderUpdate = handleReconsider(params, session);
  return res.json(responseReconsiderUpdate);


// Default fallback
default:
  const responseFallback = {
    fulfillmentMessages: [
      { text: { text: ["Sorry, I didn’t get that. Could you please rephrase?"] } }
    ],
    outputContexts: []
  };
  return res.json(responseFallback);
}

// Error handling
} catch (error) {
  console.error("Webhook error:", error.message);
  console.error(error.stack);
  return res.status(500).json({
    fulfillmentMessages: [
      { text: { text: ["Internal Server Error. Please try again later."] } }
    ]
  });
}
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook running on port ${PORT}`);
});
