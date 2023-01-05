const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  const { pseudo } = req.body;
  console.warn("-- enter in authCon");
  console.warn("Mail ", email);
  console.warn("Pseudo ", pseudo);
  models.user
    .findByEmailWithPassword(email, pseudo)
    .then(([users]) => {
      console.warn(users);
      if (users[0]) {
        [req.users] = users;
        next();
      } else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
