import queryOverpass from "query-overpass";
import $ from "jquery";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "./card";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Events = ({}) => {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [results, setResults] = useState(null);
  const [pois, setPois] = useState([]);
  const [mapsLink, setMapsLink] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Dublin"),
    onInput = ({ target: { value } }) => setSearchTerm(value),
    onFormSubmit = (e) => {
      console.log("submitting");
      e.preventDefault();
      setLoading(true);
      setFailed(false);
      setResults();
      // console.log(value);
      // nwr(area)["tourism"~"museum|gallery"];
      // nwr(area)["amenity"~"cafe|bar"];
      const requestData = {
        data: `
          [out:json]
          [timeout:25]
          ;
          area[name="${searchTerm}"];
          (
            nwr(area)["tourism"]["wikidata"];
            nwr(area)["amenity"]["wikidata"];
          );
          out center 10;
      `,
      };

      $.post("https://overpass-api.de/api/interpreter", requestData)
        .done((response) => {
          setResults(response);
          setLoading(false);
        })
        .fail((error) => {
          console.log("failed to load results", error);
          setLoading(false);
          setFailed(true);
        });
      console.log("results", results);
    };

  useEffect(() => {
    let suffix = "";
    pois.map((element) => {
      suffix += element.lat + "," + element.lon + "/";
    });
    setMapsLink("https://www.google.com/maps/dir/" + suffix);
  }, [pois]);

  return (
    <article>
      <Container>
        <Row className="mt-4">
          <Col xs={12} md={6} lg={2}>
            {/* Search for Events in [City] */}
            {/* <label for="events">Events</label> */}
            {/* <input
              type="events"
              id="events"
              name="events"
              placeholder="Search for Events in [City]"
            /> */}
            <Container>
              <Row>
                <Form className="d-flex p-0" onSubmit={onFormSubmit}>
                  <Form.Control
                    type="search"
                    placeholder="e.g. Dublin"
                    aria-label="Search"
                    onChange={onInput}
                    value={searchTerm}
                  />
                  <Button variant="primary" type="submit">
                    Search{loading ? "ing..." : ""}
                  </Button>
                </Form>
              </Row>
              <Row className="mt-4 mb-4">
                <h4>
                  <label for="from">From</label>
                </h4>
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  placeholder="From"
                />
                <h4>
                  <label for="to">To</label>
                </h4>
                <input type="date" id="toDate" name="toDate" placeholder="To" />
              </Row>
              <Row className="mb-4">
                <h4>
                  <label for="filters">Filters</label>
                </h4>
                <input id="filters" name="filters" />
              </Row>
              <Row className="mb-4">
                <h4>
                  <label for="opening-hours">Opening Hours</label>
                </h4>
                <input
                  id="opening-hours"
                  name="opening-hours"
                  type="range"
                  min="1"
                  max="24"
                />
              </Row>
            </Container>
          </Col>
          <Col xs={7}>
            <Container className="events-body p-4">
              <Row>
                {loading ? (
                  <h2 className="text-center">
                    <Spinner animation="grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </h2>
                ) : (
                  ""
                )}
                {failed ? <h2>failed</h2> : null}
                {results
                  ? results.elements.map((element, i) => (
                      <CustomCard
                        id={i}
                        name={element.tags.name}
                        latitude={element.lat}
                        longitude={element.lon}
                        address={element.tags["addr:street"]}
                        openingHours={element.tags.openingHours}
                        phoneNr={element.tags.phone}
                        email={element.tags.email}
                        link={element.tags.website}
                        type={element.tags.tourism}
                        operator={element.tags.operator}
                        wheelchair={element.tags.wheelchair}
                        description={
                          element.tags.description
                            ? element.tags.description
                            : ""
                        }
                        wikidataId={element.tags.wikidata}
                        fee={element.tags.fee}
                        setPois={setPois}
                        pois={pois}
                      />
                    ))
                  : ""}
              </Row>
            </Container>
          </Col>
          <Col xs={3}>
            <Container className="wishlist-body p-4">
              <Row>
                <h3>Wishlist</h3>
              </Row>
              <Row className="wishlist-pois p-2">
                {pois
                  ? pois.map((element, i) => (
                      <div className="wishlist-card p-2 ps-4 mb-2">
                        {element.name}
                        {/* latitude={element.lat}
                        longitude={element.lon} */}
                      </div>
                    ))
                  : ""}
              </Row>
              <Row className="m-2">
                <Button href={mapsLink} target="_blank">
                  Create new itinerary
                </Button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Events;
