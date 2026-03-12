// === Greeting Lead-In Variants ===
function getGreetingLeadInVariants() {
  const variants = [
    "Welcome, let’s get started on shaping your professional journey:",
    "Hello, I’m here to help you craft a CV or cover letter with dignity and clarity:",
    "Greetings! Together we’ll build a strong first impression:",
    "Welcome aboard — let’s begin by understanding your background:",
    "Hi there, let’s start by identifying your category so we can tailor the service:"
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

// === Greeting Variants ===
function getGreetingVariants() {
  const variants = [
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
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

// === Category Variants ===
function getCategoryVariants(params = {}) {
  const categories = {
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
    ]
  };

  const choice = params.category || "student";
  const options = categories[choice] || ["Category noted."];
  return options[Math.floor(Math.random() * options.length)];
}
// === Service Selection Variants ===
function getServiceSelectionVariants() {
  const variants = [
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
    ]
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

// === CV Payment Agreement Variants ===
function getCvPaymentAgreementVariants() {
  const variants = [
    "Before we continue, please confirm how you’d like to proceed with payment: Pay Now, Pay Later, Update, or Reconsider.",
    "Let’s decide your next step. Would you like to Pay Now, Pay Later, Update your CV, or Reconsider?",
    "Please choose how you’d like to move forward: Pay Now, Pay Later, Update, or Reconsider.",
    "To proceed, select one of these options: Pay Now, Pay Later, Update CV, or Reconsider.",
    "Confirm your preferred path: Pay Now, Pay Later, Update, or Reconsider."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}
// === Personal Info Variants ===
function getPersonalInfoVariants(params = {}, type = "personalInfo") {
  const variants = {
    personalInfo: [
      `I’ve noted your personal details: Name ${params.firstName || "N/A"} ${params.lastName || ""}, Phone ${params.phoneNumber || "N/A"}, Email ${params.email || "N/A"}.`,
      `So far, you’ve shared: Name ${params.firstName || "N/A"} ${params.lastName || ""}, Contact ${params.phoneNumber || "N/A"}, Email ${params.email || "N/A"}.`,
      `Your personal information is: ${params.firstName || "N/A"} ${params.lastName || ""}, Phone ${params.phoneNumber || "N/A"}, Email ${params.email || "N/A"}.`,
      `Okay, I’ve recorded your details: Name ${params.firstName || "N/A"} ${params.lastName || ""}, Phone ${params.phoneNumber || "N/A"}, Email ${params.email || "N/A"}.`
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
    ]
  };

  const options = variants[type] || ["I’ve noted your details."];
  return options[Math.floor(Math.random() * options.length)];
}

// === Education Variants ===
function getEducationVariants(params = {}, status = "Completed") {
  const variants = {
    Completed: [
      `Your qualification is ${params.qualification || "N/A"} in ${params.fieldOfStudy || "N/A"}, completed at ${params.institutionName || "N/A"}.`,
      `You graduated with ${params.qualification || "N/A"} in ${params.fieldOfStudy || "N/A"} from ${params.institutionName || "N/A"}.`,
      `I’ve noted your completed studies: ${params.qualification || "N/A"}, Field: ${params.fieldOfStudy || "N/A"}.`,
      `So far, your education includes ${params.qualification || "N/A"} in ${params.fieldOfStudy || "N/A"}, Graduation: ${params.graduationDate || "N/A"}.`
    ],
    Ongoing: [
      `You’re currently pursuing ${params.qualification || "N/A"} in ${params.fieldOfStudy || "N/A"} at ${params.institutionName || "N/A"}.`,
      `I’ve noted your ongoing studies: ${params.qualification || "N/A"}, Field: ${params.fieldOfStudy || "N/A"}.`,
      `Your current education is ${params.qualification || "N/A"} in ${params.fieldOfStudy || "N/A"}, expected graduation: ${params.estimatedGraduationDate || "N/A"}.`,
      `So far, you’re studying ${params.qualification || "N/A"} at ${params.institutionName || "N/A"}.`
    ]
  };

  const options = variants[status] || ["Education details noted."];
  return options[Math.floor(Math.random() * options.length)];
}
// === Certifications Variants ===
function getCertificationsVariants(params = {}, type = "certificationsInfo") {
  const variants = {
    certificationsInfo: [
      `Certification recorded: ${params.certificateName || "N/A"}, issued by ${params.issuingOrganization || "N/A"}.`,
      `You’ve completed ${params.certificateName || "N/A"} from ${params.issuingOrganization || "N/A"}.`,
      `I’ve noted your certification: ${params.certificateName || "N/A"}, Date: ${params.completionDate || "N/A"}.`,
      `Your certification details are: ${params.certificateName || "N/A"}, Organization: ${params.issuingOrganization || "N/A"}.`
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
    ]
  };

  const options = variants[type] || ["Certification details noted."];
  return options[Math.floor(Math.random() * options.length)];
}

// === Employment Variants ===
function getEmploymentVariants(params = {}, status = "Past") {
  const variants = {
    Current: [
      `You are currently working as ${params.jobTitle || "N/A"} at ${params.companyName || "N/A"}.`,
      `Your present role is ${params.jobTitle || "N/A"} with ${params.companyName || "N/A"}.`,
      `I’ve noted your current employment: ${params.jobTitle || "N/A"}, Company: ${params.companyName || "N/A"}.`,
      `So far, you’re employed as ${params.jobTitle || "N/A"} at ${params.companyName || "N/A"}.`
    ],
    Past: [
      `You previously worked as ${params.jobTitle || "N/A"} at ${params.companyName || "N/A"}.`,
      `Your past role was ${params.jobTitle || "N/A"} with ${params.companyName || "N/A"}.`,
      `I’ve recorded your former employment: ${params.jobTitle || "N/A"}, Company: ${params.companyName || "N/A"}.`,
      `So far, your work history includes ${params.jobTitle || "N/A"} at ${params.companyName || "N/A"}.`
    ]
  };

  const options = variants[status] || ["Employment details noted."];
  return options[Math.floor(Math.random() * options.length)];
}
// === Experience Extras Variants ===
function getExperienceExtrasVariants(params = {}, type = "experienceExtrasInfo") {
  const variants = {
    experienceExtrasInfo: [
      `Experience recorded: ${params.extraActivity || "N/A"} at ${params.organization || "N/A"}, Role: ${params.rolesPlayed || "N/A"}, Position: ${params.position || "N/A"}, Year: ${params.year || "N/A"}.`,
      `I’ve saved your volunteering/project contribution: ${params.extraActivity || "N/A"}, Role: ${params.rolesPlayed || "N/A"}, Position: ${params.position || "N/A"}, Year: ${params.year || "N/A"}.`,
      `Your extra experience has been noted: ${params.extraActivity || "N/A"}, ${params.organization || "N/A"}, Role: ${params.rolesPlayed || "N/A"}, Position: ${params.position || "N/A"}, Year: ${params.year || "N/A"}.`
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
    ]
  };

  const options = variants[type] || ["Experience extras noted."];
  return options[Math.floor(Math.random() * options.length)];
}

// === Referees Variants ===
function getRefereesVariants(params = {}, type = "refereeInfo") {
  const variants = {
    refereeInfo: [
      `Referee added: ${params.refereeName || "N/A"}, Position: ${params.refereePosition || "N/A"}, Email: ${params.refereeEmail || "N/A"}.`,
      `I’ve noted your referee: ${params.refereeName || "N/A"}, Company: ${params.refereeCompany || "N/A"}, Email: ${params.refereeEmail || "N/A"}.`,
      `Your referee details are: ${params.refereeName || "N/A"}, Position: ${params.refereePosition || "N/A"}, Email: ${params.refereeEmail || "N/A"}.`,
      `So far, you’ve shared referee: ${params.refereeName || "N/A"}, Contact: ${params.refereeEmail || "N/A"}.`
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
    ]
  };

  const options = variants[type] || ["Referee details noted."];
  return options[Math.floor(Math.random() * options.length)];
}
// === Languages Variants ===
function getLanguagesInfoVariants(params = {}, proficiency = "Basic") {
  const variants = {
    Fluent: [
      `You speak ${params.language || "N/A"} fluently.`,
      `I’ve noted your fluent language skill: ${params.language || "N/A"}.`,
      `Your language proficiency is fluent in ${params.language || "N/A"}.`,
      `So far, you’ve shared ${params.language || "N/A"} at fluent level.`
    ],
    Intermediate: [
      `You speak ${params.language || "N/A"} at intermediate level.`,
      `I’ve noted your intermediate skill in ${params.language || "N/A"}.`,
      `Your language proficiency is intermediate in ${params.language || "N/A"}.`,
      `So far, you’ve shared ${params.language || "N/A"} at intermediate level.`
    ],
    Basic: [
      `You speak ${params.language || "N/A"} at basic level.`,
      `I’ve noted your basic skill in ${params.language || "N/A"}.`,
      `Your language proficiency is basic in ${params.language || "N/A"}.`,
      `So far, you’ve shared ${params.language || "N/A"} at basic level.`
    ]
  };

  const options = variants[proficiency] || ["Language details noted."];
  return options[Math.floor(Math.random() * options.length)];
}

// === Cover Letter Variants ===
function getCoverLetterVariants(params = {}, type = "coverLetterInfo") {
  const variants = {
    coverLetterInfo: [
      `Cover letter vacancy captured: Position ${params.positionApplied || "N/A"}, Company ${params.companyApplied || "N/A"}.`,
      `I’ve noted your application: ${params.positionApplied || "N/A"} at ${params.companyApplied || "N/A"}.`,
      `Your cover letter details are: Position ${params.positionApplied || "N/A"}, Company ${params.companyApplied || "N/A"}.`,
      `So far, you’re applying for ${params.positionApplied || "N/A"} at ${params.companyApplied || "N/A"}.`
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
    ]
  };

    const options = variants[type] || ["Cover letter details noted."];
    return options[Math.floor(Math.random() * options.length)];
}
// === Payment Method Variants ===
function getPaymentMethodVariants(params = {}, method = "PayLater") {
  const variants = {
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

  const options = variants[method] || ["Payment method noted."];
  return options[Math.floor(Math.random() * options.length)];
}

// === Payment Proof Variants ===
function getPaymentProofVariants(params = {}) {
  const variants = [
    `Payment proof received: ${params.paymentProof || "N/A"}.`,
    `I’ve noted your payment confirmation: ${params.paymentProof || "N/A"}.`,
    `Your payment details are: ${params.paymentProof || "N/A"}.`,
    `Alright, I’ve recorded your proof of payment: ${params.paymentProof || "N/A"}.`
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}
// === Service Summary Lead-In Variants ===
function getServiceSummaryLeadInVariants() {
  const variants = [
    "Here’s a summary of the details we’ve captured so far:",
    "Let me show you a quick summary of your information:",
    "Here’s an overview of what we’ve recorded:",
    "Let’s review the details you’ve provided so far:",
    "Here’s a snapshot of your CV/cover letter information:"
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

// === Service Summary Variants ===
function getServiceSummaryVariants(params = {}, type = "newCVSummary") {
  const variants = {
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

  const options = variants[type] || ["Summary noted."];
  return options[Math.floor(Math.random() * options.length)];
}
// === Missing Details Variants ===
function getMissingEducationDetailsVariants() {
  const variants = [
    "I didn’t catch all your education details. Could you please provide your degree, institution, and completion year?",
    "Your education record seems incomplete. Kindly share your degree, school name, and year of completion.",
    "To record your education, I’ll need your degree, institution, and the year you finished.",
    "Please provide your degree, institution, and completion year so we can capture your education details."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

function getMissingCertificationsDetailsVariants() {
  const variants = [
    "I didn’t get all your certification details. Could you share the certification name and year?",
    "Your certification record seems incomplete. Please provide the certification name and the year obtained.",
    "To record your certification, I’ll need the name and the year you earned it.",
    "Kindly provide the certification name and year so we can capture your details."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

function getMissingExperienceExtrasDetailsVariants() {
  const variants = [
    "I didn’t catch all the details of your volunteering or project contribution. Could you provide the activity, role, and position?",
    "Your experience extras record seems incomplete. Please share the activity name, your role, and position held.",
    "To record this experience, I’ll need the activity, role played, and your position.",
    "Kindly provide the activity, role, and position so we can capture your experience extras."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

function getMissingRefereeDetailsVariants() {
  const variants = [
    "I didn’t catch all your referee details. Could you provide the referee’s name and contact information?",
    "Your referee record seems incomplete. Please share the referee’s name and contact details.",
    "To record your referee, I’ll need their name and contact information.",
    "Kindly provide the referee’s name and contact details so we can capture your referee information."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

function getMissingLanguageDetailsVariants() {
  const variants = [
    "I didn’t catch all your language details. Could you provide the language name and your proficiency level?",
    "Your language record seems incomplete. Please share the language name and how proficient you are.",
    "To record your language, I’ll need the language name and your proficiency level.",
    "Kindly provide the language name and proficiency so we can capture your language details."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

// === Skip Variants ===
function getSkipCertificationsVariants() {
  const variants = [
    "Alright, we’ll skip certifications for now and move forward.",
    "Certifications skipped. Let’s continue with your CV details.",
    "No certifications recorded. Proceeding to the next section.",
    "Skipping certifications as requested. Moving on."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

function getSkipExperienceExtrasVariants() {
  const variants = [
    "Okay, we’ll skip experience extras for now and continue.",
    "Experience extras skipped. Let’s move forward with your CV.",
    "No additional volunteering or project contributions recorded. Proceeding.",
    "Skipping experience extras as requested. Moving on to the next section."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

function getSkipRefereesVariants() {
  const variants = [
    "Alright, we’ll skip referees for now and move forward.",
    "Referees skipped. Let’s continue with your CV details.",
    "No referees recorded. Proceeding to the next section.",
    "Skipping referees as requested. Moving on."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

function getSkipLanguagesVariants() {
  const variants = [
    "Okay, we’ll skip languages for now and continue.",
    "Languages skipped. Let’s move forward with your CV.",
    "No languages recorded. Proceeding to the next section.",
    "Skipping languages as requested. Moving on."
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}
// === Charge Table ===
const chargeTable = {
  student: {
    "New CV": "MK6,000",
    "Editable CV": "MK8,000",
    "CV Update": "MK3,000",
    "Cover Letter": "MK5,000"
  },
  recentgraduate: {
    "New CV": "MK8,000",
    "Editable CV": "MK10,000",
    "CV Update": "MK4,000",
    "Cover Letter": "MK5,000"
  },
  workingprofessional: {
    "New CV": "MK10,000",
    "Editable CV": "MK12,000",
    "CV Update": "MK6,000",
    "Cover Letter": "MK6,000"
  },
  nonworkingprofessional: {
    "New CV": "MK8,000",
    "Editable CV": "MK10,000",
    "CV Update": "MK5,000",
    "Cover Letter": "MK5,000"
  },
  returningclient: {
    "Editable CV": "MK10,000",
    "CV Update": "MK5,000",
    "Cover Letter": "MK5,000"
  }
};

function getChargeReminderVariants(serviceChoice, charge) {
  // Capitalize each word in the service name
  const normalizedService = serviceChoice
    ? serviceChoice
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Service";

  return [
    `Reminder: The charge for ${normalizedService} is ${charge}.`,
    `Your total due for ${normalizedService} is ${charge}.`,
    `The amount payable for ${normalizedService} is ${charge}.`,
    `You’ll need to pay ${charge} for ${normalizedService}.`,
    `Please note: ${normalizedService} costs ${charge}.`
  ];
}

function getExactCharge(category, serviceChoice) {
  const cat = category ? category.toLowerCase().trim() : "";
  const service = serviceChoice ? serviceChoice.toLowerCase().trim() : "";

  if (chargeTable[cat]) {
    for (const key in chargeTable[cat]) {
      if (service === key.toLowerCase()) {
        return chargeTable[cat][key];
      }
    }
  }
  return "MK0"; // fallback
}

// === Instruction Variants ===
const airtelInstructions = [
  "Check your Airtel Money SMS and copy the Trans ID shown there.",
  "Please provide the Trans ID from your Airtel Money transaction message.",
  "Look at your Airtel Money SMS — the Trans ID is listed in the message.",
  "Copy the Trans ID from your Airtel Money confirmation SMS."
];

const mpambaInstructions = [
  "Check your Mpamba SMS and copy the Ref number shown there.",
  "Please provide the Ref number from your Mpamba transaction message.",
  "Look at your Mpamba SMS — the Ref number is listed in the message.",
  "Copy the Ref number from your Mpamba confirmation SMS."
];

const mo626Instructions = [
  "Check your Mo626 SMS and copy the Ref number shown there.",
  "Please provide the Ref number from your Mo626 transaction message.",
  "Look at your Mo626 SMS — the Ref number is listed in the message.",
  "Copy the Ref number from your Mo626 confirmation SMS."
];

function getInstructionMessage(provider) {
  switch (provider.toLowerCase()) {
    case "airtelmoney":
      return airtelInstructions[Math.floor(Math.random() * airtelInstructions.length)];
    case "mpamba":
      return mpambaInstructions[Math.floor(Math.random() * mpambaInstructions.length)];
    case "mo626":
      return mo626Instructions[Math.floor(Math.random() * mo626Instructions.length)];
    default:
      return "Please provide your payment reference or transaction ID from your SMS.";
  }
}


// === Category Charges Helper ===
function getCategoryCharges(category) {
  const cat = category ? category.toLowerCase().replace(/\s+/g, "") : "";
  if (!chargeTable[cat]) return "No charges available.";
  const charges = chargeTable[cat];

  return Object.entries(charges)
    .map(([service, charge]) => {
      // Capitalize each word, but keep CV uppercase
      const formattedService = service
        .toLowerCase()
        .split(" ")
        .map(word => {
          if (word.toLowerCase() === "cv") {
            return "CV"; // keep acronym uppercase
          }
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
      return `${formattedService}: ${charge}`;
    })
    .join(" | ");
}

function getPaymentReminderLeadInVariants() {
  return [
    "Let’s move on to payment.",
    "Ready to settle the charges?",
    "Here’s how you can pay."
  ];
}

function getDefaultFallbackVariants() {
  return [
    "Sorry, I didn’t quite get that.",
    "Could you rephrase your request?",
    "I’m not sure I understood — please try again."
  ];
}
function getReconsiderFallbackVariants() {
  return [
    "Would you like to reconsider your update?",
    "Maybe we can adjust your CV differently.",
    "Let’s revisit your update options."
  ];
}
function getSkipEmploymentVariants() {
  return [
    "Okay, we’ll skip employment details for now.",
    "Skipping employment section — let’s move forward.",
    "Employment info skipped. What would you like to update next?"
  ];
}
function getCoverLetterAgreementVariants() {
  return [
    "Great, let’s move forward with your cover letter update.",
    "Thanks for confirming — we’ll proceed with the cover letter.",
    "Cover letter agreement noted. Let’s continue."
  ];
}
function getCoverLetterReconsiderPromptVariants() {
  return [
    "Would you like to reconsider updating your cover letter?",
    "Maybe we should revisit your cover letter options.",
    "Do you want to adjust your cover letter update?"
  ];
}

function getPaymentMethodDisagreeVariants() {
  return [
    "Okay, we won’t proceed with that payment method.",
    "Understood — let’s choose another way to pay.",
    "Got it, we’ll skip that payment option."
  ];
}
function getReconsiderPaymentMethodVariants() {
  return [
    "Would you like to reconsider your payment method?",
    "Maybe we should revisit your payment options.",
    "Do you want to adjust your payment choice?"
  ];
}
function getPaymentProofAcknowledgementVariants() {
  return [
    "Payment proof received — thank you.",
    "We’ve acknowledged your payment proof.",
    "Your payment confirmation has been noted."
  ];
}
function getPaymentProofDisagreeVariants() {
  return [
    "Okay, we won’t proceed with that payment proof.",
    "Understood — let’s choose another way to confirm payment.",
    "Got it, we’ll skip that payment proof option."
  ];
}
function getReconsiderPaymentProofVariants() {
  return [
    "Would you like to reconsider your payment proof?",
    "Maybe we should revisit your payment confirmation options.",
    "Do you want to adjust how you provide payment proof?"
  ];
}


module.exports = {
  // Greeting & Category
  getGreetingLeadInVariants,
  getGreetingVariants,
  getCategoryVariants,

  // Service Selection & Payment Agreement
  getServiceSelectionVariants,
  getCvPaymentAgreementVariants,

  // Personal Info & Education
  getPersonalInfoVariants,
  getEducationVariants,

  // Certifications & Employment
  getCertificationsVariants,
  getEmploymentVariants,

  // Experience Extras & Referees
  getExperienceExtrasVariants,
  getRefereesVariants,

  // Languages & Cover Letter
  getLanguagesInfoVariants,
  getCoverLetterVariants,
  getCoverLetterAgreementVariants,
  getCoverLetterReconsiderPromptVariants,
  // Payment Method & Proof
  getPaymentMethodVariants,
  getPaymentProofVariants,
  getPaymentReminderLeadInVariants,
  getPaymentMethodDisagreeVariants,
  getReconsiderPaymentMethodVariants,
  getPaymentProofAcknowledgementVariants,
  getPaymentProofDisagreeVariants,
  getReconsiderPaymentProofVariants,

  // Service Summary
  getServiceSummaryLeadInVariants,
  getServiceSummaryVariants,

  // Missing Details
  getMissingEducationDetailsVariants,
  getMissingCertificationsDetailsVariants,
  getMissingExperienceExtrasDetailsVariants,
  getMissingRefereeDetailsVariants,
  getMissingLanguageDetailsVariants,

  // Skip Variants
  getSkipCertificationsVariants,
  getSkipExperienceExtrasVariants,
  getSkipRefereesVariants,
  getSkipLanguagesVariants,

  chargeTable,
  getCategoryCharges,
  getExactCharge,
  getChargeReminderVariants,
  getInstructionMessage,
  getPaymentReminderLeadInVariants,
  getDefaultFallbackVariants,
  getReconsiderFallbackVariants,
  getSkipEmploymentVariants

};
