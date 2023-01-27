const models = require("../models");

const browse = (req, res) => {
  models.user
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

  models.user
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
  const user = req.body;

  // on verifie les données

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;
  user.id = req.params.id;

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const modif = (req, res) => {
  const user = req.body;
  user.id = req.params.id;

  models.user
    .modif(user)
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
  models.user
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

const leaderboard = (req, res) => {
  models.user
    .getLeaderboard()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getMyscore = (req, res) => {
  models.user
    .getScore(req.params.id)
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getRanks = async (req, res) => {
  models.user
    .getIdByScorepoint(req.params.id)
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getScoreAndPassToNext = (req, res) => {
  models.user
    .getScore(req.params.id)
    .then(([results]) => {
      req.body.score = results[0].scorepoint;
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const addPoints = (req, res) => {
  const { value, score } = req.body;
  const userId = req.params.id;
  const newScore = value + score;
  models.user
    .addUserPoints(newScore, userId)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else {
        res.send(`${value}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
      console.error(error);
      res.sendStatus(500);
    });
};

const pointsOnPictureValidation = async (req, res) => {
  try {
    const { workId, userId } = req.body;
    const [points] = await models.work.getWorkValue(workId);
    req.body.value = points[0].value_point;
    const [datas] = await models.user.getScore(userId);
    req.body.score = datas[0].scorepoint;
    const { value, score } = req.body;
    const newScore = value + score;
    const [result] = await models.user.addUserPoints(newScore, userId);
    if (result.affectedRows === 0) res.sendStatus(404);
    else {
      res.send(`${value}`);
    }
  } catch (error) {
    console.warn(error);
    res.sendStatus(500);
  }
};

const pointsOnWorkValidation = async (req, res) => {
  try {
    const userId = req.body.added_by;
    const [datas] = await models.user.getScore(userId);
    req.body.score = datas[0].scorepoint;
    const { score } = req.body;
    const value = 300;
    const newScore = value + score;
    const [result] = await models.user.addUserPoints(newScore, userId);
    if (result.affectedRows === 0) res.sendStatus(404);
    else {
      res.send(`${value}`);
    }
  } catch (error) {
    console.warn(error);
    res.sendStatus(500);
  }
};
module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
  leaderboard,
  getMyscore,
  getRanks,
  modif,
  addPoints,
  getScoreAndPassToNext,
  pointsOnPictureValidation,
  pointsOnWorkValidation,
};
