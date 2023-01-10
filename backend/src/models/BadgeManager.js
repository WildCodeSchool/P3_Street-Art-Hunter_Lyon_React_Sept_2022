const AbstractManager = require("./AbstractManager");

class BadgeManager extends AbstractManager {
  constructor() {
    super({ table: "badge" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(badge) {
    return this.connection.query(
      `insert into ${this.table} (badge_name , badge_desc, badge_img, badge_condition) values (?, ?, ?, ?)`,
      [
        badge.badge_name,
        badge.badge_desc,
        badge.badge_img,
        badge.badge_condition,
      ]
    );
  }

  update(badge) {
    return this.connection.query(
      `update ${this.table} set badge_name = ?, badge_desc = ?, badge_img = ?, badge_condition = ? where id = ?`,
      [
        badge.badge_name,
        badge.badge_desc,
        badge.badge_img,
        badge.badge_condition,
        badge.id,
      ]
    );
  }

  userHasBadge(id) {
    return this.connection.query(
      `select badge_id, badge_name, badge_desc, badge_img, uhb.user_id from badge as b
  inner join user_has_badge as uhb on b.id = uhb.badge_id
  where uhb.user_id=?;`,
      [id]
    );
  }
}

module.exports = BadgeManager;
