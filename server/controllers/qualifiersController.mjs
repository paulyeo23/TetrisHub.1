export default function initAllMatchesController(db) {
  const Info = async () => {
    const info = {
      Brackets: await db.Brackets.findAll(),
      Edition: await db.Editions.findAll(),
      Events: await db.Events.findAll(),
      GameResults: await db.GameResults.findAll(),
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

  const createSeeds = async (request, response) => {
    const params = request.params;
    const eventid = params.id;
    const scores = Info.QualifyingScores.filter((score) => {
      return score.eventId == eventid;
    }).sort((a, b) => {
      return b.qualifyingScore - a.qualifyingScore;
    });
    
  };

  const index = async (request, response) => {
    try {
      Info().then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
