Date.prototype.AddDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const minimumImportance = 8;

export const addDays = (date, days) => {
  return date.AddDays(days);
};

export const filterWithinPeriod = (
  Info,
  datefield,
  lowerBoundDate,
  upperBoundDate,
) => {
  return Info.filter((info) => {
    const infoDate = new Date(info[`${datefield}`]);
    return (
      infoDate <= new Date(upperBoundDate) &&
      infoDate >= new Date(lowerBoundDate)
    );
  });
};

export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

//sort soonest to latest
export const sortTimings = (info, key) => {
  return info.sort((a, b) => {
    const aDate = new Date(a[`${key}`]);
    const bDate = new Date(b[`${key}`]);

    return aDate.getTime() - bDate.getTime();
  });
};

export const sortImportance = (info, field) => {
  return info.sort(function (a, b) {
    return b[`${field}`] - a[`${field}`];
  });
};

export const filterImportance = (info, field) => {
  return info.filter((info) => {
    return info[field] > minimumImportance;
  });
};

export const getAllMatchesFromEvent = (matches, events, eventId) => {
  return events.filter((event) => {
    return matches.eventId == eventId;
  });
};

export const getTimeObj = (date) => {
  const minutes = (function () {
    if (date.getMinutes() == 0) {
      return "00";
    } else {
      return date.getMinutes();
    }
  })();

  const Ordinal = (day) => {
    let ordinal = "";
    if (day > 3) {
      ordinal = "th";
    }
    if (day === 3) {
      ordinal = "rd";
    }
    if (day === 2) {
      ordinal = "nd";
    }
    if (day === 1) {
      ordinal = "st";
    }
    return ordinal;
  };
  const day = date.getDate();
  const ordinal = Ordinal(day);
  const month = date.toLocaleString("default", { month: "long" });
  const dayName = date.toLocaleString("default", { weekday: "long" });
  const year = date.getFullYear();
  return {
    date: date,
    hour: date.getHours(),
    ordinal: ordinal,
    minutes: minutes,
    day: day,
    month: month,
    year: year,
    dayName: dayName,
  };
};

export const createWeekObj = () => {
  const daysOfTheWeek = {
    day0: "Monday",
    day1: "Tuesday",
    day2: "Wednesday",
    day3: "Thursday",
    day4: "Friday",
    day5: "Saturday",
    day6: "Sunday",
  };
  let days = {};
  const firstDayNumber = new Date().getDay();

  for (let i = 0; i < 7; i++) {
    days[`day${i}`] = daysOfTheWeek[`day${(firstDayNumber + i - 1) % 7}`];
  }
  return days;
};

export const createWeek = () => {
  const daysOfTheWeek = {
    day0: [],
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
  };
  return daysOfTheWeek;
};

export const getEventName = (Events, eventId) => {
  // console.log("AllEvents", AllEvents);
  //console.log(eventID);
  return Events.filter((info) => {
    return info.id == eventId;
  })[0].name;
};

export const getEvent = (Events, eventId) => {
  return Events.filter((info) => {
    return info.id == eventId;
  })[0];
};

export const getPlayerFlag = (player) => {
  // console.log(playerObj.Country);
  if (player.country == "US" && player.state != null) {
    return `flags/usflags/${player.State}.png`;
  } else {
    return `flags/WorldFlag/4x3/${player.Country}.svg`;
  }
};

export const getPlayer = (PlayerDetails, playerId) => {
  const player = PlayerDetails.filter((Player) => {
    return Player.id == playerId;
  })[0];

  return player;
};

export const calculateTimeLeft = (date) => {
  if (date > new Date()) {
    function checkLessThan10(num) {
      if (num < 10) {
        return `0${num}`;
      } else return num;
    }

    let difference = +new Date(date) - +new Date();

    let timeLeft;

    if (difference > 0) {
      timeLeft = {
        d: checkLessThan10(Math.floor(difference / (1000 * 60 * 60 * 24))),
        h: checkLessThan10(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        m: checkLessThan10(Math.floor((difference / 1000 / 60) % 60)),
        s: checkLessThan10(Math.floor((difference / 1000) % 60)),
      };
    }

    if (timeLeft.d > 0) {
      return `${timeLeft.d}d : ${timeLeft.h}h : ${timeLeft.m}m : ${timeLeft.s}s`;
    } else if (timeLeft.h > 0) {
      return `${timeLeft.h}h : ${timeLeft.m}m : ${timeLeft.s}s`;
    } else if (timeLeft.m > 0) {
      return `${timeLeft.m}m : ${timeLeft.s}s`;
    } else if (timeLeft.s > 0) {
      return `${timeLeft.s}s`;
    }
  }
};

export const getPlayerPhoto = (PlayerDetails, playerId) => {
  const player = PlayerDetails.filter((Players) => {
    return Players.id === playerId;
  })[0];
  console.log(player);
  if (player.Photo == true) {
    return `http://localhost:3001/profile/${player.Alias}.png`;
  } else {
    return `http://localhost:3001/profile/placeholder.svg`;
  }
};

export const getPlayerMatchHistory = (Matches, playerId) => {
  return Matches.filter((match) => {
    return match.player1Id == playerId || match.player2Id == playerId;
  });
};

export const getMatchResults = (GameResults, matchId) => {
  GameResults.filter((result) => {
    return result.matchId == matchId;
  });
};

export const getPlayerScore = (info, playerId) => {
  if (info.player1Id == playerId) {
    return info.player1Score;
  } else if (info.player2Id == playerId) {
    return info.player2Score;
  }
};

export const getOpponentScore = (info, playerId) => {
  if (info.player1Id != playerId) {
    return info.player1Score;
  } else if (info.player2Id != playerId) {
    return info.player2Score;
  }
};

export const playerStatistics = (
  Info,
  playerId,
  lowerBoundDate,
  UpperBoundDate,
) => {
  const matchPeriod = filterWithinPeriod(
    Info.Matches,
    "DateTime",
    lowerBoundDate,
    UpperBoundDate,
  );
  const playerHistory = getPlayerMatchHistory(matchPeriod, playerId);
  const matchesWon = playerHistory.filter((match) => {
    return match.winnerId == playerId;
  });
  const matchesLost = playerHistory.filter((match) => {
    return match.winnerId != playerId;
  });

  const gamesWon = () => {
    let score = 0;
    playerHistory.forEach((match) => {
      score += getPlayerScore(match, playerId);
    });
    return score;
  };

  const gamesLost = () => {
    let score = 0;
    playerHistory.forEach((match) => {
      score += getOpponentScore(match, playerId);
    });
    return score;
  };

  const averageLosingScore = () => {
    let totalScore = 0;
    let totalGamesLost = 0;
    playerHistory.forEach((match) => {
      let matchResults = getMatchResults(Info.GameResults);
      matchResults.forEach((result) => {
        if (result.winnerId != playerId) {
          totalScore += getPlayerScore(result, playerId);
          totalGamesLost += 1;
        }
      });
    });
    return totalScore / totalGamesLost;
  };

  const playerStats = {
    elo: 0,
    totalMatches: playerHistory.length,
    matchesWon: matchesWon.length,
    matchesLost: matchesLost.length,
    gamesWon: gamesWon(),
    gamesLost: gamesLost(),
    averageLosingScore: averageLosingScore(),
    notableWinsOver: 0,
  };
  return playerStats;
};
