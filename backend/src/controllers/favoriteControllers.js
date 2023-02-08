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
  const { picture_id } = req.params;
  const user_id = req.payloads.sub;

  models.user_has_fav_picture
    .insert(picture_id, user_id)
    .then(([result]) => {
      res.location(`/favorites/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const deleteByIdAndNext = async (req, res, next) => {
  const { id } = req.params;
  await models.user_has_fav_picture.deleteByPictureId(id).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
  next();
};

const destroy = (req, res) => {
  const { picture_id } = req.params;
  const userId = req.payloads.sub;
  models.user_has_fav_picture
    .deleteFavorite(userId, picture_id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else res.sendStatus(204);
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
  deleteByIdAndNext,
};
