import queryOverpass from "query-overpass";
import $ from "jquery";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "./card";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = ({}) => {
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
        <Row>
          <h1>Points of interest</h1>
        </Row>
        <Row>
          <Form className="d-flex" onSubmit={onFormSubmit}>
            <Form.Control
              type="search"
              placeholder="e.g. Dublin"
              className="me-2"
              aria-label="Search"
              onChange={onInput}
              value={searchTerm}
            />
            <Button variant="primary" type="submit">
              Search{loading ? "ing..." : ""}
            </Button>
          </Form>
        </Row>
        <Row className="mt-4">
          <Col xs={8}>
            <Container style={{ maxHeight: "100vh", overflowY: "auto" }}>
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
                        description={element.tags.description}
                        fee={element.tags.fee}
                        setPois={setPois}
                        pois={pois}
                      />
                    ))
                  : ""}
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col>
                  <h3>My Waypoints</h3>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setPois([]);
                    }}>
                    Clear route
                  </Button>
                </Col>
              </Row>
              <Row>
                {pois
                  ? pois.map((element, i) => (
                      <p>
                        latitude={element.lat}
                        longitude={element.lon}
                      </p>
                    ))
                  : ""}
              </Row>
              <Row>
                <Button href={mapsLink} target="_blank">
                  Open route in Google Maps
                </Button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Search;
