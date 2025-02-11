/**
 * En Route homepage
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// Icons
//import profile from "../assets/img/Profile.jpeg";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <img
            id="banner-image"
            src={
              "https://image.brigitte.de/12213288/t/XG/v4/w1440/r0/-/naturwunder-elbsandsteingebirge.jpg"
            }
            alt="Mountain scenery"
          />
        </Row>
        <Row>
          <h1>Homepage</h1>
        </Row>
        <Row>
          <Col xs={12} lg={5}>
            <p>Left Column</p>
          </Col>
          <Col xs={12} lg={5}>
            <p>Right Column</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
