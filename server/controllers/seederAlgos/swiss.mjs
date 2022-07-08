<<<<<<< HEAD
import options from "swiss-pairing";

var twoPerRound = options({
  maxPerRound: 1,
});

var odd = {
  participants: [
    { id: 1, seed: 1000 },
    { id: 2, seed: 1050 },
    { id: 3, seed: 950 },
  ],
  matches: [
    {
      round: 1,
      home: { id: 1, points: 1 },
      away: { id: 3, points: 1 },
    },
    {
      round: 1,
      home: { id: 2, points: 0 },
      away: { id: null, points: 0 },
    },
  ],
};

var oddStandings = twoPerRound.getStandings(2, odd.participants, odd.matches);

console.log(oddStandings);
=======
import options from "swiss-pairing";

var twoPerRound = options({
  maxPerRound: 1,
});

var odd = {
  participants: [
    { id: 1, seed: 1000 },
    { id: 2, seed: 1050 },
    { id: 3, seed: 950 },
  ],
  matches: [
    {
      round: 1,
      home: { id: 1, points: 1 },
      away: { id: 3, points: 1 },
    },
    {
      round: 1,
      home: { id: 2, points: 0 },
      away: { id: null, points: 0 },
    },
  ],
};

var oddStandings = twoPerRound.getStandings(2, odd.participants, odd.matches);

console.log(oddStandings);
>>>>>>> d251a519147c0ccd9a5e691845043e3883ceda8b
