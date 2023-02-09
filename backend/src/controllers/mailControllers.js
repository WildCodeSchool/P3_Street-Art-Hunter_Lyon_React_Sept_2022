const nodemailer = require("nodemailer");
require("dotenv").config();

const { FRONTEND_URL } = process.env;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendForgottenPassword = (req, res) => {
  transporter.sendMail(
    {
      from: process.env.SMTP_USER, // this is the address from which the email will be sent
      to: req.user.email, // this is the address to which the email will be sent
      subject: "Mot de passe oublié",
      text: "Pour creer un nouveau mot de passe cliquez ici !",
      html: `<p>Pour créer un nouveau mot de passe,<a href="${FRONTEND_URL}/resetpassword/${req.user.passwordtoken}">cliquez ici !</a></p>`,
    },
    (err, info) => {
      console.warn(info);
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else res.sendStatus(200);
    }
  );
};

module.exports = {
  sendForgottenPassword,
};
