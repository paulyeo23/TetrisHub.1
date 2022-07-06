"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
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

    await queryInterface.createTable("Versions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
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

    await queryInterface.createTable("Permissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
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

    await queryInterface.createTable("Organisations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      permissionId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Permissions",
          key: "id",
        },
      },
      ownerId: {
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      shortName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      youtube: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      discord: {
        type: Sequelize.STRING,
      },
      facebook: {
        type: Sequelize.STRING,
      },
      twitter: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      twitch: {
        type: Sequelize.STRING,
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

    await queryInterface.createTable("Admins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      permissionId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Permissions",
          key: "id",
        },
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

    await queryInterface.createTable("Series", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      orgId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Organisations",
          key: "id",
        },
      },
      permissionId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Permissions",
          key: "id",
        },
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

    await queryInterface.createTable("Editions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      seriesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Series",
          key: "id",
        },
      },
      permissionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Permissions",
          key: "id",
        },
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

    await queryInterface.createTable("PlayerDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,

        references: {
          model: "Users",
          key: "id",
        },
      },

      photo: {
        type: Sequelize.BOOLEAN,
      },

      firstName: {
        type: Sequelize.STRING,
      },

      lastName: {
        type: Sequelize.STRING,
      },

      alias: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: true,
      },

      birthdate: {
        type: Sequelize.DATE,
      },

      homeTown: {
        type: Sequelize.STRING,
      },
      profile: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING(2),
      },
      playstyle: {
        type: Sequelize.STRING,
      },
      pb: {
        type: Sequelize.INTEGER,
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

    await queryInterface.createTable("SeedingMethods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
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

    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      editionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Editions",
          key: "id",
        },
      },
      permissionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Permissions",
          key: "id",
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      location: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      country: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      timezone: {
        type: Sequelize.INTEGER,
      },
      ongoing: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      concluded: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      importance: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      playerCount: {
        type: Sequelize.INTEGER,
      },
      tournamentStructure: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      seedingMethod: {
        type: Sequelize.INTEGER,
      },
      prizeCash: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      prizeOther: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      versionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Versions",
          key: "id",
        },
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

    await queryInterface.createTable("BracketTypes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
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

    await queryInterface.createTable("Brackets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      bracketStage: {
        type: Sequelize.INTEGER,
      },
      size: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      eventId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Events",
          key: "id",
        },
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

    await queryInterface.createTable("Seeders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      bracketId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Brackets",
          key: "id",
        },
      },

      averageof: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      seedingMethod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      open: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      finalised: {
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

    await queryInterface.createTable("PlayerSeeds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },

      playerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      seederId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Seeders",
          key: "id",
        },
      },
      seed: {
        type: Sequelize.INTEGER,
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

    await queryInterface.createTable("QualifyingScores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      seederId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Seeders",
          key: "id",
        },
      },
      playerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pending: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      approved: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      timestamp: {
        type: Sequelize.INTEGER,
      },
      videoLink: {
        type: Sequelize.STRING,
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

    await queryInterface.createTable("BracketMatches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      bracketId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Brackets",
          key: "id",
        },
      },
      bracketMatchId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      winnerTo: {
        type: Sequelize.INTEGER,
      },
      loserTo: {
        type: Sequelize.INTEGER,
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
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },

      dateTime: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },

      bestOf: {
        type: Sequelize.INTEGER,
      },

      player1Id: {
        type: Sequelize.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      player1Score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      player2Id: {
        type: Sequelize.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      player2Score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      winnerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      loserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      versionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Versions",
          key: "id",
        },
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      live: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      bracketId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Brackets",
          key: "id",
        },
      },
      bracketMatchId: {
        type: Sequelize.INTEGER,
        references: {
          model: "BracketMatches",
          key: "id",
        },
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "id",
        },
      },
      draw: {
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

    // await queryInterface.createTable("GameResults", {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     unique: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   matchId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,

    //     references: {
    //       model: "Matches",
    //       key: "id",
    //     },
    //   },
    //   round: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //   },
    //   player1Id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: "Matches",
    //       key: "player1Id",
    //     },
    //     allowNull: false,
    //   },
    //   player1Score: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //   },
    //   player2Id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: "Matches",
    //       key: "player2Id",
    //     },
    //     allowNull: false,
    //   },
    //   player2Score: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //   },
    //   player1TetrisRate: {
    //     type: Sequelize.INTEGER,
    //   },
    //   player1LongBarCount: {
    //     type: Sequelize.INTEGER,
    //   },
    //   player2TetrisRate: {
    //     type: Sequelize.INTEGER,
    //   },
    //   player2LongBarCount: {
    //     type: Sequelize.INTEGER,
    //   },
    //   winnerId: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: "PlayerDetails",
    //       key: "id",
    //     },
    //     allowNull: false,
    //   },
    //   winnerTetrisRate: {
    //     type: Sequelize.INTEGER,
    //   },
    //   winnerLongBarCount: {
    //     type: Sequelize.INTEGER,
    //   },
    //   loserId: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: "PlayerDetails",
    //       key: "id",
    //     },
    //     allowNull: false,
    //   },
    //   created_at: {
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.literal("NOW()"),
    //   },
    //   updated_at: {
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.literal("NOW()"),
    //   },
    // });
    await queryInterface.createTable("Streams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      matchId: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: "Matches",
          key: "id",
        },
      },
      streamAddress: {
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
    await queryInterface.dropTable("GameResults");
    await queryInterface.dropTable("Matches");
    await queryInterface.dropTable("BracketMatches");
    await queryInterface.dropTable("QualifyingScores");
    await queryInterface.dropTable("PlayerSeeds");
    await queryInterface.dropTable("Seeders");
    await queryInterface.dropTable("Brackets");
    await queryInterface.dropTable("Events");
    await queryInterface.dropTable("Editions");
    await queryInterface.dropTable("Series");
    await queryInterface.dropTable("Admins");
    await queryInterface.dropTable("Organisations");
    await queryInterface.dropTable("PlayerDetails");
    await queryInterface.dropTable("Permissions");
    await queryInterface.dropTable("Users");
    await queryInterface.dropTable("SeedingMethods");
    await queryInterface.dropTable("Versions");

    // await queryInterface.dropTable("GameResults");
    // await queryInterface.dropTable("Matches");
    // await queryInterface.dropTable("Events");
    // await queryInterface.dropTable("PlayerDetails");
    // await queryInterface.dropTable("Admins");
    // await queryInterface.dropTable("Organisation");
    // await queryInterface.dropTable("Users");
  },
};
