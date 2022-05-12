const initMatchesModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "Matches",
    {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      DateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      Local_Time: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      Timezone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      BestOf: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      Player1ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "PlayerDetails",
          key: "ID",
        },
      },
      Player1Score: {
        type: DataTypes.INTEGER,
      },
      Player2ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Playerdetails",
          key: "ID",
        },
      },
      Player2Score: {
        type: DataTypes.INTEGER,
      },
      WinnerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Playerdetails",
          key: "ID",
        },
      },
      LoserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Playerdetails",
          key: "ID",
        },
      },
      Version: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      Live: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      Completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      EventID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "ID",
        },
      },
      Draw: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
module.exports = initMatchesModel;
