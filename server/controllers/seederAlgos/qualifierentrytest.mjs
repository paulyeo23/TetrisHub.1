<<<<<<< HEAD
import db from "../models/index.mjs";

import {
  ctwcQualifier,
  simpleScoreQualifier,
  seedingMethod,
  finaliseList,
} from "./seeders.mjs";

const SeedingMethod = seedingMethod;

const Info = async () => {
  const info = {
    Brackets: await db.Brackets.findAll(),
    BracketMatches: await db.BracketMatches.findAll(),
    Edition: await db.Editions.findAll(),
    Events: await db.Events.findAll(),
    // GameResults: await db.GameResults.findAll(),
    Matches: await db.Matches.findAll(),
    Organisation: await db.Organisations.findAll(),
    PlayerDetails: await db.PlayerDetails.findAll(),
    QualifyingScores: await db.QualifyingScores.findAll(),
    Series: await db.Series.findAll(),
    Streams: await db.Streams.findAll(),
    Users: await db.Users.findAll(),
    Seeder: await db.Seeder.findAll(),
  };

  return info;
};
const startEvent = async (request, response) => {
  //   const params = request.params;
  //   const eventId = request.eventId;
  const eventId = 1;
  Info().then(async (info) => {
    const firstStageBracket = info.Brackets.filter((bracket) => {
      return bracket.eventId == eventId && bracket.bracketStage == 1;
    })[0];
    console.log(info.Brackets);

    const seeder = info.Seeder.filter((seeder) => {
      return seeder.id == firstStageBracket.id;
    })[0];

    const qualScores = info.QualifyingScores.filter((score) => {
      return score.seederId == seeder.id;
    });

    const seedingMethod = SeedingMethod.filter((method) => {
      return method.id == seeder.seedingMethod;
    })[0].type;

    const finalList = finaliseList(
      seedingMethod(qualScores),
      firstStageBracket.size,
    );
    console.log(finalList.bracketMatches.upperBrackets);
    const brackets = Object.keys(finalList.bracketMatches);
    brackets.forEach(async (bracket) => {
      await finalList.bracketMatches[bracket].forEach(async (bracketMatch) => {
        await db.BracketMatches.create({
          bracketId: 1,
          bracketMatchId: bracketMatch.id,
          winnerTo: bracketMatch.winnerTo,
          loserTo: bracketMatch.loserTo,
        });
      });
    });
    Info().then((info) => {
      brackets.forEach(async (bracket) => {
        await finalList.bracketMatches[bracket].forEach(
          async (bracketMatch) => {
            const round1MatchUp = finalList.matchUps.filter((match) => {
              return match.bracketMatchId == bracketMatch.id;
            })[0];
            round1MatchUp != undefined
              ? round1MatchUp.player2.id != 0
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
                    bracketMatchId: round1MatchUp.bracketMatchId,
                    player1Id: round1MatchUp.player1,
                    completed: true,
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

startEvent();
=======
import db from "../models/index.mjs";

import {
  ctwcQualifier,
  simpleScoreQualifier,
  seedingMethod,
  finaliseList,
} from "./seeders.mjs";

const SeedingMethod = seedingMethod;

const Info = async () => {
  const info = {
    Brackets: await db.Brackets.findAll(),
    BracketMatches: await db.BracketMatches.findAll(),
    Edition: await db.Editions.findAll(),
    Events: await db.Events.findAll(),
    // GameResults: await db.GameResults.findAll(),
    Matches: await db.Matches.findAll(),
    Organisation: await db.Organisations.findAll(),
    PlayerDetails: await db.PlayerDetails.findAll(),
    QualifyingScores: await db.QualifyingScores.findAll(),
    Series: await db.Series.findAll(),
    Streams: await db.Streams.findAll(),
    Users: await db.Users.findAll(),
    Seeder: await db.Seeder.findAll(),
  };

  return info;
};
const startEvent = async (request, response) => {
  //   const params = request.params;
  //   const eventId = request.eventId;
  const eventId = 1;
  Info().then(async (info) => {
    const firstStageBracket = info.Brackets.filter((bracket) => {
      return bracket.eventId == eventId && bracket.bracketStage == 1;
    })[0];
    console.log(info.Brackets);

    const seeder = info.Seeder.filter((seeder) => {
      return seeder.id == firstStageBracket.id;
    })[0];

    const qualScores = info.QualifyingScores.filter((score) => {
      return score.seederId == seeder.id;
    });

    const seedingMethod = SeedingMethod.filter((method) => {
      return method.id == seeder.seedingMethod;
    })[0].type;

    const finalList = finaliseList(
      seedingMethod(qualScores),
      firstStageBracket.size,
    );
    console.log(finalList.bracketMatches.upperBrackets);
    const brackets = Object.keys(finalList.bracketMatches);
    brackets.forEach(async (bracket) => {
      await finalList.bracketMatches[bracket].forEach(async (bracketMatch) => {
        await db.BracketMatches.create({
          bracketId: 1,
          bracketMatchId: bracketMatch.id,
          winnerTo: bracketMatch.winnerTo,
          loserTo: bracketMatch.loserTo,
        });
      });
    });
    Info().then((info) => {
      brackets.forEach(async (bracket) => {
        await finalList.bracketMatches[bracket].forEach(
          async (bracketMatch) => {
            const round1MatchUp = finalList.matchUps.filter((match) => {
              return match.bracketMatchId == bracketMatch.id;
            })[0];
            round1MatchUp != undefined
              ? round1MatchUp.player2.id != 0
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
                    bracketMatchId: round1MatchUp.bracketMatchId,
                    player1Id: round1MatchUp.player1,
                    completed: true,
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

startEvent();
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
