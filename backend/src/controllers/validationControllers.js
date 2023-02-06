const models = require("../models");

const arePasswordAndMailValid = async (req, res, next) => {
  const { password, email } = req.body;

  const passwordRegEx =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  // eslint-disable-next-line no-useless-escape
  const mailRegEx = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

  if (!passwordRegEx.test(password)) {
    res.sendStatus(409);
    return false;
  }
  if (!email.match(mailRegEx)) {
    res.sendStatus(409);
    return false;
  }
  return next();
};

const verifyMailAndPasswordAvailablity = async (req, res, next) => {
  const { pseudo, email } = req.body;

  const checkEmail = await models.user.findAccountWithEmail(email);
  const checkPseudo = await models.user.findAccountWithPseudo(pseudo);
  if (checkEmail[0].length > 0 && checkPseudo[0].length > 0) {
    res.status(409).json({ error: "Cet email et ce pseudo sont déja utilisé" });

    return false;
  }
  if (checkEmail[0].length > 0) {
    res.status(409).json({ error: "Cet email est déja utilisé" });

    return false;
  }
  if (checkPseudo[0].length > 0) {
    res.status(409).json({ error: "Ce pseudo est déja utilisé" });

    return false;
  }
  return next();
};

module.exports = { verifyMailAndPasswordAvailablity, arePasswordAndMailValid };
