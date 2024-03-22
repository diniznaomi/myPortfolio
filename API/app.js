const express = require('express');
const nodemailer = require('nodemailer');
const { OAuth2Client } = require('google-auth-library');

const app = express();
const port = 8000;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: "node2751@gmail.com",
      pass: "xxx",
      clientId: "xxx",
      clientSecret: "xxx",
      refreshToken: "xxx"
    }
  });

  let mailOptions = {
    from: "node2751@gmail.com",
    to: "nalindsaydm@gmail.com",
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});