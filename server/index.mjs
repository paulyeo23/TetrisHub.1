import cookieParser from "cookie-parser";
import express from "express";
import methodOverride from "method-override";
import bindRoutes from "./routes.mjs";
import cors from "cors";
import { WebSocketServer } from "ws";
import http from "http";

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// Initialise Express instance
const app = express();
// Set CORS headers
app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  }),
);
// Set the Express view engine to expect EJS templates
app.set("view engine", "ejs");
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride("_method"));
// Expose the files stored in the public folder
app.use(express.static("public"));
// Bind route definitions to the Express application
bindRoutes(app);

// Set Express to listen on the given port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.info(`Server running on port: ${PORT}`));

const webSocketsServerPort = 3002;
const server = http.createServer();
server.listen(webSocketsServerPort);
console.log(`Websocket listening on port ${webSocketsServerPort}`);

const wsServer = new WebSocketServer({
  server: server,
});

const getUniqueID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

wsServer.on("request", function (request) {
  var userId = getUniqueID();
  console.log(
    new Date() +
      " Recieved a new connection from origin " +
      request.origin +
      ".",
  );

  // You can rewrite this part of the code to accept only the requests from allowed origin
  const connection = request.accept(null, request.origin);
  clients[userId] = connection;
  console.log(`${userId} connected`);

  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received Message: ", message.utf8Data);

      // broadcasting message to all connected clients
      // for (key in clients) {
      //   clients[key].sendUTF(message.utf8Data);
      //   console.log("sent Message to: ", clients[key]);
      // }
    }
  });
});
