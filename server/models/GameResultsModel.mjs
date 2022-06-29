export default function initGameResultsModel(sequelize, DataTypes) {
  return sequelize.define(
    "GameResults",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      matchId: {
        type: DataTypes.INTEGER,
        allowNull: false,

        references: {
          model: "Matches",
          key: "id",
        },
      },
      round: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      player1Id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Matches",
          key: "player1Id",
        },
        allowNull: false,
      },
      player1Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      player2Id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Matches",
          key: "player2Id",
        },
        allowNull: false,
      },
      player2Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      player1TetrisRate: {
        type: DataTypes.INTEGER,
      },
      player1LongBarCount: {
        type: DataTypes.INTEGER,
      },
      player2TetrisRate: {
        type: DataTypes.INTEGER,
      },
      player2LongBarCount: {
        type: DataTypes.INTEGER,
      },
      winnerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
        allowNull: false,
      },
      winnerTetrisRate: {
        type: DataTypes.INTEGER,
      },
      winnerLongBarCount: {
        type: DataTypes.INTEGER,
      },
      loserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
}
