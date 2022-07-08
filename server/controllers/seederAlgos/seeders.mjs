<<<<<<< HEAD
import { generateMatches } from "./doubleElimination.mjs";
import { testqual } from "./testqual.mjs";

const maxout = 999999;

export const seedingMethod = [
  { type: ctwcQualifier, id: 1 },
  {
    type: simpleScoreQualifier,
    id: 2,
  },
];

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

/**
 * @name seedPlayers
 * @description Adds seed to score profiles provided by qualifiers or from manual input
 * @param {scores} array  Score profiles sorted
 * @returns {seed} array containing playerid and score profile sorted
 */

function seedPlayers(playerScoreProfiles) {
  let tempPlayerScoreProfiles = playerScoreProfiles;
  let seed = 1;
  tempPlayerScoreProfiles.forEach((scoreProfile) => {
    scoreProfile.seed = seed;
    seed += 1;
  });
  return tempPlayerScoreProfiles;
}

/**
 * @name sortScores
 * @param {scores} array raw qualifier scores
 * @returns object with array of scores associated with player
 */
function sortScores(scores) {
  let players = {};
  scores.sort((a, b) => {
    return b.score - a.score;
  });

  scores.forEach((score) => {
    if (players[`${score.playerId}`] == undefined) {
      players[`${score.playerId}`] = [];
    }
    players[`${score.playerId}`].push(score.score);
  });
  return players;

  //players = {1: [100,99,98]}
}

/**
 * @name ctwcQualifier
 * @description Creates array of players and their associated scores
 * standard CTWC priority :
 * 1.Maxouts
 * 2.Non-maxouts
 * 3. Where both are equal - Randomly assign
 * @param {scores} array Unfiltered qualifier scores from database
 *
 * @returns {playerScoreProfile} array containing playerid and score profile sorted according to priority
 */

export function ctwcQualifier(scores) {
  let playerScoreProfile = [{ seed: 0, id: 0, maxouts: 0, nonMaxout: 0 }];
  const qualAttempts = sortScores(scores);
  const players = Object.keys(qualAttempts);

  players.forEach((currentplayer) => {
    let scoreProfile = { id: currentplayer, maxouts: 0, nonMaxout: 0 };
    qualAttempts[currentplayer].forEach((attempt) => {
      attempt >= maxout
        ? (scoreProfile.maxouts += 1)
        : attempt > scoreProfile.nonMaxout
        ? (scoreProfile.nonMaxout = attempt)
        : false;
    });
    playerScoreProfile.push(scoreProfile);
  });

  playerScoreProfile.sort((a, b) => {
    return b.maxouts - a.maxouts || b.nonMaxout - a.nonMaxout;
  });
  playerScoreProfile = seedPlayers(playerScoreProfile);

  return playerScoreProfile;
}

/**
 * @name simpleScoreQualifier
 * @description Creates array of players and their associated scores
 * Score attack priority :
 * 1. Average of
 * 2. Where both are equal - Randomly assign
 * @param {scores} array  Unfiltered qualifier scores from database
 * @param {averageOf} int Number of averages, default = 1
 * @returns {playerScoreProfile} array containing playerid and score profile sorted according to priority
 */

export function simpleScoreQualifier(scores, averageOf = 1) {
  const qualAttempts = sortScores(scores);
  const players = Object.keys(qualAttempts);
  let playerScoreProfile = [
    {
      seed: 0,
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
      seed: 0,
      id: playerid,
      totalScore: totalScore,
      averageScore: totalScore / averageOf,
    };
    playerScoreProfile.push(playerScoreProfile);
  });

  playerScoreProfile.sort((a, b) => {
    return b.averageScore - a.averageScore;
  });

  playerScoreProfile = seedPlayers(playerScoreProfile);

  return playerScoreProfile;
}

export function finaliseList(playerScoreProfiles, bracketSize) {
  const trueBracketSize = 2 ** Math.ceil(getBaseLog(2, bracketSize));
  let tempPlayerScoreProfiles = playerScoreProfiles;
  const keys = Object.keys(tempPlayerScoreProfiles[0]);
  tempPlayerScoreProfiles = tempPlayerScoreProfiles.slice(0, bracketSize);
  tempPlayerScoreProfiles.filter((scoreProfile) => {
    return scoreProfile.seed <= bracketSize && scoreProfile.seed > 0;
  });
  for (let i = 0; i < trueBracketSize - bracketSize; i++) {
    let bye = { seed: bracketSize + i + 1 };
    keys.forEach((key) => {
      bye[key] = 0;
    });
    tempPlayerScoreProfiles.push(bye);
  }

  tempPlayerScoreProfiles = tempPlayerScoreProfiles.slice(0, trueBracketSize);
  const firstRoundMatches = firstRoundMatchups(tempPlayerScoreProfiles);

  return {
    scoreProfiles: tempPlayerScoreProfiles,
    matchUps: firstRoundMatches,
    bracketMatches: generateMatches(trueBracketSize),
  };
}

/**
 * @name firstRoundMatchups
 * @description Adds seed to score profiles provided by qualifiers or from manual input
 * @param {scores} array  Score profiles sorted
 * @returns {seed} array containing playerid and score profile sorted
 */

export function firstRoundMatchups(seedlist) {
  let finallist = [];
  let toplist = [];
  let bottomlist = [];
  if (seedlist.length == 2) {
    return [
      {
        bracketMatchId: 0,
        player1: seedlist[0].id,
        player2: seedlist[1].id,
      },
    ];
  }
  for (let i = 0; i < seedlist.length; i++) {
    Math.ceil(i / 2) % 2 == 0
      ? toplist.push(seedlist[i])
      : bottomlist.push(seedlist[i]);
  }
  finallist = finallist.concat(firstRoundMatchups(toplist));
  finallist = finallist.concat(firstRoundMatchups(bottomlist));

  let bracketMatchId = 1;
  finallist.forEach((match) => {
    match.bracketMatchId = bracketMatchId;
    bracketMatchId += 1;
  });

  return finallist;
}

/**
 * @name numberOfByes
 * @description Adds byes if bracketSize is not in powers of 2
 * Ex. current bracketsize = 48,
 * True bracketsize = 64 with 16 byes
 * @param {bracketSize} Int  Bracketsize of current tourney
 * @returns {numberOfByes} int Additional byes needed
 */

function numberOfByes(bracketSize, trueBracketSize) {
  const numberOfByes = bracketSize - trueBracketSize;
  return numberOfByes;
}

let numlist = [];
for (let i = 0; i < 512; i++) {
  numlist.push(i + 1);
}

// const ctwc = seedingMethod[0].type(testqual);
// console.log(finaliseList(ctwc, 40));
=======
import { generateMatches } from "./doubleElimination.mjs";
import { testqual } from "./testqual.mjs";

const maxout = 999999;

export const seedingMethod = [
  { type: ctwcQualifier, id: 1 },
  {
    type: simpleScoreQualifier,
    id: 2,
  },
];

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

/**
 * @name seedPlayers
 * @description Adds seed to score profiles provided by qualifiers or from manual input
 * @param {scores} array  Score profiles sorted
 * @returns {seed} array containing playerid and score profile sorted
 */

function seedPlayers(playerScoreProfiles) {
  let tempPlayerScoreProfiles = playerScoreProfiles;
  let seed = 1;
  tempPlayerScoreProfiles.forEach((scoreProfile) => {
    scoreProfile.seed = seed;
    seed += 1;
  });
  return tempPlayerScoreProfiles;
}

/**
 * @name sortScores
 * @param {scores} array raw qualifier scores
 * @returns object with array of scores associated with player
 */
function sortScores(scores) {
  let players = {};
  scores.sort((a, b) => {
    return b.score - a.score;
  });

  scores.forEach((score) => {
    if (players[`${score.playerId}`] == undefined) {
      players[`${score.playerId}`] = [];
    }
    players[`${score.playerId}`].push(score.score);
  });
  return players;

  //players = {1: [100,99,98]}
}

/**
 * @name ctwcQualifier
 * @description Creates array of players and their associated scores
 * standard CTWC priority :
 * 1.Maxouts
 * 2.Non-maxouts
 * 3. Where both are equal - Randomly assign
 * @param {scores} array Unfiltered qualifier scores from database
 *
 * @returns {playerScoreProfile} array containing playerid and score profile sorted according to priority
 */

export function ctwcQualifier(scores) {
  let playerScoreProfile = [{ seed: 0, id: 0, maxouts: 0, nonMaxout: 0 }];
  const qualAttempts = sortScores(scores);
  const players = Object.keys(qualAttempts);

  players.forEach((currentplayer) => {
    let scoreProfile = { id: currentplayer, maxouts: 0, nonMaxout: 0 };
    qualAttempts[currentplayer].forEach((attempt) => {
      attempt >= maxout
        ? (scoreProfile.maxouts += 1)
        : attempt > scoreProfile.nonMaxout
        ? (scoreProfile.nonMaxout = attempt)
        : false;
    });
    playerScoreProfile.push(scoreProfile);
  });

  playerScoreProfile.sort((a, b) => {
    return b.maxouts - a.maxouts || b.nonMaxout - a.nonMaxout;
  });
  playerScoreProfile = seedPlayers(playerScoreProfile);

  return playerScoreProfile;
}

/**
 * @name simpleScoreQualifier
 * @description Creates array of players and their associated scores
 * Score attack priority :
 * 1. Average of
 * 2. Where both are equal - Randomly assign
 * @param {scores} array  Unfiltered qualifier scores from database
 * @param {averageOf} int Number of averages, default = 1
 * @returns {playerScoreProfile} array containing playerid and score profile sorted according to priority
 */

export function simpleScoreQualifier(scores, averageOf = 1) {
  const qualAttempts = sortScores(scores);
  const players = Object.keys(qualAttempts);
  let playerScoreProfile = [
    {
      seed: 0,
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
      seed: 0,
      id: playerid,
      totalScore: totalScore,
      averageScore: totalScore / averageOf,
    };
    playerScoreProfile.push(playerScoreProfile);
  });

  playerScoreProfile.sort((a, b) => {
    return b.averageScore - a.averageScore;
  });

  playerScoreProfile = seedPlayers(playerScoreProfile);

  return playerScoreProfile;
}

export function finaliseList(playerScoreProfiles, bracketSize) {
  const trueBracketSize = 2 ** Math.ceil(getBaseLog(2, bracketSize));
  let tempPlayerScoreProfiles = playerScoreProfiles;
  const keys = Object.keys(tempPlayerScoreProfiles[0]);
  tempPlayerScoreProfiles = tempPlayerScoreProfiles.slice(0, bracketSize);
  tempPlayerScoreProfiles.filter((scoreProfile) => {
    return scoreProfile.seed <= bracketSize && scoreProfile.seed > 0;
  });
  for (let i = 0; i < trueBracketSize - bracketSize; i++) {
    let bye = { seed: bracketSize + i + 1 };
    keys.forEach((key) => {
      bye[key] = 0;
    });
    tempPlayerScoreProfiles.push(bye);
  }

  tempPlayerScoreProfiles = tempPlayerScoreProfiles.slice(0, trueBracketSize);
  const firstRoundMatches = firstRoundMatchups(tempPlayerScoreProfiles);

  return {
    scoreProfiles: tempPlayerScoreProfiles,
    matchUps: firstRoundMatches,
    bracketMatches: generateMatches(trueBracketSize),
  };
}

/**
 * @name firstRoundMatchups
 * @description Adds seed to score profiles provided by qualifiers or from manual input
 * @param {scores} array  Score profiles sorted
 * @returns {seed} array containing playerid and score profile sorted
 */

export function firstRoundMatchups(seedlist) {
  let finallist = [];
  let toplist = [];
  let bottomlist = [];
  if (seedlist.length == 2) {
    return [
      {
        bracketMatchId: 0,
        player1: seedlist[0].id,
        player2: seedlist[1].id,
      },
    ];
  }
  for (let i = 0; i < seedlist.length; i++) {
    Math.ceil(i / 2) % 2 == 0
      ? toplist.push(seedlist[i])
      : bottomlist.push(seedlist[i]);
  }
  finallist = finallist.concat(firstRoundMatchups(toplist));
  finallist = finallist.concat(firstRoundMatchups(bottomlist));

  let bracketMatchId = 1;
  finallist.forEach((match) => {
    match.bracketMatchId = bracketMatchId;
    bracketMatchId += 1;
  });

  return finallist;
}

/**
 * @name numberOfByes
 * @description Adds byes if bracketSize is not in powers of 2
 * Ex. current bracketsize = 48,
 * True bracketsize = 64 with 16 byes
 * @param {bracketSize} Int  Bracketsize of current tourney
 * @returns {numberOfByes} int Additional byes needed
 */

function numberOfByes(bracketSize, trueBracketSize) {
  const numberOfByes = bracketSize - trueBracketSize;
  return numberOfByes;
}

let numlist = [];
for (let i = 0; i < 512; i++) {
  numlist.push(i + 1);
}

// const ctwc = seedingMethod[0].type(testqual);
// console.log(finaliseList(ctwc, 40));
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
