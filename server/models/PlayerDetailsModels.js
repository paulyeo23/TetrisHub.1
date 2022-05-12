const initPlayerDetailsModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "Playerdetails",
    {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      UserID: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
          model: "Users",
          key: "ID",
        },
      },

      FirstName: {
        type: DataTypes.STRING,
      },

      LastName: {
        type: DataTypes.STRING,
      },

      Photo: {
        type: DataTypes.STRING,
      },

      Alias: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
      },

      Birthdate: {
        type: DataTypes.DATE,
      },

      HomeTown: {
        type: DataTypes.STRING,
      },

      Profile: {
        type: DataTypes.STRING,
      },

      Country: {
        type: DataTypes.STRING(3),
      },

      State: {
        type: DataTypes.STRING(2),
      },

      Playstyle: {
        type: DataTypes.STRING,
      },

      PB: {
        type: DataTypes.INTEGER,
      },

      HideName: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      HideFace: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    },
  );
};

module.exports = initPlayerDetailsModel;
