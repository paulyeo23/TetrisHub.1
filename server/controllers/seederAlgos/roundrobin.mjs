import db from "../models/index.mjs";


export const roundRobin = (playerlist, repeats, bracketId) => {
  let templist = playerlist;
  let bracketMatchId = 1;
  playerlist.forEach((Player) => {
    let index = playerlist.indexOf(Player);
    templist = templist.splice(index, 1);
    templist.forEach((player) => {
      db.BracketMatches.create({
        bracketId: bracketId,
        bracketMatchId: bracketMatchId,
      }).then((result) => {
        db.Matches.create({
          dateTime: null,
          player1Id: Player.id,
          player2Id: player.id,
          bracketMatchId: result.id,
        });
      });
      db.BracketMatches.create({
        bracketId: bracketId,
        bracketMatchId: bracketMatchId + 1,
      }).then((result) => {
        db.Matches.create({
          dateTime: null,
          player1Id: Player.id,
          player2Id: player.id,
          bracketMatchId: result.id,
        });
      });
      bracketMatchId += 2;
    });
  });
};
