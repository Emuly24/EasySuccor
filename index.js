const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import normal flow variant sets
const {
  getGreetingVariants,
  getCategoryVariants,
  getServiceSelectionVariants,
  getCvPaymentAgreementVariants,
  getPaymentVariants,
  getPersonalInfoVariants,
  getEducationVariants,
  getCertificationsVariants,
  getEmploymentVariants,
  getExperienceExtrasVariants,
  getRefereesVariants,
  getLanguagesInfoVariants,
  getCoverLetterVariants,
  getPaymentMethodVariants,
  getPaymentProofVariants,
  getServiceSummaryVariants,
  getChargeReminderVariants,
  getPaymentProofDisagreeVariants,
  getReconsiderPaymentProofVariants,
  getDefaultFallbackVariants,
  getReconsiderFallbackVariants,
  getSkipEmploymentVariants,
  getCoverLetterAgreementVariants,
  getCoverLetterReconsiderPromptVariants,
  getPaymentMethodDisagreeVariants,
  getReconsiderPaymentMethodVariants,
  getMissingEducationDetailsVariants,
  getMissingCertificationsDetailsVariants,
  getMissingExperienceExtrasDetailsVariants,
  getMissingRefereeDetailsVariants,
  getMissingLanguageDetailsVariants,
  getSkipCertificationsVariants,
  getSkipExperienceExtrasVariants,
  getSkipRefereesVariants,
  getSkipLanguagesVariants,
  getPaymentProofAcknowledgementVariants,
  getPaymentReminderLeadInVariants,
  getGreetingLeadInVariants,
  getServiceSummaryLeadInVariants
} = require("./masterVariants");

const {
  getUpdatePersonalInfoVariants,
  getUpdateEducationVariants,
  getUpdateCertificationsVariants,
  getUpdateEmploymentVariants,
  getUpdateExperienceExtrasVariants,
  getUpdateRefereesVariants,
  getUpdateLanguagesVariants,
  getUpdateCoverLetterVariants,
  getUpdateFallbackVariants,
  getUpdateClarificationVariants,
  getUpdateMenuVariants
} = require("./updateVariants");

// === Build variant objects ===
const variants = {
  greeting: getGreetingVariants(),
  greetingLeadIn: getGreetingLeadInVariants(),
  category: getCategoryVariants(),
  serviceSelection: getServiceSelectionVariants(),
  cv_payment_agreement: getCvPaymentAgreementVariants(),
  personalInfo: getPersonalInfoVariants(),
  educationInfo: getEducationVariants(),
  certificationsInfo: getCertificationsVariants(),
  employmentInfo: getEmploymentVariants(),
  experienceExtrasInfo: getExperienceExtrasVariants(),
  refereesInfo: getRefereesVariants(),
  languagesInfo: getLanguagesInfoVariants(),
  coverLetterInfo: getCoverLetterVariants(),
  paymentMethod: getPaymentMethodVariants(),
  paymentProof: getPaymentProofVariants(),
  serviceSummary: getServiceSummaryVariants(),
  serviceSummaryLeadIn: getServiceSummaryLeadInVariants(),
  paymentReminderLeadIn: getPaymentReminderLeadInVariants(),
  defaultFallback: getDefaultFallbackVariants(),
  reconsiderFallback: getReconsiderFallbackVariants(),
  skipEmployment: getSkipEmploymentVariants(),
  skipCertifications: getSkipCertificationsVariants(),
  skipExperienceExtras: getSkipExperienceExtrasVariants(),
  skipReferees: getSkipRefereesVariants(),
  skipLanguages: getSkipLanguagesVariants(),
  coverLetterAgreement: getCoverLetterAgreementVariants(),
  coverLetterReconsiderPrompt: getCoverLetterReconsiderPromptVariants(),
  paymentMethodDisagree: getPaymentMethodDisagreeVariants(),
  reconsiderPaymentMethod: getReconsiderPaymentMethodVariants(),
  paymentProofAcknowledgement: getPaymentProofAcknowledgementVariants(),
  paymentProofDisagree: getPaymentProofDisagreeVariants(),
  reconsiderPaymentProof: getReconsiderPaymentProofVariants(),
  reconsiderUpdate: getUpdateFallbackVariants()
};


const updateVariants = {
  personalInfo: getUpdatePersonalInfoVariants(),
  educationInfo: getUpdateEducationVariants(),
  certificationsInfo: getUpdateCertificationsVariants(),
  employmentInfo: getUpdateEmploymentVariants(),
  experienceExtrasInfo: getUpdateExperienceExtrasVariants(),
  refereesInfo: getUpdateRefereesVariants(),
  languagesInfo: getUpdateLanguagesVariants(),
  coverLetterInfo: getUpdateCoverLetterVariants(),
  updateFallback: getUpdateFallbackVariants(),
  updateClarification: getUpdateClarificationVariants(),
  updateMenu: getUpdateMenuVariants()
};
// === Enhanced Mock Transaction Verification ===
function verifyTransactionMock(transactionId, provider = "generic") {
  if (!transactionId) return false;

  switch (provider.toLowerCase()) {
    case "mpamba":
      return /^A[A-Z0-9]{9}$/.test(transactionId);

    case "airtelmoney":
      return /^CO\d{6}\.\d{4}\.[A-Z0-9]+$/.test(transactionId);

    case "mo626":
      return /^FT[0-9A-Z]+\\BNK$/.test(transactionId);

    default:
      return transactionId.startsWith("TX");
  }
}



// === Helper to pick a random variant ===
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// === Normal Flow Variant Selector ===
function getVariant(intentType, params = {}) {
  const options = variants[intentType];
  if (!options) return "I’ve noted your details.";

  if (intentType === "educationInfo") {
    const status = params.educationStatus || "Completed";
    return getRandom(options[status]);
  }
  if (intentType === "employmentInfo") {
    const status = params.employmentStatus || "Past";
    return getRandom(options[status]);
  }
  if (intentType === "languagesInfo") {
    const proficiency = params.proficiency || "Basic";
    return getRandom(options[proficiency]);
  }
  if (intentType === "paymentMethod") {
    const method = params.paymentMethod || "PayLater";
    return getRandom(options[method]);
  }

  return Array.isArray(options) ? getRandom(options) : options;
}

// === Charge Helper ===
function getExactCharge(category, serviceChoice) {
  const cat = category ? category.toLowerCase().replace(/\s+/g, "") : "";
  const service = serviceChoice
    ? serviceChoice.toLowerCase().trim()
    : "";

  if (chargeTable[cat]) {
    for (const key in chargeTable[cat]) {
      // normalize the table key too
      if (service === key.toLowerCase()) {
        return chargeTable[cat][key];
      }
    }
  }
  return "MK0";
}



// === Update Flow Variant Selector ===
function getUpdateVariant(intentType, params = {}) {
  const options = updateVariants[intentType];
  if (!options) return "Update noted.";
  return Array.isArray(options) ? getRandom(options) : options;
}

// === Update Clarification Helper ===
function getUpdateClarification(serviceChoice) {
  const options = updateVariants.updateClarification;
  const choice = serviceChoice && options[serviceChoice.toLowerCase()]
    ? serviceChoice.toLowerCase()
    : "default";
  return getRandom(options[choice]);
}
function normalizeToArray(messages) {
  if (!messages) return [];
  return Array.isArray(messages) ? messages : [messages];
}

// === Universal Agreement Helper (Normal Flow) ===
function buildAgreementResponse(params, session, nextContext, agreeMessages, disagreeMessages, reconsiderPrompt) {
  if (params.agreement === "Agree") {
    return {
      fulfillmentMessages: normalizeToArray(agreeMessages).map(msg => ({ text: { text: [msg] } })),
      outputContexts: nextContext
        ? [{ name: `${session}/contexts/${nextContext}`, lifespanCount: 3 }]
        : []
    };
  } else {
    return {
      fulfillmentMessages: [
        ...normalizeToArray(disagreeMessages).map(msg => ({ text: { text: [msg] } })),
        { text: { text: [reconsiderPrompt || "Would you like to reconsider and proceed?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_agreement`, lifespanCount: 2 }
      ]
    };
  }
}


// === Universal Reconsider Handler (Normal Flow) ===
function handleReconsider(params, session, restartContext, restartMessage) {
  if (params.reconsider === "Yes") {
    return {
      fulfillmentMessages: [
        { text: { text: [restartMessage || "Thank you for reconsidering. Let’s restart this section."] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/${restartContext}`, lifespanCount: 3 }
      ]
    };
  } else {
    return {
      fulfillmentMessages: [
        { text: { text: ["Understood. We will not proceed further with this section."] } },
        { text: { text: ["Thank you for considering EasySuccor."] } }
      ],
      outputContexts: []
    };
  }
}

// Defining webhook route AFTER helpers
app.post("/webhook", (req, res) => {
  try {
    const body = req.body;
    const intent = body.queryResult.intent.displayName;
    const params = body.queryResult.parameters;
    const session = body.session;

  switch (intent) {
// === Greeting ===
  case "Greeting": {
  const leadIn = getGreetingLeadInVariants();
  const greetingBlock = getGreetingVariants();
  const chosenGreeting = [leadIn, ...greetingBlock];

  return res.json({
    fulfillmentMessages: [
      { text: { text: chosenGreeting } } // each element becomes a separate bubble
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_cv_category`, lifespanCount: 3 }
    ]
  });
}

  case "cv_category": {
  const categoryRaw = Array.isArray(params.category) ? params.category[0] : params.category;
  const category = categoryRaw ? categoryRaw.toLowerCase() : "";

  // Call the master variants helper
  const categoryLine = getCategoryVariants({ category });

  // Charges logic
  const cvChargesList = getCategoryCharges(category);

  return res.json({
    fulfillmentMessages: [
      { text: { text: [categoryLine] } },
      { text: { text: [`Here are your charges: ${cvChargesList}`] } },
      { text: { text: ["Please select the service you’d like (New CV, Editable CV, CV Update, or Cover Letter)."] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_service_selection`, lifespanCount: 3 }
    ]
  });
}


// === CV Service Selection ===
case "CV_ServiceSelection":
  const serviceChoice = (params.serviceType || "").toLowerCase();
  let nextContext = null;
  let messages = [];

  switch (serviceChoice) {
    case "new cv":
    case "editable cv":
      nextContext = "awaiting_payment_agreement";
      messages = [
        getVariant("serviceSelection", params),
        getVariant("cv_payment_agreement", params)
      ];
      break;

    case "cv update":
    case "update":
      nextContext = "awaiting_payment_agreement";
      messages = [
        getVariant("serviceSelection", params),
        "You’ve chosen to update your CV. Let’s confirm your payment agreement before we continue."
      ];
      break;

    case "cover letter":
      nextContext = "awaiting_payment_agreement";
      messages = [
        getVariant("serviceSelection", params),
        "You’ve chosen a cover letter service. Please confirm your payment agreement before we continue."
      ];
      break;

    default:
      messages = [getVariant("serviceSelection", params)];
      break;
  }

 return res.json({
  fulfillmentMessages: [
    ...normalizeToArray(fallbackMessages).map(msg => ({ text: { text: [msg] } })),
    ...normalizeToArray(reconsiderMessages).map(msg => ({ text: { text: [msg] } }))
  ],
  outputContexts: [
    { name: `${session}/contexts/reconsider_update_agreement`, lifespanCount: 3 }
  ]
});


// === CV Payment Agreement ===
  case "CV_PaymentAgreement":
  const agreementChoice = (params.agreement || params.payment_agreement || "").toLowerCase();
  const serviceChoiceAgreement = (params.serviceType || "").toLowerCase();

  // 1. Handle empty agreement first
  if (!agreementChoice) {
    const prompt = getVariant("cv_payment_agreement", params);
    return res.json({
      fulfillmentMessages: [{ text: { text: [prompt] } }],
      outputContexts: [
        { name: `${session}/contexts/awaiting_payment_agreement`, lifespanCount: 3 }
      ]
    });
  }

  // 2. Handle valid agreement choices
  if (agreementChoice === "pay now" || agreementChoice === "yes") {
    return res.json({
      fulfillmentMessages: [{ text: { text: ["Great, let’s proceed with payment proof."] } }],
      outputContexts: [
        { name: `${session}/contexts/awaiting_payment_proof`, lifespanCount: 3, parameters: { serviceChoiceAgreement } }
      ]
    });
  } else if (agreementChoice === "pay later") {
    return res.json({
      fulfillmentMessages: [{ text: { text: ["Alright, let’s capture your personal details first."] } }],
      outputContexts: [
        { name: `${session}/contexts/awaiting_personal_info`, lifespanCount: 3 }
      ]
    });
  } else if (agreementChoice === "update") {
    return res.json({
      fulfillmentMessages: [{ text: { text: ["Got it, you’re in update mode. You can start updating any section."] } }],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });
  }

  // 3. Handle disagreement or unrecognized input
  return res.json({
    fulfillmentMessages: [
      { text: { text: ["We understand you don’t agree to the charges. Unfortunately, we cannot proceed further."] } },
      { text: { text: ["Thank you for considering EasySuccor."] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/reconsider_payment`, lifespanCount: 2 }
    ]
  });

// === CV Update Menu ===
case "CV_UpdateMenu":
  if (params.category === "Returning Client") {
    const updateMenuMessages = getUpdateMenuVariants();
    const chosenMenu = updateMenuMessages[Math.floor(Math.random() * updateMenuMessages.length)];
    const chargesList = getCategoryCharges("returning client"); // <-- new helper call

    return res.json({
      fulfillmentMessages: [
        ...normalizeToArray(chosenMenu).map(msg => ({ text: { text: [msg] } })),
        { text: { text: [`Here are your update charges: ${chargesList}`] } } // <-- show full list
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });
  } else {
    const fallbackMessages = getUpdateFallbackVariants();
const reconsiderMessages = getVariant("reconsiderUpdate", params);

return res.json({
  fulfillmentMessages: [
    ...normalizeToArray(fallbackMessages).map(msg => ({ text: { text: [msg] } })),
    ...normalizeToArray(reconsiderMessages).map(msg => ({ text: { text: [msg] } }))
  ],
  outputContexts: [
    { name: `${session}/contexts/reconsider_update_agreement`, lifespanCount: 3 }
  ]
});
  }
// === CV Update Proceed to Payment ===
case "CV_UpdateProceedPayment":
  return res.json({
    fulfillmentMessages: [
      { text: { text: ["Alright, you’ve finished updating your CV. Let’s proceed to payment."] } },
      { text: { text: ["Reminder: You’ll see the exact charge for your chosen update service at the payment step."] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_method`, lifespanCount: 3 }
    ]
  });

// === Personal Info ===
case "CV_PersonalInfo":
  if (params.updateMode) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getRandom(getUpdatePersonalInfoVariants())] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });
  } else {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("personalInfo", params)] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_education_info`, lifespanCount: 3 }
      ]
    });
  }

// === Education Info ===
case "CV_EducationInfo":
  if (params.updateMode) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getRandom(getUpdateEducationVariants())] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });
  }

  if (params.degree && params.institution) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("educationInfo", params)] } },
        { text: { text: ["Would you like to add another education record?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_education_info`, lifespanCount: 3 }
      ]
    });
  }

  return res.json({
    fulfillmentMessages: [
      { text: { text: [getVariant("missingEducationDetails")] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_education_info`, lifespanCount: 3 }
    ]
  });
// === Certifications Info ===
case "CV_CertificationsInfo":
  if (params.updateMode) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getRandom(getUpdateCertificationsVariants())] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });
  }

  if (params.skipCertifications === "Yes") {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("skipCertifications")] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_employment_info`, lifespanCount: 3 }
      ]
    });
  }

  if (params.certificationName && params.year) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("certificationsInfo", params)] } },
        { text: { text: ["Would you like to add another certification?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_certifications_info`, lifespanCount: 3 }
      ]
    });
  }

  return res.json({
    fulfillmentMessages: [
      { text: { text: [getVariant("missingCertificationsDetails")] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_certifications_info`, lifespanCount: 3 }
    ]
  });

// === Employment Info ===
case "CV_EmploymentInfo":
  if (params.skipEmployment === "Yes") {
  return res.json({
    fulfillmentMessages: normalizeToArray(getVariant("skipEmployment", params))
      .map(msg => ({ text: { text: [msg] } })),
    outputContexts: [
      { name: `${session}/contexts/awaiting_experience_extras`, lifespanCount: 3 }
    ]
  });
}


  if (params.jobTitle && params.companyName) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [`Employment recorded: ${params.jobTitle} at ${params.companyName}, Duration: ${params.employmentYears || "N/A"}.`] } },
        { text: { text: ["Would you like to add another employment record?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_employment_info`, lifespanCount: 3 }
      ]
    });
  }

  return res.json({
    fulfillmentMessages: [
      { text: { text: ["I didn’t catch all the details. Could you please provide: - Your job title - The company name - The years you worked there"] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_employment_info`, lifespanCount: 3 }
    ]
  });


// === Experience Extras ===
case "CV_ExperienceExtras":
  if (params.updateMode) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getRandom(getUpdateExperienceExtrasVariants())] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });
  }

  if (params.skipExtras === "Yes") {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("skipExperienceExtras")] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_referees_info`, lifespanCount: 3 }
      ]
    });
  }

  if (params.extraActivity && params.rolesPlayed && params.position) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("experienceExtrasInfo", params)] } },
        { text: { text: ["Would you like to add another volunteering activity or project contribution?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_experience_extras`, lifespanCount: 3 }
      ]
    });
  }

  return res.json({
    fulfillmentMessages: [
      { text: { text: [getVariant("missingExperienceExtrasDetails")] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_experience_extras`, lifespanCount: 3 }
    ]
  });

// === Referees Info ===
case "CV_RefereesInfo":
  if (params.skipReferees === "Yes") {
  return res.json({
    fulfillmentMessages: normalizeToArray(getVariant("skipReferees"))
      .map(msg => ({ text: { text: [msg] } })),
    outputContexts: [
      { name: `${session}/contexts/awaiting_languages_info`, lifespanCount: 3 }
    ]
  });
}

if (params.updateMode) {
  return res.json({
    fulfillmentMessages: normalizeToArray(getUpdateRefereesVariants())
      .map(msg => ({ text: { text: [msg] } })),
    outputContexts: [
      { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
    ]
  });
}

if (params.refereeName && params.refereeContact) {
  return res.json({
    fulfillmentMessages: normalizeToArray(getVariant("refereesInfo", params))
      .map(msg => ({ text: { text: [msg] } })),
    outputContexts: [
      { name: `${session}/contexts/awaiting_referees_info`, lifespanCount: 3 }
    ]
  });
}

return res.json({
  fulfillmentMessages: normalizeToArray(getVariant("missingRefereeDetails"))
    .map(msg => ({ text: { text: [msg] } })),
  outputContexts: [
    { name: `${session}/contexts/awaiting_referees_info`, lifespanCount: 3 }
  ]
});



// === Languages Info ===
case "CV_LanguagesInfo":
  if (params.updateMode) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getRandom(getUpdateLanguagesVariants())] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });
  }

  if (params.languageName && params.proficiencyLevel) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("languagesInfo", params)] } },
        { text: { text: ["Would you like to add another language?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_languages_info`, lifespanCount: 3 }
      ]
    });
  }

  return res.json({
    fulfillmentMessages: [
      { text: { text: [getVariant("missingLanguageDetails")] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_languages_info`, lifespanCount: 3 }
    ]
  });

// === Cover Letter ===
case "CV_CoverLetter":
  if (params.updateMode) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getRandom(getUpdateCoverLetterVariants())] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });
  } else if (params.coverLetterContent) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("coverLetterInfo", params)] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_service_summary`, lifespanCount: 3 }
      ]
    });
  } else {
    return res.json({
      fulfillmentMessages: [
        { text: { text: ["Could you please provide your cover letter content?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_cover_letter_info`, lifespanCount: 3 }
      ]
    });
  }

// === CV Service Summary ===
case "CV_ServiceSummary":
  const serviceChoiceSummary = params.serviceChoiceContext || "new_cv";
  const summaries = getServiceSummaryVariants(params);

  let summaryText = "";
  if (serviceChoiceSummary.includes("new cv")) summaryText = summaries.newCVSummary[0];
  else if (serviceChoiceSummary.includes("update")) summaryText = summaries.updateCVSummary[0];
  else if (serviceChoiceSummary.includes("cover")) summaryText = summaries.coverLetterSummary[0];

  const leadInSummary = getVariant("serviceSummaryLeadIn", params);

  return res.json({
    fulfillmentMessages: [
      { text: { text: [leadInSummary] } },
      { text: { text: [summaryText] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_reminder`, lifespanCount: 3 }
    ]
  });
//CV Payment Reminder
case "CV_PaymentReminder":
  const charge = getExactCharge(params.category, params.serviceChoice);
  const reminderMessages = getChargeReminderVariants(params.serviceChoice, params.category, charge);
  const leadInReminder = getVariant("paymentReminderLeadIn", params);

  return res.json({
    fulfillmentMessages: [
      { text: { text: [leadInReminder] } },
      { text: { text: [`Your charge for this service is ${charge}.`] } },
      ...normalizeToArray(reminderMessages).map(msg => ({ text: { text: [msg] } }))
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_method`, lifespanCount: 3 }
    ]
  });

// === CV Payment Method ===
case "CV_PaymentMethod":
  const chargeMethod = getExactCharge(params.category, params.serviceChoice); // <-- dynamic charge
  const reminderVariants = getChargeReminderVariants(params.serviceChoice, params.category, chargeMethod);
  const paymentMethodMessages = getVariant("paymentMethod", params);

  if (params.agreement === "Agree") {
    const messages = [
      { text: { text: [`The charge for your selected service is ${chargeMethod}.`] } }, // <-- show charge
      ...normalizeToArray(reminderVariants).map(msg => ({ text: { text: [msg] } })),
      { text: { text: [getUpdateClarification(params.serviceChoice)] } },
      { text: { text: [paymentMethodMessages] } }
    ];

    return res.json({
      fulfillmentMessages: messages,
      outputContexts: [
        { name: `${session}/contexts/awaiting_payment_proof`, lifespanCount: 3 }
      ]
    });
  } else {
    const disagreeMessages = getVariant("paymentMethodDisagree", params);
const reconsiderMessages = getVariant("reconsiderPaymentMethod", params);

return res.json({
  fulfillmentMessages: [
    ...normalizeToArray(disagreeMessages).map(msg => ({ text: { text: [msg] } })),
    ...normalizeToArray(reconsiderMessages).map(msg => ({ text: { text: [msg] } }))
  ],
  outputContexts: [
    { name: `${session}/contexts/reconsider_payment_method`, lifespanCount: 3 }
  ]
});
  }
  // === CV Payment Proof ===
case "CV_PaymentProof":
  const txId = params.paymentProof || "";
  const provider = params.paymentMethod || "generic";
  const chosenServiceContext = params.serviceChoiceContext || "awaiting_service_selection";

  // Get randomized instruction message
  const instructionMessage = getInstructionMessage(provider);

  if (params.agreement === "Agree") {
    const isValid = verifyTransactionMock(txId, provider);

    if (isValid) {
      return res.json({
        fulfillmentMessages: [
          { text: { text: [`Payment proof verified for ${provider}: ${txId}. Thank you — we’ll proceed.`] } }
        ],
        outputContexts: [
          { name: `${session}/contexts/${chosenServiceContext}`, lifespanCount: 3 }
        ]
      });
    } else {
      return res.json({
        fulfillmentMessages: normalizeToArray([
          `Payment proof ${txId} could not be verified for ${provider}. Please check and resend.`,
          instructionMessage
        ]).map(msg => ({ text: { text: [msg] } })),
        outputContexts: [
          { name: `${session}/contexts/reconsider_payment_proof`, lifespanCount: 2 }
        ]
      });
    }
  } else {
    return res.json({
      fulfillmentMessages: normalizeToArray([
        "We cannot proceed without payment proof.",
        instructionMessage
      ]).map(msg => ({ text: { text: [msg] } })),
      outputContexts: [
        { name: `${session}/contexts/reconsider_payment_proof`, lifespanCount: 2 }
      ]
    });
  }

// === Default Fallback ===
default:
  const fallbackMessages = getRandom(getDefaultFallbackVariants());
const reconsiderMessages = getRandom(getReconsiderFallbackVariants());

return res.json({
  fulfillmentMessages: normalizeToArray([
    fallbackMessages,
    reconsiderMessages
  ]).map(msg => ({ text: { text: [msg] } })),
  outputContexts: [
    { name: `${session}/contexts/reconsider_fallback`, lifespanCount: 3 }
  ]
});
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
