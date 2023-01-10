const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    super({ table: "Artists" });
  }

  findArtist(id) {
    return this.connection.query(
      `SELECT artist_name
      FROM ${this.table}
      JOIN Works ON Artists.id = Works.Artists_id
      JOIN Picture ON Works.id = Picture.Works_id
      WHERE Picture.id = ? `,
      [id]
    );
  }

  findAll() {
    return this.connection.query(`SELECT artist_name
    FROM ${this.table}
    JOIN Works ON Artists.id = Works.Artists_id
    JOIN Picture ON Works.id = Picture.Works_id`);
  }

  insert(artists) {
    return this.connection.query(
      `insert into ${this.table} (id, artist_name) values (?, ?)`,
      [artists.id, artists.artist_name]
    );
  }

  update(artists) {
    return this.connection.query(
      `update ${this.table} set artist_name = ? where id = ?`,
      [artists.id, artists.artist_name]
    );
  }
}

module.exports = ArtistManager;
