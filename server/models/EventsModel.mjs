export default function initEventsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Events",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      editionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Editions",
          key: "id",
        },
      },
      permissionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Permissions",
          key: "id",
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      location: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      country: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      timezone: {
        type: DataTypes.INTEGER,
      },
      ongoing: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      concluded: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      importance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      playerCount: {
        type: DataTypes.INTEGER,
      },
      tournamentStructure: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      seedingMethod: {
        type: DataTypes.INTEGER,
      },
      prizeCash: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      prizeOther: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      versionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Versions",
          key: "id",
        },
      },
    },

    {
      timestamps: false,
    },
  );
}
