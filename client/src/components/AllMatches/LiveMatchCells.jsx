import React, { useState, Component, useEffect } from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import axios from "axios";
import * as module from "../infoFunctions";

const MatchCells = () => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState({
    Brackets: [],
    Edition: [],
    Events: [],
    GameResults: [],
    Matches: [],
    Organisation: [],
    PlayerDetails: [],
    QualifyingScores: [],
    Series: [],
    Streams: [],
    Users: [],
  });

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios("http://localhost:3001/");
      if (Info == response.data) {
        return;
      }
      setInfo(response.data);
    };
    getInfo();
    console.log("connected");
  }, []);

  useEffect(() => {
    const liveMatches = Info.Matches.filter((match) => {
      return match.live == true && match.completed == false;
    });
    const cells = [];
    liveMatches.forEach((match) => {
      // module.getPlayerAlias(Info,playerId)
      const cellDetails = {
        matchTime: module.getTimeObj(new Date(match.DateTime)),
        player1: module.getPlayer(Info.PlayerDetails, match.player1Id),
        player2: module.getPlayer(Info.PlayerDetails, match.player2Id),
        event: module.getEvent(Info.Events, match.EventId),
      };
    });
  }, [Info]);

  return Render;
};

// const MatchDayTable = (function () {
//   Date.prototype.addDays = function (days) {
//     const date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
//   };

//   const date = new Date();
//   if (AllResults.length != 0) {

//     for (let i = 0; i < AllResults.length; i++) {
//       const match = AllResults[i]

//     }
//   }
export default MatchCells;
