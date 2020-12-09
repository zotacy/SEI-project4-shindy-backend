'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let characters = await queryInterface.bulkInsert("Characters", [
      { //characterId: 1,
        name: "Shindy Knight",
        hp: 100,
        attack: 20,
        defense: 5,
        recover: 10,
        spd:1
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
