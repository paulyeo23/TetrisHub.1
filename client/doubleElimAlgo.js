function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

//recursion algo, refer to diagram
//forward and reverse returns list for seeding lower brackets
function forward(lowerBound, upperBound, direction) {
  let seed = [];
  if (upperBound - lowerBound == 1) {
    seed.push(lowerBound, upperBound);
    return seed;
  } else {
    seed = seed.concat(
      direction(
        lowerBound,
        upperBound - Math.ceil((upperBound - lowerBound) / 2),
        direction,
      ),
    );
    seed = seed.concat(
      direction(
        upperBound - Math.ceil((upperBound - lowerBound) / 2) + 1,
        upperBound,
        direction,
      ),
    );
  }
  return seed;
}

function reverse(lowerBound, upperBound, direction) {
  let seed = [];
  if (upperBound - lowerBound == 1) {
    seed.push(upperBound, lowerBound);

    return seed;
  } else {
    seed = seed.concat(
      direction(
        upperBound - Math.ceil((upperBound - lowerBound) / 2) + 1,
        upperBound,
        direction,
      ),
    );
    seed = seed.concat(
      direction(
        lowerBound,
        upperBound - Math.ceil((upperBound - lowerBound) / 2),
        direction,
      ),
    );
  }
  return seed;
}

function bracketGenerator(bracketSize) {
  let players = [];
  for (let i = 0; i < bracketSize; i++) {
    players.push({ id: i, name: `seed${i}` });
  }
  let games = {};
  for (let i = 0; i < bracketSize / 2 - 1; i++) {
    games[`game${i}`] = {};
    games[`game${i}`] = {
      id: i + 1,
      name: `Ro: ${i + 1}`,
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: players[2 * i],
          score: {
            score: 0,
          },
        },
        visitor: {
          team: players[2 * i + 1],
          score: {
            score: 0,
          },
        },
      },
    };
  }
  return games;
}

function roundName(wb) {
  if (wb == 4) {
    return "Quarter-Finals";
  } else if (wb == 2) {
    return "Semi-Finals";
  } else if (wb == 1) {
    return "Finals";
  } else {
    return `Round of ${wb * 2}`;
  }
}

//returns games where winner/loser comes from
function sourceGame(matches, id) {
  const sources = {
    winnerSources: [],
    loserSources: [],
  };

  matches
    .filter((match) => {
      return match.winnerTo == id;
    })
    .forEach((match) => {
      sources.winnerSources.push(match.id);
    });

  matches
    .filter((match) => {
      return match.loserTo == id;
    })
    .forEach((match) => {
      sources.loserSources.push(match.id);
    });
  return sources;
}

//generates rounds with corresponding number of upper bracket matches and lower bracket matches
//note that grand finals are not included and should be generated seperately (reasons)
export function generateRounds(bracketSize) {
  const roundsToGrandFinals = getBaseLog(2, bracketSize);

  function roundName(value) {
    if (value == 4) {
      return "Quarter-finals";
    } else if (value == 2) {
      return "Semi-finals";
    } else if (value == 1) {
      return "Finals";
    } else return `Round of ${value * 2}`;
  }

  if (Number.isInteger(roundsToGrandFinals) == false) {
    return "give even number";
  }
  const roundNumber = [
    {
      round: 1,
      winnername: `Winners Round of ${bracketSize}`,
      losername: `Losers ${bracketSize / 2}`,
      wb: bracketSize / 2,
      lb: bracketSize / 4,
    },
  ];
  for (let i = 0; i < roundsToGrandFinals - 1; i++) {
    let round = i + 1;
    let wb = Math.ceil(bracketSize / 2 ** (round + 1));
    let lb = roundNumber[i].lb / 2 ** (i % 2);
    roundNumber.push({
      round: round + 1,
      winnername: `Winners ${roundName(wb)}`,
      losername: `Losers ${roundName(lb)}`,
      wb: wb,
      lb: lb,
    });
  }

  if (bracketSize >= 8) {
    const loserRounds = getBaseLog(2, bracketSize / 4);
    for (let j = 0; j < loserRounds; j++) {
      let round = roundNumber[roundNumber.length - 1].round;
      let i = roundsToGrandFinals - 1 + j;
      let lb = roundNumber[i].lb / 2 ** (i % 2);
      roundNumber.push({
        round: round + 1,
        losername: `Losers ${roundName(lb)}`,
        wb: 0,
        lb: lb,
      });
    }
  }

  roundNumber.push(
    {
      round: 0,
      winnername: "GrandFinals1",
      wb: 1,
      lb: 0,
    },
    {
      round: 0,
      winnername: "GrandFinals2",
      wb: 1,
      lb: 0,
    },
  );

  return roundNumber;
}

function getTotalGames(rounds) {
  let totalGames = 0;
  rounds.forEach((round) => {
    totalGames += round.wb + round.lb;
  });
  return totalGames;
}

function getSmallestIdInRound(currentRound, rounds) {
  rounds.sort((a, b) => {
    return b.round - a.round;
  });
  const maxMatches = getTotalGames(rounds);
  const grandFinals2 = maxMatches;
  const grandFinals1 = grandFinals2 - 1;
  let id = grandFinals1;
  for (
    let i = 0;
    i <
    rounds.findIndex((round) => {
      return round.round == currentRound.round;
    }) +
      1;
    i++
  ) {
    id -= rounds[i].wb + rounds[i].lb;
  }
  return id;
}

function loserTo(currentRound, rounds) {
  const loserround = rounds
    .filter((round) => {
      return round.lb == currentRound.wb;
    })
    .sort((a, b) => {
      return b.round - a.round;
    })[0];
  return loserround;
}

function generateUpperMatches(bracketSize) {
  const rounds = generateRounds(bracketSize).sort((a, b) => {
    return b.round - a.round;
  });
  const maxMatches = getTotalGames(rounds);
  const grandFinals2 = maxMatches;
  const grandFinals1 = grandFinals2 - 1;
  const loserFinals = grandFinals1 - 1;
  let matches = [];

  rounds.forEach((round) => {
    let nextRound = rounds.filter((rounds) => {
      return rounds.round == round.round - 1;
    })[0];
    function lowerSeed(roundNum, lowerBound, upperBound) {
      if (lowerBound == upperBound) {
        return [lowerBound];
      }
      const firstDirection = roundNum % 2 == 1 ? forward : reverse;
      const secondDirection =
        Math.floor(roundNum / 2) % 2 == 0 ? forward : reverse;
      return firstDirection(lowerBound, upperBound, secondDirection);
    }
    if (round.round == 1) {
      for (let i = 0; i < round.wb; i++) {
        let loserToRound = round;
        let loserLowerBound = round.wb + 1;
        let loserUpperBound = loserLowerBound + loserToRound.lb - 1;
        matches.push({
          name: `Winners ${roundName(round.wb)}`,
          wBracket: true,
          lBracket: false,
          round: round.round,
          id: i + 1,
          loserTo: lowerSeed(round.round, loserLowerBound, loserUpperBound)[
            Math.floor(i / 2)
          ],
          source: {
            winnerSources: [],
            loserSources: [],
          },
        });
      }
    } else if (round.round > 1) {
      for (let i = 0; i < round.wb; i++) {
        let loserToRound = loserTo(round, rounds);
        let loserLowerBound =
          getSmallestIdInRound(loserToRound, rounds) + loserToRound.wb;
        let loserUpperBound = loserLowerBound + loserToRound.lb - 1;
        matches.push({
          name: `Winners ${roundName(round.wb)}`,
          wBracket: true,
          lBracket: false,
          round: round.round,
          id: getSmallestIdInRound(round, rounds) + i,
          loserTo: lowerSeed(round.round, loserLowerBound, loserUpperBound)[i],
          source: {
            winnerSources: [
              getSmallestIdInRound(nextRound, rounds) + 2 * i,
              getSmallestIdInRound(nextRound, rounds) + (2 * i + 1),
            ],
            loserSources: [],
          },
        });
      }
    } else if (round.round == 1) {
    }
  });
  return matches;
}

function generateLowerMatches(bracketSize, upperMatches) {
  const rounds = generateRounds(bracketSize)
    .filter((round) => {
      return round.round != 0;
    })
    .sort((a, b) => {
      return a.round - b.round;
    });
  const maxMatches = getTotalGames(rounds);
  const grandFinals2 = maxMatches;
  const grandFinals1 = grandFinals2 - 1;
  const loserFinals = grandFinals1 - 1;
  let matches = [];

  let lid = 1;

  rounds.forEach((round) => {
    let nextRound =
      rounds.filter((rounds) => {
        return rounds.round == round.round + 1;
      })[0] != undefined
        ? rounds.filter((rounds) => {
            return rounds.round == round.round + 1;
          })[0]
        : { wb: 0, lb: 0 };
    lid += round.wb;
    for (let i = 0; i < round.lb; i++) {
      matches.push({
        name: `Lower ${roundName(round.wb)}`,
        wBracket: false,
        lBracket: true,
        round: round.round,
        id: lid,
        winnerTo:
          round.round % 2 == 1
            ? lid + round.lb + nextRound.wb
            : lid + round.lb + nextRound.wb - Math.ceil(i / 2),
        source: sourceGame(upperMatches.concat(matches), lid),
      });
      lid += 1;
    }
  });
  return matches;
}

export function generateMatches(bracketSize) {
  const loserFinalsId = bracketSize * 2 - 3;
  const upperBrackets = generateUpperMatches(bracketSize).sort((a, b) => {
    return a.id - b.id;
  });
  const lowerBrackets = generateLowerMatches(bracketSize, upperBrackets).sort(
    (a, b) => {
      return a.id - b.id;
    },
  );
  // let matches = upperMatches.concat(lowerMatches).sort((a, b) => {
  //   return a.id - b.id;
  // });
  const winnerFinals = upperBrackets.filter((game) => {
    return game.loserTo == loserFinalsId;
  })[0];

  const grandFinals = [
    {
      name: `Grand-Finals 1`,
      wBracket: true,
      lBracket: false,
      round: 0,
      id: bracketSize * 2 - 2,
      source: {
        winnerSources: [winnerFinals.id],
        loserSources: [loserFinalsId],
      },
    },
    {
      name: `Grand-Finals 2`,
      wBracket: true,
      lBracket: false,
      round: 0,
      id: bracketSize * 2 - 1,
      source: {
        winnerSources: [bracketSize * 2 - 2],
        loserSources: [],
      },
    },
  ];
  return {
    upperBrackets: upperBrackets,
    lowerBrackets: lowerBrackets,
    grandFinals: grandFinals,
  };
}
// console.log(generateUpperMatches(32));
