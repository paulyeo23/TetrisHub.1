import {
  ctwcQualifier,
  simpleScoreQualifier,
  seedingMethod,
  finaliseList,
} from "../seederAlgos/seeders.mjs";

export default function initSeederController(db) {
  const Info = async () => {
    return {
      Brackets: await db.Brackets.findAll(),
      BracketMatches: await db.BracketMatches.findAll(),
      BracketTypes: await db.BracketTypes.findAll(),
      Edition: await db.Editions.findAll(),
      Events: await db.Events.findAll(),
      GameResults: await db.GameResults.findAll(),
      Matches: await db.Matches.findAll(),
      Organisation: await db.Organisations.findAll(),
      PlayerDetails: await db.PlayerDetails.findAll(),
      QualifyingScores: await db.QualifyingScores.findAll(),
      Series: await db.Series.findAll(),
      Streams: await db.Streams.findAll(),
      Users: await db.Users.findAll(),
    };
  };

  const startEvent = async (request, response) => {
    //   const params = request.params;
    //   const eventId = request.eventId;
    const eventId = 1;
    Info().then(async (info) => {
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
      Info().then((info) => {
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
      Info().then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    startEvent,
  };
}
