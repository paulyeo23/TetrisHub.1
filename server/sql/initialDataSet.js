// "use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const getEventID = async (name) => {
//       return await queryInterface.sequelize.query(
//         `select ID FROM events where name = ${name}`,
//       )[0];
//     };

//     const getPlayerID = async (alias) => {
//       return await queryInterface.sequelize.query(
//         `select id FROM playerdetails WHERE alias = '${alias}'`,
//       )[0];
//     };

//     const getOrgID = async (orgname) => {
//       return await queryInterface.sequelize.query(
//         `select id FROM organisation WHERE name = '${orgname}'`,
//       )[0];
//     };

//     const getseriesID = async (seriesName) => {
//       return await queryInterface.sequelize.query(
//         `select id FROM series WHERE name = '${seriesName}'`,
//       )[0];
//     };

//     const getEditionID = async (editionName) => {
//       return await queryInterface.sequelize.query(
//         `select id FROM edition WHERE name = '${editionName}'`,
//       )[0];
//     };

//     await queryInterface.bulkInsert("PlayerDetails", [
//       {
//         FirstName: "Jonas",
//         LastName: "Neubauer",
//         Alias: "Jonas Neubauer",
//         Birthdate: "1981-04-19 0:00:00",
//         Photo: true,
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Jeff",
//         LastName: "Moore",
//         Alias: "Jeff Moore",
//         Photo: true,
//         Country: "US",
//         State: "NV",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Harry",
//         LastName: "Hong",
//         Alias: "Harry Hong",
//         Photo: true,
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Sean",
//         LastName: "Ritchie",
//         Alias: "Quaid",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Alex",
//         LastName: "Kerr",
//         Alias: "Alex Kerr",
//         Country: "US",
//         State: "NY",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Bo",
//         LastName: "Steil",
//         Alias: "Bo Steil",
//         Country: "US",
//         State: "MN",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Matt",
//         LastName: "Buco",
//         Alias: "Matt Buco",
//         Country: "US",
//         State: "NY",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Terry",
//         LastName: "Purcell",
//         Alias: "Terry Purcell",
//         Country: "US",
//         State: "OR",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Chad",
//         LastName: "Muse",
//         Alias: "Chad Muse",
//         Country: "US",
//         State: "AZ",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Jani",
//         LastName: "Herlevi",
//         Alias: "Jani Herlevi",
//         Country: "FI",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Chris Brady",
//         LastName: "Brady",
//         Alias: "Chris Brady",
//         Country: "US",
//         State: "PA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Joey",
//         LastName: "Parker",
//         Alias: "Joey",
//         Country: "US",
//         State: "TX",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Mike",
//         LastName: "Winzinek",
//         Alias: "Mike Winzinek",
//         Country: "US",
//         State: "OH",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "David",
//         LastName: "Vulich",
//         Alias: "David Vulich",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Peter",
//         LastName: "Grisafi",
//         Alias: "Peter Grisafi",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Matt",
//         LastName: "Schoolmaster",
//         Alias: "Schoolmaster",
//         Country: "US",
//         State: "CO",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Dana",
//         LastName: "Wilcox",
//         Alias: "Dana Wilcox",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Cameron",
//         LastName: "Eure",
//         Alias: "Cameron Eure",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Vince",
//         LastName: "Clemente",
//         Alias: "Vince Clemente",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Trey",
//         LastName: "Harrison",
//         Alias: "Trey Harrison",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Danny",
//         LastName: "Vulich",
//         Alias: "Danny Vulich",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Frank",
//         LastName: "Westphal",
//         Alias: "Frank Westphal",
//         Country: "US",
//         State: "WI",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Robin",
//         LastName: "Mihara",
//         Alias: "Robin Mihara",
//         Country: "US",
//         State: "OR",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Chris",
//         LastName: "Extine",
//         Alias: "Chris Extine",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Rigel",
//         LastName: "Pearce",
//         Alias: "Rigel Pearce",
//         Country: "US",
//         State: "OR",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Adam",
//         LastName: "Cornelius",
//         Alias: "Adam Cornelius",
//         Country: "US",
//         State: "OR",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Steve",
//         LastName: "Hugnes",
//         Alias: "Steve Hugnes",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Gin",
//         LastName: "Morgan",
//         Alias: "Gin Morgan",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Ryan",
//         LastName: "Ritchie",
//         Alias: "Ryan Ritchie",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Jason",
//         LastName: "Simoneaux",
//         Alias: "Jason Simoneaux",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Brian",
//         LastName: "Glessner",
//         Alias: "Brian Glessner",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Kim",
//         LastName: "Arceo",
//         Alias: "Kim Arceo",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Koji",
//         LastName: "Nishio",
//         Alias: "Koryan",
//         Photo: true,
//         Country: "JP",
//         Playstyle: "Hypertap",
//       },
//       {
//         FirstName: "Elijah",
//         LastName: "Markstrom",
//         Alias: "Eli Markstrom",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Ben",
//         LastName: "Mullen",
//         Alias: "Ben Mullen",
//         Country: "US",
//         State: "ND",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Brian",
//         LastName: "Pellegrin",
//         Alias: "Brian Pellegrin",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Jake",
//         LastName: "Stein",
//         Alias: "Jake Stein",
//         Country: "US",
//         State: "TX",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Jordan",
//         LastName: "Harrison",
//         Alias: "Jordan Harrison",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Sean",
//         LastName: "Miller",
//         Alias: "Sean Miller",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Patrick",
//         LastName: "Nyffeller",
//         Alias: "Patrick Nyffeller",
//         Country: "US",
//         State: "NY",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Stacy",
//         LastName: "Schierholz",
//         Alias: "Stacy Schierholz",
//         Country: "US",
//         State: "WA",
//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Paul",
//         LastName: "Tesi",
//         Alias: "MegaRetroMan",
//         Country: "US",
//         State: "WA",
//         Playstyle: "DAS",
//       },
//       {
//         Alias: "SQR",
//         Country: "JP",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Greg",
//         LastName: "Velden",
//         Alias: "Greg Velden",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Douglas",
//         LastName: "Arcadi",
//         Alias: "Douglas Arcadi",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Mary",
//         LastName: "Powell",
//         Alias: "Mary Powell",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Sam",
//         LastName: "Parry",
//         Alias: "Sam Parry",
//         Country: "US",

//         Playstyle: "DAS",
//       },
//       {
//         FirstName: "Kevin",
//         LastName: "Birrell",
//         Alias: "KevinDDR",
//         Country: "US",
//         State: "CA",
//         Playstyle: "DAS",
//       },
//     ]);

//     await queryInterface.bulkInsert("organisations", [
//       {
//         Name: "Classic Tetris World Championship",
//         Youtube: "https://www.youtube.com/c/ClassicTetris",
//         shortName: "CTWC",
//         website: "https://thectwc.com/",
//         discord: "",
//         facebook: "https://www.facebook.com/ClassicTetris/",
//         twitter: "https://twitter.com/ClassicTetris/",
//         description: "",
//         twitch: "https://www.twitch.tv/classictetris",
//       },
//     ]);

//     await queryInterface.bulkInsert("series", [
//       {
//         Name: "Classic Tetris World Championship",
//         OrgId: await getOrgID("Classic Tetris World Championship"),
//       },
//     ]);
//     await queryInterface.bulkInsert("edition", [
//       {
//         name: "Classic Tetris World Championship 2015",
//         seriesId: await getseriesID("Classic Tetris World Championship"),
//       },
//       {
//         name: "Classic Tetris World Championship 2016",
//         seriesId: await getseriesID("Classic Tetris World Championship"),
//       },
//       {
//         name: "Classic Tetris World Championship 2017",
//         seriesId: await getseriesID("Classic Tetris World Championship"),
//       },
//     ]);

//     await queryInterface.bulkInsert("events", [
//       {
//         Name: "Classic Tetris World Championships 2015",
//         EditionId: await getEditionID("Classic Tetris World Championship 2015"),
//         Location: "Portland Oregon",
//         Country: "US",
//         Startdate: "2016-10-27 16:00:00",
//         Enddate: "2016-10-29 23:00:00",
//         Concluded: true,
//         Importance: 10,
//         PlayerCount: 32,
//         PrizeCash: 5000,
//       },
//       {
//         Name: "Classic Tetris World Championships 2016",
//         EditionId: await getEditionID("Classic Tetris World Championship 2016"),
//         Location: "Portland Oregon",
//         Country: "US",
//         Startdate: "2015-10-17 16:00:00",
//         Enddate: "2015-10-18 23:00:00",
//         Concluded: true,
//         Importance: 10,
//         PlayerCount: 32,
//         PrizeCash: 5000,
//       },
//       {
//         Name: "Classic Tetris World Championships 2017",
//         EditionId: await getEditionID("Classic Tetris World Championship 2017"),
//         Location: "Portland Oregon",
//         Country: "US",
//         Startdate: "2015-10-21 16:00:00",
//         Enddate: "2015-10-22 23:00:00",
//         Concluded: true,
//         Importance: 10,
//         PlayerCount: 32,
//         PrizeCash: 5000,
//       },
//     ]);

//         await queryInterface.bulkInsert("series", [
//           {
//             Name: "Classic Tetris World Championship",
//             OrgId: await getOrgID("Classic Tetris World Championship"),
//           },
//         ]);

//     await queryInterface.bulkInsert("Matches", [
//       {
//         Local_Time: "2016-10-27 12:00:00",
//         DateTime: "2016-10-27 19:00:00",
//         Timezone: -7,
//         BestOf: 5,
//         Player1ID: getPlayerID("Jonas Neubauer"),
//         Player1Score: 3,
//         Player2ID: getPlayerID("Jeff Moore"),
//         Player2Score: 1,
//         WinnerID: getPlayerID("Jonas"),
//         LoserID: getPlayerID("Jeff"),
//         Version: "NTSC",
//         Completed: true,
//         EventID: getEventID("Classic Tetris World Championships 2016"),
//       },
//       {
//         DateTime: "2016-10-27 12:00:00",
//         Local_Time: "2016-10-27 12:00:00",
//         Timezone: -7,
//         BestOf: 3,
//         Player1ID: getPlayerID("Jeff"),
//         Player1Score: 2,
//         Player2ID: getPlayerID("Harry"),
//         Player2Score: 1,
//         WinnerID: getPlayerID("Jeff"),
//         LoserID: getPlayerID("Harry"),
//         Version: "NTSC",
//         Completed: true,
//         EventID: getEventID("Classic Tetris World Championships 2016"),
//       },
//     ]);

//     // const MatchIDArray = await queryInterface.sequelize.query(
//     //   `SELECT ID FROM matches;`,
//     // );

//     // const MatchIDRow = MatchID[0];

//     // const player1ID = await queryInterface.sequelize.query(
//     //   "SELECT `Player1ID` FROM matches;",
//     // );
//     // const player1IDRow = player1ID[0];

//     // const player2ID = await queryInterface.sequelize.query(
//     //   "SELECT `Player2ID` FROM matches;",
//     // );
//     // const player2IDRow = player2ID[0];

//     // await queryInterface.bulkInsert("Game Results", [
//     //   {
//     //     MatchID: MatchIDRow[0].ID,
//     //     Round: 1,
//     //     Player1ID: player1IDRow[0].Player1ID,
//     //     Player1Score: 574640,
//     //     Player2ID: player2IDRow[0].Player2ID,
//     //     Player2Score: 609300,
//     //     WinnerID: playerIDRow[1].ID,
//     //     WinnerScore: 609300,
//     //     LoserID: playerIDRow[0].ID,
//     //     LoserScore: 574640,
//     //     ScoreDifference: 609300 - 574640,
//     //   },
//     //   {
//     //     MatchID: MatchIDRow[0].ID,
//     //     Round: 2,
//     //     Player1ID: player1IDRow[0].Player1ID,
//     //     Player1Score: 491145,
//     //     Player2ID: player2IDRow[0].Player2ID,
//     //     Player2Score: 502092,
//     //     WinnerID: playerIDRow[0].ID,
//     //     WinnerScore: 502092,
//     //     LoserID: playerIDRow[1].ID,
//     //     LoserScore: 491145,
//     //     ScoreDifference: 502092 - 491145,
//     //   },
//     //   {
//     //     MatchID: MatchIDRow[0].ID,
//     //     Round: 3,
//     //     Player1ID: player1IDRow[0].Player1ID,
//     //     Player1Score: 561702,
//     //     Player2ID: player2IDRow[0].Player2ID,
//     //     Player2Score: 669705,
//     //     WinnerID: playerIDRow[0].ID,
//     //     WinnerScore: 669705,
//     //     LoserID: playerIDRow[1].ID,
//     //     LoserScore: 561702,
//     //     ScoreDifference: 669705 - 561702,
//     //   },
//     //   {
//     //     MatchID: MatchIDRow[0].ID,
//     //     Round: 4,
//     //     Player1ID: player1IDRow[0].Player1ID,
//     //     Player1Score: 764030,
//     //     Player2ID: player2IDRow[0].Player2ID,
//     //     Player2Score: 746940,
//     //     WinnerID: playerIDRow[0].ID,
//     //     WinnerScore: 764030,
//     //     LoserID: playerIDRow[1].ID,
//     //     LoserScore: 746940,
//     //     ScoreDifference: 764030 - 746940,
//     //   },
//     //   {
//     //     MatchID: MatchIDRow[1].ID,
//     //     Round: 1,
//     //     Player1ID: player1IDRow[1].Player1ID,
//     //     Player1Score: 248909,
//     //     Player2ID: player2IDRow[1].Player2ID,
//     //     Player2Score: 249621,
//     //     WinnerID: playerIDRow[2].ID,
//     //     WinnerScore: 249621,
//     //     LoserID: playerIDRow[1].ID,
//     //     LoserScore: 248909,
//     //     ScoreDifference: 249621 - 248909,
//     //   },
//     //   {
//     //     MatchID: MatchIDRow[1].ID,
//     //     Round: 2,
//     //     Player1ID: player1IDRow[1].Player1ID,
//     //     Player1Score: 193818,
//     //     Player2ID: player2IDRow[1].Player2ID,
//     //     Player2Score: 186926,
//     //     WinnerID: playerIDRow[1].ID,
//     //     WinnerScore: 193818,
//     //     LoserID: playerIDRow[2].ID,
//     //     LoserScore: 186926,
//     //     ScoreDifference: 193818 - 186926,
//     //   },
//     //   {
//     //     MatchID: MatchIDRow[1].ID,
//     //     Round: 3,
//     //     Player1ID: player1IDRow[1].Player1ID,
//     //     Player1Score: 694212,
//     //     Player2ID: player2IDRow[1].Player2ID,
//     //     Player2Score: 678584,
//     //     WinnerID: playerIDRow[1].ID,
//     //     WinnerScore: 694212,
//     //     LoserID: playerIDRow[2].ID,
//     //     LoserScore: 678584,
//     //     ScoreDifference: 694212 - 678584,
//     //   },
//     // ]);
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete("Game Results", null, {});
//     await queryInterface.bulkDelete("Matches", null, {});
//     await queryInterface.bulkDelete("Events", null, {});
//     await queryInterface.bulkDelete("PlayerDetails", null, {});
//   },
// };
