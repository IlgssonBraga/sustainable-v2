'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      return await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'johndoe@email.com',
        cpf: '12345678910',
        type: 'natural',
        password_hash: '123',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      return await queryInterface.bulkDelete('users', null, {});
     
  }
};
