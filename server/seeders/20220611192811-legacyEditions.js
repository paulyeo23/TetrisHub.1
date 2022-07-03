"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Permissions", [
      {
        name: "Legacy",
      },
    ]);

    await queryInterface.bulkInsert("Organisations", [
      {
        name: "Legacy",
        permissionId: 1,
        shortName: "Legacy",
      },
    ]);
    await queryInterface.bulkInsert("Series", [
      {
        name: "Legacy",
        permissionId: "1",
        orgId: "1",
      },
    ]);
    await queryInterface.bulkInsert("Editions", [
      {
        name: "2010",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2011",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2012",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2013",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2014",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2015",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2016",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2017",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2018",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2019",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2020",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2021",
        seriesId: 1,
        permissionId: 1,
      },
      {
        name: "2022",
        seriesId: 1,
        permissionId: 1,
      },
    ]);
    await queryInterface.bulkInsert("Versions", [{ name: "NTSC" }]);
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
