import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import { countryList } from "./country.mjs";
import * as module from "../infoFunctions";
import { useSearchParams, useNavigate } from "react-router-dom";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

const Register = ({ setUsername }) => {
  const [Info, setInfo] = useState({});
  const [loginDetails, setLoginDetails] = useState({});
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  function loginCheck(e) {
    e.preventDefault();
    if (loginDetails.password !== loginDetails.password2) {
      setMsg("Both password do not match, please re-enter");
    } else {
      axios
        .post(`${BACKEND_URL}/register`, {
          loginDetails,
        })
        .then((response) => {
          response.data.accepted == true
            ? alert("Accepted")
            : alert("Email is in use");
        })
        .catch((err) => console.log(err));
    }
  }

  function details(e) {
    const { value, name } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function generateCountryList() {
    let List = [<option value="0">Select a country</option>];
    countryList.forEach((country) => {
      List.push(<option value={country.Code2}>{country.Country}</option>);
    });
    return List;
  }

  // useEffect(() => {
  //   const getInfo = async () => {
  //     const response = await axios("http://localhost:3001/");
  //     setInfo(response.data);
  //   };
  //   getInfo();

  //   console.log("connected");
  // }, []);

  return (
    <Container className="login-container">
      <h1>Registration</h1>
      <form onSubmit={loginCheck}>
        <Row>
          <Col>Username:</Col>
          <Col>
            <input name="username" onChange={details} />
          </Col>
        </Row>
        <Row>
          <Col>Password:</Col>
          <Col>
            <input type="password" name="password" onChange={details} />{" "}
          </Col>
        </Row>
        <Row>
          <Col>Confirm password:</Col>
          <Col>
            <input type="password" name="password2" onChange={details} />{" "}
          </Col>
        </Row>
        <Row>
          <Col>Email:</Col>
          <Col>
            <input
              type="text"
              onChange={details}
              name="email"
              id="emailInput"
              tabindex="4"
              required="required"
            />
          </Col>
        </Row>
        <Row>
          <Col>Confirm Email:</Col>
          <Col>
            <input
              type="text"
              id="confirmEmailInput"
              onChange={details}
              tabindex="5"
              required="required"
            />
          </Col>
        </Row>
        <Row>
          <select onChange={details} tabindex="6" name="country">
            {generateCountryList()}
          </select>
        </Row>
        <Row>
          <Button type="submit">Register</Button>
        </Row>
        <Row>{msg && <Alert variant="danger">{msg}</Alert>}</Row>
      </form>
    </Container>
  );
};
export default Register;
