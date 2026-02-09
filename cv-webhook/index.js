const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const intent = req.body.queryResult.intent.displayName;
  const params = req.body.queryResult.parameters;
  let responseText = "";

  // --- Personal Info ---
  if (intent === "CV_PersonalInfo") {
    const firstName = params.firstName;
    let middleName = params.middleName;
    const lastName = params.lastName;
    const contactInfo = params.contactInfo;
    const homeDistrict = params.homeDistrict;
    const currentDistrict = params.currentDistrict;
    const email = params.email;
    const address = params.address;

    if (!middleName || middleName.trim() === "") {
      middleName = "";
      responseText = `Personal Info captured: ${firstName} ${lastName}, Contact: ${contactInfo}, Home District: ${homeDistrict}, Current District: ${currentDistrict}, Email: ${email}, Address: ${address}. (No middle name provided)`;
    } else {
      responseText = `Personal Info captured: ${firstName} ${middleName} ${lastName}, Contact: ${contactInfo}, Home District: ${homeDistrict}, Current District: ${currentDistrict}, Email: ${email}, Address: ${address}.`;
    }
  }

  // --- Education Info ---
  if (intent === "CV_EducationInfo") {
    const qualification = params.qualification;
    const institution = params.institution;
    const status = params.educationStatus;
    let graduationDate = params.graduationDate;

    if (status === "Ongoing") {
      graduationDate = "Present";
      responseText = `You are currently pursuing ${qualification} at ${institution}. Status: ${status}.`;
    } else if (status === "Completed") {
      responseText = `You completed ${qualification} at ${institution}, graduating on ${graduationDate}.`;
    } else {
      responseText = `You studied ${qualification} at ${institution}. Status: ${status}.`;
    }
  }

  // --- Employment Info ---
  if (intent === "CV_EmploymentInfo") {
    const company = params.company;
    const role = params.jobRoles; // job roles entity
    const startDate = params.employmentStartDate;
    let endDate = params.employmentEndDate;
    const status = params.employmentStatus;

    if (status === "Present") {
      endDate = "Present";
      responseText = `You are currently working at ${company} as ${role} since ${startDate}.`;
    } else {
      responseText = `You worked at ${company} as ${role} from ${startDate} to ${endDate}.`;
    }
  }

  // --- Referees Info ---
  if (intent === "CV_RefereesInfo") {
    const refereeName = params.refereeName;
    const refereePosition = params.refereePosition;
    let refereeEmail = params.refereeEmail;
    const refereeCompany = params.refereeCompany;
    let refereeCompanyLocation = params.refereeCompanyLocation;

    if (!refereeEmail || refereeEmail.trim() === "") {
      refereeEmail = "Not provided";
    }
    if (!refereeCompanyLocation || refereeCompanyLocation.trim() === "") {
      refereeCompanyLocation = "Location not provided";
    }

    responseText = `Referee ${refereeName} (${refereePosition}), Company: ${refereeCompany}, Location: ${refereeCompanyLocation}, Email: ${refereeEmail}.`;
  }

  // --- Languages Info ---
  if (intent === "CV_LanguagesInfo") {
    const language = params.language;
    const proficiency = params.proficiency;
    responseText = `Language captured: ${language} at ${proficiency} proficiency.`;
  }

  // --- CV Update ---
  if (intent === "CV_Update") {
    const updateField = params.updateField;
    const updateValue = params.updateValue;
    responseText = `Your CV has been updated: ${updateField} → ${updateValue}.`;
  }

  // --- Cover Letter ---
  if (intent === "Cover_Letter") {
    const positionApplied = params.positionApplied;
    const companyApplied = params.companyApplied;
    responseText = `Here’s a tailored cover letter for ${positionApplied} at ${companyApplied}.`;
  }

  res.json({
    fulfillmentText: responseText,
    outputContexts: [
      {
        name: `${req.body.session}/contexts/next_flow`,
        lifespanCount: 1
      }
    ]
  });
});

app.listen(process.env.PORT || 8080, () => console.log("Webhook running"));
