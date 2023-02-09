const AbstractManager = require("./AbstractManager");

class ShopManager extends AbstractManager {
  constructor() {
    super({ table: "shop" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(shop) {
    return this.connection.query(
      `INSERT INTO ${this.table}
      (shop_name,
        url_shop,
        longitude,
        latitude) VALUES (?, ?, ?, ?)`,
      [shop.shop_name, shop.url_shop, shop.longitude, shop.latitude]
    );
  }

  update(shop) {
    return this.connection.query(
      `update ${this.table} set shop_name = ?, url_shop = ?, longitude = ?, latitude = ?`,
      [shop.firstname, shop.lastname, shop.scorepoint, shop.pseudo]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}
module.exports = ShopManager;
