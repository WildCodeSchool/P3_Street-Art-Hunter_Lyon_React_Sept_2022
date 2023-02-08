const models = require("../models");

const browse = (req, res) => {
  models.shop
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
  const shop = req.body;

  // on verifie les données

  models.shop
    .insert(shop)
    .then(([result]) => {
      res.location(`/shop/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const modif = (req, res) => {
  const shop = req.body;
  shop.id = req.params.id;

  models.shop
    .modif(shop)
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
  models.shop
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

module.exports = {
  browse,
  add,
  destroy,
  modif,
};
