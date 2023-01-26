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

  findAllWithFirstPicture() {
    return this.connection.query(
      `select work.*, (select picture.picture_url from picture where picture.work_id = work.id order by picture.creation_date Limit 1) as picture_url from work inner join picture on picture.work_id = work.id group by work.id`
    );
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

  findValidationWaiting() {
    return this.connection.query(
      `select * from  ${this.table} where is_validated = 0`
    );
  }

  modif(work) {
    return this.connection.query(
      `update ${this.table} set is_validated = ? where id = ?`,
      [work, work.id]
    );
  }

  getWorkValue(id) {
    return this.connection.query(
      `select value_point from  ${this.table} where id = ?`,
      [id]
    );
  }
}
module.exports = WorkManager;
