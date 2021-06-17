const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Material extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
        category: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id" });
  }
}

module.exports = Material;