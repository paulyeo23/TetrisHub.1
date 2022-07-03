import { Info } from "../service/info.mjs";

export default function initOrganisationController(db) {
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
      Info(db).then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    seatPlayer,
  };
}
