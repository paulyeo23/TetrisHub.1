"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Permissions", [
      {
        Name: "Legacy",
      },
    ]);

    await queryInterface.bulkInsert("Organisations", [
      {
        Name: "Legacy",
        PermissionId: 1,
        ShortName: "Legacy",
      },
    ]);
    await queryInterface.bulkInsert("Series", [
      {
        Name: "Legacy",
        PermissionId: "1",
        OrgId: "1",
      },
    ]);
    await queryInterface.bulkInsert("Editions", [
      {
        Name: "2010",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2011",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2012",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2013",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2014",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2015",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2016",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2017",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2018",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2019",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2020",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2021",
        SeriesId: 1,
        PermissionId: 1,
      },
      {
        Name: "2022",
        SeriesId: 1,
        PermissionId: 1,
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
