'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let characters = await queryInterface.bulkInsert("Characters", [
      { 
        userId: 1,
        name: "Shindy Knight",
        hp: 100,
        attack: 20,
        defense: 5,
        recover: 10,
        spd:1
       },
    ]);
    let users = await queryInterface.bulkInsert("Users", [
      { 
        name: "Zach Tacy",
        email: "zachtacy@gmail.com",
        username: "Zurono",
        password: "Password"
       },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
