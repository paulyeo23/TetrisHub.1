import "./styles.css";
import React from "react";
import { players } from "./players";
import { generateMatches } from "../bracketsDoubleElim";
import { generateRounds } from "../bracketsDoubleElim";

import {
  Bracket,
  BracketGame,
  BracketGenerator,
} from "react-tournament-bracket";

const Brackets = () => {
  const bracketGenerator = (bracketSize) => {
    const matches = generateMatches(bracketSize);
    const brackets = {
      wBracket: matches.filter((match) => {
        return match.wBracket == true;
      }),
      lBracket: matches.filter((match) => {
        return match.lBracket == true;
      }),
      finals: matches.filter((match) => {
        return match.wBracket == undefined && match.lBracket == undefined;
      }),
    };
    return brackets;
  };

  const getBracketRounds = (bracket, field, roundNumber) => {
    return bracket.filter((game) => {
      return game[field] == roundNumber;
    });
  };

  const getSources = (matchs) => {
    const match = matchs.source;
    if (match.loserSources == 0) {
      return match.winnerSources;
    } else if (match.winnerSources == 0) {
      return match.loserSources;
    } else {
      return [match.loserSources[0], match.winnerSources[0]];
    }
  };

  const getSourceGame = (matches, id) => {
    return matches.filter((match) => {
      return match.id == id;
    })[0];
  };

  const generateWinnerBrackets = (brackets, players) => {
    let renderMatches = [];

    let wBracket = brackets.wBracket;
    const maxRounds = wBracket.sort((a, b) => {
      return a.round - b.round;
    })[wBracket.length - 1].round;
    for (let i = 0; i < maxRounds; i++) {
      let j = 0;
      let roundMatches = getBracketRounds(wBracket, "round", i + 1);
      i == 0
        ? roundMatches.forEach((match) => {
            renderMatches.push({
              id: match.id,
              name: `Match ${match.id}`,
              scheduled: Number(new Date()),
              sides: {
                home: {
                  team: {
                    id: wBracket,
                    name: players[2 * j].alias,
                  },
                  score: {
                    score: 0,
                  },
                  seed: {
                    displayName: "A1",
                    rank: 1,
                    sourceGame: null,
                    sourcePool: {},
                  },
                },
                visitor: {
                  team: {
                    id: players[2 * j + 1].id,
                    name: players[2 * j + 1].alias,
                  },
                  score: {
                    score: 0,
                  },
                  seed: {
                    displayName: "A1",
                    rank: 1,
                    sourceGame: null,
                    sourcePool: {},
                  },
                },
              },
              eventType: "Game",
            });
            j += 1;
          })
        : roundMatches.forEach((match) => {
            let sources = getSources(match);
            renderMatches.push({
              id: match.id,
              name: `Match ${match.id}`,
              scheduled: Number(new Date()),
              sides: {
                home: {
                  team: {
                    name: `Winner of ${sources[0]}`,
                  },
                  score: {
                    score: 0,
                  },
                  seed: {
                    displayName: "A1",
                    rank: 1,
                    sourceGame: getSourceGame(renderMatches, sources[0]),
                    sourcePool: {},
                  },
                },
                visitor: {
                  team: {
                    name: `Winner of ${sources[1]}`,
                  },
                  score: {
                    score: 0,
                  },
                  seed: {
                    displayName: "A1",
                    rank: 1,
                    sourceGame: getSourceGame(renderMatches, sources[1]),
                    sourcePool: {},
                  },
                },
              },
              eventType: "Game",
            });
          });
    }
    return renderMatches;
  };

  const generateLoserBrackets = (brackets) => {
    let renderMatches = [];
    let lBracket = brackets.lBracket;
    const maxRounds = lBracket.sort((a, b) => {
      return a.round - b.round;
    })[lBracket.length - 1].round;
    for (let i = 0; i < maxRounds; i++) {
      let roundMatches = getBracketRounds(lBracket, "round", i + 1);
      i == 0
        ? roundMatches.forEach((match) => {
            let sources = getSources(match);
            renderMatches.push({
              id: match.id,
              name: `Match ${match.id}`,
              scheduled: Number(new Date()),
              sides: {
                home: {
                  team: {
                    name: `Loser of ${sources[0]}`,
                  },
                  score: {
                    score: 0,
                  },
                  seed: {
                    displayName: "A1",
                    rank: 1,
                    sourceGame: null,
                    sourcePool: {},
                  },
                },
                visitor: {
                  team: {
                    name: `Loser of ${sources[1]}`,
                  },
                  score: {
                    score: 0,
                  },
                  seed: {
                    displayName: "A1",
                    rank: 1,
                    sourceGame: null,
                    sourcePool: {},
                  },
                },
              },
            });
          })
        : roundMatches.forEach((match) => {
            let sources = getSources(match);

            match.source.loserSources.length == 0
              ? renderMatches.push({
                  id: match.id,
                  name: `Match ${match.id}`,
                  scheduled: Number(new Date()),
                  sides: {
                    home: {
                      team: {
                        name: `Winner of ${sources[0]}`,
                      },
                      score: {
                        score: 0,
                      },
                      seed: {
                        displayName: "A1",
                        rank: 1,
                        sourceGame: getSourceGame(renderMatches, sources[0]),
                        sourcePool: {},
                      },
                    },
                    visitor: {
                      team: {
                        name: `Winner of ${sources[1]}`,
                      },
                      score: {
                        score: 0,
                      },
                      seed: {
                        displayName: "A1",
                        rank: 1,
                        sourceGame: getSourceGame(renderMatches, sources[1]),
                        sourcePool: {},
                      },
                    },
                  },
                })
              : renderMatches.push({
                  id: match.id,
                  name: `Match ${match.id}`,
                  scheduled: Number(new Date()),
                  sides: {
                    home: {
                      team: {
                        id: match.id,
                        name: `Loser of ${sources[0]}`,
                      },
                      score: {
                        score: 0,
                      },
                      seed: {
                        displayName: "A1",
                        rank: 1,
                        sourceGame: null,
                        sourcePool: {},
                      },
                    },
                    visitor: {
                      team: {
                        name: `Winner of ${sources[1]}`,
                      },
                      score: {
                        score: 0,
                      },
                      seed: {
                        displayName: "A1",
                        rank: 1,
                        sourceGame: getSourceGame(renderMatches, sources[1]),
                        sourcePool: {},
                      },
                    },
                  },
                });
          });
    }
    return renderMatches;
  };

  const brackets = bracketGenerator(32);
  // console.log(generateMatches(16));
  const winnerBrackets = generateWinnerBrackets(brackets, players);
  const loserBrackets = generateLoserBrackets(brackets);

  let upperBracket = {};
  winnerBrackets.forEach((game) => {
    upperBracket[game.id] = {};
    upperBracket[game.id] = game;
  });
  console.log(generateRounds(32));
  console.log(generateMatches(32));
  // console.log(upperBracket);

  const App = () => (
    <div className="brackets">
      <div
        style={{
          overflow: "scroll",
          padding: "100px",
        }}
      >
        <Bracket game={winnerBrackets[winnerBrackets.length - 1]} />
        <Bracket game={loserBrackets[loserBrackets.length - 1]} />
      </div>
    </div>
  );

  // winnerBrackets.forEach((game) => {
  //   games.push([
  //     <>
  //       <Bracket game={game} />
  //       {/* <BracketGame game={bracketMatches[game]} /> */}
  //       <BracketGenerator game={game} />
  //     </>,
  //   ]);
  // });

  return App();
};
export default Brackets;

//   for (let i = 0; i < matches.length; i++) {
//     const match = matches[i];
//     games.push({
//       id: match.id,
//       name: match.name,
//       scheduled: Number(new Date()),
//       sides: {
//         home: {
//           team: players[2 * i],
//           score: {
//             score: 0,
//           },
//         },
//         visitor: {
//           team: players[2 * i + 1],
//           score: {
//             score: 0,
//           },
//         },
//       },
//     });
//   }
//   return games;
// }
