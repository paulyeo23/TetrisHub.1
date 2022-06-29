import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";

const HighlightedStats = () => {
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
      setInfo(response.data);
    };
    getInfo();

    console.log("connected");
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const matchId = queryParams.get("matches");
    const match = Info.Matches.filter((match) => {
      return match.id == matchId;
    })[0];

    const upperBoundDate = new Date(match.DateTime); //match date itself
    const lowerBoundDate = module.addDays(upperBoundDate, -90); // 3 months prior to match
    // const playerStats = {
    //   elo: 0,
    //   totalMatches: playerHistory.length,
    //   matchesWon: matchesWon.length,
    //   matchesLost: matchesLost.length,
    //   gamesWon: gamesWon(),
    //   gamesLost: gamesLost(),
    //   averageLosingScore: averageLosingScore(),
    //   notableWinsOver: 0,
    // };
    const statsTable = {
      player1: module.playerStatistics(
        Info,
        match.player1Id,
        lowerBoundDate,
        upperBoundDate,
      ),
      player2: module.playerStatistics(
        Info,
        match.player2Id,
        lowerBoundDate,
        upperBoundDate,
      ),
    };

    setRender([
      <div class="lineups-compare-middle">
        <table class="lineups-compare-middle-table">
          <colgroup>
            <col class="outerCol" />
            <col class="centerCol" />
            <col class="outerCol" />
          </colgroup>
          <thead>
            <tr>
              <th class="table-header" colspan="3">
                Highlighted stats
              </th>
            </tr>
            <tr>
              <th class="table-subheader" colspan="3">
                (Past 3 months)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="statRow elo">
              <td class="lineups-compare-middle-table-stat left-stat">
                {statsTable.player1.elo}
              </td>
              <td class="lineups-compare-middle-table-center-stat">Elo</td>
              <td class="lineups-compare-middle-table-stat right-stat best-stat">
                {statsTable.player2.elo}
              </td>
            </tr>
            <tr class="statRow matches">
              <td class="lineups-compare-middle-table-stat left-stat">
                {statsTable.player1.matchesWon}/{statsTable.player1.matchesLost}
              </td>
              <td class="lineups-compare-middle-table-center-stat">
                <span class="gtSmartphone-only">Matches: </span>
                <span class="smartphone-only">Won/lost</span>
              </td>
              <td class="lineups-compare-middle-table-stat right-stat best-stat">
                {statsTable.player2.matchesWon}/{statsTable.player2.matchesLost}
              </td>
            </tr>
            <tr class="statRow games">
              <td class="lineups-compare-middle-table-stat left-stat best-stat">
                {statsTable.player1.gamesWon}/{statsTable.player2.gamesLost}
              </td>
              <td class="lineups-compare-middle-table-center-stat">
                <span class="gtSmartphone-only">Games: </span>
                <span class="smartphone-only">Won/Lost</span>
              </td>
              <td class="lineups-compare-middle-table-stat right-stat">
                {statsTable.player1.gamesWon}/{statsTable.player2.gamesLost}
              </td>
            </tr>
            <tr class="statRow score">
              <td class="lineups-compare-middle-table-stat left-stat">
                {statsTable.player1.averageLosingScore}
              </td>
              <td class="lineups-compare-middle-table-center-stat">
                Average Losing Score
              </td>
              <td class="lineups-compare-middle-table-stat right-stat best-stat">
                {statsTable.player2.averageLosingScore}
              </td>
            </tr>
            <tr class="statRow notableWins">
              <td class="lineups-compare-middle-table-stat left-stat">
                {statsTable.player1.notableWinsOver}
              </td>
              <td class="lineups-compare-middle-table-center-stat">
                <span class="gtSmartphone-only">Notable wins over</span>
              </td>
              <td class="lineups-compare-middle-table-stat right-stat best-stat">
                {statsTable.player2.notableWinsOver}
              </td>
            </tr>
          </tbody>
        </table>
      </div>,
    ]);
  }, [Info]);
  return Render;
};

export default HighlightedStats;
