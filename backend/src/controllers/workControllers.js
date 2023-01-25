const models = require("../models");

const browse = (req, res) => {
  models.work
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

  models.work
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
  const work = req.body;

  // on verifie les données

  models.work
    .insert(work)
    .then(([result]) => {
      res.location(`/work/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const readValuePassItToNext = (req, res, next) => {
  const { workId } = req.body;
  models.work
    .getWorkValue(workId)
    .then(([results]) => {
      if (results[0]) {
        req.body.value = results[0].value_point;
        next();
      } else res.sendStatus(404);
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
  readValuePassItToNext,
};
