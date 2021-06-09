const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        material_id: Sequelize.INTEGER,
      },
      { sequelize }
    );

    
    
    return this;
  }
  
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }

  static associate(models) {
    this.belongsTo(models.Material, { foreignKey: 'material_id', as: 'material' });
  }

}

module.exports = Order;