<<<<<<< HEAD
import db from "../models/index.mjs";

export const closeQualification = (seederId) => {
  db.Seeder.update({
    open: false,
    where: {
      id: seederId,
    },
  });
};

export const finaliseList = (seederId) => {
  db.finaliseList.update({
    finalised: true,
    where: {
      id: seederId,
    },
  });
};

export const openQualification = (seederId) => {
  db.Seeder.update({
    open: true,
    where: {
      id: seederId,
    },
  });
};

=======
import db from "../models/index.mjs";

export const closeQualification = (seederId) => {
  db.Seeder.update({
    open: false,
    where: {
      id: seederId,
    },
  });
};

export const finaliseList = (seederId) => {
  db.finaliseList.update({
    finalised: true,
    where: {
      id: seederId,
    },
  });
};

export const openQualification = (seederId) => {
  db.Seeder.update({
    open: true,
    where: {
      id: seederId,
    },
  });
};

>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
