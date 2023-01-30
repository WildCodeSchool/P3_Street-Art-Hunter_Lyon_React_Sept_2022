const AbstractManager = require("./AbstractManager");

class FavManager extends AbstractManager {
  constructor() {
    super({ table: "user_has_fav_picture" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(userHasFavPicture) {
    return this.connection.query(
      `insert into ${this.table} (userId, work_id) values (?, ?)`,
      [userHasFavPicture.userId, userHasFavPicture.work_id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = FavManager;
