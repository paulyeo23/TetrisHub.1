import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";

const MatchTable = (info) => {
  const [Render, setRender] = useState([]);
  const [time, setTime] = useState(Date.now());
  const [Info, setInfo] = useState(info.info);

  // useEffect(() => {
  //   const getInfo = async () => {
  //     const response = await axios("http://localhost:3001/");
  //     setInfo(response.data);
  //   };
  //   getInfo();

  //   console.log("connected");
  // }, []);

  useEffect(() => {
    setInfo(info.info);
    console.log("connected");
  }, [info]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const matchId = queryParams.get("matches");
    const match = Info.Matches.filter((result) => {
      return result.id == matchId;
    })[0];

    if (match == undefined) {
    } else {
      const matchDetails = {
        matchTime: module.getTimeObj(new Date(match.dateTime)),
        player1: module.getPlayer(Info.PlayerDetails, match.player1Id),
        player2: module.getPlayer(Info.PlayerDetails, match.player2Id),
        event: module.getEvent(Info.Events, match.eventId),
        countdown: module.calculateTimeLeft(new Date(match.dateTime)),
      };

      matchDetails.player1.score = match.player1Score;
      matchDetails.player1.position = 1;
      matchDetails.player2.score = match.player2Score;
      matchDetails.player2.position = 2;

      const produceScoreElement = (player) => {
        if (match.Completed == true) {
          if (player.id == match.winnerId) {
            return (
              <div
                className="d-flex justify-content-center winScore"
                style={{ color: "green", fontSize: "150%" }}
                bis_skin_checked="1"
              >
                {player.score}
              </div>
            );
          } else if (player.id == match.loserId) {
            return (
              <div
                className="d-flex justify-content-center loseScore"
                bis_skin_checked="1"
                style={{ color: "red", "font-size": "150%" }}
              >
                {player.score}
              </div>
            );
          }
        } else if (match.live == true) {
          return (
            <div
              className={`d-flex justify-content-center player${player.position}`}
              bis_skin_checked="1"
            >
              {player.score}
            </div>
          );
        } else if (match.live == false) {
          return (
            <div
              className={`d-flex justify-content-center ${player.position}`}
              bis_skin_checked="1"
            ></div>
          );
        }
      };

      const countdown = () => {
        if (match.completed == true) {
          return (
            <div
              className="d-flex flex-row justify-content-center countdown"
              bis_skin_checked="1"
            >
              Match Over
            </div>
          );
        } else if (match.live == true) {
          return (
            <div
              className="d-flex flex-row justify-content-center countdown"
              bis_skin_checked="1"
            >
              Live
            </div>
          );
        } else {
          return (
            <div
              className="d-flex flex-row justify-content-center countdown"
              bis_skin_checked="1"
            >
              {matchDetails.countdown}
            </div>
          );
        }
      };
      setRender(
        <div
          className="d-flex flex-row justify-content-center PlayerContainer"
          bis_skin_checked="1"
        >
          <div className="d-flex flex-column Player1" bis_skin_checked="1">
            <div className="player1-gradient" bis_skin_checked="1">
              <a href="">
                <img
                  alt={matchDetails.player1.alias}
                  className="logo"
                  title={matchDetails.player1.alias}
                  height="135px"
                  width="180px"
                  src={module.getPlayerPhoto(
                    Info.PlayerDetails,
                    matchDetails.player1.id,
                  )}
                />
                <div
                  className="d-flex flex-row justify-content-center player1Name"
                  bis_skin_checked="1"
                >
                  {matchDetails.player1.alias}
                </div>
              </a>
              <div
                className={`d-flex flex-row justify-content-center player1Score win=${
                  match.winnerId == matchDetails.player1.id
                }`}
                bis_skin_checked="1"
              ></div>
              {produceScoreElement(matchDetails.player1)}
            </div>
          </div>
          <div
            className="d-flex flex-column  TimeAndEvent"
            bis_skin_checked="1"
          >
            <div
              className="d-flex flex-row justify-content-center time"
              style={{ "font-size": "250%" }}
              data-time-format="HH:mm"
              bis_skin_checked="1"
            >
              {matchDetails.matchTime.hour}:{matchDetails.matchTime.minutes}
            </div>
            <div
              className="d-flex flex-row justify-content-center date"
              style={{ "font-size": "100%", "font-weight": "" }}
              data-time-format="do 'of' MMMM y"
              bis_skin_checked="1"
            >
              {matchDetails.matchTime.day}
              {matchDetails.matchTime.ordinal} of {matchDetails.matchTime.month}{" "}
              {matchDetails.matchTime.year}
            </div>
            <a
              href={`/event/?event=${matchDetails.event.id}`}
              title={matchDetails.event.name}
            >
              <div
                className="d-flex flex-row justify-content-center tableEventName"
                style={{ "font-size": "15px" }}
              >
                {matchDetails.event.name}
              </div>
            </a>

            <div
              className="d-flex flex-row justify-content-center event text-ellipsis"
              bis_skin_checked="1"
            >
              <a
                href={`/events/${matchDetails.event.id}`}
                title={matchDetails.event.name}
              >
                {matchDetails.event.name}
              </a>
            </div>
            <div className="text dummy-spacer" bis_skin_checked="1">
              &nbsp;
            </div>
            {countdown()}
          </div>
          <div className="d-flex flex-column Player2" bis_skin_checked="1">
            <div className="team2-gradient" bis_skin_checked="1">
              <a href="/team/7653/isurus">
                <img
                  alt={matchDetails.player2.Alias}
                  className="logo"
                  title={matchDetails.player2.Alias}
                  height="135px"
                  width="180px"
                  src={module.getPlayerPhoto(
                    Info.PlayerDetails,
                    matchDetails.player2.id,
                  )}
                />
                <div
                  className="d-flex flex-row justify-content-center player2Name"
                  bis_skin_checked="1"
                >
                  {matchDetails.player2.alias}
                </div>
              </a>
              <div
                className={`d-flex flex-row justify-content-center player1Score win=${
                  match.winnerId == matchDetails.player2.id
                }`}
                bis_skin_checked="1"
              ></div>
              {produceScoreElement(matchDetails.player2)}
            </div>
          </div>
        </div>,
      );
      const interval = setInterval(
        () =>
          setTime(function () {
            if (Date.now() <= new Date(match.dateTime)) {
              return Date.now();
            }
          }),
        1000,
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [Info, time]);

  return Render;
};
export default MatchTable;
