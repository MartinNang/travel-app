/**
 * En Route - Sign Up page
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <Container className="vh-100 d-flex align-items-center">
      {/* A line containing two columns */}
      <Row className="w-100">
        {/* Left column: image */}
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
        <img src="/images/map.png" alt="Map" className="img-fluid" style={{ width: "100%", height: "auto", display: "block" }} />
        </Col>

        {/* Right column: form */}
        <Col xs={12} md={6} className="p-5">
          <h2 className="mb-4">Create your next adventure</h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>


            <Row className="mt-4"> 
                <Col xs={12} md={4}>
            <Button 
                  style={{ backgroundColor: "#b1f8b6", borderColor: "#b1f8b6", color: "black" }} 
                  type="submit" 
                  className="w-100"
                >
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

export default SignUp