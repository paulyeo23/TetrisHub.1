<<<<<<< HEAD
export default function initAdminsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Admins",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
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
=======
export default function initAdminsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Admins",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
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
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
