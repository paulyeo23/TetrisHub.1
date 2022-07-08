<<<<<<< HEAD
import db from "../models/index.mjs";

export const addPlayer = (player) => {
  db.PlayerDetails.create({
    firstName: player.firstName,
    lastName: player.lastName,
    alias: player.alias,
    birthdate: player.birthdate,
    hometown: player.hometown,
    profile: player.profile,
    country: player.country,
    state: player.state,
    playstyle: player.playstle,
    pb: player.pb,
  });
};

export const updatePlayer = (player) => {
  db.PlayerDetails.update({
    firstName: player.firstName,
    lastName: player.lastName,
    alias: player.alias,
    birthdate: player.birthdate,
    hometown: player.hometown,
    profile: player.profile,
    country: player.country,
    state: player.state,
    playstyle: player.playstle,
    pb: player.pb,
    where: {
      id: player.id,
    },
  });
};

export const removePlayer = (id) => {
  db.PlayerDetails.destroy({
    where: { id: id },
  });
};
=======
import db from "../models/index.mjs";

export const addPlayer = (player) => {
  db.PlayerDetails.create({
    firstName: player.firstName,
    lastName: player.lastName,
    alias: player.alias,
    birthdate: player.birthdate,
    hometown: player.hometown,
    profile: player.profile,
    country: player.country,
    state: player.state,
    playstyle: player.playstle,
    pb: player.pb,
  });
};

export const updatePlayer = (player) => {
  db.PlayerDetails.update({
    firstName: player.firstName,
    lastName: player.lastName,
    alias: player.alias,
    birthdate: player.birthdate,
    hometown: player.hometown,
    profile: player.profile,
    country: player.country,
    state: player.state,
    playstyle: player.playstle,
    pb: player.pb,
    where: {
      id: player.id,
    },
  });
};

export const removePlayer = (id) => {
  db.PlayerDetails.destroy({
    where: { id: id },
  });
};
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
