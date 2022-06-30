import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import MatchTable from "./MatchTable";
import Scores from "./Scores";

const MatchPage = () => {
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
    setRender(
      <div>
        <div>
          <MatchTable info={Info} />
        </div>
        <div>
          <Scores info={Info} />
        </div>
      </div>,
    );
  }, [Info]);
  return Render;
};

export default MatchPage;
