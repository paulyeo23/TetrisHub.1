import sequelizePackage from "sequelize";
import allConfig from "../config/config.js";

import initBracketsModel from "./BracketsModel.mjs";
import initEditionsModel from "./EditionModel.mjs";
import initEventsModel from "./EventsModel.mjs";
import initGameResultsModel from "./GameResultsModel.mjs";
import initMatchesModel from "./MatchesModel.mjs";
import initOrganisationsModel from "./OrganisationModel.mjs";
import initPermissionsModel from "./PermissionsModel.mjs";
import initPlayerDetailsModel from "./PlayerDetailsModels.mjs";
import initQualifyingScoresModel from "./QualifyingScoresModel.mjs";
import initSeriesModel from "./SeriesModel.mjs";
import initStreamsModel from "./StreamsModels.mjs";
import initUsersModel from "./UsersModels.mjs";
import initBracketMatchesModel from "./BracketMatchesModel.mjs";
import initBracketTypeModel from "./BracketTypeModel.mjs";
import initSeedingMethodModel from "./SeedingMethodModel.mjs";
import initSeedModel from "./SeederModel.mjs";
import initPlayerSeedModel from "./PlayerSeedModel.mjs";

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
db.QualifyingScores = initQualifyingScoresModel(sequelize, Sequelize.DataTypes);
db.Permissions = initPermissionsModel(sequelize, Sequelize.DataTypes);
db.Brackets = initBracketsModel(sequelize, Sequelize.DataTypes);
db.Editions = initEditionsModel(sequelize, Sequelize.DataTypes);
db.Organisations = initOrganisationsModel(sequelize, Sequelize.DataTypes);
db.Series = initSeriesModel(sequelize, Sequelize.DataTypes);
db.BracketMatches = initBracketMatchesModel(sequelize, Sequelize.DataTypes);
db.BracketTypes = initBracketTypeModel(sequelize, Sequelize.DataTypes);
db.SeedingMethod = initSeedingMethodModel(sequelize, Sequelize.DataTypes);
db.Seeder = initSeedModel(sequelize, Sequelize.DataTypes);
db.PlayerSeed = initPlayerSeedModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
