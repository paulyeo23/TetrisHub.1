import db from "../models/index.mjs";

export const generatePermission = (name) => {
  return db.Permissions.create({
    name: name,
  });
};

export const getPermissions = async () => {
  return {
    organisation: await db.Organisations.findAll(),
    series: await db.Series.findAll(),
    editions: await db.Editions.findAll(),
    events: await db.Events.findAll(),
    permissions: await db.Permissions.findAll(),
    admins: await db.Admins.findAll(),
  };
};
