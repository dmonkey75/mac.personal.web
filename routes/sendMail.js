const express = require("express");
const sendToMeRouter = express.Router();
const nodemailer = require("nodemailer");

const transport = {
  //all of the configuration for making a site send an email.
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD
  }
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    //if error happened code ends here
    console.error("an error occured: " + error);
  } else {
    //this means success
    console.log("users ready to mail myself");
  }
});

const bodyParser = require("body-parser").json();

sendToMeRouter.post("/", bodyParser, (req, res, next) => {
  //make mailable object
  const mail = {
    from: process.env.THE_EMAIL,
    to: process.env.THE_EMAIL,
    cc: req.body.email,
    subject: req.body.subject,
    html: `
        <b>FROM:</b> ${req.body.name} <br><br>
        <b>EMAIL:</b> ${req.body.email} <br><br>
        <b>MESSAGE: </b> <br><br>
        ${req.body.text}`
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log("err", err);
      res.json({
        status: "Sending of email failed"
      });
    } else {
      res.json({
        status: "Email sent successfully"
      });
    }
  });
});

module.exports = sendToMeRouter;
