function x(list) {
  let returnList = [];
  list.forEach((entry) => {
    returnList.push({
      Name: `${entry.Event} ${entry.Edition}`,
      StartDate: new Date(entry.Date.time),
      EndDate: new Date(entry.Date.time)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      Ongoing: true,
      Concluded: true,
      PermissionId: 1,
    });
  });
  return returnList;
}

function y(list) {
  let returnList = [];
  list.forEach((entry) => {
    returnList.push({
      Name: entry.Name,
      StartDate: new Date(entry.StartDate)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      EndDate: new Date(entry.EndDate)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      Ongoing: true,
      Concluded: true,
      PermissionId: 1,
    });
  });
  return returnList;
}

// Location: {
//   allowNull: true,
//   type: Sequelize.STRING,
// },
// Country: {
//   allowNull: true,
//   type: Sequelize.STRING,
// },
// StartDate: {
//   type: Sequelize.DATE,
// },
// EndDate: {
//   type: Sequelize.DATE,
// },
// Timezone: {
//   type: Sequelize.INTEGER,
// },
// Ongoing: {
//   type: Sequelize.BOOLEAN,
//   allowNull: false,
//   defaultValue: false,
// },
// Concluded: {
//   type: Sequelize.BOOLEAN,
//   allowNull: false,
//   defaultValue: false,
// },
// Importance: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
//   defaultValue: 0,
// },
// PlayerCount: {
//   type: Sequelize.INTEGER,
// },
