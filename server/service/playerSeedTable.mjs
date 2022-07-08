<<<<<<< HEAD
import db from "../models/index.mjs";

export const updateSeed = (playerId, seedId) => {
  db.PlayerSeed.update({
    playerId: playerId,
    where: {
      id: seedId,
    },
  });
  return { accepted: true };
};

export const createSeed = (playerId, seed, seederId) => {
  db.PlayerSeed.create({
    playerId: playerId,
    seederId: seederId,
    seed: seed,
  });
};

export const deleteSeed = (seedId) => {
  db.PlayerSeed.destroy({
    where: {
      id: seedId,
    },
  });
};
=======
import db from "../models/index.mjs";

export const updateSeed = (playerId, seedId) => {
  db.PlayerSeed.update({
    playerId: playerId,
    where: {
      id: seedId,
    },
  });
  return { accepted: true };
};

export const createSeed = (playerId, seed, seederId) => {
  db.PlayerSeed.create({
    playerId: playerId,
    seederId: seederId,
    seed: seed,
  });
};

export const deleteSeed = (seedId) => {
  db.PlayerSeed.destroy({
    where: {
      id: seedId,
    },
  });
};
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
