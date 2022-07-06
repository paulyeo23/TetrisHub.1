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

