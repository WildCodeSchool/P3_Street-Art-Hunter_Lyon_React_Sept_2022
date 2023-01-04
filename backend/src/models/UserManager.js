const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, scorepoint, Pseudo, isAdmin, email from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email, pseudo) {
    return this.connection.query(
      `select * from  ${this.table} where email = ? or pseudo = ?`,
      [email, pseudo]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, scorepoint, Pseudo, isAdmin, email from  ${this.table}`
    );
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, firstname, lastname, scorepoint, isAdmin, email, hashedPassword) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        users.pseudo,
        users.firstname,
        users.lastname,
        users.scorepoint,
        users.isAdmin,
        users.email,
        users.hashedPassword,
      ]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, scorepoint = ?, Pseudo = ?, isAdmin = ?, email = ?, hashedPassword = ? where id = ?`,
      [
        users.firstname,
        users.lastname,
        users.scorepoint,
        users.Pseudo,
        users.isAdmin,
        users.email,
        users.hashedPassword,
      ]
    );
  }

  getLeaderboard() {
    return this.connection.query(
      `select pseudo, scorepoint from ${this.table} order by scorepoint desc limit 20`
    );
  }
}

module.exports = UserManager;
