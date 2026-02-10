const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Helper function to pick a random variant
function getVariant(intentType, params = {}) {
  const variants = {
    serviceSelection: [
      `Great, you’ve chosen: ${params.serviceType}.`,
      `Alright, your selected service is ${params.serviceType}.`,
      `Got it, you’d like ${params.serviceType}.`,
      `You’re going ahead with ${params.serviceType}.`
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
      ],
    serviceSelection: [
      `Great, you’ve chosen: ${params.serviceType}.`,
      `Alright, your selected service is ${params.serviceType}.`,
      `Got it, you’d like ${params.serviceType}.`,
      `You’re going ahead with ${params.serviceType}.`
    ],
    personalInfo: [
      `I’ve noted your personal details: Name ${params.firstName} ${params.lastName}, Phone ${params.phoneNumber}, Email ${params.email}.`,
      `So far, you’ve shared: Name ${params.firstName} ${params.lastName}, Contact ${params.phoneNumber}, Email ${params.email}.`,
      `Your personal information is: ${params.firstName} ${params.lastName}, Phone ${params.phoneNumber}, Email ${params.email}.`,
      `Okay, I’ve recorded your details: Name ${params.firstName} ${params.lastName}, Phone ${params.phoneNumber}, Email ${params.email}.`
    ],
    educationInfo: {
      "Completed": [
        `Your qualification is ${params.qualification} in ${params.fieldOfStudy}, completed at ${params.institutionName}.`,
        `You graduated with ${params.qualification} in ${params.fieldOfStudy} from ${params.institutionName}.`,
        `I’ve noted your completed studies: ${params.qualification}, Field: ${params.fieldOfStudy}.`,
        `So far, your education includes ${params.qualification} in ${params.fieldOfStudy}, Graduation: ${params.graduationDate}.`
      ],
      "Ongoing": [
        `You’re currently pursuing ${params.qualification} in ${params.fieldOfStudy} at ${params.institutionName}.`,
        `I’ve noted your ongoing studies: ${params.qualification}, Field: ${params.fieldOfStudy}.`,
        `Your current education is ${params.qualification} in ${params.fieldOfStudy}, expected graduation: ${params.estimatedGraduationDate}.`,
        `So far, you’re studying ${params.qualification} at ${params.institutionName}.`
      ]
    },
    employmentInfo: {
      "Current": [
        `You are currently working as ${params.jobTitle} at ${params.companyName}.`,
        `Your present role is ${params.jobTitle} with ${params.companyName}.`,
        `I’ve noted your current employment: ${params.jobTitle}, Company: ${params.companyName}.`,
        `So far, you’re employed as ${params.jobTitle} at ${params.companyName}.`
      ],
      "Past": [
        `You previously worked as ${params.jobTitle} at ${params.companyName}.`,
        `Your past role was ${params.jobTitle} with ${params.companyName}.`,
        `I’ve recorded your former employment: ${params.jobTitle}, Company: ${params.companyName}.`,
        `So far, your work history includes ${params.jobTitle} at ${params.companyName}.`
      ]
    },
    certificationInfo: [
      `Certification recorded: ${params.certificateName}, issued by ${params.issuingOrganization}.`,
      `You’ve completed ${params.certificateName} from ${params.issuingOrganization}.`,
      `I’ve noted your certification: ${params.certificateName}, Date: ${params.completionDate || "N/A"}.`,
      `Your certification details are: ${params.certificateName}, Organization: ${params.issuingOrganization}.`
    ],
    refereeInfo: [
      `Referee added: ${params.refereeName}, Position: ${params.refereePosition || "N/A"}, Email: ${params.refereeEmail}.`,
      `I’ve noted your referee: ${params.refereeName}, Company: ${params.refereeCompany || "N/A"}, Email: ${params.refereeEmail}.`,
      `Your referee details are: ${params.refereeName}, Position: ${params.refereePosition || "N/A"}, Email: ${params.refereeEmail}.`,
      `So far, you’ve shared referee: ${params.refereeName}, Contact: ${params.refereeEmail}.`
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

  // Context-aware selection
  if (intentType === "paymentMethod") {
    const method = params.paymentMethod;
    const options = variants.paymentMethod[method] || ["Please choose a valid payment method."];
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "languageInfo") {
    const proficiency = params.proficiency || "Basic";
    const options = variants.languageInfo[proficiency] || variants.languageInfo["Basic"];
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "educationInfo") {
    const status = params.educationStatus || "Completed";
    const options = variants.educationInfo[status] || variants.educationInfo["Completed"];
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "employmentInfo") {
    const status = params.employmentStatus || "Past";
    const options = variants.employmentInfo[status] || variants.employmentInfo["Past"];
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "personalInfo") {
    const options = variants.personalInfo;
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "certificationInfo") {
    const options = variants.certificationInfo;
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "refereeInfo") {
    const options = variants.refereeInfo;
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "paymentProof") {
    const options = variants.paymentProof;
    return options[Math.floor(Math.random() * options.length)];
  }

   if (intentType === "coverLetter") {
    const options = variants.coverLetter;
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "cvUpdateReturning") {
    const options = variants.cvUpdateReturning;
    return options[Math.floor(Math.random() * options.length)];
  }

  if (intentType === "serviceSelection") {
    const options = variants.serviceSelection;
    return options[Math.floor(Math.random() * options.length)];
  }

  // fallback for simple arrays
  const options = variants[intentType] || ["I’ve noted your details."];
  return options[Math.floor(Math.random() * options.length)];
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
  // 0. Greeting → Category selection
  case "Greeting":
  const responseGreeting = {
    fulfillmentMessages: [
      { text: { text: [getVariant("greeting", params)] } }
    ],
    outputContexts: [
      { name: `${session}/contexts/awaiting_cv_category`, lifespanCount: 1 }
    ]
  };
  console.log("Response being sent:", JSON.stringify(responseGreeting, null, 2));
  return res.json(responseGreeting);

      // 1. CV Category → Payment Agreement
      case "cv_category":
  const categoryRaw = Array.isArray(params.category) ? params.category[0] : params.category;
  const category = categoryRaw ? categoryRaw.toLowerCase() : "";
  let messages = [];

  switch (category) {
    case "student":
      messages = [
        { text: { text: ["You are a Student."] } },
        { text: { text: ["Charges:"] } },
        { text: { text: ["- CV only: MK6,000"] } },
        { text: { text: ["- Editable CV: MK10,000"] } },
        { text: { text: ["- Cover letter: MK5,000"] } },
        { text: { text: ["- Resume + Cover Letter: MK8,000"] } },
        { text: { text: ["Do you agree to proceed with these charges?"] } }
      ];
      break;

    case "recent graduate":
      messages = [
        { text: { text: ["You are a recent graduate."] } },
        { text: { text: ["Charges:"] } },
        { text: { text: ["- CV only: MK7,000"] } },
        { text: { text: ["- Editable CV: MK10,000"] } },
        { text: { text: ["- Cover letter: MK5,000"] } },
        { text: { text: ["- Resume + Cover Letter: MK9,000"] } },
        { text: { text: ["Do you agree to proceed with these charges?"] } }
      ];
      break;

    case "professional":
      messages = [
        { text: { text: ["You are a working professional."] } },
        { text: { text: ["Charges:"] } },
        { text: { text: ["- CV only: MK8,000"] } },
        { text: { text: ["- Editable CV: MK12,000"] } },
        { text: { text: ["- Cover letter: MK7,000"] } },
        { text: { text: ["- Resume + Cover Letter: MK10,000"] } },
        { text: { text: ["- Editable Resume + Cover Letter: MK12,000"] } },
        { text: { text: ["Do you agree to proceed with these charges?"] } }
      ];
      break;

    case "non-working professional":
      messages = [
        { text: { text: ["You are a non-working professional."] } },
        { text: { text: ["Charges:"] } },
        { text: { text: ["- CV only: MK8,000"] } },
        { text: { text: ["- Editable CV: MK10,000"] } },
        { text: { text: ["- Cover letter: MK7,000"] } },
        { text: { text: ["- Resume + Cover Letter: MK10,000"] } },
        { text: { text: ["- Editable Resume + Cover Letter: MK12,000"] } },
        { text: { text: ["Do you agree to proceed with these charges?"] } }
      ];
      break;

    case "returning client":
      messages = [
        { text: { text: ["Welcome back, you are a returning client."] } },
        { text: { text: ["Charges:"] } },
        { text: { text: ["- Minor CV updates: MK3,000"] } },
        { text: { text: ["- Major revisions: MK6,000"] } },
        { text: { text: ["- Cover letter: MK5,000"] } },
        { text: { text: ["- CV + Cover Letter update package: MK7,000"] } },
        { text: { text: ["Do you agree to proceed with these charges?"] } }
      ];
      break;

    default:
      messages = [
        { text: { text: ["Please select a valid category."] } }
      ];
  }

  const responseCategory = {
    fulfillmentMessages: messages,
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
              { text: { text: ["- Cover Letter/Application Letter"] } },
              { text: { text: ["- Both CV & Cover Letter"] } },
              { text: { text: ["- CV Update"] } }
            ],
            outputContexts: [
              { name: `${session}/contexts/awaiting_service_selection`, lifespanCount: 1 }
            ]
          };
          console.log("Response being sent:", JSON.stringify(responseAgreement, null, 2));
          return res.json(responseAgreement);
        } else {
          const responseDisagree = {
            fulfillmentMessages: [
              { text: { text: ["We understand you don’t agree to the charges. Unfortunately, we cannot proceed further."] } },
              { text: { text: ["Thank you for considering EasySuccor."] } }
            ],
            outputContexts: []
          };
          console.log("Response being sent:", JSON.stringify(responseDisagree, null, 2));
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
        { text: { text: ["Enter your first name to continue."] } }
      ],
      outputContexts: [
        { name: `${session}/contexts/awaiting_personal_info`, lifespanCount: 1 }
      ]
    };
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
  return res.json(responsePersonalInfo);



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

      // 6. Certifications → Loop
      case "CV_CertificationInfo":
        const responseCertificationInfo = {
          fulfillmentMessages: [
            { text: { text: [getVariant("certificationInfo", params)] } },
            { text: { text: ["Would you like to add another certification?"] } }
          ],
          outputContexts: [
            { name: `${session}/contexts/certification_loop`, lifespanCount: 1 }
          ]
        };
        console.log("Response being sent:", JSON.stringify(responseCertificationInfo, null, 2));
        return res.json(responseCertificationInfo);

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
        console.log("Response being sent:", JSON.stringify(responseEmploymentInfo, null, 2));
        return res.json(responseEmploymentInfo);

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
        console.log("Response being sent:", JSON.stringify(responseRefereeInfo, null, 2));
        return res.json(responseRefereeInfo);

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
        console.log("Response being sent:", JSON.stringify(responseLanguageInfo, null, 2));
        return res.json(responseLanguageInfo);

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
        console.log("Response being sent:", JSON.stringify(responsePaymentMethod, null, 2));
        return res.json(responsePaymentMethod);

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
        console.log("Response being sent:", JSON.stringify(responsePaymentProof, null, 2));
        return res.json(responsePaymentProof);
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
          console.log("Response being sent:", JSON.stringify(responseCoverMissing, null, 2));
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
          console.log("Response being sent:", JSON.stringify(responseCoverDetails, null, 2));
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
          console.log("Response being sent:", JSON.stringify(responseCoverLetter, null, 2));
          return res.json(responseCoverLetter);
        }

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
            console.log("Response being sent:", JSON.stringify(responseUpdateReturning, null, 2));
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
            console.log("Response being sent:", JSON.stringify(responseUpdateMissing, null, 2));
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
          console.log("Response being sent:", JSON.stringify(responseUpdateNewClient, null, 2));
          return res.json(responseUpdateNewClient);
        }

      // Default fallback
      default:
        const responseFallback = {
          fulfillmentMessages: [
            { text: { text: ["Sorry, I didn’t get that. Could you please rephrase?"] } }
          ],
          outputContexts: []
        };
        console.log("Response being sent:", JSON.stringify(responseFallback, null, 2));
        return res.json(responseFallback);
    }

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook running on port ${PORT}`);
});
