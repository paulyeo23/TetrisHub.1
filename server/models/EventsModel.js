const initEventsModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "Events",
    {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Location: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      LocalStart: {
        type: DataTypes.DATE,
      },
      Startdate: {
        type: DataTypes.DATE,
      },
      LocalEnd: {
        type: DataTypes.DATE,
      },
      Enddate: {
        type: DataTypes.DATE,
      },
      Timezone: {
        type: DataTypes.INTEGER,
      },
      Ongoing: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      Concluded: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      Importance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      PlayerCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      TournamentStructure: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PrizeCash: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      PrizeOther: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    },
  );
};
module.exports = initEventsModel;
