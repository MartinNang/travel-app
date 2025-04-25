/**
 * En Route - Sign In page
 */

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import mapImg from "../../images/map.png";
import AlertDismissible from "../ui/alertDismissible";

axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie/";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("upload profile image", profileImage);
      await uploadProfileImage(
        document.querySelector('input[type="file"]').files[0],
        (result) => {
          console.log("result upload image", result.data);
          if (result && result.data) {
            console.log("signing up");
            signUserUp(result.data);
          }
        }
      );
    }

    setValidated(true);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangeProfileName(event) {
    setProfileName(event.target.value);
  }
  function handleChangeProfileImage(event) {
    setProfileImage(event.target.value);
  }
  function handleChangePwd(event) {
    setPassword(event.target.value);
  }
  function handleChangeConfirmPwd(event) {
    setConfirmPassword(event.target.value);
  }

  async function signUserUp(imagePath) {
    await axios
      .post("/users/signup", {
        email: email,
        password: password,
        profileName: profileName,
        profileImage: imagePath,
      })
      .then((response) => {
        console.log("response", response);
        let success = response.data.success;
        if (success) {
          console.log("Successfully signed up user");
          navigate("/sign-in");
        } else {
          console.log("Failed to sign up user");
        }
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data.error);
          console.log(error.response.status);
          console.log(error.response.headers);
          setErrorMessage(error.response.data.error);
          setShow(true);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  async function uploadProfileImage(img, callback) {
    await axios
      .postForm("/upload", {
        img: img,
      })
      .then(function (result) {
        console.log("uploaded image", result.data);
        callback(result);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data.error);
          console.log(error.response.status);
          console.log(error.response.headers);
          setErrorMessage(error.response.data.error);
          setShow(true);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  return (
    <Container className="d-flex align-items-center signin-page">
      {/* A line containing two columns */}
      <Row className="w-100">
        {/* Left column: image */}
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center">
          <img
            src={mapImg}
            alt="Map"
            className="img-fluid"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Col>

        {/* Right column: form */}
        <Col
          xs={12}
          md={6}
          className="p-5"
          style={{ fontFamily: "inria, serif" }}>
          <AlertDismissible
            variant={"danger"}
            error={"error"}
            message={errorMessage}
            show={show}
            setShow={setShow}></AlertDismissible>
          <h2
            className="mb-4"
            style={{ fontWeight: "bold", fontFamily: "gyst, serif" }}>
            Create your next adventure!
          </h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formProfileName">
              <Form.Label>Profile Name</Form.Label>
              <Form.Control
                required
                minLength={4}
                maxLength={16}
                className="bg-light"
                type="text"
                placeholder="Profile Name"
                value={profileName}
                onInput={handleChangeProfileName}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username. The username must be between 4 and 16
                characters.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formProfileImage" className="mt-3">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                className="bg-light"
                type="file"
                placeholder="Profile Image"
                value={profileImage}
                onInput={handleChangeProfileImage}
                accept="image/png, image/jpeg"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                className="bg-light"
                type="email"
                placeholder="Email"
                value={email}
                onInput={handleChangeEmail}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid e-mail address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                className="bg-light"
                type="password"
                placeholder="Password"
                value={password}
                onInput={handleChangePwd}
                minLength={4}
                maxLength={16}
              />
              <Form.Control.Feedback type="invalid">
                Please insert a valid password. The password must be between 4
                and 16 characters.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                className="bg-light"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onInput={handleChangeConfirmPwd}
                isValid={
                  password.length > 4 &&
                  password.length < 16 &&
                  password === confirmPassword
                }
                isInvalid={password !== confirmPassword}
                minLength={4}
                maxLength={16}
              />
              <Form.Control.Feedback type="invalid">
                Password is invalid or does not match.
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="mt-4">
              <Col xs={12} md={4} className="mb-3 mb-md-0">
                <Button
                  style={{
                    backgroundColor: "#b1f8b6",
                    borderColor: "#b1f8b6",
                    color: "black",
                  }}
                  type="submit"
                  className="w-100">
                  Sign Up!
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
