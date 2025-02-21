/**
 * En Route - Itineraries page
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Itineraries = () => {
    return (
        <div>
            <Container fluid className="vh-100 d-flex justify-content align-items-center bg-dark">
                <Row className="w-100 text-center" style={{paddingTop:"200px"}}>
                        <h1 style={{ fontWeight: 700, color: "#b1f8b6" }}>Where do you want to go?</h1>
                </Row>
            </Container>

            <Container className="d-flex justify-content-center green-rectangle">
                    <Row className=" w-100">
                    <Col>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>DUBLIN</h2>
                    </Col>

                    <Col>
                    <h2>Suggested Itineraries</h2>
                    </Col>
                    </Row>
            </Container>

        </div>
    );
};


export default Itineraries