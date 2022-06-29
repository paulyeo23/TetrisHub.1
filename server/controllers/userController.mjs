export default function initUserController(db) {
  const Info = () => {
    return {
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
    db.Users.findAll({
      where: {
        username: request.params.username,
      },
    }).then((result) => {
      if (result.length > 0) {
        //register
      }
    });
  };

  const login = async (request, response) => {
    db.Users.findAll({
      where: {
        username: request.params.username,
        password: request.params.password,
      },
    }).then((result) => {
      if (result.length > 0) {
        //login
      } else {
        //alert
      }
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
    seatPlayer,
  };
}
