export default function initEditionsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Editions",
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
      seriesId: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Series",
          key: "id",
        },
      },
      permissionId: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Permissions",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    },
  );
}
