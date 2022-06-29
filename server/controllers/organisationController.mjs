export default function initOrganisationController(db) {
  const Info = () => {
    return {
      admins: db.Admins.findAll(),
      brackets: db.Brackets.findAll(),
      edition: db.Edition.findAll(),
      events: db.Events.findAll(),
      results: db.GameResults.findAll(),
      matches: db.Matches.findAll(),
      organisation: db.Organisation.findAll(),
      players: db.PlayerDetails.findAll(),
      qualScore: db.QualifyingScores.findAll(),
      series: db.Series.findAll(),
      users: db.Users.findAll(),
    };
  };

  const register = async (request, response) => {
    db.Organisation.findAll({
      where: {
        username: request.params.username,
      },
    }).then((result) => {
      if (result.length > 0) {
        //register orginasation
      }
    });
  };

  const addAdmin = async (request, response) => {};

  const index = async (request, response) => {
    try {
      Info().then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    seatPlayer,
  };
}
