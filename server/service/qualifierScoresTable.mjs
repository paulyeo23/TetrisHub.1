<<<<<<< HEAD
import db from "../models/index.mjs";

export const getQualifiers = () => {
  return db.QualifyingScores.findAll();
};

export const createQualifier = (
  seederId,
  playerId,
  score,
  timestamp,
  viedoLink,
) => {
  try {
    db.QualifyingScores.create({
      seederId: seederId,
      playerId: playerId,
      score: score,
      pending: true,
      approved: false,
      timestamp: timestamp,
      viedoLink: viedoLink,
    });
    return { accepted: true };
  } catch (error) {
    return { accepted: false };
  }
};

export const updateQualifier = (
  seederId,
  playerId,
  score,
  timestamp,
  viedoLink,
) => {
  try {
    db.QualifyingScores.create({
      seederId: seederId,
      playerId: playerId,
      score: score,
      pending: true,
      approved: false,
      timestamp: timestamp,
      viedoLink: viedoLink,
    });
    return { accepted: true };
  } catch (error) {
    return { accepted: false };
  }
};

export const deleteQualifer = (qualiferId) => {
  try {
    db.QualifyingScores.destroy({ where: { id: qualiferId } });
    return { accepted: true };
  } catch (error) {
    return { accepted: false };
  }
};

export const approveQualifer = (qualiferId) => {
  try {
    db.QualifyingScores.update({
      pending: false,
      approved: true,
      where: { id: qualiferId },
    });
  } catch (error) {
    return { accepted: false };
  }
};
=======
import db from "../models/index.mjs";

export const getQualifiers = () => {
  return db.QualifyingScores.findAll();
};

export const createQualifier = (
  seederId,
  playerId,
  score,
  timestamp,
  viedoLink,
) => {
  try {
    db.QualifyingScores.create({
      seederId: seederId,
      playerId: playerId,
      score: score,
      pending: true,
      approved: false,
      timestamp: timestamp,
      viedoLink: viedoLink,
    });
    return { accepted: true };
  } catch (error) {
    return { accepted: false };
  }
};

export const updateQualifier = (
  seederId,
  playerId,
  score,
  timestamp,
  viedoLink,
) => {
  try {
    db.QualifyingScores.create({
      seederId: seederId,
      playerId: playerId,
      score: score,
      pending: true,
      approved: false,
      timestamp: timestamp,
      viedoLink: viedoLink,
    });
    return { accepted: true };
  } catch (error) {
    return { accepted: false };
  }
};

export const deleteQualifer = (qualiferId) => {
  try {
    db.QualifyingScores.destroy({ where: { id: qualiferId } });
    return { accepted: true };
  } catch (error) {
    return { accepted: false };
  }
};

export const approveQualifer = (qualiferId) => {
  try {
    db.QualifyingScores.update({
      pending: false,
      approved: true,
      where: { id: qualiferId },
    });
  } catch (error) {
    return { accepted: false };
  }
};
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
