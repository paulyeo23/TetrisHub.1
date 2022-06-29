export default function initSeedingMethodModel(sequelize, DataTypes) {
  return sequelize.define(
    "SeedingMethod",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
