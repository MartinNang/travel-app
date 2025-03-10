/**
 * En Route - Sign In page
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const SignIn = () => {
    return (
        <Container className="vh-100 d-flex align-items-center signin-page" >
      {/* A line containing two columns */}
      <Row className="w-100">
        {/* Left column: image */}
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
        <img src="/images/map.png" alt="Map" className="img-fluid" style={{ width: "100%", height: "auto", display: "block" }} />
        </Col>

        {/* Right column: form */}
        <Col xs={12} md={6} className="p-5" style={{fontFamily:'inria, serif'}}>
          <h2 className="mb-4" style={{fontWeight:'bold', fontFamily:'gyst, serif'}}>Create your next adventure!</h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Control className="bg-light" type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Control className="bg-light" type="password" placeholder="Password" />
            </Form.Group>

            {/* Remember me checkbox */}
            <Form.Group controlId="formRememberMe" className="mt-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Row className="mt-4">
                <Col xs={12} md={4} className="mb-3 mb-md-0">
                <Button 
                  style={{ backgroundColor: "#b1f8b6", borderColor: "#b1f8b6", color: "black" }} 
                  type="submit" 
                  className="w-100">
                  Sign In!
                </Button>
                </Col>

              <Col xs={12} md={8} className="mb-5 mb-md-0 d-flex align-items-center">
              <Button 
                  style={{ backgroundColor: "#b1f8b6", borderColor: "#b1f8b6", color: "black" }} 
                  type="submit" 
                  className="w-100"
                >
                <span>Don't have an account? <Link to="/signUp" style={{ color: 'black', textDecoration: 'none', fontWeight:'bold', fontStyle:'italic' }}>Sign up!</Link></span>
                </Button>
              </Col>

            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
       

};

export default SignIn