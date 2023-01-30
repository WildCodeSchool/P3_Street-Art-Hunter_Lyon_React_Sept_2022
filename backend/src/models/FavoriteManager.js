/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "user_has_fav_picture" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(favorite) {
    return this.connection.query(
      `INSERT INTO ${this.table}
      (userId,
      picture_id) VALUES (?, ?)`,
      [favorite.userId, favorite.picture_id]
    );
  }

  deleteFavorite(favorite) {
    return this.connection.query(
      `delete from ${this.table} where userId = ? and picture_id = ? `,
      [favorite.userId, favorite.picture_id]
    );
  }
}
module.exports = FavoriteManager;
