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
        <Row>
          <h1>Create/Modify Itinerary</h1>
        </Row>
      </Container>
    </article>
  );
};

export default CreateItinerary;
