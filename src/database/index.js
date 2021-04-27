const Sequelize = require("sequelize");
const configDB = require("../config/database");

const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDB);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

module.exports = new Database();