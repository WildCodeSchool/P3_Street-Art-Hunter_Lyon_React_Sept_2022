const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email, pseudo } = req.body;

  models.user
    .findByEmailWithPassword(email, pseudo)
    .then(([users]) => {
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
// A utiliser après VerifyToken
const isUserAdmin = (req, res, next) => {
  const id = req.payloads.sub;
  models.user
    .isUserAdmin(id)
    .then(([isAdmin]) => {
      if (isAdmin[0].is_admin) next();
      else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
  isUserAdmin,
};
