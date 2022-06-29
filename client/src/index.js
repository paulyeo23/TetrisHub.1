import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./components/Register/Register";
import Upload from "./components/Register/UploadPicture";
import OngoingEvents from "./components/AllEvents/OngoingEvents";
import MatchPage from "./components/Matches/MatchPage";
import CreateEventPage from "./components/CreateEvent/CreateEvent";

import reportWebVitals from "./reportWebVitals";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
// import ResultCells from "./components/AllResults/AllResults";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <body
        style={{
          backgroundColor: "black",
        }}
      >
        <div
          className="blue-backing"
          style={{
            backgroundColor: "#e5e7ea",
            marginRight: "300px",
            marginLeft: "300px",
          }}
        >
          <NavigationBar />
          <Router>
            <Routes>
              <Route path="/matches" element={<MatchPage />} />
              <Route path="/match" element={<MatchPage />} />
            </Routes>
            <Routes>
              <Route path="/createEvent" element={<CreateEventPage />} />
            </Routes>
          </Router>
        </div>
      </body>
    </html>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
