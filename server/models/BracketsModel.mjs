export default function initBracketsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Brackets",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      bracketStage: {
        type: DataTypes.INTEGER,
      },
      size: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      eventId: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Events",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    },
  );
}
