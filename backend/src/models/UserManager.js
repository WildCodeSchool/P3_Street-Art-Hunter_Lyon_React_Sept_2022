const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
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
      `select pseudo, scorepoint, count(uhb.badge_id) as badges from ${this.table} as u
      left join user_has_badge as uhb ON u.id = uhb.user_id
      group by id
      order by scorepoint desc, badges desc
      limit 20;`
    );
  }

  getScore(id) {
    return this.connection.query(
      `select pseudo, scorepoint, count(uhb.badge_id) as badges from ${this.table} as u
      left join user_has_badge as uhb ON u.id = uhb.user_id
      where id=?
      group by id;`,
      [id]
    );
  }

  getIdByScorepoint(id) {
    return this.connection.query(
      `SELECT id, FIND_IN_SET( scorepoint, (    
        SELECT GROUP_CONCAT( scorepoint
        ORDER BY scorepoint DESC ) 
        FROM user )
        ) AS ranking
        FROM user
        WHERE id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
