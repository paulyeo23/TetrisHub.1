export default function initUsersModel(sequelize, DataTypes) {
  return sequelize.define(
    "Users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    },
  );
}
