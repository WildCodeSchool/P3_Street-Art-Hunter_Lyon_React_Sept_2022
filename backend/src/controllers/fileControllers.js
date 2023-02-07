// const models = require("../models");

// // Gestion Avatars

// const updateAvatar = (req, res) => {
//   const { id, avatar } = req.body;
//   console.warn(avatar);

//   models.user
//     .modifyAvatar(id, avatar)
//     .then(([result]) => {
//       if (result.affectedRows === 0) res.sendStatus(404);
//       res.location(`/api/avatars/${result.insertId}`).sendStatus(201);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.sendStatus(500);
//     });
// };

// // Gestions des Vidéos

// module.exports = {
//   updateAvatar,
// };
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const avatarDirectory = process.env.AVATAR_DIRECTORY || "public/";

const renameAvatar = (req, res, next) => {
  // TODO : gérer les erreurs
  // On récupère le nom du fichier
  const { originalname } = req.file;

  // On récupère le nom du fichier
  const { filename } = req.file;

  // On utilise la fonction rename de fs pour renommer le fichier
  const uuid = uuidv4();
  fs.rename(
    `${avatarDirectory}${filename}`,
    `${avatarDirectory}${uuid}-${originalname}`,
    (err) => {
      if (err) throw err;
      req.avatar = `${uuid}-${originalname}`;
      next();
    }
  );
};

const sendAvatar = (req, res) => {
  const { fileName } = req.params;

  res.download(avatarDirectory + fileName, fileName, (err) => {
    if (err) {
      res.status(404).send({
        message: `Avatar not found.`,
      });
    }
  });
};

module.exports = { renameAvatar, sendAvatar };
