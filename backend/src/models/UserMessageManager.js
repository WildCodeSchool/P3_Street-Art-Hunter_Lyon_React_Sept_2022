const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "userMessage" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findByUser(userId) {
    return this.connection.query(
      `select * from ${this.table} where user_id = ?`,
      [userId]
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  getMessageAndUser() {
    return this.connection.query(
      `select * from  ${this.table} left join user on user.id = ${this.table}.user_id`
    );
  }

  insert(message) {
    return this.connection.query(
      `INSERT INTO ${this.table}
      (objet,
      userMessage,
      user_id) VALUES (?, ?, ?)`,
      [message.objet, message.userMessage, message.user_id]
    );
  }
}

module.exports = MessageManager;
