import db from "../models/index.mjs";

export const createOrganisation = (
  name,
  permissionId,
  ownerId,
  shortName,
  youtube,
  website,
  discord,
  facebook,
  twitter,
  description,
  twitch,
) => {
  db.Organisations.create({
    name: name,
    permissionId: permissionId,
    ownerId: ownerId,
    shortName: shortName,
    youtube: youtube,
    website: website,
    discord: discord,
    facebook: facebook,
    twitter: twitter,
    description: description,
    twitch: twitch,
  });
};


