const Sequelize = require("sequelize");
const configDB = require("../config/database");
const User = require('../app/models/User');
const Material = require('../app/models/Material')
const Order = require('../app/models/Order')

const models = [User, Material, Order];

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