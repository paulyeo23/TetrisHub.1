export default function initSeedModel(sequelize, DataTypes) {
  return sequelize.define(
    "Seeders",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      bracketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Brackets",
          key: "id",
        },
      },
      averageof: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      seedingMethod: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      open: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      finalised: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    },
  );
}
