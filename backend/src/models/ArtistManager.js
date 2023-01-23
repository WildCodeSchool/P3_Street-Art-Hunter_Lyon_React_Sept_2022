const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    super({ table: "artist" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}
module.exports = ArtistManager;
