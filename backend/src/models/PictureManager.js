const AbstractManager = require("./AbstractManager");

class PictureManager extends AbstractManager {
  constructor() {
    super({ table: "picture" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(picture) {
    return this.connection.query(
      `INSERT INTO ${this.table}
      (picture_url,
      creation_date,
      is_validated,
      work_id,
      user_id) VALUES (?, ?, 1, ?, ?)`,
      [picture.url, new Date(), picture.workId, picture.userId]
    );
  }

  pictureIsFavorite(favorite) {
    return this.connection.query(
      `select * from picture as p
  inner join user_has_fav_picture as uhfp on p.id = uhfp.picture_id
  where uhfp.user_id=?;`,
      [favorite.user_id]
    );
  }
}

module.exports = PictureManager;
