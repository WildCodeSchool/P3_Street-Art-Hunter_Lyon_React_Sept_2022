const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmailOrPseudoWithPassword(email)
    .then(([users]) => {
      if (users[0]) {
        [req.users] = users;
        next();
      } else res.status(401).send({ error: "Email ou pseudo incorrect" });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
