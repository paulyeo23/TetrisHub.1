import "./styles.css";
import React from "react";
import { generateMatches } from "../bracketsDoubleElim";
import {
  Bracket,
  BracketGame,
  BracketGenerator,
} from "react-tournament-bracket";

const Brackets = () => {
  function bracketGenerator(bracketSize) {
    let players = [];
    for (let i = 0; i < bracketSize; i++) {
      players.push({ id: i, name: `seed ${i}` });
    }
    const matches = generateMatches(bracketSize);
    let games = [];
    for (let i = 0; i < matches; i++) {
      const match = matches[i];
      games.push({
        id: match.id,
        name: match.name,
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
      });
    }
    return games;
  }

  const bracketMatches = bracketGenerator(32);

  const games = [];

  Object.keys(bracketMatches).forEach((game) => {
    games.push([
      <>
        <Bracket game={bracketMatches[game]} />
        {/* <BracketGame game={bracketMatches[game]} /> */}
        <BracketGenerator game={bracketMatches[game]} />
      </>,
    ]);
  });

  return games;
};

export default Brackets;

// [
//   {
//     name: "Winners Round of 32",
//     id: 1,
//     winnerTo: 25,
//     loserTo: 17,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 2,
//     winnerTo: 25,
//     loserTo: 17,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 3,
//     winnerTo: 26,
//     loserTo: 18,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 4,
//     winnerTo: 26,
//     loserTo: 18,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 5,
//     winnerTo: 27,
//     loserTo: 19,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 6,
//     winnerTo: 27,
//     loserTo: 19,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 7,
//     winnerTo: 28,
//     loserTo: 20,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 8,
//     winnerTo: 28,
//     loserTo: 20,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 9,
//     winnerTo: 29,
//     loserTo: 21,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 10,
//     winnerTo: 29,
//     loserTo: 21,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 11,
//     winnerTo: 30,
//     loserTo: 22,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 12,
//     winnerTo: 30,
//     loserTo: 22,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 13,
//     winnerTo: 31,
//     loserTo: 23,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 14,
//     winnerTo: 31,
//     loserTo: 23,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 15,
//     winnerTo: 32,
//     loserTo: 24,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 32",
//     id: 16,
//     winnerTo: 32,
//     loserTo: 24,
//     source: {
//       winnerSources: [],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 17,
//     winnerTo: 33,
//     source: {
//       winnerSources: [],
//       loserSources: [1, 2],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 18,
//     winnerTo: 34,
//     source: {
//       winnerSources: [],
//       loserSources: [3, 4],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 19,
//     winnerTo: 35,
//     source: {
//       winnerSources: [],
//       loserSources: [5, 6],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 20,
//     winnerTo: 36,
//     source: {
//       winnerSources: [],
//       loserSources: [7, 8],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 21,
//     winnerTo: 37,
//     source: {
//       winnerSources: [],
//       loserSources: [9, 10],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 22,
//     winnerTo: 38,
//     source: {
//       winnerSources: [],
//       loserSources: [11, 12],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 23,
//     winnerTo: 39,
//     source: {
//       winnerSources: [],
//       loserSources: [13, 14],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 24,
//     winnerTo: 40,
//     source: {
//       winnerSources: [],
//       loserSources: [15, 16],
//     },
//   },
//   {
//     name: "Winners Round of 16",
//     id: 25,
//     winnerTo: 41,
//     loserTo: 40,
//     source: {
//       winnerSources: [1, 2],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 16",
//     id: 26,
//     winnerTo: 41,
//     loserTo: 39,
//     source: {
//       winnerSources: [3, 4],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 16",
//     id: 27,
//     winnerTo: 42,
//     loserTo: 38,
//     source: {
//       winnerSources: [5, 6],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 16",
//     id: 28,
//     winnerTo: 42,
//     loserTo: 37,
//     source: {
//       winnerSources: [7, 8],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 16",
//     id: 29,
//     winnerTo: 43,
//     loserTo: 36,
//     source: {
//       winnerSources: [9, 10],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 16",
//     id: 30,
//     winnerTo: 43,
//     loserTo: 35,
//     source: {
//       winnerSources: [11, 12],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 16",
//     id: 31,
//     winnerTo: 44,
//     loserTo: 34,
//     source: {
//       winnerSources: [13, 14],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Round of 16",
//     id: 32,
//     winnerTo: 44,
//     loserTo: 33,
//     source: {
//       winnerSources: [15, 16],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 33,
//     winnerTo: 45,
//     source: {
//       winnerSources: [17],
//       loserSources: [32],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 34,
//     winnerTo: 45,
//     source: {
//       winnerSources: [18],
//       loserSources: [31],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 35,
//     winnerTo: 46,
//     source: {
//       winnerSources: [19],
//       loserSources: [30],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 36,
//     winnerTo: 46,
//     source: {
//       winnerSources: [20],
//       loserSources: [29],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 37,
//     winnerTo: 47,
//     source: {
//       winnerSources: [21],
//       loserSources: [28],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 38,
//     winnerTo: 47,
//     source: {
//       winnerSources: [22],
//       loserSources: [27],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 39,
//     winnerTo: 48,
//     source: {
//       winnerSources: [23],
//       loserSources: [26],
//     },
//   },
//   {
//     name: "Losers Round of 16",
//     id: 40,
//     winnerTo: 48,
//     source: {
//       winnerSources: [24],
//       loserSources: [25],
//     },
//   },
//   {
//     name: "Winners Quarter-Finals",
//     id: 41,
//     winnerTo: 49,
//     loserTo: 52,
//     source: {
//       winnerSources: [25, 26],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Quarter-Finals",
//     id: 42,
//     winnerTo: 49,
//     loserTo: 51,
//     source: {
//       winnerSources: [27, 28],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Quarter-Finals",
//     id: 43,
//     winnerTo: 50,
//     loserTo: 54,
//     source: {
//       winnerSources: [29, 30],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Quarter-Finals",
//     id: 44,
//     winnerTo: 50,
//     loserTo: 53,
//     source: {
//       winnerSources: [31, 32],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Quarter-Finals",
//     id: 45,
//     winnerTo: 51,
//     source: {
//       winnerSources: [33, 34],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Quarter-Finals",
//     id: 46,
//     winnerTo: 52,
//     source: {
//       winnerSources: [35, 36],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Quarter-Finals",
//     id: 47,
//     winnerTo: 53,
//     source: {
//       winnerSources: [37, 38],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Quarter-Finals",
//     id: 48,
//     winnerTo: 54,
//     source: {
//       winnerSources: [39, 40],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Semi-Finals",
//     id: 49,
//     winnerTo: 55,
//     loserTo: 59,
//     source: {
//       winnerSources: [41, 42],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Winners Semi-Finals",
//     id: 50,
//     winnerTo: 55,
//     loserTo: 60,
//     source: {
//       winnerSources: [43, 44],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Quarter-Finals",
//     id: 51,
//     winnerTo: 56,
//     source: {
//       winnerSources: [45],
//       loserSources: [42],
//     },
//   },
//   {
//     name: "Losers Quarter-Finals",
//     id: 52,
//     winnerTo: 56,
//     source: {
//       winnerSources: [46],
//       loserSources: [41],
//     },
//   },
//   {
//     name: "Losers Quarter-Finals",
//     id: 53,
//     winnerTo: 57,
//     source: {
//       winnerSources: [47],
//       loserSources: [44],
//     },
//   },
//   {
//     name: "Losers Quarter-Finals",
//     id: 54,
//     winnerTo: 57,
//     source: {
//       winnerSources: [48],
//       loserSources: [43],
//     },
//   },
//   {
//     name: "winner finals",
//     id: 55,
//     winnerTo: 62,
//     loserTo: 61,
//     source: {
//       winnerSources: [49, 50],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Semi-Finals",
//     id: 56,
//     winnerTo: 58,
//     source: {
//       winnerSources: [51, 52],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Semi-Finals",
//     id: 57,
//     winnerTo: 59,
//     source: {
//       winnerSources: [53, 54],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Semi-Finals",
//     id: 58,
//     winnerTo: 60,
//     source: {
//       winnerSources: [56],
//       loserSources: [],
//     },
//   },
//   {
//     name: "Losers Semi-Finals",
//     id: 59,
//     winnerTo: 60,
//     source: {
//       winnerSources: [57],
//       loserSources: [49],
//     },
//   },
//   {
//     name: "Losers Finals",
//     id: 60,
//     winnerTo: 61,
//     source: {
//       winnerSources: [58, 59],
//       loserSources: [50],
//     },
//   },
//   {
//     name: "Losers Finals",
//     id: 61,
//     winnerTo: 62,
//     source: {
//       winnerSources: [60],
//       loserSources: [55],
//     },
//   },
//   {
//     name: "Grand Finals",
//     id: 62,
//   },
//   {
//     name: "Grand Finals",
//     id: 63,
//   },
// ];
