/**
 * En Route - Sign In page
 */

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie/";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("logging in");

    const result = await axios
      .post("/users/login", { email: email, password: password })
      .then((response) => {
        console.log("response", response);
        let user = response.data[0];
        if (user && user.id) {
          const userId = user.id;
          const userEmail = user.email;
          const userPwd = user.password;
          const userProfileName = user.profileName;
          const userProfileImage = user.profileImage;

          sessionStorage.setItem("id", userId);
          sessionStorage.setItem("email", userEmail);
          sessionStorage.setItem("password", userPwd);
          sessionStorage.setItem("profileName", userProfileName);
          sessionStorage.setItem("profileImage", userProfileImage);
          console.log(userId);

          console.log("Success");
          console.log("user email: ", userEmail);
          navigate("/");
        } else {
          console.log("failed to log in user");
        }
      });
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangePwd(event) {
    setPassword(event.target.value);
  }

  return (
    <Container className="vh-100 d-flex align-items-center signin-page">
      {/* A line containing two columns */}
      <Row className="w-100">
        {/* Left column: image */}
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center">
          <img
            src="/images/map.png"
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
          <h2
            className="mb-4"
            style={{ fontWeight: "bold", fontFamily: "gyst, serif" }}>
            Create your next adventure!
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Control
                className="bg-light"
                type="email"
                placeholder="Email"
                value={email}
                onInput={handleChangeEmail}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Control
                className="bg-light"
                type="password"
                placeholder="Password"
                value={password}
                onInput={handleChangePwd}
              />
            </Form.Group>

            {/* Remember me checkbox */}
            <Form.Group controlId="formRememberMe" className="mt-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Row className="mt-4">
              <Col xs={12} md={4} className="mb-3 mb-md-0">
                <Button
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "#b1f8b6",
                    borderColor: "#b1f8b6",
                    color: "black",
                  }}
                  type="submit"
                  className="w-100">
                  Sign In!
                </Button>
              </Col>

              <Col
                xs={12}
                md={8}
                className="mb-5 mb-md-0 d-flex align-items-center">
                <Button
                  style={{
                    backgroundColor: "#b1f8b6",
                    borderColor: "#b1f8b6",
                    color: "black",
                  }}
                  type="submit"
                  className="w-100">
                  <span>
                    Don't have an account?{" "}
                    <Link
                      to="/sign-up"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}>
                      Sign up!
                    </Link>
                  </span>
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
