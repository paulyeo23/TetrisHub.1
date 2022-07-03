import { Info } from "../service/info.mjs";

export default function initMatchPageController(db) {
  const startGame = async (request, response) => {
    const params = request.params;
    const matchId = params.matchId;
    db.Matches.update({
      live: true,
      where: {
        matchId: matchId,
      },
    });
  };

  const updateScore = async (request, response) => {
    const params = request.params;

    db.Matches.update({
      live: true,
      where: {
        matchId: matchId,
      },
    });
  };

  const index = async (request, response) => {
    try {
      Info(db).then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    startGame,
  };
}
