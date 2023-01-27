const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, scorepoint, pseudo, is_admin, email from  ${this.table} where id = ?`,
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
      `select id, firstname, lastname, scorepoint, pseudo, is_admin, email from  ${this.table}`
    );
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, firstname, lastname, scorepoint, is_admin, email, hashedPassword) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        users.pseudo,
        users.firstname,
        users.lastname,
        users.scorepoint,
        users.is_admin,
        users.email,
        users.hashedPassword,
      ]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, scorepoint = ?, pseudo = ?, is_admin = ?, email = ?, hashedPassword = ? where id = ?`,
      [
        users.firstname,
        users.lastname,
        users.scorepoint,
        users.pseudo,
        users.is_admin,
        users.email,
        users.hashedPassword,
      ]
    );
  }

  modif(users) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      users,
      users.id,
    ]);
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
      `with user_rank as (SELECT pseudo, id, scorepoint, count(uhb.badge_id) as badges,  ROW_NUMBER() OVER( ORDER BY scorepoint desc, count(uhb.badge_id) desc, pseudo asc ) AS ranking
      FROM ${this.table}
      left join user_has_badge as uhb ON user.id = uhb.user_id
      group by id
      )
      SELECT ranking, pseudo, id, scorepoint, badges
      FROM user_rank
      where id= ?
      ORDER BY ranking;`,
      [id]
    );
  }

  isUserAdmin(id) {
    return this.connection.query(
      `select is_admin from  ${this.table} where id = ?`,
      [id]
    );
  }

  // update password token
  updatePasswordToken(user) {
    return this.connection.query(
      `update ${this.table} set passwordtoken = ? where id = ?`,
      [user.passwordtoken, user.id]
    );
  }

  selectToken(passwordtoken) {
    return this.connection.query(
      `select * from ${this.table} where passwordtoken = ?`,
      [passwordtoken]
    );
  }

  updatePasswordAfterReset(user) {
    return this.connection.query(
      `update ${this.table} set hashedPassword = ?, passwordtoken = NULL where id = ?`,
      [user.hashedPassword, user.id]
    );
  }

  addUserPoints(points, userId) {
    return this.connection.query(
      `update ${this.table} set scorepoint = ? where id = ?`,
      [points, userId]
    );
  }

  getUsersByMessage() {
    return this.connection.query(
      `select pseudo from ${this.table} inner join userMessage on user.id = user_id`
    );
  }

  getUserByMessage(id) {
    return this.connection.query(
      `select pseudo from ${this.table} inner join userMessage on user.id = user_id`,
      [id]
    );
  }
}

module.exports = UserManager;
