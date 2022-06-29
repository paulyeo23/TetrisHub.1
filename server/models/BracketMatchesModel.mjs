export default function initBracketMatchesModel(sequelize, DataTypes) {
  return sequelize.define(
    "BracketMatches",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      bracketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Brackets",
          key: "id",
        },
      },
      bracketMatchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      winnerTo: {
        type: DataTypes.INTEGER,
      },
      loserTo: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    },
  );
}
