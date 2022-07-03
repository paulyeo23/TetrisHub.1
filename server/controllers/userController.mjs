import { Info } from "../service/info.mjs";

export default function initUserController(db) {
  const register = async (request, response) => {
    console.log(request.params);
    db.Users.findAll({
      where: {
        username: request.params.username,
      },
    }).then((result) => {
      if (result.length > 0) {
        response.send({ username: false, accepted: false });
      } else {
        db.Users.create({
          username: request.params.username,
          password: request.params.password,
        });
        response.send({ accepted: true });
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
        response.send({ accepted: true });
      } else {
        response.send({ accepted: false });
      }
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
    register,
    login,
  };
}
