import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import { countryList } from "./country.mjs";
import * as module from "../infoFunctions";
import { useSearchParams, useNavigate } from "react-router-dom";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

const Upload = ({ setUsername }) => {
  const [Info, setInfo] = useState({});
  const [Photo, setPhoto] = useState({});

  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    const response = await fetch(`${BACKEND_URL}/upload/profilerequest`, {
      method: "POST",
      body: formData,
    });
    if (response) setStatus(response.statusText);
  };




  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <div className="App">
      <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width="100" height="100" />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  );
};
export default Upload;
