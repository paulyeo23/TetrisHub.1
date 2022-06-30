import "./styles.css";
import React from "react";
import { players } from "./players";
import { generateMatches } from "./doubleElimAlgo";
import { generateRounds } from "./doubleElimAlgo";

import { Bracket } from "./react-tournament-bracket/lib/components/Bracket";

import { BracketMatches } from "./bracketMatches.mjs";

import { info } from "./info.mjs";

const Brackets = () => {
  const getMatch = (bracketMatchId, info) => {
    return info.Matches.filter((match) => {
      return match.bracketMatchId == bracketMatchId;
    })[0];
  };

  const getWinnerSourcegame = (winnerSource, renderMatches) => {
    return renderMatches.filter((match) => {
      return match.id == winnerSource.bracketMatchId;
    })[0];
  };

  const getPlayerAlias = (info, playerid) => {
    return info.PlayerDetails.filter((player) => {
      return player.id == playerid;
    })[0].alias;
  };

  const bracketMatches = BracketMatches;

  const Info = info;

  const upperBracketMatches = bracketMatches
    .filter((match) => {
      return match.loserTo != undefined && match.winnerTo != undefined;
    })
    .sort((a, b) => {
      return a.bracketMatchId - b.bracketMatchId;
    });

  const lowerBracketMatches = bracketMatches.filter((match) => {
    return match.loserTo == undefined;
  });

  const generateUpperBrackets = (info, upperBrackets) => {
    let renderMatches = [];
    upperBrackets.forEach((bracketMatch) => {
      let winnerSources = info.BracketMatches.filter((BracketMatch) => {
        return (
          BracketMatch.winnerTo == bracketMatch.bracketMatchId &&
          bracketMatch.bracketId == BracketMatch.bracketId
        );
      });

      let match = info.Matches.filter((match) => {
        return match.bracketMatchId == bracketMatch.id;
      })[0];

      renderMatches.push({
        id: bracketMatch.bracketMatchId,
        name: `Match ${bracketMatch.bracketMatchId}`,
        scheduled: Number(new Date()),
        sides: {
          home: {
            team: {
              id: match.player1Id,
              name:
                match.player1Id != null
                  ? getPlayerAlias(info, match.player1Id)
                  : `Winner of ${winnerSources[0].id}`,
            },
            score: {
              score: match.player1Score,
            },
            seed: {
              displayName: "A1",
              rank: 1,
              sourceGame:
                winnerSources.length > 0 && match.player1Id != 0
                  ? getWinnerSourcegame(winnerSources[0], renderMatches)
                  : null,
              sourcePool: {},
            },
          },
          visitor: {
            team: {
              id: match.player2Id,
              name:
                match.player2Id != null
                  ? getPlayerAlias(info, match.player2Id)
                  : `Winner of ${winnerSources[1].id}`,
            },
            score: {
              score: match.player2Score,
            },
            seed: {
              displayName: "A1",
              rank: 1,
              sourceGame:
                winnerSources.length > 0 && match.player2Id != 0
                  ? getWinnerSourcegame(winnerSources[1], renderMatches)
                  : null,
              sourcePool: {},
            },
          },
        },
      });
    });
    return renderMatches;
  };

  const generateLowerBrackets = (info, upperBrackets) => {};

  const upperBracket = generateUpperBrackets(Info, upperBracketMatches);

  console.log(upperBracket);
  const App = () => (
    <div className="brackets">
      <div
        style={{
          overflow: "scroll",
          padding: "100px",
          height: "800px",
        }}
      >
        <Bracket game={upperBracket[upperBracket.length - 1]} />
      </div>
    </div>
  );

  return App();
};
export default Brackets;
