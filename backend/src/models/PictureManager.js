const AbstractManager = require("./AbstractManager");

class PictureManager extends AbstractManager {
  constructor() {
    super({ table: "Picture" });
  }

  insert(Picture) {
    return this.connection.query(
      `INSERT INTO ${this.table} (Picture_url, note, Fav, Works_id, users_id)
    VALUES(?,?,?,?,?)`,
      [
        Picture.Picture_url,
        Picture.note,
        Picture.Fav,
        Picture.Works_id,
        Picture.users_id,
      ]
    );
  }

  update(Picture) {
    return this.connection.query(
      `UPDATE ${this.table} SET Picture_url = ?, note = ?, Fav = ?, Works_id = ?, users_id = ? WHERE id = ? `,
      [
        Picture.Picture_url,
        Picture.note,
        Picture.Fav,
        Picture.Works_id,
        Picture.users_id,
        Picture.id,
      ]
    );
  }
}

module.exports = PictureManager;
