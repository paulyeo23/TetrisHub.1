import { addQualifiers } from "../service/qualifierScoresTable.mjs";
import {
  closeQualification,
  finaliseList,
  openQualification,
} from "../service/seederTable.mjs";
import { Info } from "../service/info.mjs";
import { createSeed, updateSeed } from "../service/playerSeedTable.mjs";

export default function initQualifersController(db) {
  const addQualScore = async (request, response) => {
    response.send(addQualifiers(request.body));
  };

  const closeQualifer = async (request, response) => {
    response.send(closeQualification(request.body.seederId));
  };

  const reopenQualifer = async (request, response) => {
    response.send(openQualification(request.body.seederId));
  };

  const startEvent = async (request, response) => {
    const seederId = request.seederId;
    const seeds = request.seeds;
    finaliseList(seederId);
    seeds.forEach((seed) => {
      seed.seedId == undefined
        ? createSeed(seed.playerId, seed.seed, seederId)
        : updateSeed(seed.seedId);
    });
    response.send({ accepted: true });
  };

  const generateSeed = async (request, response) => {
    const seeds = request.seed;
    seeds.forEach((seed) => {
      seed.seedId == undefined
        ? createSeed(seed.playerId, seed.seed, seederId)
        : updateSeed(seed.seedId);
    });
  };


  const index = async (request, response) => {
    try {
      Info(db).then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    addQualScore,
    closeQualifer,
    reopenQualifer,
    startEvent,
    addPlayerToSeed,
    generateSeed,
  };
}
