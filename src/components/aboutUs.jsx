/**
 * En Route - About Us page
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
          <h1>About Us</h1>
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
