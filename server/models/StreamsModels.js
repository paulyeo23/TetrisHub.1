const initStreamsModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "Streams",
    {
      MatchID: {
        type: DataTypes.INTEGER,
        allowNull: false,

        references: {
          model: "Matches",
          key: "ID",
        },
      },
      StreamAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};

module.exports = initStreamsModel;
