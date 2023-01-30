/* eslint-disable camelcase */
const models = require("../models");

const browse = (req, res) => {
  models.user_has_fav_picture
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const favorite = req.body;

  models.user_has_fav_picture
    .insert(favorite)
    .then(([result]) => {
      res.location(`/favorites/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const favorite = req.body;

  favorite.picture_id = req.params;
  favorite.userId = req.params;

  models.user_has_fav_picture
    .deleteFavorite(favorite.userId, favorite.picture_id)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
  destroy,
};
