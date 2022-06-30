import React, { useState, Component, useEffect } from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import axios from "axios";
import * as module from "../infoFunctions";

const MatchCells = () => {
  const [UpcomingCells, setUpcomingCells] = useState([]);
  const [LiveCells, setLiveCells] = useState([]);
  const [Loading, setLoading] = useState(true);
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

  //render upcoming matches cells
  useEffect(() => {
    const getInfo = async () => {
      const response = await axios("http://localhost:3001/");
      if (Info == response.data) {
        console.log("return");
        return;
      }
      setInfo(response.data);
      setLoading(false);
    };
    getInfo();
    console.log("connected");
    console.log(Info);
  }, []);
  //render upcoming matches cells
  useEffect(() => {
    const upcomingMatches = Info.Matches.filter((match) => {
      return match.Live == false && match.Completed == false;
    });
    const cellDetails = {};
    const RenderCells = [];
    upcomingMatches.forEach((match) => {
      // module.getPlayerAlias(Info,playerId)
      const matchDetails = {
        matchId: match.id,
        bestOf: match.BestOf,
        matchTime: module.getTimeObj(new Date(match.DateTime)),
        player1: module.getPlayer(Info.PlayerDetails, match.player1Id),
        player2: module.getPlayer(Info.PlayerDetails, match.player2Id),
        event: module.getEvent(Info.Events, match.EventId),
      };

      const date = `${matchDetails.matchTime.dayName} ${matchDetails.matchTime.month}-${matchDetails.matchTime.day}-${matchDetails.matchTime.year}`;

      if (cellDetails[date] == undefined) {
        cellDetails[date] = [];
      }
      cellDetails[date].push(matchDetails);
    });
    console.log(cellDetails);
    for (let date in cellDetails) {
      console.log(date);
      let cells = [];
      cellDetails[date].forEach((matchDetails) => {
        cells.push(
          <div
            className="upcomingMatch "
            style={{
              paddingTop: "1px",
              paddingBottom: "01px",
            }}
          >
            <a
              href={`/match/?matches=${matchDetails.matchId}`}
              className="match"
            >
              <div
                className="d-flex flex-row MatchCell"
                style={{
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: "thin",
                }}
              >
                <div className="col matchInfo" bis_skin_checked="1">
                  <div
                    className="row matchTime"
                    data-time-format="HH:mm"
                    bis_skin_checked="1"
                  >
                    {`${matchDetails.matchTime.hour}:${matchDetails.matchTime.minutes}`}
                  </div>
                  <div className="matchRating" bis_skin_checked="1">
                    <i className="fa fa-star faded"></i>
                    <i className="fa fa-star faded"></i>
                    <i className="fa fa-star faded"></i>
                    <i className="fa fa-star faded"></i>
                    <i className="fa fa-star faded"></i>
                  </div>
                  <div className="row matchMeta" bis_skin_checked="1">
                    Bo: {matchDetails.bestOf}
                  </div>
                </div>
                <div
                  className="col matchTeams text-ellipsis"
                  bis_skin_checked="1"
                >
                  <div className="row matchTeam team1" bis_skin_checked="1">
                    <div
                      className="matchTeamLogoContainer"
                      bis_skin_checked="1"
                    >
                      <img
                        className="playerFlag"
                        src={`http://localhost:3001/${module.getPlayerFlag(
                          matchDetails.player1,
                        )}`}
                        width="30"
                        height="20"
                      />
                      <img className="matchTeamLogo night-only" />
                    </div>
                    <div
                      className=" matchTeamName text-ellipsis"
                      bis_skin_checked="1"
                    >
                      {matchDetails.player1.Alias}
                    </div>
                  </div>
                  <div className="row  matchTeam team2" bis_skin_checked="1">
                    <div
                      className="matchTeamLogoContainer"
                      bis_skin_checked="1"
                    >
                      <img
                        className="playerFlag"
                        src={`http://localhost:3001/${module.getPlayerFlag(
                          matchDetails.player2,
                        )}`}
                        width="30"
                        height="20"
                      />
                    </div>
                    <div
                      className="matchTeamName text-ellipsis"
                      bis_skin_checked="1"
                    >
                      {matchDetails.player2.Alias}
                    </div>
                  </div>
                </div>
                <div className="col matchEvent" bis_skin_checked="1">
                  <div
                    className="row matchEventLogoContainer"
                    bis_skin_checked="1"
                  >
                    <img className="matchEventLogo day-only" />
                    <img className="matchEventLogo night-only" />
                  </div>
                  <div
                    className="matchEventName gtSmartphone-only"
                    bis_skin_checked="1"
                  >
                    {matchDetails.event.Name}
                  </div>
                </div>
              </div>
            </a>
          </div>,
        );
      });
      RenderCells.push([
        <div>
          <div>{date}</div>
          <div>{cells}</div>
        </div>,
      ]);
    }
    setUpcomingCells(RenderCells);
  }, [Loading]);

  //render live matches cells
  useEffect(() => {
    const liveMatches = Info.Matches.filter((match) => {
      return match.live == true && match.completed == false;
    });
    const cellDetails = {};
    const RenderCells = [];
    liveMatches.forEach((match) => {
      // module.getPlayerAlias(Info,playerId)
      const matchDetails = {
        matchId: match.id,
        bestOf: match.BestOf,
        matchTime: module.getTimeObj(new Date(match.DateTime)),
        player1: module.getPlayer(Info.PlayerDetails, match.player1Id),
        player2: module.getPlayer(Info.PlayerDetails, match.player2Id),
        event: module.getEvent(Info.Events, match.EventId),
      };
      RenderCells.push(
        <div
          className="upcomingMatch "
          style={{
            paddingTop: "1px",
            paddingBottom: "01px",
          }}
        >
          <a href={`/match/?matches=${matchDetails.matchId}`} className="match">
            <div
              className="d-flex flex-row MatchCell"
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                backgroundColor: "white",
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: "thin",
              }}
            >
              <div className="col matchInfo" bis_skin_checked="1">
                <div
                  className="row Live"
                  data-time-format="HH:mm"
                  bis_skin_checked="1"
                >
                  LIVE
                </div>
                <div className="matchRating" bis_skin_checked="1">
                  <i className="fa fa-star faded"></i>
                  <i className="fa fa-star faded"></i>
                  <i className="fa fa-star faded"></i>
                  <i className="fa fa-star faded"></i>
                  <i className="fa fa-star faded"></i>
                </div>
                <div className="row matchMeta" bis_skin_checked="1">
                  Bo: {matchDetails.bestOf}
                </div>
              </div>
              <div
                className="col matchTeams text-ellipsis"
                bis_skin_checked="1"
              >
                <div className="row matchTeam team1" bis_skin_checked="1">
                  <div className="matchTeamLogoContainer" bis_skin_checked="1">
                    <img
                      className="playerFlag"
                      src={`http://localhost:3001/${module.getPlayerFlag(
                        matchDetails.player1,
                      )}`}
                      width="30"
                      height="20"
                    />
                    <img className="matchTeamLogo night-only" />
                  </div>
                  <div
                    className=" matchTeamName text-ellipsis"
                    bis_skin_checked="1"
                  >
                    {matchDetails.player1.Alias}
                  </div>
                </div>
                <div className="row  matchTeam team2" bis_skin_checked="1">
                  <div className="matchTeamLogoContainer" bis_skin_checked="1">
                    <img
                      className="playerFlag"
                      src={`http://localhost:3001/${module.getPlayerFlag(
                        matchDetails.player2,
                      )}`}
                      width="30"
                      height="20"
                    />
                  </div>
                  <div
                    className="matchTeamName text-ellipsis"
                    bis_skin_checked="1"
                  >
                    {matchDetails.player2.Alias}
                  </div>
                </div>
              </div>
              <div className="col matchEvent" bis_skin_checked="1">
                <div
                  className="row matchEventLogoContainer"
                  bis_skin_checked="1"
                >
                  <img className="matchEventLogo day-only" />
                  <img className="matchEventLogo night-only" />
                </div>
                <div
                  className="matchEventName gtSmartphone-only"
                  bis_skin_checked="1"
                >
                  {matchDetails.event.Name}
                </div>
              </div>
            </div>
          </a>
        </div>,
      );
    });
    setLiveCells(RenderCells);
  }, [Loading]);

  return [
    <div>
      <div>
        <div>Live Matches</div>
        <div>{LiveCells}</div>
      </div>
      <div>
        <div>Upcoming Matches</div>
        <div>{UpcomingCells}</div>
      </div>
    </div>,
  ];
};

export default MatchCells;
