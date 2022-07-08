<<<<<<< HEAD
import db from "../models/index.mjs";

export const login = (username, password) => {
  return db.Users.findOne({
    where: {
      username: username,
      password: password,
    },
  });
};

export const register = async (username, password) => {
  let accepted;
  let user = await db.Users.findOne({
    where: {
      username: username,
    },
  });
  if ((user.length = 0)) {
    db.Users.create({
      username: username,
      password: password,
    });
    accepted = true;
  } else {
    accepted = false;
  }
  return accepted;
};

=======
import db from "../models/index.mjs";

export const login = (username, password) => {
  return db.Users.findOne({
    where: {
      username: username,
      password: password,
    },
  });
};

export const register = async (username, password) => {
  let accepted;
  let user = await db.Users.findOne({
    where: {
      username: username,
    },
  });
  if ((user.length = 0)) {
    db.Users.create({
      username: username,
      password: password,
    });
    accepted = true;
  } else {
    accepted = false;
  }
  return accepted;
};

>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
