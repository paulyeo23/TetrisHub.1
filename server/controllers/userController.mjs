import { Info } from "../service/info.mjs";
import { register, login } from "../service/userTable.mjs";

export default function initUserController(db) {
  const Register = async (request, response) => {
    let message = {};
    const username = request.body.user;
    const password = request.body.password;
    Info().then((info) => {
      info.Users.filter((user) => {
        return user.username == username;
      }).length == 0
        ? register(username, password).then((result) => {
            response.send({ accepted: true });
          })
        : response.send({ accepted: false, reason: "Username is taken" });
    });
  };

  const Login = async (request, response) => {};

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
