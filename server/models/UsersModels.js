const initUsersModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "Users",
    {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      Password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      DisplayName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      // ... [<OTHER_COLUMNS>]
    },
    {
      timestamps: false,
    },
  );
};
module.exports = initUsersModel;
