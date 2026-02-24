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
function getUpdateClarificationVariants() {
  return {
    cvUpdate: [
      "This update will apply only to the CV sections you’ve chosen.",
      "Your CV update will be limited to the sections you specify.",
      "We’ll apply updates only to the CV areas you select.",
      "Updates will be made only to the chosen CV sections."
    ],
    coverLetter: [
      "This update will apply only to your cover letter content.",
      "Your cover letter update will be limited to the content you provide.",
      "We’ll apply updates only to the cover letter details you specify.",
      "Updates will be made only to the chosen cover letter sections."
    ],
    default: [
      "This update will apply only to the sections you’ve chosen.",
      "Your update will be limited to the areas you specify.",
      "We’ll apply updates only to the details you provide.",
      "Updates will be made only to the chosen sections."
    ]
  };
}

// === Update Menu Variants ===
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

module.exports = {
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
};
