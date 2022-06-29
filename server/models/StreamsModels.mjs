export default function initStreamsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Streams",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      matchId: {
        type: DataTypes.INTEGER,
        allowNull: false,

        references: {
          model: "Matches",
          key: "id",
        },
      },
      streamAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
}
