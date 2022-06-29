function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
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

export function generateRounds(bracketSize) {
  const roundsToGrandFinals = getBaseLog(2, bracketSize);
  // console.log(roundsToGrandFinals, bracketSize);

  function roundName(value) {
    if (value == 4) {
      return "Quarter-finals";
    } else if (value == 2) {
      return "Semi-finals";
    } else if (value == 1) {
      return "Finals";
    } else return `Round of ${value}`;
  }

  if (Number.isInteger(roundsToGrandFinals) == false) {
    return "give even number";
  }
  const roundNumber = [
    {
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
      winnername: `Winners ${roundName(wb)}`,
      losername: `Losers ${roundName(lb)}`,
      wb: wb,
      lb: lb,
    });
  }

  if (bracketSize >= 8) {
    const loserRounds = getBaseLog(2, bracketSize / 4);
    for (let j = 0; j < loserRounds; j++) {
      let i = roundsToGrandFinals - 1 + j;
      let lb = roundNumber[i].lb / 2 ** (i % 2);
      roundNumber.push({
        losername: `Losers ${roundName(lb)}`,
        wb: 0,
        lb: lb,
      });
    }
  }

  roundNumber.push(
    {
      winnername: "GrandFinals1",
      wb: 1,
      lb: 0,
    },
    {
      winnername: "GrandFinals2",
      wb: 1,
      lb: 0,
    },
  );

  return roundNumber;
}

export function generateMatches(bracketSize) {
  const maxMatches = bracketSize * 2 - 1;
  const matches = [];
  const rounds = generateRounds(bracketSize);
  let wid = 1;
  let lid = 1;

  const roundsToWinnersFinals =
    rounds.length -
    2 -
    rounds.filter((round) => {
      return round.wb == 0;
    }).length;
  for (let i = 0; i < roundsToWinnersFinals; i++) {
    let round = rounds[i];
    //Grand finals
    if (i == roundsToWinnersFinals - 1) {
      matches.push({
        name: "winner finals",
        wBracket: true,
        lBracket: false,
        round: i + 1,
        id: wid,
        winnerTo: bracketSize * 2 - 2,
        loserTo: bracketSize * 2 - 3,
        source: sourceGame(matches, wid),
      });
    } else if (i % 2 == 0) {
      if (i == 0) {
        for (let j = 0; j < round.wb; j++) {
          matches.push({
            name: `Winners ${roundName(round.wb)}`,
            wBracket: true,
            lBracket: false,
            round: i + 1,
            id: wid,
            winnerTo: round.wb + round.lb + wid - Math.ceil(j / 2),
            loserTo: round.wb + wid - Math.ceil(j / 2),
            source: sourceGame(matches, wid),
          });
          wid += 1;
        }
      } else {
        for (let j = 0; j < round.wb; j++) {
          let winnerRound = round.wb + round.lb + wid - Math.ceil(j / 2);
          if (round.wb == 1) {
            matches.push({
              name: `Winners ${roundName(round.wb)}`,
              wBracket: true,
              lBracket: false,
              round: i + 1,
              id: wid,
              winnerTo: winnerRound,
              loserTo:
                winnerRound +
                1 +
                Math.floor(j / 2) +
                Math.cos((j % 2) * (Math.PI / 2)),
              source: sourceGame(matches, wid),
            });
          } else {
            matches.push({
              name: `Winners ${roundName(round.wb)}`,
              wBracket: true,
              lBracket: false,
              round: i + 1,
              id: wid,
              winnerTo: winnerRound,
              loserTo:
                winnerRound +
                1 +
                Math.floor(j / 2) +
                Math.cos((j % 2) * (Math.PI / 2)),
              source: sourceGame(matches, wid),
            });
          }
          wid += 1;
        }
      }
    } else if (i % 2 == 1) {
      if (i == 1) {
        for (let j = 0; j < round.wb; j++) {
          matches.push({
            name: `Winners ${roundName(round.wb)}`,
            wBracket: true,
            lBracket: false,
            round: i + 1,
            id: wid,
            winnerTo: round.wb + round.lb + wid - Math.ceil(j / 2),
            loserTo: round.wb + round.lb + wid - 2 * j - 1,
            source: sourceGame(matches, wid),
          });
          wid += 1;
        }
      } else {
        //winners semifinals
        for (let j = 0; j < round.wb; j++) {
          matches.push({
            name: `Winners ${roundName(round.wb)}`,
            wBracket: true,
            lBracket: false,
            round: i + 1,
            id: wid,
            winnerTo: Math.floor(round.wb + round.lb + wid - Math.ceil(j / 2)),
            loserTo: Math.ceil(wid + 2 * (round.wb + round.lb) - 2),
            source: sourceGame(matches, wid),
          });
          wid += 1;
        }
      }
    }
    wid += round.lb;
  }
  //generate losers bracket
  const loserRounds = rounds.length - 2;
  for (let i = 0; i < loserRounds; i++) {
    let round = rounds[i];
    let nextRound = rounds[i + 1];
    lid += round.wb;
    for (let j = 0; j < round.lb; j++) {
      if (lid == 26) {
      }
      if (i == 0) {
        matches.push({
          name: `Losers ${roundName(round.lb)}`,
          wBracket: false,
          lBracket: true,
          round: i + 1,
          id: lid,
          winnerTo: lid + round.lb + Math.ceil(round.wb / 2),
          source: sourceGame(matches, lid),
        });
        lid += 1;
      } else {
        if (i % 2 == 1) {
          matches.push({
            name: `Losers ${roundName(round.lb)}`,
            wBracket: false,
            lBracket: true,
            round: i + 1,
            id: lid,
            winnerTo: lid + round.lb + nextRound.wb - Math.ceil(j / 2),
            source: sourceGame(matches, lid),
          });
          lid += 1;
        } else if (i % 2 == 0) {
          matches.push({
            name: `Losers ${roundName(round.lb)}`,
            wBracket: false,
            lBracket: true,
            round: i + 1,
            id: lid,
            winnerTo: lid + round.lb + Math.floor(round.wb / 2),
            source: sourceGame(matches, lid),
          });
          lid += 1;
        }
      }
    }
  }
  matches.push(
    {
      name: "Grand Finals",
      id: bracketSize * 2 - 2,
    },
    {
      name: "Grand Finals",
      id: bracketSize * 2 - 1,
    },
  );
  return matches.sort((a, b) => {
    return a.id - b.id;
  });
}
