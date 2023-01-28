const models = require("../models");

const browse = (req, res) => {
  models.fav
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
const read = (req, res) => {
  const { id } = req.params;

  models.fav
    .find(id)
    .then(([results]) => {
      if (results[0]) res.send(results[0]);
      else res.sendStatus(404);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const fav = req.body;

  // on verifie les données

  models.fav
    .insert(fav)
    .then(([result]) => {
      res.location(`/fav/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
module.exports = {
  browse,
  add,
  read,
};
