const AbstractManager = require("./AbstractManager");

class WorkManager extends AbstractManager {
  constructor() {
    super({ table: "work" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(work) {
    return this.connection.query(
      `insert into ${this.table} (work_name, longitude, latitude, value_point, is_validated, artist_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        work.name,
        work.longitude,
        work.latitude,
        work.value,
        work.validated,
        work.artistId,
      ]
    );
  }
}
module.exports = WorkManager;
