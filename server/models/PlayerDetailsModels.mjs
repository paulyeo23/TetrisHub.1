export default function initPlayerDetailsModel(sequelize, DataTypes) {
  return sequelize.define(
    "PlayerDetails",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
          model: "Users",
          key: "id",
        },
      },

      photo: {
        type: DataTypes.BOOLEAN,
      },

      firstName: {
        type: DataTypes.STRING,
      },

      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      alias: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
      },

      birthdate: {
        type: DataTypes.DATE,
      },

      homeTown: {
        type: DataTypes.STRING,
      },
      profile: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING(2),
      },
      state: {
        type: DataTypes.STRING(2),
      },
      playstyle: {
        type: DataTypes.STRING,
      },
      pb: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    },
  );
}
