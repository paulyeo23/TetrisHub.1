export const heirarchy = [
  { level: 1, table: "Users" },
  { level: 2, table: "Organisations", foreignkey: "ownerId" },
  { level: 3, table: "Series", foreignkey: "orgId" },
  { level: 4, table: "Editions", foreignkey: "seriesId" },
  { level: 5, table: "Events", foreignkey: "editionId" },
];