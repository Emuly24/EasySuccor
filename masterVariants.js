
// === Greeting Lead-In Variants ===
function getGreetingLeadInVariants() {
  return [
    "Welcome, let’s get started on shaping your professional journey:",
    "Hello, I’m here to help you craft a CV or cover letter with dignity and clarity:",
    "Greetings! Together we’ll build a strong first impression:",
    "Welcome aboard — let’s begin by understanding your background:",
    "Hi there, let’s start by identifying your category so we can tailor the service:"
  ];
}


// === Greeting Variants ===
function getGreetingVariants() {
  return {
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
    reconsiderGreeting: [
      "Would you like to continue with CV creation?",
      "Do you want to proceed with this service?",
      "Shall we go ahead with your CV details?"
    ]
  };
}

// === Category Variants (cleaned) ===
function getCategoryVariants() {
  return {
    student: [
      "You’re a Student.",
      "Student category selected.",
      "As a student starting out, here’s your pricing."
    ],
    recentGraduate: [
      "You’re a Recent Graduate.",
      "Recent Graduate category selected.",
      "As a recent graduate, here’s your pricing."
    ],
    workingProfessional: [
      "You’re a Working Professional.",
      "Working Professional category selected.",
      "As a working professional, here’s your pricing."
    ],
    nonWorkingProfessional: [
      "You’re a Non‑Working Professional.",
      "Non‑Working Professional category selected.",
      "As a non‑working professional, here’s your pricing."
    ],
    returningClient: [
      "Welcome back, Returning Client.",
      "Returning Client category selected.",
      "Glad to see you again! Here’s your pricing."
    ],
    reconsiderCategory: [
      "Would you like to reconsider your category selection?",
      "Do you want to choose a different category?",
      "Shall we go back and select another category?"
    ]
  };
}


// === Service Selection Variants ===
function getServiceSelectionVariants() {
  return {
    serviceSelection: [
      [
        "Here are the services you can choose from:",
        "- New CV Creation",
        "- Editable CV",
        "- Cover Letter/Application Letter",
        "- CV Update",
        "Which service would you like to proceed with?"
      ],
      [
        "These are the available services:",
        "• New CV Creation",
        "• Editable CV",
        "• Cover Letter/Application Letter",
        "• CV Update",
        "Please tell me the service you’d like to continue with."
      ],
      [
        "Our services include:",
        "1. New CV Creation",
        "2. Editable CV",
        "3. Cover Letter/Application Letter",
        "4. CV Update",
        "Select the option you want to move forward with."
      ],
      [
        "You can select from the following:",
        "- New CV Creation",
        "- Editable CV",
        "- Cover Letter/Application Letter",
        "- CV Update",
        "Which of these services do you want to start with?"
      ]
    ],
    serviceSelectionAgreementAgree: [
      "Thank you for agreeing. Let’s move forward.",
      "Great! We’ll continue with your chosen service.",
      "Perfect, proceeding with your selection."
    ],
    serviceSelectionAgreementDisagree: [
      "Understood, you’ve chosen not to proceed.",
      "We won’t continue with this service.",
      "Okay, stopping this process."
    ],
    reconsiderServiceSelection: [
      "Would you like to reconsider and continue with this service?",
      "Do you want to go back and select another service?",
      "Shall we restart the service selection process?"
    ]
  };
}
function getCvPaymentAgreementVariants() {
  return [
    "Before we continue, please confirm how you’d like to proceed with payment: Pay Now (provide proof immediately), Pay Later (continue CV details first), Update (returning client), or Reconsider (pause and review options). Which option works best for you?",
    
    "Let’s decide your next step. Would you like to Pay Now, Pay Later while we capture your CV details, Update your CV, or Reconsider your choice?",
    
    "Please choose how you’d like to move forward: Pay Now for immediate proof, Pay Later to continue CV entry, Update if you’re returning, or Reconsider if you’d like to pause.",
    
    "To proceed, select one of these options: Pay Now, Pay Later, Update CV, or Reconsider. Which works best for you?",
    
    "Confirm your preferred path: Pay Now for immediate proof, Pay Later to continue CV entry, Update if you’re returning, or Reconsider if you’d like to pause."
  ];
}
function getPaymentMethodDisagreeVariants() {
  return [
    "We understand you don’t agree with the payment method provided.",
    "It seems you’re not comfortable with this payment option.",
    "You’ve indicated disagreement with the payment method.",
    "We respect your choice not to proceed with this payment option."
  ];
}

function getReconsiderPaymentMethodVariants() {
  return [
    "Would you like to reconsider and proceed with a different payment method?",
    "Perhaps another payment option might work better for you — would you like to reconsider?",
    "Would you like to review the payment methods again before making a final choice?",
    "You can reconsider and choose another payment method if you’d like."
  ];
}


// === Payment Variants ===
function getPaymentVariants() {
  return {
    payNowAgreement: [
      "Thank you for agreeing to Pay Now. Please share your payment proof (transaction ID or screenshot).",
      "Great, you’ve chosen to pay immediately. Kindly provide your payment confirmation.",
      "Perfect, let’s proceed with Pay Now. Send your transaction details so we can verify.",
      "Alright, Pay Now confirmed. Please upload or share your payment proof."
    ],
    payLaterAgreement: [
      "Thank you for agreeing to Pay Later. We’ll continue with your service and you’ll settle payment at the agreed stage.",
      "Great, Pay Later selected. Your CV/cover letter will be processed, and payment will be due afterwards.",
      "Perfect, we’ll proceed with your service under Pay Later. You’ll complete payment later.",
      "Alright, Pay Later confirmed. We’ll deliver your service and collect payment at the agreed time."
    ],
    paymentProofAcknowledgement: [
      "Payment proof received: ${params.paymentProof}. Thank you — we’ll validate it shortly.",
      "Got it, we’ve recorded your payment confirmation: ${params.paymentProof}. Meanwhile, let’s continue with your chosen service.",
      "Your payment details are noted: ${params.paymentProof}. EasySuccor will verify soon, and we’ll proceed with your service.",
      "Alright, proof of payment captured: ${params.paymentProof}. Thank you — let’s move forward with your service."
    ],
    paymentDisagree: [
      "Understood, you’ve chosen not to proceed with payment.",
      "Okay, stopping this payment process.",
      "We won’t continue with this payment option.",
      "You’ve declined payment for now."
    ],
    reconsiderPayment: [
      "Would you like to reconsider and continue with this service?",
      "Do you want to go back and choose another payment option?",
      "Shall we restart the payment agreement process?"
    ]
  };
}
// === Personal Info Variants ===
function getPersonalInfoVariants() {
  return {
    personalInfo: [
      `I’ve noted your personal details: Name ${params.firstName} ${params.lastName}, Phone ${params.phoneNumber}, Email ${params.email}.`,
      `So far, you’ve shared: Name ${params.firstName} ${params.lastName}, Contact ${params.phoneNumber}, Email ${params.email}.`,
      `Your personal information is: ${params.firstName} ${params.lastName}, Phone ${params.phoneNumber}, Email ${params.email}.`,
      `Okay, I’ve recorded your details: Name ${params.firstName} ${params.lastName}, Phone ${params.phoneNumber}, Email ${params.email}.`
    ],
    updatePersonalInfo: [
      "Personal info updated successfully.",
      "Your personal details have been revised.",
      "Personal section refreshed with new details."
    ],
    missingPersonalInfo: [
      "Please provide your name and contact details.",
      "I need your name and contact to record personal info.",
      "Could you share your full name and contact information?"
    ],
    reconsiderPersonalInfo: [
      "We cannot proceed without personal info. Would you like to reconsider?",
      "Personal info is required. Do you want to continue?",
      "Would you like to provide your personal details after all?"
    ]
  };
}

// === Education Variants ===
function getEducationVariants() {
  return {
    educationInfo: {
      Completed: [
        `Your qualification is ${params.qualification} in ${params.fieldOfStudy}, completed at ${params.institutionName}.`,
        `You graduated with ${params.qualification} in ${params.fieldOfStudy} from ${params.institutionName}.`,
        `I’ve noted your completed studies: ${params.qualification}, Field: ${params.fieldOfStudy}.`,
        `So far, your education includes ${params.qualification} in ${params.fieldOfStudy}, Graduation: ${params.graduationDate}.`
      ],
      Ongoing: [
        `You’re currently pursuing ${params.qualification} in ${params.fieldOfStudy} at ${params.institutionName}.`,
        `I’ve noted your ongoing studies: ${params.qualification}, Field: ${params.fieldOfStudy}.`,
        `Your current education is ${params.qualification} in ${params.fieldOfStudy}, expected graduation: ${params.estimatedGraduationDate}.`,
        `So far, you’re studying ${params.qualification} at ${params.institutionName}.`
      ]
    },
    updateEducationInfo: [
      "Education details updated successfully.",
      "Your academic information has been revised.",
      "Education section refreshed with new details."
    ],
    skipEducation: [
      "No education details noted. Let’s move forward.",
      "Skipping education section. Proceeding to certifications.",
      "Education section left blank. Moving ahead."
    ],
    missingEducationDetails: [
      "Please provide degree, institution, and year.",
      "Could you share your qualification, school/university, and completion year?",
      "I need degree, institution, and year to record your education."
    ],
    reconsiderEducation: [
      "We cannot proceed without education details. Would you like to reconsider?",
      "Education section is important. Do you want to continue?",
      "Would you like to provide your education details after all?"
    ]
  };
}

// === Certifications Variants ===
function getCertificationsVariants() {
  return {
    certificationsInfo: [
      `Certification recorded: ${params.certificateName}, issued by ${params.issuingOrganization}.`,
      `You’ve completed ${params.certificateName} from ${params.issuingOrganization}.`,
      `I’ve noted your certification: ${params.certificateName}, Date: ${params.completionDate || "N/A"}.`,
      `Your certification details are: ${params.certificateName}, Organization: ${params.issuingOrganization}.`
    ],
    updateCertificationsInfo: [
      "Certification details updated successfully.",
      "Your certification information has been revised.",
      "Certification section refreshed with new details."
    ],
    skipCertifications: [
      "No certifications noted. Let’s move forward to employment history.",
      "Skipping certifications section. Proceeding to employment.",
      "Certifications section left blank. Moving ahead."
    ],
    missingCertificationsDetails: [
      "Please provide certification name and year.",
      "Could you share the certification title and year obtained?",
      "I need certification name and year to record your details."
    ],
    reconsiderCertifications: [
      "We cannot proceed without certification details. Would you like to reconsider?",
      "Certifications add value. Do you want to continue?",
      "Would you like to provide your certification details after all?"
    ]
  };
}

// === Employment Variants ===
function getEmploymentVariants() {
  return {
    employmentInfo: {
      Current: [
        `You are currently working as ${params.jobTitle} at ${params.companyName}.`,
        `Your present role is ${params.jobTitle} with ${params.companyName}.`,
        `I’ve noted your current employment: ${params.jobTitle}, Company: ${params.companyName}.`,
        `So far, you’re employed as ${params.jobTitle} at ${params.companyName}.`
      ],
      Past: [
        `You previously worked as ${params.jobTitle} at ${params.companyName}.`,
        `Your past role was ${params.jobTitle} with ${params.companyName}.`,
        `I’ve recorded your former employment: ${params.jobTitle}, Company: ${params.companyName}.`,
        `So far, your work history includes ${params.jobTitle} at ${params.companyName}.`
      ]
    },
    updateEmploymentInfo: [
      "Employment details updated successfully.",
      "Your job information has been revised.",
      "Employment section refreshed with new details."
    ],
    missingEmploymentDetails: [
      "Please provide job title, company name, and years worked.",
      "Could you share your role, employer, and duration?",
      "I need job title, company, and years to record employment."
    ],
    reconsiderEmployment: [
      "We cannot proceed without employment details. Would you like to reconsider?",
      "Employment history is important. Do you want to continue?",
      "Would you like to provide your employment details after all?"
    ]
  };
}
// === Experience Extras Variants ===
function getExperienceExtrasVariants() {
  return {
    experienceExtrasInfo: [
      `Experience recorded: ${params.extraActivity} at ${params.organization || "N/A"}, Role: ${params.rolesPlayed}, Position: ${params.position}, Year: ${params.year || "N/A"}.`,
      `I’ve saved your volunteering/project contribution: ${params.extraActivity}, Role: ${params.rolesPlayed}, Position: ${params.position}, Year: ${params.year || "N/A"}.`,
      `Your extra experience has been noted: ${params.extraActivity}, ${params.organization || "N/A"}, Role: ${params.rolesPlayed}, Position: ${params.position}, Year: ${params.year || "N/A"}.`
    ],
    updateExperienceExtrasInfo: [
      "Experience extras updated successfully.",
      "Your volunteering/project contribution has been revised.",
      "Experience extras section refreshed with the new details."
    ],
    skipExperienceExtras: [
      "No extra experiences noted. Let’s move forward to referees.",
      "Skipping experience extras section. Proceeding to referees.",
      "Experience extras section left blank. Moving ahead."
    ],
    missingExperienceExtrasDetails: [
      "Please provide activity, role, and position.",
      "Could you share the project/activity, your responsibilities, and your position?",
      "I need activity, role, and position to record your experience extras."
    ],
    reconsiderExperienceExtras: [
      "We cannot proceed without experience extras details. Would you like to reconsider?",
      "Experience extras add value. Do you want to continue?",
      "Would you like to provide your volunteering/project details after all?"
    ]
  };
}

// === Referees Variants ===
function getRefereesVariants() {
  return {
    refereeInfo: [
      `Referee added: ${params.refereeName}, Position: ${params.refereePosition || "N/A"}, Email: ${params.refereeEmail}.`,
      `I’ve noted your referee: ${params.refereeName}, Company: ${params.refereeCompany || "N/A"}, Email: ${params.refereeEmail}.`,
      `Your referee details are: ${params.refereeName}, Position: ${params.refereePosition || "N/A"}, Email: ${params.refereeEmail}.`,
      `So far, you’ve shared referee: ${params.refereeName}, Contact: ${params.refereeEmail}.`
    ],
    updateRefereeInfo: [
      "Referee details updated successfully.",
      "Your referee information has been revised.",
      "Referee section refreshed with the new details."
    ],
    skipReferees: [
      "No referees noted. Let’s move forward to the service summary.",
      "Skipping referees section. Proceeding to summary.",
      "Referees section left blank. Moving ahead."
    ],
    missingRefereeDetails: [
      "Please provide referee’s name and contact.",
      "Could you share the referee’s full name and contact information?",
      "I need name and contact to record your referee details."
    ],
    reconsiderReferees: [
      "We cannot proceed without referee details. Would you like to reconsider?",
      "Referees add credibility. Do you want to continue?",
      "Would you like to provide your referee details after all?"
    ]
  };
}

// === Languages Variants ===
function getLanguagesInfoVariants() {
  return {
    languageInfo: {
      Fluent: [
        `You speak ${params.language} fluently.`,
        `I’ve noted your fluent language skill: ${params.language}.`,
        `Your language proficiency is fluent in ${params.language}.`,
        `So far, you’ve shared ${params.language} at fluent level.`
      ],
      Intermediate: [
        `You speak ${params.language} at intermediate level.`,
        `I’ve noted your intermediate skill in ${params.language}.`,
        `Your language proficiency is intermediate in ${params.language}.`,
        `So far, you’ve shared ${params.language} at intermediate level.`
      ],
      Basic: [
        `You speak ${params.language} at basic level.`,
        `I’ve noted your basic skill in ${params.language}.`,
        `Your language proficiency is basic in ${params.language}.`,
        `So far, you’ve shared ${params.language} at basic level.`
      ]
    },
    updateLanguagesInfo: [
      "Language details updated successfully.",
      "Your language information has been revised.",
      "Languages section refreshed with the new details."
    ],
    skipLanguages: [
      "No languages noted. Let’s move forward.",
      "Skipping languages section. Proceeding to next step.",
      "Languages section left blank. Moving ahead."
    ],
    missingLanguageDetails: [
      "Please provide language name and proficiency level.",
      "Could you share the language and your proficiency?",
      "I need language name and proficiency to record your details."
    ],
    reconsiderLanguages: [
      "We cannot proceed without language details. Would you like to reconsider?",
      "Languages add value. Do you want to continue?",
      "Would you like to provide your language details after all?"
    ]
  };
}

// === Cover Letter Variants ===
function getCoverLetterVariants() {
  return {
    coverLetterInfo: [
      `Cover letter vacancy captured: Position ${params.positionApplied}, Company ${params.companyApplied}.`,
      `I’ve noted your application: ${params.positionApplied} at ${params.companyApplied}.`,
      `Your cover letter details are: Position ${params.positionApplied}, Company ${params.companyApplied}.`,
      `So far, you’re applying for ${params.positionApplied} at ${params.companyApplied}.`
    ],
    updateCoverLetterInfo: [
      "Cover letter details updated successfully.",
      "Your cover letter information has been revised.",
      "Cover letter section refreshed with the new details."
    ],
    skipCoverLetter: [
      "No cover letter details noted. Let’s move forward to the service summary.",
      "Skipping cover letter section. Proceeding to summary.",
      "Cover letter section left blank. Moving ahead."
    ],
    missingCoverLetterDetails: [
      "I didn’t catch your cover letter details. Could you please provide the content or main points?",
      "Could you share the main body or highlights of your cover letter?",
      "I need the content or main points to record your cover letter."
    ],
    coverLetterAgreement: [
      "Thank you for agreeing to provide your cover letter details.",
      "I appreciate your confirmation to include cover letter information.",
      "Great, we’ll proceed with your cover letter details."
    ],
    coverLetterReconsiderPrompt: [
      "We cannot proceed without your cover letter details. Would you like to reconsider?",
      "Cover letter is important. Do you want to continue with it?",
      "Would you like to provide your cover letter details after all?"
    ]
  };
}
// === Payment Method Variants ===
function getPaymentMethodVariants() {
  return {
    AirtelMoney: [
      `You’ve chosen Airtel Money as your payment option.`,
      `Alright, you’ll be paying via Airtel Money.`,
      `Got it, Airtel Money is your selected method.`,
      `I’ve noted Airtel Money as your payment choice.`
    ],
    Mo626: [
      `You’ve selected Mo626 for your payment.`,
      `Okay, you’ll be settling the payment through Mo626.`,
      `Got it, Mo626 is your chosen payment method.`,
      `I’ve recorded Mo626 as your payment option.`
    ],
    Mpamba: [
      `You’ve chosen TNM Mpamba as your payment option.`,
      `Alright, you’ll be paying via Mpamba.`,
      `Got it, Mpamba is your selected method.`,
      `I’ve noted Mpamba as your payment choice.`
    ],
    PayLater: [
      `You’ve opted to pay later.`,
      `Alright, you’ll complete the payment at a later stage.`,
      `Got it, you’ve selected the Pay Later option.`,
      `I’ve recorded Pay Later as your payment choice.`
    ]
  };
}

// === Payment Proof Variants ===
function getPaymentProofVariants() {
  return {
    paymentProof: [
      `Payment proof received: ${params.paymentProof}.`,
      `I’ve noted your payment confirmation: ${params.paymentProof}.`,
      `Your payment details are: ${params.paymentProof}.`,
      `Alright, I’ve recorded your proof of payment: ${params.paymentProof}.`
    ]
  };
}

// === CV Update Fallback Variants ===
function getUpdateFallbackVariants() {
  return {
    updateFallback: [
      "I’m sorry, that section isn’t available for updates.",
      "That section can’t be updated in this flow.",
      "Currently, only certain CV sections can be updated.",
      "That option isn’t part of the CV Update service."
    ],
    reconsiderUpdate: [
      "We cannot proceed without choosing a valid section. Would you like to reconsider?",
      "Update requires a valid section. Do you want to continue?",
      "Would you like to select one of the available sections after all?"
    ]
  };
}
// === Service Summary Lead-In Variants ===
function getServiceSummaryLeadInVariants() {
  return [
    "Here’s a summary of the details we’ve captured so far:",
    "Let me show you a quick summary of your information:",
    "Here’s an overview of what we’ve recorded:",
    "Let’s review the details you’ve provided so far:",
    "Here’s a snapshot of your CV/cover letter information:"
  ];
}

// === Service Summary Variants ===
function getServiceSummaryVariants(params) {
  return {
    newCVSummary: [
      `CV Summary:\n👤 Personal Info: ${params.fullName || "Not provided"}\n🎓 Education: ${params.educationInfo || "Not provided"}\n📜 Certifications: ${params.certificationsInfo || "Not provided"}\n💼 Employment: ${params.employmentInfo || "Not provided"}\n🤝 Referees: ${params.refereesInfo || "Not provided"}`
    ],
    updateCVSummary: [
      `Updated CV Summary:\n✏️ Section: ${params.updateSection || "Not specified"}\n📝 New Details: ${params.updateDetails || "Not provided"}`
    ],
    coverLetterSummary: [
      `Cover Letter Summary:\n👤 Personal Info: ${params.fullName || "Not provided"}\n🎯 Target Role: ${params.jobTitle || "Not provided"}\n💡 Motivation: ${params.motivationStatement || "Not provided"}`
    ]
  };
}

// === Missing Details Variant Sets ===

function getMissingEducationDetailsVariants() {
  return [
    "I didn’t catch all your education details. Could you please provide your degree, institution, and completion year?",
    "Your education record seems incomplete. Kindly share your degree, school name, and year of completion.",
    "To record your education, I’ll need your degree, institution, and the year you finished.",
    "Please provide your degree, institution, and completion year so we can capture your education details."
  ];
}

function getMissingCertificationsDetailsVariants() {
  return [
    "I didn’t get all your certification details. Could you share the certification name and year?",
    "Your certification record seems incomplete. Please provide the certification name and the year obtained.",
    "To record your certification, I’ll need the name and the year you earned it.",
    "Kindly provide the certification name and year so we can capture your details."
  ];
}

function getMissingExperienceExtrasDetailsVariants() {
  return [
    "I didn’t catch all the details of your volunteering or project contribution. Could you provide the activity, role, and position?",
    "Your experience extras record seems incomplete. Please share the activity name, your role, and position held.",
    "To record this experience, I’ll need the activity, role played, and your position.",
    "Kindly provide the activity, role, and position so we can capture your experience extras."
  ];
}

function getMissingRefereeDetailsVariants() {
  return [
    "I didn’t catch all your referee details. Could you provide the referee’s name and contact information?",
    "Your referee record seems incomplete. Please share the referee’s name and contact details.",
    "To record your referee, I’ll need their name and contact information.",
    "Kindly provide the referee’s name and contact details so we can capture your referee information."
  ];
}

function getMissingLanguageDetailsVariants() {
  return [
    "I didn’t catch all your language details. Could you provide the language name and your proficiency level?",
    "Your language record seems incomplete. Please share the language name and how proficient you are.",
    "To record your language, I’ll need the language name and your proficiency level.",
    "Kindly provide the language name and proficiency so we can capture your language details."
  ];
}

// === Skip Details Variant Sets ===

function getSkipCertificationsVariants() {
  return [
    "Alright, we’ll skip certifications for now and move forward.",
    "Certifications skipped. Let’s continue with your CV details.",
    "No certifications recorded. Proceeding to the next section.",
    "Skipping certifications as requested. Moving on."
  ];
}

function getSkipExperienceExtrasVariants() {
  return [
    "Okay, we’ll skip experience extras for now and continue.",
    "Experience extras skipped. Let’s move forward with your CV.",
    "No additional volunteering or project contributions recorded. Proceeding.",
    "Skipping experience extras as requested. Moving on to the next section."
  ];
}

function getSkipRefereesVariants() {
  return [
    "Alright, we’ll skip referees for now and move forward.",
    "Referees skipped. Let’s continue with your CV details.",
    "No referees recorded. Proceeding to the next section.",
    "Skipping referees as requested. Moving on."
  ];
}

function getSkipLanguagesVariants() {
  return [
    "Okay, we’ll skip languages for now and continue.",
    "Languages skipped. Let’s move forward with your CV.",
    "No languages recorded. Proceeding to the next section.",
    "Skipping languages as requested. Moving on."
  ];
}

// === Charge Reminder Variants ===
function getChargeReminderVariants(serviceChoice, category, charge) {
  return [
    `Reminder: For your chosen service (${serviceChoice}) under ${category}, the charge is ${charge}.`,
    `Your total due for (${serviceChoice}) under ${category} is ${charge}.`,
    `The amount payable for (${serviceChoice}) under ${category} is ${charge}.`,
    `You’ll need to pay ${charge} for (${serviceChoice}) under ${category}.`
  ];
  function getPaymentProofDisagreeVariants() {
  return [
    "We couldn’t validate your payment proof.",
    "The payment proof seems incomplete or invalid."
  ];
}

function getReconsiderPaymentProofVariants() {
  return [
    "Would you like to reconsider and re‑upload your payment proof?",
    "Please try again — would you like to provide another proof?"
  ];
}
function getDefaultFallbackVariants() {
  return [
    "Sorry, I didn’t catch that. Could you rephrase?",
    "I didn’t quite understand. Could you try again?"
  ];
}

function getReconsiderFallbackVariants() {
  return [
    "Would you like to reconsider and continue?",
    "Let’s try again — would you like to proceed?"
  ];
}
function getSkipEmploymentVariants() {
  return [
    "Skipping employment section. Let’s move forward.",
    "No employment details noted. Proceeding to the next step."
  ];
}
function getCoverLetterAgreementVariants() {
  return [
    "Your cover letter details have been noted. Let’s continue.",
    "Cover letter recorded successfully. Moving forward."
  ];
}

function getCoverLetterReconsiderPromptVariants() {
  return [
    "Would you like to reconsider and revise your cover letter?",
    "Do you want to make changes to your cover letter before we proceed?"
  ];
}
// === Payment Proof Acknowledgement Variant Set ===
function getPaymentProofAcknowledgementVariants() {
  return [
    "Thank you, your payment proof has been received and recorded successfully.",
    "We’ve acknowledged your payment proof. Let’s proceed with your chosen service.",
    "Payment proof confirmed. Your service request is now active.",
    "Your payment proof has been verified. We’ll continue with the next step.",
    "Payment proof received. Thank you for completing this step."
  ];
}

// === Payment Reminder Lead-In Variants ===
function getPaymentReminderLeadInVariants() {
  return [
    "Here’s your payment breakdown based on the service you selected:",
    "Let me show you the charges for your chosen service:",
    "Here’s a quick reminder of the payment details:",
    "Let’s review the payment information for your service:",
    "Here’s the cost summary for your selected option:"
  ];
}
// === Charge Table ===
const chargeTable = {
  student: {
    "cv": "MK6,000",
    "editable cv": "MK10,000",
    "cover letter": "MK5,000",
    "resume + cover letter": "MK8,000"
  },
  "recent graduate": {
    "cv": "MK7,000",
    "editable cv": "MK10,000",
    "cover letter": "MK5,000",
    "resume + cover letter": "MK9,000"
  },
  "working professional": {
    "cv": "MK8,000",
    "editable cv": "MK12,000",
    "cover letter": "MK7,000",
    "resume + cover letter": "MK10,000",
    "editable resume + cover letter": "MK12,000"
  },
  "nonworking professional": {
    "cv": "MK8,000",
    "editable cv": "MK10,000",
    "cover letter": "MK7,000",
    "resume + cover letter": "MK10,000",
    "editable resume + cover letter": "MK12,000"
  },
  "returning client": {
    "minor cv update": "MK3,000",
    "major cv revision": "MK6,000",
    "editable cv": "MK10,000",
    "cover letter": "MK5,000",
    "cv + cover letter update package": "MK7,000"
  }
};

// === Helper: Get all charges for a category ===
function getCategoryCharges(category) {
  const cat = category ? category.toLowerCase() : "";
  if (chargeTable[cat]) {
    return Object.entries(chargeTable[cat])
      .map(([service, price]) => `${service}: ${price}`)
      .join(", ");
  }
  return "No charges available for this category.";
}

module.exports = {
  getGreetingLeadInVariants
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
  getLanguagesVariants,
  getCoverLetterVariants,
  getPaymentMethodVariants,
  getPaymentProofVariants,
  getUpdateFallbackVariants,
  getServiceSummaryVariants,
  getServiceSummaryLeadInVariants,
  getChargeReminderVariants,
  getCvPaymentAgreementVariants,
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
  chargeTable,
  getCategoryCharges
};