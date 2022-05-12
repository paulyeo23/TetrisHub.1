const initGameResultsModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "game results",
    {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      MatchID: {
        type: DataTypes.INTEGER,
        allowNull: false,

        references: {
          model: "Matches",
          key: "ID",
        },
      },
      Round: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Player1ID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Matches",
          key: "Player1ID",
        },
        allowNull: false,
      },
      Player1Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Player2ID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Matches",
          key: "Player2ID",
        },
        allowNull: false,
      },
      Player2Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      WinnerID: {
        type: DataTypes.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "ID",
        },
        allowNull: false,
      },
      WinnerScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      WinnerTetrisRate: {
        type: DataTypes.INTEGER,
      },
      WinnerLongBarCount: {
        type: DataTypes.INTEGER,
      },
      LoserID: {
        type: DataTypes.INTEGER,
        references: {
          model: "PlayerDetails",
          key: "ID",
        },
        allowNull: false,
      },
      LoserScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      LoserTetrisRate: {
        type: DataTypes.INTEGER,
      },
      LoserLongBarCount: {
        type: DataTypes.INTEGER,
      },
      ScoreDifference: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
module.exports = initGameResultsModel;
