/**
 * En Route - Itineraries page
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import PhotoCarousel from "./carousel.jsx";

const Itineraries = () => {
    return (
        <div>
            <Container fluid className="vh-100 d-flex justify-content align-items-center bg-dark">
                <Row className="w-100 text-center" style={{paddingTop:"200px"}}>
                        <h1 style={{ fontWeight: 700, color: "#b1f8b6" }}>Where do you want to go?</h1>
                </Row>
            </Container>

            <Container className="my-4 p-3 rounded" style={{backgroundColor:"#0b524c"}}>
                <Row>
                    <Col>
                        <h2 className="text-center p-3" style={{ color: '#F19EDC', fontWeight: "bold" }}>DUBLIN</h2>
                        <PhotoCarousel city="dublin" />
                    </Col>

                    <Col>
                        <h2 className="text-center p-3" style={{ color: '#F19EDC', fontSize: "1.8rem" }}>Suggested itineraries</h2>

                        <Accordion>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>Adventurous</Accordion.Header>
                            <Accordion.Body>Preview of the itinerary.
                            <div className="mt-auto d-flex justify-content-end">
                                <Button style={{ backgroundColor: "#88e097", border: "none", color: "#000" }}>
                                    Go
                                </Button>
                            </div>
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                            <Accordion.Header>Touristic</Accordion.Header>
                            <Accordion.Body>Preview of the itinerary.
                            <div className="mt-auto d-flex justify-content-end">
                                <Button style={{ backgroundColor: "#88e097", border: "none", color: "#000" }}>
                                    Go
                                </Button>
                            </div>
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                            <Accordion.Header>Lazy</Accordion.Header>
                            <Accordion.Body>Preview of the itinerary.
                            <div className="mt-auto d-flex justify-content-end">
                                <Button style={{ backgroundColor: "#88e097", border: "none", color: "#000" }}>
                                    Go
                                </Button>
                            </div>
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                            <Accordion.Header>Original</Accordion.Header>
                            <Accordion.Body>
                                Preview of the itinerary.
                                <p className="mt-2">
                                The photos on the side can either be associated to each itinerary or be pictures of the city (same for all previews).
                                </p>
                                <div className="mt-auto d-flex justify-content-end">
                                <Button style={{ backgroundColor: "#88e097", border: "none", color: "#000" }}>
                                    Go
                                </Button>
                            </div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                </Row>
            </Container>

                       
        </div>
    );
};


export default Itineraries