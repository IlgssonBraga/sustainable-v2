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

}

module.exports = Order;