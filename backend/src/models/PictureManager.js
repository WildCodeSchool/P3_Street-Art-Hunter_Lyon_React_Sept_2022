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

  findByUser(userId) {
    return this.connection.query(
      `select * from ${this.table} where user_id = ?`,
      [userId]
    );
  }

  findByWork(workId) {
    return this.connection.query(
      `select * from ${this.table} where work_id = ?`,
      [workId]
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table} `);
  }

  findNonFavoritePicture() {
    return this.connection.query(`select * from  ${this.table} as p
    left join user_has_fav_picture as uhfp on p.id = uhfp.picture_id;`);
  }

  insert(picture) {
    return this.connection.query(
      `INSERT INTO ${this.table}
      (picture_url,
      creation_date,
      is_validated,
      work_id,
      user_id,
      is_signaled) VALUES (?, ?, 1, ?, ?, 0)`,
      [picture.url, new Date(), picture.workId, picture.userId]
    );
  }

  pictureIsFavorite(favorite) {
    return this.connection.query(
      `select * from picture as p
  inner join user_has_fav_picture as uhfp on p.id = uhfp.picture_id
  where uhfp.userId=?;`,
      [favorite.user_id]
    );
  }

  findPictureByUserAndWork(userId, workId) {
    return this.connection.query(
      `select * from ${this.table} where user_id= ? and work_id= ?`,
      [userId, workId]
    );
  }

  updateURLAndDate(url, pictureId) {
    return this.connection.query(
      `update ${this.table} set picture_url = ?, creation_date = ? where id = ?`,
      [url, new Date(), pictureId]
    );
  }

  deletePicturesWithWorkId(workId) {
    return this.connection.query(
      `delete from ${this.table} where work_id = ?`,
      [workId]
    );
  }
}

module.exports = PictureManager;
