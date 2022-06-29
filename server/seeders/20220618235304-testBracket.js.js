"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Brackets", [
      {
        size: 64,
        eventId: 1,
        bracketStage: 1,
      },
    ]);
    await queryInterface.bulkInsert("Seeders", [
      {
        bracketId: 1,
        seedingMethod: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
