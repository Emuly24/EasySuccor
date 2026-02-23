const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import normal flow variant sets
const {
  getGreetingVariants,
  getCategoryVariants,
  getServiceSelectionVariants,
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
  getUpdateFallbackVariants,
  getServiceSummaryVariants,
  getChargeReminderVariants,
  getPaymentProofDisagreeVariants,
  getReconsiderPaymentProofVariants,
  getDefaultFallbackVariants,
  getReconsiderFallbackVariants,
  getSkipEmploymentVariants,
  getCoverLetterAgreementVariants,
  getpaymentAgreementVariants 
  getCoverLetterReconsiderPromptVariants
} = require('./masterVariants');

// Import update flow variant sets
const {
  getUpdatePersonalInfoVariants,
  getUpdateEducationVariants,
  getUpdateCertificationsVariants,
  getUpdateEmploymentVariants,
  getUpdateExperienceExtrasVariants,
  getUpdateRefereesVariants,
  getUpdateLanguagesInfoVariants,
  getUpdateCoverLetterVariants,
  getUpdateFallbackVariants,
  getUpdateClarificationVariants,
  getUpdateMenuVariants,
  getRandomUpdateMenu
} = require('./updateVariants');

  
// === Helper to pick a random normal flow variant ===
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// === General Variant Selector for Normal Flow ===
function getVariant(intentType, params = {}) {
  const variants = {
    greeting: getGreetingVariants(),
    category: getCategoryVariants(),
    serviceSelection: getServiceSelectionVariants(),
    payment: getPaymentVariants(),
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
    updateFallback: getUpdateFallbackVariants(),
    serviceSummary: getServiceSummaryVariants()
  };

  const options = variants[intentType];
  if (!options) return "I’ve noted your details.";

  // Handle nested categories
  if (intentType === "educationInfo") {
    const status = params.educationStatus || "Completed";
    return getRandom(options.educationInfo[status]);
  }
  if (intentType === "employmentInfo") {
    const status = params.employmentStatus || "Past";
    return getRandom(options.employmentInfo[status]);
  }
  if (intentType === "languagesInfo") {
    const proficiency = params.proficiency || "Basic";
    return getRandom(options.languageInfo[proficiency]);
  }
  if (intentType === "paymentMethod") {
    const method = params.paymentMethod || "PayLater";
    return getRandom(options[method]);
  }
  //Universal Agreement Helper (Normal Flow)
  function buildAgreementResponse(params, session, nextContext, agreeMessages, disagreeMessages, reconsiderPrompt) {
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
        { text: { text: [reconsiderPrompt || "Would you like to reconsider and proceed?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_agreement`, lifespanCount: 1 }
      ]
    };
  }
}
//Universal Reconsider Handler (Normal Flow)
function handleReconsider(params, session, restartContext, restartMessage) {
  if (params.reconsider === "Yes") {
    return {
      fulfillmentMessages: [
        { text: { text: [restartMessage || "Thank you for reconsidering. Let’s restart this section."] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/${restartContext}`, lifespanCount: 1 }
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
// === General Variant Selector for Update Flow ===
function getUpdateVariant(intentType, params = {}) {
  const variants = {
    personalInfo: getUpdatePersonalInfoVariants(),
    educationInfo: getUpdateEducationVariants(),
    certificationsInfo: getUpdateCertificationsVariants(),
    employmentInfo: getUpdateEmploymentVariants(),
    experienceExtrasInfo: getUpdateExperienceExtrasVariants(),
    refereesInfo: getUpdateRefereesVariants(),
    languagesInfo: getUpdateLanguagesVariants(),
    coverLetterInfo: getUpdateCoverLetterVariants(),
    updateFallback: getUpdateFallbackVariants()
  };

  const options = variants[intentType];
  if (!options) return "Update noted.";

  return Array.isArray(options) ? getRandom(options) : options;
}
// Helper to pick a random variant
function getVariant(variants) {
  return variants[Math.floor(Math.random() * variants.length)];
}


//Update Flow Agreement Helper
function buildUpdateAgreementResponse(params, session, nextContext, agreeMessages, disagreeMessages, reconsiderPrompt) {
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
        { text: { text: [reconsiderPrompt || "Would you like to reconsider and proceed with this update?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_update_agreement`, lifespanCount: 1 }
      ]
    };
  }
}
function handleUpdateReconsider(params, session, restartContext, restartMessage) {
  if (params.reconsider === "Yes") {
    return {
      fulfillmentMessages: [
        { text: { text: [restartMessage || "Thank you for reconsidering. Let’s restart the update process."] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/${restartContext}`, lifespanCount: 1 }
      ]
    };
  } else {
    return {
      fulfillmentMessages: [
        { text: { text: ["Understood. We will not proceed with updates."] } },
        { text: { text: ["Thank you for considering EasySuccor Update Service."] } }
      ],
      outputContexts: []
    };
  }
}

  // Default random pick
  return Array.isArray(options) ? getRandom(options) : options;
}
module.exports = {
  getRandom,
  getVariant,
  getUpdateVariant,
  buildAgreementResponse,
  handleReconsider,
  buildUpdateAgreementResponse,
  handleUpdateReconsider
};


// CV Category → Payment Agreement
case "cv_category":
  const categoryRaw = Array.isArray(params.category) ? params.category[0] : params.category;
  const category = categoryRaw ? categoryRaw.toLowerCase() : "";

  const categoryLine = getVariant("category", { category });

  const responseCategory = {
    fulfillmentMessages: [
      { text: { text: [categoryLine] } },
      { text: { text: ["Do you agree to proceed with these charges?"] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_agreement`, lifespanCount: 1 }
    ]
  };
  return res.json(responseCategory);
  
  
// === Service Summary ===
case "Service_Summary":
  const serviceChoice = params.serviceChoiceContext || "new_cv";
  let summaryText = "";

  if (serviceChoice.toLowerCase().includes("new cv")) {
    summaryText = `
CV Summary:
👤 Personal Info: ${params.fullName || "Not provided"}
🎓 Education: ${params.educationInfo || "Not provided"}
📜 Certifications: ${params.certificationsInfo || "Not provided"}
💼 Employment: ${params.employmentInfo || "Not provided"}
🤝 Referees: ${params.refereesInfo || "Not provided"}
    `;
  } else if (serviceChoice.toLowerCase().includes("update")) {
    summaryText = `
Updated CV Summary:
✏️ Section: ${params.updateSection || "Not specified"}
📝 New Details: ${params.updateDetails || "Not provided"}
    `;
  } else if (serviceChoice.toLowerCase().includes("cover")) {
    summaryText = `
Cover Letter Summary:
👤 Personal Info: ${params.fullName || "Not provided"}
🎯 Target Role: ${params.jobTitle || "Not provided"}
💡 Motivation: ${params.motivationStatement || "Not provided"}
    `;
  }

  const responseSummary = {
    fulfillmentMessages: [{ text: { text: [summaryText] } }],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_reminder`, lifespanCount: 1 }
    ]
  };

  return res.json(responseSummary);

  
// === Service Selection Agreement ===
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
        "Before we continue with your CV, please confirm how you’d like to proceed with payment."
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

  const responseServiceSelection = {
    fulfillmentMessages: messages.map(msg => ({ text: { text: [msg] } })),
    outputContexts: nextContext
      ? [{ name: `${session}/contexts/${nextContext}`, lifespanCount: 1 }]
      : []
  };

  return res.json(responseServiceSelection);

// === Payment Agreement (Pay Now vs Pay Later vs Update vs Reconsider) ===
case "cv_payment_agreement":
  // Normalize parameter names
  const agreementChoice = (params.agreement || params.payment_agreement || "").toLowerCase();
  const serviceChoice = (params.serviceType || "").toLowerCase();

  if (agreementChoice === "pay now" || agreementChoice === "yes") {
    return res.json({
      fulfillmentMessages: [
        { text: { text: ["Great, let’s proceed with payment proof."] } }
      ],
      outputContexts: [
        {
          name: `${session}/contexts/awaiting_payment_proof`,
          lifespanCount: 2,
          parameters: { serviceChoice }
        }
      ]
    });

  } else if (agreementChoice === "pay later") {
    return res.json({
      fulfillmentMessages: [
        { text: { text: ["Alright, let’s capture your personal details first."] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_personal_info`, lifespanCount: 2 }
      ]
    });

  } else if (agreementChoice === "update") {
    return res.json({
      fulfillmentMessages: [
        { text: { text: ["Got it, you’re in update mode. You can start updating any section."] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    });

  } else {
    return res.json({
      fulfillmentMessages: [
        { text: { text: ["Would you like to reconsider your choice before we proceed?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_payment`, lifespanCount: 1 }
      ]
    });
  }



// === CV Update Menu ===
case "CV_Update":
  if (params.category === "Returning Client") {
    const updateMenuMessages = getUpdateMenuVariants();

    // Pick one variant style (e.g., first array of messages)
    const responseUpdateMenu = {
      fulfillmentMessages: updateMenuMessages[0].map(msg => ({ text: { text: [msg] } })),
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    };
    return res.json(responseUpdateMenu);

  } else {
    const fallbackMessages = getUpdateFallbackVariants();
    const reconsiderMessages = getVariant("reconsiderUpdate", params);

    const responseUpdateNewClient = {
      fulfillmentMessages: [
        ...fallbackMessages.map(msg => ({ text: { text: [msg] } })),
        ...reconsiderMessages.map(msg => ({ text: { text: [msg] } }))
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_update_agreement`, lifespanCount: 1 }
      ]
    };
    return res.json(responseUpdateNewClient);
  }
// === Universal Proceed to Payment (after updates) ===
case "CV_Update_ProceedPayment":
  const responseProceedPayment = {
    fulfillmentMessages: [
      { text: { text: ["Alright, you’ve finished updating your CV. Let’s proceed to payment."] } },
      { text: { text: ["Reminder: You’ll see the exact charge for your chosen update service at the payment step."] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_method`, lifespanCount: 1 }
    ]
  };
  return res.json(responseProceedPayment);


// === Personal Info ===
case "PersonalInfo":
  if (params.updateMode) {
    const responseUpdatePersonal = {
      fulfillmentMessages: [
        { text: { text: [getRandom(getUpdatePersonalInfoVariants())] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    };
    return res.json(responseUpdatePersonal);
  } else {
    const responsePersonalInfo = {
      fulfillmentMessages: [
        { text: { text: [getVariant("personalInfo", params)] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_educational_info`, lifespanCount: 3 }
      ]
    };
    return res.json(responsePersonalInfo);
  }

// === Education Info ===
case "Education_Info":
  if (params.updateMode) {
    const responseUpdateEducation = {
      fulfillmentMessages: [
        { text: { text: [getVariant("updateEducationInfo", params)] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    };
    return res.json(responseUpdateEducation);
  }

  // Normal mode
  if (params.degree && params.institution) {
    const responseEducationInfo = {
      fulfillmentMessages: [
        { text: { text: [getVariant("educationInfo", params)] } },
        { text: { text: ["Would you like to add another education record?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_education_info`, lifespanCount: 3 }
      ]
    };
    return res.json(responseEducationInfo);
  }

  // Incomplete details
  const responseMissingEducation = {
    fulfillmentMessages: [
      { text: { text: [getVariant("missingEducationDetails")] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_education_info`, lifespanCount: 3 }
    ]
  };
  return res.json(responseMissingEducation);

// Reconsider path
case "cv_reconsider_education":
  const responseReconsiderEducation = handleReconsider(params, session);
  return res.json(responseReconsiderEducation);


// === Certifications Info ===
case "Certifications_Info":
  if (params.updateMode) {
    const responseUpdateCertifications = {
      fulfillmentMessages: [
        { text: { text: [getVariant("updateCertificationsInfo", params)] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    };
    return res.json(responseUpdateCertifications);
  }

  // Skip option in normal flow
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

  // Normal mode: complete details
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

  // Incomplete details
  return res.json({
    fulfillmentMessages: [
      { text: { text: [getVariant("missingCertificationsDetails")] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_certifications_info`, lifespanCount: 3 }
    ]
  });

// Reconsider path
case "cv_reconsider_certifications":
  const responseReconsiderCertifications = handleReconsider(params, session);
  return res.json(responseReconsiderCertifications);


case "Employment_Info":
  if (params.skipEmployment === "Yes") {
    return res.json({
      fulfillmentMessages: getVariant("skipEmployment", params).map(msg => ({ text: { text: [msg] } })),
      outputContexts: [
        { name: `${session}/contexts/awaiting_next_step`, lifespanCount: 2 }
      ]
    });
  }

  // If details provided
  if (params.jobTitle && params.companyName) {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [
          `Employment recorded: ${params.jobTitle} at ${params.companyName}, 
          Duration: ${params.employmentYears || "N/A"}.`
        ] } },
        { text: { text: ["Would you like to add another employment record?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_employment_info`, lifespanCount: 3 }
      ]
    });
  }

  // If incomplete details
  return res.json({
    fulfillmentMessages: [
      { text: { text: [
        "I didn’t catch all the details. Could you please provide:",
        "- Your job title",
        "- The company name",
        "- The years you worked there"
      ] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_employment_info`, lifespanCount: 3 }
    ]
  });

// === Experience Extras ===
case "Experience_Extras":
  if (params.updateMode) {
    const responseUpdateExtras = {
      fulfillmentMessages: [
        { text: { text: [getVariant("updateExperienceExtrasInfo", params)] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    };
    return res.json(responseUpdateExtras);
  }

  // Skip option in normal flow
  if (params.skipExtras === "Yes") {
    return res.json({
      fulfillmentMessages: [
        { text: { text: [getVariant("skipExperienceExtras")] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_referees_info`, lifespanCount: 1 }
      ]
    });
  }

  // Normal mode: complete details
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

  // Incomplete details
  return res.json({
    fulfillmentMessages: [
      { text: { text: [getVariant("missingExperienceExtrasDetails")] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_experience_extras`, lifespanCount: 3 }
    ]
  });

// Reconsider path
case "cv_reconsider_experience_extras":
  const responseReconsiderExtras = handleReconsider(params, session);
  return res.json(responseReconsiderExtras);

// === Referees Info ===
case "Referees_Info":
  // Skip option
  if (params.skipReferees === "Yes") {
    return res.json({
      fulfillmentMessages: getVariant("skipReferees"),
      outputContexts: [
        { name: `${session}/contexts/awaiting_service_summary`, lifespanCount: 2 }
      ]
    });
  }

  // Update mode
  if (params.updateMode === "Yes") {
    const updateMessages = getVariant("updateRefereeInfo", params);
    return res.json({
      fulfillmentMessages: updateMessages.map(msg => ({ text: { text: [msg] } })),
      outputContexts: [
        { name: `${session}/contexts/awaiting_referees_info`, lifespanCount: 2 }
      ]
    });
  }

  // Normal mode: complete details
  if (params.refereeName && params.refereeContact) {
    const refereeMessages = getVariant("refereeInfo", params);
    return res.json({
      fulfillmentMessages: refereeMessages.map(msg => ({ text: { text: [msg] } })),
      outputContexts: [
        { name: `${session}/contexts/awaiting_referees_info`, lifespanCount: 2 }
      ]
    });
  }

  // Incomplete details
  return res.json({
    fulfillmentMessages: getVariant("missingRefereeDetails"),
    outputContexts: [
      { name: `${session}/contexts/awaiting_referees_info`, lifespanCount: 2 }
    ]
  });

/// === Languages ===
case "CV_LanguagesInfo":
  if (params.updateMode) {
    const responseUpdateLanguages = {
      fulfillmentMessages: [
        { text: { text: [getVariant("updateLanguagesInfo", params)] } },
        { text: { text: ["Would you like to update another section or proceed to payment?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
      ]
    };
    return res.json(responseUpdateLanguages);
  }

  // Normal mode
  if (params.languageName && params.proficiencyLevel) {
    const responseLanguageInfo = {
      fulfillmentMessages: [
        { text: { text: [getVariant("languageInfo", params)] } },
        { text: { text: ["Would you like to add another language?"] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_languages_info`, lifespanCount: 3 }
      ]
    };
    return res.json(responseLanguageInfo);
  }

  // Incomplete details
  const responseMissingLanguage = {
    fulfillmentMessages: [
      { text: { text: [getVariant("missingLanguageDetails")] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_languages_info`, lifespanCount: 3 }
    ]
  };
  return res.json(responseMissingLanguage);


// === Universal Proceed to Payment ===
case "CV_Update_ProceedPayment":
  const responseProceedPayment = {
    fulfillmentMessages: [
      { text: { text: ["Alright, you’ve finished updating your CV. Let’s proceed to payment."] } },
      { text: { text: ["Reminder: You’ll see the exact charge for your chosen update service at the payment step."] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_method`, lifespanCount: 2 }
    ]
  };
  return res.json(responseProceedPayment);

// === Fallback for Unsupported Update Requests ===
case "CV_Update_Fallback":
  const responseUpdateFallback = {
    fulfillmentMessages: [
      { text: { text: [getVariant("updateFallback")] } },
      { text: { text: [
        "You can update these sections:",
        "1. Personal Info",
        "2. Education",
        "3. Certifications",
        "4. Employment",
        "5. Experience Extras",
        "6. Referees",
        "7. Languages",
        "8. Cover Letter",
        "Would you like to update one of these, or proceed to payment?"
      ] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/update_mode`, lifespanCount: 5 }
    ]
  };
  return res.json(responseUpdateFallback);

// Reconsider path
case "cv_reconsider_update":
  const responseReconsiderUpdate = handleReconsider(params, session);
  return res.json(responseReconsiderUpdate);


// === Cover Letter ===
case "CV_CoverLetter":
  if (params.updateMode) {
    // update flow
  } else if (params.coverLetterContent) {
    // normal flow
  } else {
    // incomplete details
  }
  return res.json(responseCoverLetter);

// === Cover Letter Agreement ===
case "cv_cover_letter_agreement":
  const responseCoverAgreement = buildAgreementResponse(
    params,
    session,
    "update_loop",
    getVariant("coverLetterAgreement", params),
    getVariant("coverLetterReconsiderPrompt", params)
  );
  return res.json(responseCoverAgreement);
  // === Payment Reminder ===
case "Payment_Reminder":
  const charge = getExactCharge(params.category, params.serviceChoice);
  const reminderMessages = getChargeReminderVariants(params.serviceChoice, params.category, charge);

  const responsePaymentReminder = {
    fulfillmentMessages: reminderMessages.map(msg => ({ text: { text: [msg] } })),
    outputContexts: [
      { name: `${session}/contexts/awaiting_payment_method`, lifespanCount: 3 }
    ]
  };
  return res.json(responsePaymentReminder);


// Payment Method → Awaiting Proof
// === CV Payment Method ===
case "CV_PaymentMethod":
  const charge = getExactCharge(params.category, params.serviceChoice);
  const reminderVariants = getChargeReminderVariants(params.serviceChoice, params.category, charge);
  const clarification = getUpdateClarification(params.serviceChoice);
  const paymentMethodMessages = getVariant("paymentMethod", params);

  if (params.agreement === "Agree") {
    const messages = [
      ...reminderVariants.map(msg => ({ text: { text: [msg] } })),
    ];

    if (clarification) {
      messages.push({ text: { text: [clarification] } });
    }

    messages.push({ text: { text: [paymentMethodMessages] } });

    const responsePaymentMethod = {
      fulfillmentMessages: messages,
      outputContexts: [
        { name: `${session}/contexts/awaiting_payment_proof`, lifespanCount: 2 }
      ]
    };
    return res.json(responsePaymentMethod);

  } else {
    const disagreeMessages = getVariant("paymentMethodDisagree", params);
    const reconsiderMessages = getVariant("reconsiderPaymentMethod", params);

    const responseDisagree = {
      fulfillmentMessages: [
        ...disagreeMessages.map(msg => ({ text: { text: [msg] } })),
        ...reconsiderMessages.map(msg => ({ text: { text: [msg] } }))
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_payment_method`, lifespanCount: 2 }
      ]
    };
    return res.json(responseDisagree);
  }


// Final Payment Proof
case "cv_payment_proof":
  const chosenServiceContext = params.serviceChoiceContext || "awaiting_service_selection";

  if (params.agreement === "Agree") {
    const proofMessages = getVariant("paymentProofAcknowledgement", params);
    const responsePaymentProof = {
      fulfillmentMessages: proofMessages.map(msg => ({ text: { text: [msg] } })),
      outputContexts: [
        { name: `${session}/contexts/${chosenServiceContext}`, lifespanCount: 2 }
      ]
    };
    return res.json(responsePaymentProof);

  } else {
    const disagreeMessages = getVariant("paymentProofDisagree", params);
    const reconsiderMessages = getVariant("reconsiderPaymentProof", params);

    const responseDisagree = {
      fulfillmentMessages: [
        ...disagreeMessages.map(msg => ({ text: { text: [msg] } })),
        ...reconsiderMessages.map(msg => ({ text: { text: [msg] } }))
      ],
      outputContexts: [
        { name: `${session}/contexts/reconsider_payment_proof`, lifespanCount: 1 }
      ]
    };
    return res.json(responseDisagree);
  }

// === Default Fallback ===
default:
  const fallbackMessages = getVariant("defaultFallback", params);
  const reconsiderMessages = getVariant("reconsiderFallback", params);

  const responseFallback = {
    fulfillmentMessages: [
      ...fallbackMessages.map(msg => ({ text: { text: [msg] } })),
      ...reconsiderMessages.map(msg => ({ text: { text: [msg] } }))
    ],
    outputContexts: [
      { name: `${session}/contexts/reconsider_fallback`, lifespanCount: 2 }
    ]
  };
  return res.json(responseFallback);



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
