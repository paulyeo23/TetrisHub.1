export default function initVersionsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Versions",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
  );
}
