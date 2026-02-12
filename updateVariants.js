// === Helper to pick a random variant ===
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// === Update Mode Variants ===
function getUpdatePersonalInfoVariants() {
  return [
    "Alright, let’s adjust your personal information.",
    "Sure, please share the updated personal details.",
    "Got it — what changes should we make to your personal info?",
    "Okay, let’s update your personal section."
  ];
}

function getUpdateEducationVariants() {
  return [
    "Let’s refresh your education details.",
    "Please provide the updated education information.",
    "Alright, what changes do you want in your education section?",
    "Sure, let’s update your academic background."
  ];
}

function getUpdateCertificationsVariants() {
  return [
    "Let’s update your certifications or recognitions.",
    "Please share the new certification details.",
    "Alright, what changes should we make to your certifications?",
    "Sure, let’s refresh your achievements section."
  ];
}

function getUpdateEmploymentVariants() {
  return [
    "Let’s adjust your employment history.",
    "Please provide the updated job details.",
    "Alright, what changes do you want in your work experience?",
    "Sure, let’s refresh your employment section."
  ];
}

function getUpdateExperienceExtrasVariants() {
  return [
    "Let’s update your volunteering or project contributions.",
    "Please share the new experience extras details.",
    "Alright, what changes should we make to your extra experiences?",
    "Sure, let’s refresh your experience extras section."
  ];
}

function getUpdateRefereesVariants() {
  return [
    "Let’s update your referees.",
    "Please share the updated referee details.",
    "Alright, who should we add or change in your referees?",
    "Sure, let’s refresh your referee section."
  ];
}

function getUpdateLanguagesVariants() {
  return [
    "Let’s adjust your language details.",
    "Please provide the updated language information.",
    "Alright, what changes do you want in your languages?",
    "Sure, let’s refresh your languages section."
  ];
}

function getUpdateCoverLetterVariants() {
  return [
    "Let’s update your cover letter.",
    "Please share the revised cover letter content.",
    "Alright, what changes should we make to your cover letter?",
    "Sure, let’s refresh your cover letter section."
  ];
}
// === Helper to pick a random variant ===
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// === Update Mode Variants ===
function getUpdatePersonalInfoVariants() {
  return [
    "Alright, let’s adjust your personal information.",
    "Sure, please share the updated personal details.",
    "Got it — what changes should we make to your personal info?",
    "Okay, let’s update your personal section."
  ];
}

function getUpdateEducationVariants() {
  return [
    "Let’s refresh your education details.",
    "Please provide the updated education information.",
    "Alright, what changes do you want in your education section?",
    "Sure, let’s update your academic background."
  ];
}

function getUpdateCertificationsVariants() {
  return [
    "Let’s update your certifications or recognitions.",
    "Please share the new certification details.",
    "Alright, what changes should we make to your certifications?",
    "Sure, let’s refresh your achievements section."
  ];
}

function getUpdateEmploymentVariants() {
  return [
    "Let’s adjust your employment history.",
    "Please provide the updated job details.",
    "Alright, what changes do you want in your work experience?",
    "Sure, let’s refresh your employment section."
  ];
}

function getUpdateExperienceExtrasVariants() {
  return [
    "Let’s update your volunteering or project contributions.",
    "Please share the new experience extras details.",
    "Alright, what changes should we make to your extra experiences?",
    "Sure, let’s refresh your experience extras section."
  ];
}

function getUpdateRefereesVariants() {
  return [
    "Let’s update your referees.",
    "Please share the updated referee details.",
    "Alright, who should we add or change in your referees?",
    "Sure, let’s refresh your referee section."
  ];
}

function getUpdateLanguagesVariants() {
  return [
    "Let’s adjust your language details.",
    "Please provide the updated language information.",
    "Alright, what changes do you want in your languages?",
    "Sure, let’s refresh your languages section."
  ];
}

function getUpdateCoverLetterVariants() {
  return [
    "Let’s update your cover letter.",
    "Please share the revised cover letter content.",
    "Alright, what changes should we make to your cover letter?",
    "Sure, let’s refresh your cover letter section."
  ];
}

// === Update Fallback Variants ===
function getUpdateFallbackVariants() {
  return [
    "I’m sorry, that section isn’t available for updates.",
    "That section can’t be updated in this flow.",
    "Currently, only certain CV sections can be updated.",
    "That option isn’t part of the CV Update service."
  ];
}

// === Update Clarification Variants ===
function getUpdateClarificationVariants(serviceChoice) {
  const svc = (serviceChoice || "").toLowerCase();
  if (svc.includes("minor")) {
    return [
      "Note: Minor updates are those that don’t require changing the whole layout.",
      "Minor updates involve small edits without altering the CV structure."
    ];
  }
  if (svc.includes("major")) {
    return [
      "Note: Major updates are those that require layout changes and cover more than 2 pages.",
      "Major updates involve significant revisions including layout adjustments."
    ];
  }
  return ["Please clarify the type of update you’d like to make."];
}
function getUpdateMenuVariants() {
  return [
    [
      "You’ve chosen CV Update. You can update any section of your CV:",
      "1. Personal Info",
      "2. Education",
      "3. Certifications",
      "4. Employment",
      "5. Referees",
      "6. Languages",
      "7. Experience Extras",
      "8. Cover Letter",
      "When finished, say 'Proceed to Payment'."
    ],
    [
      "CV Update selected. Available sections:",
      "• Personal Info",
      "• Education",
      "• Certifications",
      "• Employment",
      "• Referees",
      "• Languages",
      "• Experience Extras",
      "• Cover Letter",
      "Say 'Proceed to Payment' when you’re done."
    ],
    [
      "Alright, CV Update mode is active. You may update:",
      "- Personal Info",
      "- Education",
      "- Certifications",
      "- Employment",
      "- Referees",
      "- Languages",
      "- Experience Extras",
      "- Cover Letter",
      "When ready, just say 'Proceed to Payment'."
    ]
  ];
}
function getUpdateClarificationVariants(serviceChoice) {
  return [
    `Just to clarify, you’re updating the ${serviceChoice}.`,
    `Confirming: you want to update your ${serviceChoice}.`
  ];
}

module.exports = {
  getRandom,
  getUpdatePersonalInfoVariants,
  getUpdateEducationVariants,
  getUpdateCertificationsVariants,
  getUpdateEmploymentVariants,
  getUpdateExperienceExtrasVariants,
  getUpdateRefereesVariants,
  getUpdateLanguagesVariants,
  getUpdateCoverLetterVariants,
  getUpdateFallbackVariants,
  getUpdateClarificationVariants
 getUpdateMenuVariants
};
