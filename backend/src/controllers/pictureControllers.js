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

const verifyIfUserHasPictureOnWork = (req, res, next) => {
  const { userId, workId } = req.body;
  models.picture
    .findPictureByUserAndWork(userId, workId)
    .then(([results]) => {
      if (results[0]) res.send(results[0]);
      else next();
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const putNewPicture = (req, res) => {
  const { url } = req.body;
  const { id } = req.params;
  models.picture
    .updateURLAndDate(url, id)
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
  add,
  browse,
  read,
  addAndPassToNext,
  verifyIfUserHasPictureOnWork,
  putNewPicture,
};
