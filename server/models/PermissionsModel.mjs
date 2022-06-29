export default function initPermissionsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Permissions",
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
