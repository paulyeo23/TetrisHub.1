const sequelizePackage = require("sequelize");
const allConfig = require("../config/config");

const initUsersModel = require("./UsersModels");
const initEventsModel = require("./EventsModel");
const initGameResultsModel = require("./GameResultsModel");
const initMatchesModel = require("./MatchesModel");
const initPlayerDetailsModel = require("./PlayerDetailsModels");
const initStreamsModel = require("./StreamsModels");

const { Sequelize } = sequelizePackage;
const env = "development";
const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Users = initUsersModel(sequelize, Sequelize.DataTypes);
db.PlayerDetails = initPlayerDetailsModel(sequelize, Sequelize.DataTypes);
db.Events = initEventsModel(sequelize, Sequelize.DataTypes);
db.Matches = initMatchesModel(sequelize, Sequelize.DataTypes);
db.GameResults = initGameResultsModel(sequelize, Sequelize.DataTypes);
db.Streams = initStreamsModel(sequelize, Sequelize.DataTypes);

// db.Users.hasMany(db.PlayerDetails);

// db.Events.hasMany(db.Matches);

// db.PlayerDetails.belongsTo(db.Users);

// db.Matches.belongsTo(db.PlayerDetails);
// db.Matches.belongsTo(db.Events);
// db.Matches.hasMany(db.GameResults);
// db.Matches.hasMany(db.Streams);

// db.GameResults.hasMany(db.Matches);

// db.Streams.belongsTo(db.Matches);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
