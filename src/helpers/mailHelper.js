const nodemailer = require("nodemailer");
const mailConfig = require("../config/mail.config");

const transporter = nodemailer.createTransport({
  host: mailConfig.smtpHost,
  port: mailConfig.smtpPort,
  secure: true,
  auth: {
    user: mailConfig.smtpUser,
    pass: mailConfig.smtpPassword,
  },
});

const mailSend = async ({ from, to, subject, html }) => {
  // Define the transporter with Ethereal credentials

  const mailOptions = {
    from,
    to,
    subject,
    html,
  };
  console.log({ mailConfig });

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.error("Error sending email:", err);
    throw new Error(err);
  }
};

module.exports = mailSend;
