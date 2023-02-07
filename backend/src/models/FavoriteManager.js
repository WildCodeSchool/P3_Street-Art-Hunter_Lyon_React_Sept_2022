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
      (user_id,
      picture_id) VALUES (?, ?)`,
      [favorite.userId, favorite.picture_id]
    );
  }

  deleteFavorite(userId, picture_id) {
    return this.connection.query(
      `delete from ${this.table} where user_id = ? and picture_id = ? `,
      [userId, picture_id]
    );
  }

  deleteByPictureId(pictureId) {
    return this.connection.query(
      `delete from ${this.table} where picture_id = ?`,
      [pictureId]
    );
  }
}

module.exports = FavoriteManager;
