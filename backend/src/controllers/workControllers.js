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

const showValidation = (req, res) => {
  models.work
    .findValidationWaiting()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const work = req.body;
  work.id = req.params.id;

  models.work
    .modif(work)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const { id } = req.params;
  models.work
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

// const addAndPassInsertIdToNext = (req, res, next) => {
//   const work = req.body;
//   // on verifie les données

//   models.work
//     .insert(work)
//     .then(([result]) => {
//       res.location(`/work/${result.insertId}`).sendStatus(201);
//       req.body.picture.workId = result.insertId;
//       next();
//     })
//     .catch((error) => {
//       console.error(error);
//       res.sendStatus(500);
//     });
// };
module.exports = {
  browse,
  add,
  read,
  showValidation,
  edit,
  destroy,
};
