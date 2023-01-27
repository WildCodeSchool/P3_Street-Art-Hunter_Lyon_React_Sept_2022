const models = require("../models");

// Gestion Avatars

const updateAvatar = (req, res) => {
  const id = req.payloads.sub;
  const { avatar } = req.body;

  models.user
    .modifyAvatar(id, avatar)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.status(202).send({ avatar });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

// Gestions des Vidéos

module.exports = {
  updateAvatar,
};
