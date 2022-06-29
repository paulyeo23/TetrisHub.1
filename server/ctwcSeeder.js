const maxout = 999999;

function sortScores(scores) {
  let players = {};
  scores.sort((a, b) => {
    return b.qualifyingScore - a.qualifyingScore;
  });

  scores.forEach((score) => {
    if (players[`${score.playerId}`] == undefined) {
      players[`${score.playerId}`] = [];
    }
    players[`${score.playerId}`].push(score.qualifyingScore);
  });
  return players;

  //players = {1: [100,99,98]}
}
function ctwcQualifier(scores) {
  //   let seed = {};
  let playerScoreProfile = [{ id: 0, maxouts: 0, nonMaxout: 0 }];
  const qualAttempts = sortScores(scores);
  const players = Object.keys(qualAttempts);

  players.forEach((currentplayer) => {
    let scoreProfile = { id: currentplayer, maxouts: 0, nonMaxout: 0 };

    qualAttempts[currentplayer].forEach((attempt) => {
      attempt.qualifyingScore >= maxout
        ? (scoreProfile.maxouts += 1)
        : attempt.qualifyingScore > scoreProfile.nonMaxout
        ? (scoreProfile.nonMaxout = attempt.qualifyingScore)
        : false;
    });
    playerScoreProfile.push(scoreProfile);
  });

  playerScoreProfile.sort((a, b) => {
    return b.maxouts - a.maxouts || b.nonMaxout - a.nonMaxout;
  });

  //   for (let i = 0; i < playerScoreProfile.length; i++) {
  //     seed[`seed ${i + 1}`] = {};
  //     seed[`seed ${i}`] = playerScoreProfile[i];
  //   }

  return playerScoreProfile;
}

function simpleScoreQualifier(scores, averageOf = 1) {
  const qualAttempts = sortScores(scores);
  const players = Object.keys(qualAttempts);
  let playerScoreProfile = [
    {
      id: 0,
      totalScore: 0,
      averageScore: 0,
    },
  ];
  players.forEach((playerid) => {
    let playerScore = qualAttempts[String(playerid)];
    let totalScore = 0;
    for (let i = 0; i < averageOf; i++) {
      totalScore += playerScore[i];
    }
    playerScoreProfile = {
      id: playerid,
      totalScore: totalScore,
      averageScore: totalScore / averageOf,
    };
    playerScoreProfile.push(playerScoreProfile);
  });

  playerScoreProfile.sort((a, b) => {
    return b.averageScore - a.averageScore;
  });

  return playerScoreProfile;
}

function seedPlayers(scores) {
  let seed = [];
  for (let i = 0; i < scores.length; i++) {
    seed.push({ rank: i + 1, scoreProfile: scores[i] });
  }
  return seed;
}

function firstRoundSeed(seedlist) {
  let finallist = [];
  let toplist = [];
  let bottomlist = [];
  if (seedlist.length == 2) {
    return [{ player1Seed: seedlist[0], player2Seed: seedlist[1] }];
  }
  for (let i = 0; i < seedlist.length; i++) {
    Math.ceil(i / 2) % 2 == 0
      ? toplist.push(seedlist[i])
      : bottomlist.push(seedlist[i]);
  }
  finallist = finallist.concat(firstRoundSeed(toplist));
  finallist = finallist.concat(firstRoundSeed(bottomlist));

  return finallist;
}

let numlist = [];
for (let i = 0; i < 512; i++) {
  numlist.push(i + 1);
}
console.log(firstRoundSeed(numlist));
