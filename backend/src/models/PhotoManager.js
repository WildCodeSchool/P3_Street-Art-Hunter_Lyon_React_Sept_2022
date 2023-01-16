const AbstractManager = require("./AbstractManager");

class PhotoManager extends AbstractManager {
  constructor() {
    super({ table: "picture" });
  }
}

module.exports = PhotoManager;
