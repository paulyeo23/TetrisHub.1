<<<<<<< HEAD
import db from "../models/index.mjs";


export const addEdition = (name, seriesId, permissionid) => {
  db.Editions.create({
    name: name,
    seriesId: seriesId,
    permissionId: permissionid,
  });
};

export const deleteEdition = (editionid) => {
  db.Editions.destroy({
    where: { id: editionid },
  });
};

export const updateEdition = (editionId, name, seriesId) => {
  db.Editions.update({
    name: name,
    seriesId: seriesId,
    where: {
      id: editionId,
    },
  });
=======
import db from "../models/index.mjs";


export const addEdition = (name, seriesId, permissionid) => {
  db.Editions.create({
    name: name,
    seriesId: seriesId,
    permissionId: permissionid,
  });
};

export const deleteEdition = (editionid) => {
  db.Editions.destroy({
    where: { id: editionid },
  });
};

export const updateEdition = (editionId, name, seriesId) => {
  db.Editions.update({
    name: name,
    seriesId: seriesId,
    where: {
      id: editionId,
    },
  });
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
};