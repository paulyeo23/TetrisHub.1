import { addQualifiers } from "../service/qualifierScoresTable.mjs";
import {
  closeQualification,
  openQualification,
} from "../service/seederTable.mjs";
import { Info } from "../service/info.mjs";

export default function initAllMatchesController(db) {
  const addQualScore = async (request, response) => {
    response.send(addQualifiers(request.body));
  };

  const closeQualifer = async (request, response) => {
    response.send(closeQualification(request.body.seederId));
  };

  const reopenQualifer = async (request, response) => {
    response.send(openQualification(request.body.seederId));
  };

  const finaliseList = async (request, response) => {
    const seederId = request.seederId;
    Info().then((info) => {
      const seeder = info.Seeder.filter((seeder) => {
        return seeder == seederId;
      })[0];
      const qualifierScores = info.QualifyingScores.filter((scores) => {
        return scores.seederId == seeder.id;
      });
      
    });
  };

  const startEvent = async (request, response) => {
    const params = request.params;
    const eventId = params.eventId;

    Info(db).then(async (info) => {
      const event = info.Events.filter((event) => {
        return event.id == eventId;
      })[0];
      const qualScores = info.QualifyingScores.filter((score) => {
        return score.eventId == eventId;
      });
      const seedingMethod = SeedingMethod.filter((method) => {
        return method.id == event.seedingMethod;
      })[0].type;
      const firstStageBracket = info.Brackets.filter((bracket) => {
        return bracket.eventId == eventId;
      })[0];
      const finalList = finaliseList(
        seedingMethod(qualScores),
        firstStageBracket.size,
      );
      console.log(finalList);
      const brackets = Object.keys(finalList.bracketMatches);
      brackets.forEach(async (bracket) => {
        await finalList.bracketMatches[bracket].forEach(
          async (bracketMatch) => {
            await db.BracketMatches.create({
              bracketId: 1,
              bracketMatchId: bracketMatch.id,
              winnerTo: bracketMatch.winnerTo,
              loserTo: bracketMatch.loserTo,
            });
          },
        );
      });
      Info(db).then((info) => {
        brackets.forEach(async (bracket) => {
          await finalList.bracketMatches[bracket].forEach(
            async (bracketMatch) => {
              const round1MatchUp = finalList.matchUps.filter((match) => {
                return match.bracketMatchId == bracketMatch.id;
              })[0];
              round1MatchUp != undefined
                ? db.Matches.create({
                    version: "NTSC",
                    eventId: eventId,
                    bracketMatchId: round1MatchUp.bracketMatchId,
                    player1Id: round1MatchUp.player1,
                    player2Id: round1MatchUp.player2,
                  })
                : db.Matches.create({
                    version: "NTSC",
                    eventId: eventId,
                    bracketMatchId: bracketMatch.id,
                  });
            },
          );
        });
      });
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
  };
}
