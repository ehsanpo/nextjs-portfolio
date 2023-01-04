import React, { useState } from "react";
import Button from "../Button";

const EmailForm = (props) => {
  const [businessName, setBusinessName] = useState("");
  const [position, setPosition] = useState("");
  const [remote, setRemote] = useState("");
  const [salary, setSalary] = useState("");
  const [collectiveAgreement, setCollectiveAgreement] = useState("");
  const [vacationDays, setVacationDays] = useState("");
  const [wellnessBenefits, setWellnessBenefits] = useState("");
  const [otherPerks, setOtherPerks] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [message, setMessage] = useState("");
  const [industry, setIndustry] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    const html = `
      <p>Business Name: ${businessName}</p> <br />
      <p>Position: ${position}</p> <br />
      <p>Remote: ${remote}</p> <br />
      <p>Salary: ${salary}</p> <br />
      <p>Collective Agreement: ${collectiveAgreement}</p> <br />
      <p>Vacation Days: ${vacationDays}</p> <br />
      <p>Wellness Benefits: ${wellnessBenefits}</p> <br />
      <p>Other Perks: ${otherPerks}</p> <br />
      <p>Interview Type: ${interviewType}</p> <br />
      `;

    console.log(html);

    const msg = {
      to: "ehsan.po@gmail.com",
      subject: "Contact from website",
      html,
    };

    fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msg),
    });
    console.log(JSON.stringify(msg));
    // sgMail
    //   .send(msg)
    //   .then((response) => {
    //     console.log(response[0].statusCode);
    //     console.log(response[0].headers);
    //     setMessage("Email sent successfully!");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <div className="EmailFormWrapper">
      <form className="">
        Hi! Thank for your interest in working with me, here is a list of things
        I need to know about your company and the job.
        <br />
        <label htmlFor="businessName">Business Name:</label>
        <input
          type="text"
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <br />
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <br />
        <label htmlFor="industry">industry</label>
        <input
          type="text"
          id="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <br />
        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <label htmlFor="vacationDays">Vacation Days:</label>
        <input
          type="text"
          id="vacationDays"
          value={vacationDays}
          onChange={(e) => setVacationDays(e.target.value)}
        />
        <br />
        <label htmlFor="wellnessBenefits">Wellness Benefits:</label>
        <input
          type="text"
          id="wellnessBenefits"
          value={wellnessBenefits}
          onChange={(e) => setWellnessBenefits(e.target.value)}
        />
        <br />
        <label htmlFor="otherPerks">Other Perks:</label>
        <input
          type="text"
          id="otherPerks"
          value={otherPerks}
          onChange={(e) => setOtherPerks(e.target.value)}
        />
        <br />
        <label htmlFor="interviewType">Interview Type:</label>
        <select
          id="interviewType"
          value={interviewType}
          onChange={(e) => setInterviewType(e.target.value)}
        >
          <option value="technical interview">Technical Interview</option>
          <option value="technical test">Technical Test</option>
        </select>
        <label htmlFor="remote">Remote:</label>
        <select
          id="remote"
          value={remote}
          onChange={(e) => setRemote(e.target.value)}
        >
          <option value="technical interview">Full Remote</option>
          <option value="technical test">Part Time Remote</option>
          <option value="technical test">InHouse</option>
        </select>
        <div>
          <label htmlFor="collectiveAgreement">Collective Agreement:</label>
          <input
            type="checkbox"
            id="collectiveAgreement"
            value={collectiveAgreement}
            onChange={(e) => setCollectiveAgreement(e.target.value)}
          />

          <br />
          <br />
        </div>
        <Button type="link" onClick={sendEmail} className="btn--3">
          Send
        </Button>
        <br />
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default EmailForm;
