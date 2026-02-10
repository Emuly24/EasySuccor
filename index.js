const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // ✅ parse JSON body

app.post("/webhook", (req, res) => {
  try {
    // Safe checks to avoid crashes
    const queryResult = req.body.queryResult || {};
    const intent = queryResult.intent?.displayName || "unknown";
    const params = queryResult.parameters || {};
    const session = req.body.session || "default";

    console.log("Webhook triggered. Intent:", intent, "Params:", params);

    let responseText = "";
    let outputContexts = [];

   
  switch (intent) {
    // 1. Category → Show charges
    case "cv_category":
      if (params.category === "Student") {
        responseText = "You are a student or recent graduate. Charges: CV only MK6,000; Editable CV MK10,000; Cover letter MK5,000; Resume + Cover Letter MK8,000. Do you agree to proceed with these charges?";
      } else if (params.category === "Professional") {
        responseText = "You are a working professional. Charges: CV only MK8,000; Editable CV MK12,000; Cover letter MK7,000; Resume + Cover Letter MK10,000; Editable Resume + Cover Letter MK12,000. Do you agree to proceed with these charges?";
      } else if (params.category === "Non-Working Professional") {
        responseText = "You are a non-working professional. Charges: CV only MK8,000; Editable CV MK10,000; Cover letter MK7,000; Resume + Cover Letter MK10,000; Editable Resume + Cover Letter MK12,000. Do you agree to proceed with these charges?";
      } else if (params.category === "Returning Client") {
        responseText = "Welcome back, you are a returning client. Charges: Minor CV updates MK3,000; Major revisions MK6,000; Cover letter MK5,000; CV + Cover Letter update package MK7,000. Do you agree to proceed with these charges?";
      } else {
        responseText = "Please select a valid category.";
      }
      break;

  // 2. Payment Method
  case "CV_PaymentMethod":
    switch (params.paymentMethod) {
      case "Airtel Money":
        responseText = "You are paying through Airtel Money. Withdraw using this code: 1127102 under the name Blessings Emulyn. Once done, send a screenshot of proof of payment to WhatsApp +265881193707.";
        break;
      case "Mo626":
        responseText = "You are paying through Mo626. Send payment to account: 1005653618 under the name Blessings Emulyn. Once done, send a screenshot of proof of payment to WhatsApp +265881193707.";
        break;
      case "Mpamba":
        responseText = "You are paying through Mpamba. Please send payment to wallet: +265881193707 under the name Blessings Emulyn. Once done, send a screenshot of proof of payment to WhatsApp +265881193707.";
        break;
      case "Pay Later":
        responseText = "You will pay later. Your CV/cover letter will be sent once payment is confirmed.";
        break;
      default:
        responseText = "Please choose Airtel Money, Mo626, Mpamba, or Pay Later.";
        outputContexts.push({ name: `${session}/contexts/awaiting_payment_method`, lifespanCount: 1 });
    }
    break;

    // 3. Service Selection
    case "CV_ServiceSelection":
      responseText = `Service chosen: ${params.serviceType}. Let's move to personal information.`;
      break;

    // 4. Personal Info
    case "CV_PersonalInfo":
      responseText = `Personal Info captured: ${params.firstName} ${params.middleName || ""} ${params.lastName}, Phone: ${params.phoneNumber}, Email: ${params.email}, Address: ${params.addressLine1}${params.addressLine2 ? ", " + params.addressLine2 : ""}, District: ${params.district}.`;
      break;

    // 5. Education (graduation date condition + looping)
    case "CV_EducationInfo":
      if (params.educationStatus === "Graduated" || params.educationStatus === "Awaiting Graduation Ceremony") {
        if (!params.graduationDate && !params.estimatedGraduationDate) {
          responseText = "Please provide your graduation or expected completion date.";
          outputContexts.push({ name: `${session}/contexts/awaiting_education_info`, lifespanCount: 1 });
        } else {
          responseText = `Education captured: ${params.qualification} in ${params.fieldOfStudy} at ${params.institutionName}, ${params.institutionLocation}. Status: ${params.educationStatus}, Graduation: ${params.graduationDate || params.estimatedGraduationDate}. Do you have another education detail to add?`;
          outputContexts.push({ name: `${session}/contexts/education_loop`, lifespanCount: 1 });
        }
      } else {
        responseText = `Education captured: ${params.qualification} in ${params.fieldOfStudy} at ${params.institutionName}, ${params.institutionLocation}. Status: ${params.educationStatus}. Do you have another education detail to add?`;
        outputContexts.push({ name: `${session}/contexts/education_loop`, lifespanCount: 1 });
      }
      break;

    // 6. Certifications (looping)
    case "CV_CertificationInfo":
      responseText = `Certification captured: ${params.certificateName}, Issued by ${params.issuingOrganization}, Completed on ${params.completionDate || "N/A"}. Description: ${params.description || "N/A"}. Do you have another certification to add?`;
      outputContexts.push({ name: `${session}/contexts/certification_loop`, lifespanCount: 1 });
      break;

    // 7. Employment (end date condition + looping)
    case "CV_EmploymentInfo":
      if (params.employmentStatus === "Currently Employed") {
        responseText = `Employment captured: ${params.jobTitle} at ${params.companyName}, ${params.companyAddress1}${params.companyAddress2 ? ", " + params.companyAddress2 : ""}, ${params.country}. Responsibilities: ${params.responsibilities}. Status: ${params.employmentStatus}, Duration: ${params.startDate} to Present. Contributions: ${params.contributions || "N/A"}. Do you have another work experience to add?`;
        outputContexts.push({ name: `${session}/contexts/employment_loop`, lifespanCount: 1 });
      } else {
        if (!params.endDate) {
          responseText = "Please provide the end date of your employment.";
          outputContexts.push({ name: `${session}/contexts/awaiting_employment_info`, lifespanCount: 1 });
        } else {
          responseText = `Employment captured: ${params.jobTitle} at ${params.companyName}, ${params.companyAddress1}${params.companyAddress2 ? ", " + params.companyAddress2 : ""}, ${params.country}. Responsibilities: ${params.responsibilities}. Status: ${params.employmentStatus}, Duration: ${params.startDate} to ${params.endDate}. Contributions: ${params.contributions || "N/A"}. Do you have another work experience to add?`;
          outputContexts.push({ name: `${session}/contexts/employment_loop`, lifespanCount: 1 });
        }
      }
      break;

    // 8. Referees (minimum 2 required + looping)
    case "CV_RefereesInfo":
      if (!params.refereeName || !params.refereeEmail) {
        responseText = "Please provide a referee with their name and email address.";
        outputContexts.push({ name: `${session}/contexts/awaiting_referee_info`, lifespanCount: 1 });
      } else {
        responseText = `Referee captured: ${params.refereeName}, Position: ${params.refereePosition || "N/A"}, Company: ${params.refereeCompany || "N/A"}, Location: ${params.refereeLocation || "N/A"}, Email: ${params.refereeEmail}.`;

        let refereeCount = 1;
        const existingContext = req.body.queryResult.outputContexts.find(ctx => ctx.name.endsWith("/referee_count"));
        if (existingContext && existingContext.parameters && existingContext.parameters.count) {
          refereeCount = existingContext.parameters.count + 1;
        }

        if (refereeCount < 2) {
          responseText += " Please add at least one more referee.";
          outputContexts.push({
            name: `${session}/contexts/referee_count`,
            lifespanCount: 2,
            parameters: { count: refereeCount }
          });
          outputContexts.push({ name: `${session}/contexts/awaiting_referee_info`, lifespanCount: 1 });
        } else {
          responseText += " Do you have another referee to add?";
          outputContexts.push({
            name: `${session}/contexts/referee_count`,
            lifespanCount: 2,
            parameters: { count: refereeCount }
          });
          outputContexts.push({ name: `${session}/contexts/referee_loop`, lifespanCount: 1 });
        }
      }
      break;

    // 9. Languages (language + proficiency required + looping)
    case "CV_LanguagesInfo":
      if (!params.language || !params.proficiency) {
        responseText = "Please provide both the language and your proficiency level (e.g., Beginner, Intermediate, Advanced, Fluent).";
        outputContexts.push({ name: `${session}/contexts/awaiting_language_info`, lifespanCount: 1 });
      } else {
        responseText = `Language captured: ${params.language}, Proficiency: ${params.proficiency}. Do you have another language to add?`;
        outputContexts.push({ name: `${session}/contexts/language_loop`, lifespanCount: 1 });
      }
      break;

    // 10. CV Update (restricted to Returning Clients)
  case "CV_Update":
    if (params.category === "Returning Client") {
      if (params.updateField && params.updateValue) {
        responseText = `Update applied: ${params.updateField} changed to ${params.updateValue}. Do you have another update to make?`;
        outputContexts.push({ name: `${session}/contexts/update_loop`, lifespanCount: 1 });
      } else {
        responseText = "Please specify which section you want to update and the new value.";
        outputContexts.push({ name: `${session}/contexts/awaiting_update_info`, lifespanCount: 1 });
      }
    } else {
      responseText = "CV updates are only available for returning clients whose CV was crafted by EasySuccor. For new clients, we’ll create a fresh CV instead.";
    }
    break;


      // 11. Cover Letter Vacancy (mandatory position + company, text/URL preferred, WhatsApp fallback)
   case "Cover_Letter":
     if (!params.positionApplied || !params.companyApplied) {
       responseText = "Please provide both the position you are applying for and the company name.";
       outputContexts.push({ name: `${session}/contexts/awaiting_cover_letter_info`, lifespanCount: 1 });
  } else if (!params.vacancyDetails) {
    // If vacancy details are missing, ask for text or URL
    responseText = "Please paste the vacancy details here as text or share the vacancy URL. If the details are in image form like screenshot, you may send them to our WhatsApp number: +256881193707.";
    outputContexts.push({ name: `${session}/contexts/awaiting_cover_letter_info`, lifespanCount: 1 });
  } else {
    // Capture cover letter details
    responseText = `Cover letter vacancy captured: Position - ${params.positionApplied}, Company - ${params.companyApplied}, Vacancy Details: ${params.vacancyDetails}.`;
    outputContexts.push({ name: `${session}/contexts/cover_letter_loop`, lifespanCount: 1 });
  }
  break;

    // 12. CV_PaymentMethod
case "CV_PaymentMethod":
  switch (params.paymentMethod) {
    case "Airtel Money":
      responseText = "You are paying through Airtel Money. Withdraw using this code: 1127102 under the name Blessings Emulyn. Once done, send a screenshot of proof of payment to WhatsApp +265881193707.";
      break;
    case "Mo626":
      responseText = "You are paying through Mo626. Send payment to account: 1005653618 under the name Blessings Emulyn. Once done, send a screenshot of proof of payment to WhatsApp +265881193707.";
      break;
    case "Mpamba":
      responseText = "You are paying through Mpamba. Please send payment to wallet: +265881193707 under the name Blessings Emulyn. Once done, send a screenshot of proof of payment to WhatsApp +265881193707.";
      break;
    case "Pay Later":
      responseText = "You will pay later. Your CV/cover letter will be send once payment is confirmed.";
      break;
    default:
      responseText = "Please choose Airtel Money, Mo626, Mpamba, or Pay Later.";
      outputContexts.push({ name: `${session}/contexts/awaiting_payment_method`, lifespanCount: 1 });
  }
  break;

     // 13. Payment Proof
  case "CV_PaymentProof":
    if (!params.paymentProof) {
      responseText = "Please provide proof of payment (transaction ID, receipt number, or screenshot confirmation).";
      outputContexts.push({ name: `${session}/contexts/awaiting_payment_proof`, lifespanCount: 1 });
    } else {
      responseText = `Payment proof received: ${params.paymentProof}. Thank you! Please also send a screenshot to WhatsApp +265881193707 for verification. Your CV/cover letter process will now begin.`;
      outputContexts = []; // end flow
    }
    break;

 default:
        responseText = "Sorry, I didn’t understand that intent.";
    }

    // ✅ Always return JSON
    return res.json({
      fulfillmentText: responseText,
      outputContexts: outputContexts
    });

  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ fulfillmentText: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook running on port ${PORT}`);
});
