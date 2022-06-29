export default function initPlayerSeedModel(sequelize, DataTypes) {
  return sequelize.define(
    "PlayerSeed",
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
      seedId: {
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
