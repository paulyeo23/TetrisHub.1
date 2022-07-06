import { resolve } from "path";
import multer from "multer";
import db from "../models/index.mjs";
import initAllMatchesController from "../controllers/allMatchesController.mjs";
import initUserController from "../controllers/userController.mjs";
import initUploadsController from "../controllers/upload.mjs";

export default function routes(app) {
  const allMatchesController = initAllMatchesController(db);
  app.get("/", allMatchesController.index);

  const allUserController = initUserController(db);
  app.post("/login", (request, response) => {
    console.log(request.body);
  });
  app.post("/register", (request, response) => {
    console.log(request.body);
    response.send({ accepted: false });
  });

  const uploadsController = initUploadsController(db);
  app.post(
    "/upload/profilerequest",
    uploadsController.upload.single("file"),
    (request, response) => {
      response.json({});
    },
  );

  // function (request, response) {
  // let data = request.body;
  // let username = data.username;
  // let password = data.password;
  // console.log(username, password);
  // });

  // special JS page. Include the webpack index.html file
  // app.get('/home', (request, response) => {
  //   response.sendFile(resolve('dist', 'main.html'));
  // });
}
