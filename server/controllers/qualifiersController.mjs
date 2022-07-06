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
      createSeed(seed.playerId, seed.seed, seederId);
    });
    response.send({ accepted: true });
  };

  const addPlayerToSeed = async (request, response) => {
    const playerId = request.playerId;
    const seederId = request.seederId;
    const seed = request.seed;
    response.send(createSeed(playerId, seed, seederId));
  };

  const updatePlayerSeed = async (request, response) => {
    const playerId = request.body.playerId;
    const seedId = request.body.seedId;
    updateSeed(playerId, seedId);
  };

  // const startEvent = async (request, response) => {
  //   const params = request.params;
  //   const eventId = params.eventId;

  //   Info(db).then(async (info) => {
  //     const event = info.Events.filter((event) => {
  //       return event.id == eventId;
  //     })[0];
  //     const qualScores = info.QualifyingScores.filter((score) => {
  //       return score.eventId == eventId;
  //     });
  //     const seedingMethod = SeedingMethod.filter((method) => {
  //       return method.id == event.seedingMethod;
  //     })[0].type;
  //     const firstStageBracket = info.Brackets.filter((bracket) => {
  //       return bracket.eventId == eventId;
  //     })[0];
  //     const finalList = finaliseList(
  //       seedingMethod(qualScores),
  //       firstStageBracket.size,
  //     );
  //     console.log(finalList);
  //     const brackets = Object.keys(finalList.bracketMatches);
  //     brackets.forEach(async (bracket) => {
  //       await finalList.bracketMatches[bracket].forEach(
  //         async (bracketMatch) => {
  //           await db.BracketMatches.create({
  //             bracketId: 1,
  //             bracketMatchId: bracketMatch.id,
  //             winnerTo: bracketMatch.winnerTo,
  //             loserTo: bracketMatch.loserTo,
  //           });
  //         },
  //       );
  //     });
  //     Info(db).then((info) => {
  //       brackets.forEach(async (bracket) => {
  //         await finalList.bracketMatches[bracket].forEach(
  //           async (bracketMatch) => {
  //             const round1MatchUp = finalList.matchUps.filter((match) => {
  //               return match.bracketMatchId == bracketMatch.id;
  //             })[0];
  //             round1MatchUp != undefined
  //               ? db.Matches.create({
  //                   version: "NTSC",
  //                   eventId: eventId,
  //                   bracketMatchId: round1MatchUp.bracketMatchId,
  //                   player1Id: round1MatchUp.player1,
  //                   player2Id: round1MatchUp.player2,
  //                 })
  //               : db.Matches.create({
  //                   version: "NTSC",
  //                   eventId: eventId,
  //                   bracketMatchId: bracketMatch.id,
  //                 });
  //           },
  //         );
  //       });
  //     });
  //   });
  // };

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
    updatePlayerSeed,
  };
}
