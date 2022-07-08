<<<<<<< HEAD
import db from "../models/index.mjs";

export const createEvent = (
  permissionId,
  versionId,
  name,
  location,
  country,
  startDate,
  endDate,
  timezone,
  playerCount,
  tournamentStructure,
  seedingMethod,
  prizeCash,
  prizeOther,
) => {
  db.Events.create({
    permissionId: permissionId,
    versionId: versionId,
    name: name,
    location: location,
    country: country,
    startdate: startDate,
    enddate: endDate,
    timezone: timezone,
    playerCount: playerCount,
    tournamentStructure: tournamentStructure,
    seedingMethod: seedingMethod,
    prizeCash: prizeCash,
    prizeOther: prizeOther,
  });
};

export const deleteEvent = (eventId) => {
  db.Events.delete({
    where: { id: eventId },
  });
};

export const updateEvent = (
  eventId,
  versionId,
  name,
  location,
  country,
  startDate,
  endDate,
  timezone,
  playerCount,
  tournamentStructure,
  seedingMethod,
  prizeCash,
  prizeOther,
) => {
  db.Events.update({
    versionId: versionId,
    name: name,
    location: location,
    country: country,
    startdate: startDate,
    enddate: endDate,
    timezone: timezone,
    playerCount: playerCount,
    tournamentStructure: tournamentStructure,
    seedingMethod: seedingMethod,
    prizeCash: prizeCash,
    prizeOther: prizeOther,
    where: {
      id: eventId,
    },
  });
};
=======
import db from "../models/index.mjs";

export const createEvent = (
  permissionId,
  versionId,
  name,
  location,
  country,
  startDate,
  endDate,
  timezone,
  playerCount,
  tournamentStructure,
  seedingMethod,
  prizeCash,
  prizeOther,
) => {
  db.Events.create({
    permissionId: permissionId,
    versionId: versionId,
    name: name,
    location: location,
    country: country,
    startdate: startDate,
    enddate: endDate,
    timezone: timezone,
    playerCount: playerCount,
    tournamentStructure: tournamentStructure,
    seedingMethod: seedingMethod,
    prizeCash: prizeCash,
    prizeOther: prizeOther,
  });
};

export const deleteEvent = (eventId) => {
  db.Events.delete({
    where: { id: eventId },
  });
};

export const updateEvent = (
  eventId,
  versionId,
  name,
  location,
  country,
  startDate,
  endDate,
  timezone,
  playerCount,
  tournamentStructure,
  seedingMethod,
  prizeCash,
  prizeOther,
) => {
  db.Events.update({
    versionId: versionId,
    name: name,
    location: location,
    country: country,
    startdate: startDate,
    enddate: endDate,
    timezone: timezone,
    playerCount: playerCount,
    tournamentStructure: tournamentStructure,
    seedingMethod: seedingMethod,
    prizeCash: prizeCash,
    prizeOther: prizeOther,
    where: {
      id: eventId,
    },
  });
};
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
