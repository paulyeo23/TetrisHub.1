<<<<<<< HEAD
import { createAdmin, deleteAdmin } from "../service/adminTable.mjs";
import { Info } from "../service/info.mjs";
import { createOrganisation } from "../service/organisationTable.mjs";
import { generatePermission } from "../service/permissionsTable.mjs";
import { createSeries, deleteSeries } from "../service/seriesTable.mjs";
import { getPermissions } from "../../service/permissionsTable.mjs";

export default function initOrganisationController() {
  const permissionHierarchy = [
    { level: 1, table: "organisation" },
    { level: 2, table: "series", foreignkey: "orgId" },
    { level: 3, table: "editions", foreignkey: "series" },
    { level: 4, table: "events", foreignkey: "editionId" },
  ];

  const permissionCheck = (userId, tableId, table, info) => {
    const permissionsUserHas = info.admins.filter((admin) => {
      return admin.userId == userId;
    });
    const hierarchyLevel = permissionHierarchy.filter((hierarchy) => {
      return (hierarchy.table = table);
    })[0].level;
    let permissionsNeeded = [];
    let foreignkey;
    for (let i = hierarchyLevel; i > 0; i--) {
      let currentHierarchy = permissionHierarchy.filter((heirarchy) => {
        return heirarchy.level == i;
      })[0];
      let currentTable = info[currentHierarchy.table].filter((table) => {
        return table.id == (foreignkey == undefined ? tableId : foreignkey);
      })[0];
      permissionsNeeded.push(currentTable.permissionId);
      foreignkey = currentTable[currentHierarchy.foreignkey];
    }
    const permissionsFound = permissionsUserHas.filter((permission) =>
      permissionsNeeded.includes(permission),
    );
    return permissionsFound.length > 0;
  };

  const registerOrganisation = async (request, response) => {
    const form = request.body;
    const organisationInfo = {
      name: form.name,
      ownerId: form.ownerId,
      shortName: form.shortName,
      youtube: form.youtube,
      website: form.website,
      discord: form.discord,
      facebook: form.facebook,
      twitter: form.twitter,
      description: form.description,
      twitch: form.twitch,
    };
    Info().then((info) => {
      const nameCheck = info.Organisation.filter((organisation) => {
        organisation.name == organisationInfo.name;
      })[0];

      const shortNameCheck = info.Organisation.filter((organisation) => {
        organisation.name == organisationInfo.name;
      })[0];

      nameCheck != undefined || shortNameCheck != undefined
        ? response.send({
            accepted: false,
            nameCheck: nameCheck == undefined,
            shortNameCheck: shortNameCheck == undefined,
          })
        : generatePermission(`Organisation: ${organisationInfo.name}`).then(
            (permission) => {
              createOrganisation(
                organisationInfo.name,
                permission.id,
                organisationInfo.ownerId,
                organisationInfo.shortName,
                organisationInfo.youtube,
                organisationInfo.website,
                organisationInfo.discord,
                organisationInfo.facebook,
                organisationInfo.twitter,
                organisationInfo.description,
                organisationInfo.twitch,
              );
            },
          );
    });
  };

  const addAdmin = async (request, response) => {
    const organisationId = request.params.organisationId;
    const ownerId = request.body.id;
    const userId = request.body.userId;
    const permissionId = request.body.userId;
    Info().then((info) => {
      const organisation = info.Organisation.filter((organisation) => {
        return organisation.id == organisationId;
      })[0];
      organisation == undefined
        ? response.send({
            accepted: false,
            reason: "organisation not found",
          })
        : organisation.ownerId != ownerId
        ? response.send({
            accepted: false,
            reason: "not organisation owner",
          })
        : response.send(createAdmin(userId, permissionId));
    });
  };

  const removeAdmin = async (request, response) => {
    const organisationId = request.params.organisationId;
    const ownerId = request.body.id;
    const userId = request.body.userId;
    const permissionId = request.body.userId;
    Info().then((info) => {
      const organisation = info.Organisation.filter((organisation) => {
        return organisation.ud == organisationId;
      })[0];
      organisation == undefined
        ? response.send({
            accepted: false,
            reason: "organisation not found",
          })
        : organisation.ownerId != ownerId
        ? response.send({
            accepted: false,
            reason: "not organisation owner",
          })
        : response.send(deleteAdmin(userId, permissionId));
    });
  };

  const addSeries = async (request, response) => {
    const userId = request.body.userId;
    const orgId = request.body.orgId;
    const seriesName = request.body.name;
    Info().then((info) => {
      permissionCheck(userId, orgId, "organisation", info) == false
        ? response.send({ accepted: false, reason: "Insufficient permission" })
        : generatePermission(`Series ${seriesName}`).then((permission) => {
            createSeries(seriesName, orgId, permission.id);
          });
    });
  };

  const removeSeries = async (request, response) => {
    const seriesId = request.body.seriesId;
    deleteSeries(seriesId);
  };

  return {
    registerOrganisation,
    addAdmin,
    removeAdmin,
    addSeries,
    removeSeries,
  };
}

import { createAdmin, deleteAdmin } from "../service/adminTable.mjs";
import { Info } from "../service/info.mjs";
import { createOrganisation } from "../service/organisationTable.mjs";
import { generatePermission } from "../service/permissionsTable.mjs";
import { createSeries, deleteSeries } from "../service/seriesTable.mjs";
import { getPermissions } from "../../service/permissionsTable.mjs";

export default function initOrganisationController() {
  const permissionHierarchy = [
    { level: 1, table: "organisation" },
    { level: 2, table: "series", foreignkey: "orgId" },
    { level: 3, table: "editions", foreignkey: "series" },
    { level: 4, table: "events", foreignkey: "editionId" },
  ];

  const permissionCheck = (userId, tableId, table, info) => {
    const permissionsUserHas = info.admins.filter((admin) => {
      return admin.userId == userId;
    });
    const hierarchyLevel = permissionHierarchy.filter((hierarchy) => {
      return (hierarchy.table = table);
    })[0].level;
    let permissionsNeeded = [];
    let foreignkey;
    for (let i = hierarchyLevel; i > 0; i--) {
      let currentHierarchy = permissionHierarchy.filter((heirarchy) => {
        return heirarchy.level == i;
      })[0];
      let currentTable = info[currentHierarchy.table].filter((table) => {
        return table.id == (foreignkey == undefined ? tableId : foreignkey);
      })[0];
      permissionsNeeded.push(currentTable.permissionId);
      foreignkey = currentTable[currentHierarchy.foreignkey];
    }
    const permissionsFound = permissionsUserHas.filter((permission) =>
      permissionsNeeded.includes(permission),
    );
    return permissionsFound.length > 0;
  };

  const registerOrganisation = async (request, response) => {
    const form = request.body;
    const organisationInfo = {
      name: form.name,
      ownerId: form.ownerId,
      shortName: form.shortName,
      youtube: form.youtube,
      website: form.website,
      discord: form.discord,
      facebook: form.facebook,
      twitter: form.twitter,
      description: form.description,
      twitch: form.twitch,
    };
    Info().then((info) => {
      const nameCheck = info.Organisation.filter((organisation) => {
        organisation.name == organisationInfo.name;
      })[0];

      const shortNameCheck = info.Organisation.filter((organisation) => {
        organisation.name == organisationInfo.name;
      })[0];

      nameCheck != undefined || shortNameCheck != undefined
        ? response.send({
            accepted: false,
            nameCheck: nameCheck == undefined,
            shortNameCheck: shortNameCheck == undefined,
          })
        : generatePermission(`Organisation: ${organisationInfo.name}`).then(
            (permission) => {
              createOrganisation(
                organisationInfo.name,
                permission.id,
                organisationInfo.ownerId,
                organisationInfo.shortName,
                organisationInfo.youtube,
                organisationInfo.website,
                organisationInfo.discord,
                organisationInfo.facebook,
                organisationInfo.twitter,
                organisationInfo.description,
                organisationInfo.twitch,
              );
            },
          );
    });
  };

  const addAdmin = async (request, response) => {
    const organisationId = request.params.organisationId;
    const ownerId = request.body.id;
    const userId = request.body.userId;
    const permissionId = request.body.userId;
    Info().then((info) => {
      const organisation = info.Organisation.filter((organisation) => {
        return organisation.id == organisationId;
      })[0];
      organisation == undefined
        ? response.send({
            accepted: false,
            reason: "organisation not found",
          })
        : organisation.ownerId != ownerId
        ? response.send({
            accepted: false,
            reason: "not organisation owner",
          })
        : response.send(createAdmin(userId, permissionId));
    });
  };

  const removeAdmin = async (request, response) => {
    const organisationId = request.params.organisationId;
    const ownerId = request.body.id;
    const userId = request.body.userId;
    const permissionId = request.body.userId;
    Info().then((info) => {
      const organisation = info.Organisation.filter((organisation) => {
        return organisation.ud == organisationId;
      })[0];
      organisation == undefined
        ? response.send({
            accepted: false,
            reason: "organisation not found",
          })
        : organisation.ownerId != ownerId
        ? response.send({
            accepted: false,
            reason: "not organisation owner",
          })
        : response.send(deleteAdmin(userId, permissionId));
    });
  };

  const addSeries = async (request, response) => {
    const userId = request.body.userId;
    const orgId = request.body.orgId;
    const seriesName = request.body.name;
    Info().then((info) => {
      permissionCheck(userId, orgId, "organisation", info) == false
        ? response.send({ accepted: false, reason: "Insufficient permission" })
        : generatePermission(`Series ${seriesName}`).then((permission) => {
            createSeries(seriesName, orgId, permission.id);
          });
    });
  };

  const removeSeries = async (request, response) => {
    const seriesId = request.body.seriesId;
    deleteSeries(seriesId);
  };

  return {
    registerOrganisation,
    addAdmin,
    removeAdmin,
    addSeries,
    removeSeries,
  };
}

