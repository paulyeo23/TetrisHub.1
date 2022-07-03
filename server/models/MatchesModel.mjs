export default function initMatchesModel(sequelize, DataTypes) {
  return sequelize.define(
    "Matches",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      dateTime: {
        type: DataTypes.DATE,
      },

      bestOf: {
        type: DataTypes.INTEGER,
      },

      player1Id: {
        type: DataTypes.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      player1Score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      player2Id: {
        type: DataTypes.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      player2Score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      winnerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      loserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      versionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Versions",
          key: "id",
        },
      },
      live: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      bracketId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Brackets",
          key: "id",
        },
      },
      bracketMatchId: {
        type: DataTypes.INTEGER,
        references: {
          model: "BracketMatches",
          key: "bracketMatchId",
        },
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "id",
        },
      },
      draw: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    },
  );
}
