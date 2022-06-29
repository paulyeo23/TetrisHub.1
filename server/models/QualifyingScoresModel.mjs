export default function initQualifyingScoresModel(sequelize, DataTypes) {
  return sequelize.define(
    "QualifyingScores",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      seederId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Seeders",
          key: "id",
        },
      },
      playerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pending: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      timestamp: {
        type: DataTypes.INTEGER,
      },
      videoLink: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
  );
}
