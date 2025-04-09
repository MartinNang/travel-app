import queryOverpass from "query-overpass";
import $ from "jquery";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "../ui/card";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const cities = ["Dublin", "Tokyo", "New York City", "Paris"];
const amenitites = [
  "bar",
  "cafe",
  "ice_cream",
  "pub",
  "restaurant",
  "events_venue",
  "casino",
  "cinema",
  "arts_centre",
  "library",
  "university",
];

const tourism = [
  "attraction",
  "artwork",
  "aquarium",
  "gallery",
  "hotel",
  "museum",
  "zoo",
  "yes",
];

const Events = ({ wishlist, setWishlist }) => {
  const [city, setCity] = useState("Dublin");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [results, setResults] = useState(null);
  const [filter, setFilter] = useState(null);

  // const [mapsLink, setMapsLink] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""),
    onInput = ({ target: { value } }) => setSearchTerm(value),
    onFormSubmit = (e) => {
      // console.log("city", city);
      console.log("submitting");
      e.preventDefault();
      setLoading(true);
      setFailed(false);
      setResults();
      // console.log(value);
      // nwr(area)["tourism"~"museum|gallery"];
      // nwr(area)["amenity"~"cafe|bar"];
      console.log("search term:", searchTerm);
      const requestData = {
        data: `
          [out:json]
          [timeout:25]
          ;
          area[name="${city}"];
          (
            nwr(area)["tourism${
              filter && filter.length > 0 ? "=" + filter : ""
            }"]["wikidata"]${
          searchTerm && searchTerm.length > 0
            ? '["name"~"' + searchTerm + '"]'
            : ""
        };
            nwr(area)["amenity"]["wikidata"]${
              searchTerm && searchTerm.length > 0
                ? '["name"~"' + searchTerm + '"]'
                : ""
            };
          );
          out center 20;
      `,
      };
      console.log("request", requestData);

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
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log("city", city);
    console.log("filter", filter);
  }, [wishlist, city, filter]);

  function changeCity(event) {
    // i18n.changeLanguage(event.target.value)
    console.log("test", event);
    setCity(event.target.value);
  }

  return (
    <article>
      <Container>
        <Row className="mt-4">
          <Col xs={12} md={6} lg={3}>
            <Form className="d-flex p-0 row search-bar" onSubmit={onFormSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail">
                <Col xs="3" className="p-0">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {city}
                    </Dropdown.Toggle>

                    <Dropdown.Menu value={city} onChange={changeCity}>
                      {cities.map((city) => (
                        <Dropdown.Item onClick={() => setCity(city)}>
                          {city}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col xs="6" className="p-0">
                  <Form.Control
                    type="search"
                    placeholder="e.g. Louvre"
                    aria-label="Search"
                    onChange={onInput}
                    value={searchTerm}
                  />
                </Col>
                <Col xs="2" className="p-0">
                  <Button variant="primary" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </Button>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Filter by
                </Form.Label>
                <Col sm="12">
                  <Dropdown>
                    <Dropdown.Toggle>
                      {filter ? filter : "Choose Filter"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu value={city} onChange={changeCity}>
                      {tourism.map((tourismTag) => (
                        <Dropdown.Item onClick={() => setFilter(tourismTag)}>
                          {tourismTag}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>{" "}
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} md={6} className="mb-3 pb-3">
            <Container className="events-body p-4">
              <Row className="p-4" style={{ height: "100%" }}>
                <h2
                  className="text-center align-self-center"
                  style={{ top: "50%", color: "white" }}>
                  {loading ? (
                    <Spinner animation="grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    "No results"
                  )}
                </h2>

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
                        wishlist={wishlist}
                        setWishlist={setWishlist}
                      />
                    ))
                  : ""}
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={3}>
            <Container className="wishlist-body p-4">
              <Row>
                <h3>Wishlist</h3>
              </Row>
              <Row className="wishlist-pois p-2">
                {wishlist
                  ? wishlist.map((element, i) => (
                      <div className="wishlist-card p-2 ps-4 mb-2">
                        {element.name}
                        {/* latitude={element.lat}
                        longitude={element.lon} */}
                      </div>
                    ))
                  : ""}
              </Row>
              <Row className="m-2">
                {/* <Button href={mapsLink} target="_blank"> */}
                <Button href={"#/create-itinerary"}>
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
