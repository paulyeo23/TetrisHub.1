import { useState, useEffect, startTransition } from "react";
import * as module from "../infoFunctions";
import axios from "axios";

const Scores = (info) => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState({
    info,
  });

  useEffect(() => {
    setInfo(info.info);
  }, [info]);



  useEffect(() => {
    
  }, [Info]);
};

export default Scores;
