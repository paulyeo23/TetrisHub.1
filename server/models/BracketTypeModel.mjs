export default function initBracketTypeModel(sequelize, DataTypes) {
  return sequelize.define(
    "BracketType",
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
    },
    {
      timestamps: false,
    },
  );
}
