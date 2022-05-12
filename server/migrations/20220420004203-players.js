"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      DisplayName: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      // ... [<OTHER_COLUMNS>]
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });

    await queryInterface.createTable("PlayerDetails", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      UserID: {
        type: Sequelize.INTEGER,
        allowNull: true,

        references: {
          model: "Users",
          key: "ID",
        },
      },

      Photo: {
        type: Sequelize.STRING,
      },

      FirstName: {
        type: Sequelize.STRING,
      },

      LastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      Alias: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: true,
      },

      Birthdate: {
        type: Sequelize.DATE,
      },

      HomeTown: {
        type: Sequelize.STRING,
      },
      Profile: {
        type: Sequelize.STRING,
      },
      Country: {
        type: Sequelize.STRING(3),
      },
      State: {
        type: Sequelize.STRING(2),
      },
      Playstyle: {
        type: Sequelize.STRING,
      },
      PB: {
        type: Sequelize.INTEGER,
      },
      HideName: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      HideFace: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      // ... [<OTHER_COLUMNS>]
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });

    await queryInterface.createTable("Events", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Location: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Country: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      LocalStart: {
        type: Sequelize.DATE,
      },
      Startdate: {
        type: Sequelize.DATE,
      },
      LocalEnd: {
        type: Sequelize.DATE,
      },
      Enddate: {
        type: Sequelize.DATE,
      },
      Timezone: {
        type: Sequelize.INTEGER,
      },
      Ongoing: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      Concluded: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      Importance: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      PlayerCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      TournamentStructure: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      PrizeCash: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      PrizeOther: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });
    await queryInterface.createTable("Matches", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      DateTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      Local_Time: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      Timezone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      BestOf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      Player1ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PlayerDetails",
          key: "ID",
        },
      },
      Player1Score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      Player2ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PlayerDetails",
          key: "ID",
        },
      },
      Player2Score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      WinnerID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "PlayerDetails",
          key: "ID",
        },
      },
      LoserID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "PlayerDetails",
          key: "ID",
        },
      },
      Version: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      Live: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      EventID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "ID",
        },
      },
      Draw: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });

    await queryInterface.createTable("Game Results", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      MatchID: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: "Matches",
          key: "ID",
        },
      },
      Round: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Player1ID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Matches",
          key: "Player1ID",
        },
        allowNull: false,
      },
      Player1Score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Player2ID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Matches",
          key: "Player2ID",
        },
        allowNull: false,
      },
      Player2Score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      WinnerID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Playerdetails",
          key: "ID",
        },
        allowNull: false,
      },
      WinnerScore: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      WinnerTetrisRate: {
        type: Sequelize.INTEGER,
      },
      WinnerLongBarCount: {
        type: Sequelize.INTEGER,
      },
      LoserID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Playerdetails",
          key: "ID",
        },
        allowNull: false,
      },
      LoserScore: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      LoserTetrisRate: {
        type: Sequelize.INTEGER,
      },
      LoserLongBarCount: {
        type: Sequelize.INTEGER,
      },
      ScoreDifference: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });
    await queryInterface.createTable("Streams", {
      MatchID: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: "Matches",
          key: "ID",
        },
      },
      StreamAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Streams");
    await queryInterface.dropTable("Game Results");
    await queryInterface.dropTable("Matches");
    await queryInterface.dropTable("Events");
    await queryInterface.dropTable("PlayerDetails");
    await queryInterface.dropTable("Users");
  },
};
