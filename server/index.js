const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send()
});

app.post("/login", (request, response) => {

});

app.get("/gohome", (request, response) => {
  console.log("time to go home");
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
