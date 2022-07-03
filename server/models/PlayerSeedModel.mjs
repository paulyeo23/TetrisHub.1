export default function initPlayerSeedModel(sequelize, DataTypes) {
  return sequelize.define(
    "PlayerSeeds",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      playerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      seed: {
        type: DataTypes.INTEGER,
      },
      seederId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Seeders",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    },
  );
}
