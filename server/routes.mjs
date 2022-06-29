import { resolve } from "path";
import db from "./models/index.mjs";
import initAllMatchesController from "./controllers/allMatchesController.mjs";

// import initItemsController from './controllers/items.mjs';
// import initOrdersController from './controllers/orders.mjs';

export default function routes(app) {
  // const OrdersController = initOrdersController(db);
  // app.post('/orders', OrdersController.create);
  // app.get('/orders', OrdersController.index);

  // const ItemsController = initItemsController(db);
  // app.get('/items', ItemsController.index);

  const allMatchesController = initAllMatchesController(db);
  app.get("/", allMatchesController.index);

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
