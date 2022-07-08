<<<<<<< HEAD
export default function initVersionsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Versions",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
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
=======
export default function initVersionsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Versions",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
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
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
