<<<<<<< HEAD
import db from "../models/index.mjs";

export const createAdmin = (userId, permissionId) => {
  try {
    db.Admins.create({
      userId: userId,
      permissionId: permissionId,
    });
    return { accepted: true };
  } catch (err) {
    return { accepted: false };
  }
};

export const deleteAdmin = (adminId) => {
  try {
    db.Admins.destroy({
      where: { id: adminId },
    });
    return { accepted: true };
  } catch (err) {
    return { accepted: false };
  }
};

export const getAdmin = () => {
  return db.Admins.findAll();
};
=======
import db from "../models/index.mjs";

export const createAdmin = (userId, permissionId) => {
  try {
    db.Admins.create({
      userId: userId,
      permissionId: permissionId,
    });
    return { accepted: true };
  } catch (err) {
    return { accepted: false };
  }
};

export const deleteAdmin = (adminId) => {
  try {
    db.Admins.destroy({
      where: { id: adminId },
    });
    return { accepted: true };
  } catch (err) {
    return { accepted: false };
  }
};

export const getAdmin = () => {
  return db.Admins.findAll();
};
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
