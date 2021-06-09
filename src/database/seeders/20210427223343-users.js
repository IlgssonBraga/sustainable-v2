'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      return await queryInterface.bulkInsert(
        "users",
        [
          {
            name: "John Doe",
            email: "johndoe@email.com",
            password_hash:
             
              "$2a$08$rnMMHntDbEXI7zfn0Ua.ze/.ed03I7p4fEVYIgBDXX.kqxOfxcgMm",
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );
    
  },

  down: async (queryInterface, Sequelize) => {
   
      return await queryInterface.bulkDelete('users', null, {});
     
  }
};
