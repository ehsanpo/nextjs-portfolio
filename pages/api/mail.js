const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, message } = req.body;

  const mail = {
    from: "ehsan.po@gmail.com",
    to: "ehsan.po@gmail.com",
    subject: "New message from contact form",
    text: message,
    html: message,
  };

  sgMail
    .send(mail)
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};
