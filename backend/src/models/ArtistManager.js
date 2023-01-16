const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    super({ table: "artist" });
  }

  findArtist(id) {
    return this.connection.query(
      `SELECT artist_name
      FROM ${this.table}
      JOIN work ON artist.id = work.artist_id
      JOIN picture ON work.id = picture.work_id
      WHERE picture.id = ? `,
      [id]
    );
  }

  findAll() {
    return this.connection.query(`SELECT artist_name
    FROM ${this.table}
    JOIN work ON artist.id = work.artist_id
    JOIN picture ON work.id = picture.work_id`);
  }

  insert(artist) {
    return this.connection.query(
      `insert into ${this.table} (id, artist_name) values (?, ?)`,
      [artist.id, artist.artist_name]
    );
  }

  update(artist) {
    return this.connection.query(
      `update ${this.table} set artist_name = ? where id = ?`,
      [artist.id, artist.artist_name]
    );
  }
}

module.exports = ArtistManager;
