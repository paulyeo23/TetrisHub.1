export default function initOrganisationsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Organisations",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ownerId: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      shortName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      youtube: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      website: {
        type: DataTypes.STRING,
      },
      discord: {
        type: DataTypes.STRING,
      },
      facebook: {
        type: DataTypes.STRING,
      },
      twitter: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      twitch: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
  );
}
