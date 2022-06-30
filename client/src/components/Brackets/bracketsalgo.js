const eventId = query.params.eventid;

const bracketSize = "bracket limit"; //bracket limit

const sortScores = (QualifyingScores) => {
  return QualifyingScores.sort((a, b) => {
    const aScore = a.QualifyingScore;
    const bScore = b.QualifyingScore;

    return bScore - aScore;
  });
};

const getPlayersQualScores = (QualifyingScores, eventId) => {
  const qualScores = sortScores(
    QualifyingScores.filter((qualifyingScore) => {
      return qualifyingScore.EventId == eventId;
    }),
  );
  playerScore = {};
  qualScores.forEach((score) => {
    if (playerScore[`${score.PlayerId}`] == undefined) {
      playerScore[`${score.PlayerId}`] = [];
    }
    playerScore[`${score.PlayerId}`].push(score.QualifyingScore);
  });
  return playerScore;
};

const returnLastPlacePlayers = (
  playerScores,
  playerKeys,
  bracketSize,
  lastPlaceScore,
) => {
  const players = Object.keys(playerScores);
  const lastPlacePlayers = [
    {
      id: players[bracketSize - 1],
      scores: playerScores[players[bracketSize - 1]],
    },
  ];
  for (let i = bracketSize; i < players.length; i++) {
    const playerid = playerKeys[position];
    const playerQualScore = playerScores[playerid];
    if (playerQualScore[0] == lastPlaceScore) {
      lastPlacePlayers.push({
        id: playerid,
        scores: playerScores[String(playerid)],
      });
    } else {
      break;
    }
  }
  return lastPlacePlayers;
};

const playersQualScores = getPlayersQualScores(Info.QualifyingScores, eventId);
// const checkMultipleLastPlaceScore = (qualScores, lastPlaceScore) => {
//   numberOfLastPlaceScores = qualScores.filter((score) => {
//     return score.QualifyingScore == lastPlaceScore;
//   }).length;
//   return numberOfLastPlaceScores > 1;
// };

const naiveQualifier = (playerScores, bracketSize) => {
  const playerKeys = Object.keys(playerScores);
  const lastPlaceScore = playerScores[playerKeys[bracketSize - 1]][0];

  const lastPlacePlayers = returnLastPlacePlayers(
    playerScores,
    playerKeys,
    bracketSize,
    lastPlaceScore,
  );
    if (lastPlacePlayers.length > 1) {
      
  }
};
