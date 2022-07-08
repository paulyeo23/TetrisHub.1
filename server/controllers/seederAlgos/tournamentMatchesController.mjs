<<<<<<< HEAD
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
  };
  return info;
};

const match = info.Matches.filter((match) => {
  return match.id == matchId;
})[0];

function moveWinner(currentMatch, nextMatch) {
  nextMatch.player1Id == null
    ? db.Matches.update({
        player1Id: currentMatch.winnerId,
        where: {
          id: nextMatch.id,
        },
      })
    : nextMatch.player2Id == null
    ? db.Matches.update({
        player2Id: currentMatch.winnerId,
        where: {
          id: nextMatch.id,
        },
      })
    : false;
}

function moveLoser(currentMatch, nextMatch) {
  nextMatch.player1Id == null
    ? db.Matches.update({
        player1Id: currentMatch.loserId,
        where: {
          id: nextMatch.id,
        },
      })
    : nextMatch.player2Id == null
    ? db.Matches.update({
        player2Id: currentMatch.loserId,
        where: {
          id: nextMatch.id,
        },
      })
    : false;
}

function getNextMatchesId(info, bracketMatch) {
  const winnerId = info.BracketMatches.filter((match) => {
    return (
      bracketMatch.winnerTo == match.bracketMatchId &&
      bracketMatch.bracketId == match.bracketId
    );
  })[0].id;
  const loserId = info.BracketMatches.filter((match) => {
    return (
      bracketMatch.loserTo == match.bracketMatchId &&
      bracketMatch.bracketId == match.bracketId
    );
  })[0].id;
  return { winnerId: winnerId, loserId: loserId };
}

function endSelectedGame(info, matchId) {
  const bracketMatch = info.BracketMatches.filter((bracketMatch) => {
    return bracketMatch.id == match.bracketMatchId;
  })[0];
  const nextMatchIds = getNextMatchesId(info, bracketMatch);
  const Matches = {
    currentMatch: info.Matches.filter((match) => {
      return match.id == matchId;
    })[0],
    winnerMatch: info.Matches.filter((match) => {
      return match.id == nextMatchIds.winnerId;
    })[0],
    loserMatch: info.Matches.filter((match) => {
      return match.id == nextMatchIds.loserId;
    })[0],
  };

  moveWinner(currentMatch);
}
=======
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
  };
  return info;
};

const match = info.Matches.filter((match) => {
  return match.id == matchId;
})[0];

function moveWinner(currentMatch, nextMatch) {
  nextMatch.player1Id == null
    ? db.Matches.update({
        player1Id: currentMatch.winnerId,
        where: {
          id: nextMatch.id,
        },
      })
    : nextMatch.player2Id == null
    ? db.Matches.update({
        player2Id: currentMatch.winnerId,
        where: {
          id: nextMatch.id,
        },
      })
    : false;
}

function moveLoser(currentMatch, nextMatch) {
  nextMatch.player1Id == null
    ? db.Matches.update({
        player1Id: currentMatch.loserId,
        where: {
          id: nextMatch.id,
        },
      })
    : nextMatch.player2Id == null
    ? db.Matches.update({
        player2Id: currentMatch.loserId,
        where: {
          id: nextMatch.id,
        },
      })
    : false;
}

function getNextMatchesId(info, bracketMatch) {
  const winnerId = info.BracketMatches.filter((match) => {
    return (
      bracketMatch.winnerTo == match.bracketMatchId &&
      bracketMatch.bracketId == match.bracketId
    );
  })[0].id;
  const loserId = info.BracketMatches.filter((match) => {
    return (
      bracketMatch.loserTo == match.bracketMatchId &&
      bracketMatch.bracketId == match.bracketId
    );
  })[0].id;
  return { winnerId: winnerId, loserId: loserId };
}

function endSelectedGame(info, matchId) {
  const bracketMatch = info.BracketMatches.filter((bracketMatch) => {
    return bracketMatch.id == match.bracketMatchId;
  })[0];
  const nextMatchIds = getNextMatchesId(info, bracketMatch);
  const Matches = {
    currentMatch: info.Matches.filter((match) => {
      return match.id == matchId;
    })[0],
    winnerMatch: info.Matches.filter((match) => {
      return match.id == nextMatchIds.winnerId;
    })[0],
    loserMatch: info.Matches.filter((match) => {
      return match.id == nextMatchIds.loserId;
    })[0],
  };

  moveWinner(currentMatch);
}
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
