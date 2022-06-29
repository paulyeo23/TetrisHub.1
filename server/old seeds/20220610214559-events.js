"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Permissions", [
      {
        Name: "Legacy",
      },
    ]);
    await queryInterface.bulkInsert("organisations", [
      {
        Name: "Classic Tetris World Championship",
        PermissionId: "1",
        ShortName: "CTWC",
        Youtube: "https://www.youtube.com/c/ClassicTetris",
        website: "https://thectwc.com/",
        discord: "",
        facebook: "https://www.facebook.com/ClassicTetris/",
        twitter: "https://twitter.com/ClassicTetris/",
        description: "",
        twitch: "https://www.twitch.tv/classictetris",
      },
    ]);

    await queryInterface.bulkInsert("Series", [
      {
        Name: "Classic Tetris World Championship",
        OrgId: 1,
        PermissionId: 1,
      },
    ]);

    await queryInterface.bulkInsert("Editions", [
      {
        Name: "Classic Tetris World Championships",
        SeriesId: 1,
        PermissionId: 1,
      },
    ]);

    await queryInterface.bulkInsert("Events", [
      {
        Name: "Classic Tetris World Championships 2020",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "2016-10-27 16:00:00",
        Enddate: "2016-10-29 23:00:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2019",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "2016-10-27 16:00:00",
        Enddate: "2016-10-29 23:00:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2018",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "2016-10-27 16:00:00",
        Enddate: "2016-10-29 23:00:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2017",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "22/10/2017 18:40:00",
        Enddate: "22/10/2017 18:40:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2016",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "23/10/2016 18:00:00",
        Enddate: "23/10/2016 18:00:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2015",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "18/10/2015 18:20:00",
        Enddate: "18/10/2015 18:20:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2014",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "19/10/2014 18:40:00",
        Enddate: "19/10/2014 18:40:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2013",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "06/10/2013 18:00:00",
        Enddate: "06/10/2013 18:00:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2012",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "30/09/2012 19:00:00",
        Enddate: "30/09/2012 19:00:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2011",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "16/10/2011 20:00:00",
        Enddate: "16/10/2011 20:00:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
      },
      {
        Name: "Classic Tetris World Championships 2010",
        EditionId: 1,
        PermissionId: 1,
        Location: "Portland Oregon",
        Country: "US",
        Startdate: "2016-10-27 16:00:00",
        Enddate: "2016-10-29 23:00:00",
        Timezone: -7,
        Concluded: true,
        Importance: 10,
        PlayerCount: 32,
        PrizeCash: 5000,
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
