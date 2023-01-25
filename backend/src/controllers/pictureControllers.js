const models = require("../models");

const browse = (req, res) => {
  models.picture
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const myPict = (req, res) => {
  const { userId } = req.params;
  models.picture
    .findByUser(userId)
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

  models.picture
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
  const picture = req.body;
  // on verifie les données

  models.picture
    .insert(picture)
    .then(([result]) => {
      res.location(`/picture/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getUserFavorites = (req, res) => {
  const favorite = req.body;

  favorite.user_id = req.params;

  models.picture
    .pictureIsFavorite(favorite.user_id)
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
const addAndPassToNext = (req, res, next) => {
  const picture = req.body;
  // on verifie les données

  models.picture
    .insert(picture)
    .then(([result]) => {
      res.location(`/picture/${result.insertId}`);
      next();
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  browse,
  read,
  getUserFavorites,
  addAndPassToNext,
  myPict,
};
