const db = require("./models/index.js");

const express = require("express");
const app = express();
const cors = require("cors");
const { GameResults } = require("./models/index.js");

app.use(cors());
app.use(express.json());

app.get("/gameResults/:matchID", (req, res) => {
  let matchID = req.params.matchID;
  db.GameResults.findAll({
    where: {
      MatchID: matchID,
    },
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/Playerdetails/", (req, res) => {
  db.PlayerDetails.findAll()
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/Playerdetails/:playerID", (req, res) => {
  let playerID = req.params.playerID;
  db.PlayerDetails.findAll({
    where: {
      ID: playerID,
    },
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/matches/", (req, res) => {
  db.Matches.findAll({
    where: {
      completed: false,
    },
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/results/", (req, res) => {
  db.Matches.findAll({
    where: {
      completed: true,
    },
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/events/", (req, res) => {
  db.Events.findAll()
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
