const Sequelize = require('sequelize');
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        cpf: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        type: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        phone: Sequelize.STRING,
        zip_code: Sequelize.STRING,
        street: Sequelize.STRING,
        complemento: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        rg: Sequelize.STRING,
        dispatching_agency: Sequelize.STRING,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

//   static associate(models) {
//     this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
//   }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;