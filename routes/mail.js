const express = require("express");
const sendToMeRouter = express.Router();
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser").json();

sendToMeRouter.post("/mail", bodyParser, (req, res, next) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.RECIPIENT_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: "Contact - Michael Cajandig",
    html: ` 
        <h4>FROM</h4> ${req.body.name} <br><br>
        <h4>EMAIL</h4> ${req.body.email} <br><br>
        <h4>MESSAGE</h4>
        <p>${req.body.text}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.json({
        status: "Email sent successfully",
      });
    })
    .catch((error) => {
      console.error(error);
      console.error("error1: ", error);
      console.log("error2: ", error);
      res.json({
        status: "Sending of email failed",
      });
    });
});

module.exports = sendToMeRouter;
