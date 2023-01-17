const models = require("../models");

const browse = (req, res) => {
  models.artist
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
module.exports = {
  browse,
};
