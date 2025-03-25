import queryOverpass from "query-overpass";
import $ from "jquery";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "../ui/card";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateItinerary = ({}) => {
  return (
    <article>
      <Container>
        <Row className="mt-4">

        <Col xs={12} md={8}>
          <Container className="events-timetable d-grid flex-grow-1">
            <div className="grid-container">
              {/* Header row */}
              <span></span> {/* Empty top-left cell */}
              <span className="timetable-first-row">Day 1</span>
              <span className="timetable-first-row">Day 2</span>

              {/* First column */}
              <span>8-10am</span> <span>Event A</span> <span>Event B</span>
              <span>10-12pm</span> <span>Event A</span> <span>Event B</span>
              <span>2-4pm</span> <span>Event A</span> <span>Event B</span>
              <span>8-10pm</span> <span>Event A</span> <span>Event B</span>

            </div>
          </Container>

          {/* Button Row */}
          <Row className="p-3 mt-auto">
            <Col className="d-flex justify-content-end">
              <Button>Save</Button>
            </Col>
          </Row>
        </Col>


          <Col xs={12} md={1}></Col>



          <Col xs={12} md={3} className="d-flex flex-column vh-100">
            <Container className="wishlist-body p-4 flex-grow-1 d-flex flex-column">              
              <Row>
                <h3>Wishlist</h3>
              </Row>

              <Row className="m-2 mt-auto"> {/* To push the button to the bottom */}
                {/* This need to link somewhere else*/}
                <Button id="create-itinerary-btn" href={"#/create-itinerary"}>
                  Create my own itinerary
                </Button>
              </Row>
              
            </Container>
          </Col>
        </Row>
      </Container>



    </article>
  );
};

export default CreateItinerary;
