export default function initAllMatchesController(db) {
  const Info = async () => {
    return {
      Brackets: await db.Brackets.findAll(),
      BracketMatches: await db.BracketMatches.findAll(),
      // BracketTypes: await db.BracketTypes.findAll(),
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
