import { getPermissions } from "../../service/permissionsTable.mjs";

const permissionHierarchy = [
  { level: 1, table: "organisation" },
  { level: 2, table: "series", foreignkey: "orgId" },
  { level: 3, table: "editions", foreignkey: "series" },
  { level: 4, table: "events", foreignkey: "editionId" },
];

export const permissionCheck = (userId, tableId, table) => {
  getPermissions().then((info) => {
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
  });
};
