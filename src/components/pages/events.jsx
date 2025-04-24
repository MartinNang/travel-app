import $ from "jquery";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "../ui/card";
import { Spinner } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { BsX, BsTrash3 } from "react-icons/bs";

const cities = [
  {
    displayName: "Dublin",
    overpassName: "Dublin",
  },
  {
    displayName: "Tokyo",
    overpassName: "東京都",
  },
  {
    displayName: "New York City",
    overpassName: "City of New York",
  },
  {
    displayName: "Paris",
    overpassName: "Paris",
  },
];
const tags = [
  "attraction",
  "artwork",
  "aquarium",
  "gallery",
  "hotel",
  "museum",
  "zoo",
  "bar",
  "cafe",
  "pub",
  "restaurant",
  "events_venue",
  "casino",
  "cinema",
  "arts_centre",
  "library",
  "university",
  "yes",
];

const Events = ({ wishlist, setWishlist }) => {
  const [city, setCity] = useState({
    displayName: "Dublin",
    overpassName: "Dublin",
  });
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [results, setResults] = useState(null);
  const [filter, setFilter] = useState(null);

  // const [mapsLink, setMapsLink] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""),
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
      console.log("search term:", searchTerm);
      const requestData = {
        data: `
          [out:json]
          [timeout:25]
          ;
          area["name"="${city.overpassName}"];
          (
            nwr(area)["tourism${
              filter && filter.length > 0 ? '"="' + filter : ""
            }"][wikidata]${
          searchTerm && searchTerm.length > 0
            ? '["name"~"' + searchTerm + '",i]'
            : ""
        };
            nwr(area)["amenity${
              filter && filter.length > 0 ? '"="' + filter : ""
            }"][wikidata]${
          searchTerm && searchTerm.length > 0
            ? '["name"~"' + searchTerm + '",i]'
            : ""
        };
          );
          out center 30;
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
    console.log("wishlist", wishlist);
  }, [wishlist, city, filter]);

  function removeFromWishlist(index) {
    console.log("removing item from wishlist with index", index);
    let w = wishlist;
    w.splice(index, 1);
    setWishlist(w);
  }

  return (
    <article>
      <Container>
        <Row className="mt-4">
          <Col xs={12} lg={4} xl={3}>
            <Form className="d-flex p-0 row search-bar" onSubmit={onFormSubmit}>
              <Form.Group
                as={Row}
                className="m-0 mb-3 p-2"
                controlId="formPlaintextEmail">
                <Col xs="5" sm="3" xl="4" className="p-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="w-100">
                      {city.displayName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu value={city.displayName}>
                      {cities.map((city) => (
                        <Dropdown.Item onClick={() => setCity(city)}>
                          {city.displayName}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col xs="10" sm="7" xl="6" className="p-0">
                  <Form.Control
                    type="search"
                    className="w-100"
                    placeholder="e.g. Temple Bar"
                    aria-label="Search"
                    onChange={onInput}
                    value={searchTerm}
                  />
                </Col>
                <Col xs="2" className="p-0">
                  <Button variant="primary" type="submit" className="w-100">
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
                <Form.Label column>Filter by</Form.Label>
                <Col sm="12">
                  <Dropdown>
                    <Dropdown.Toggle>
                      {filter ? filter : "Choose Filter"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="filter-dropdown">
                      {tags.map((tag) => (
                        <Dropdown.Item onClick={() => setFilter(tag)}>
                          {tag}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>{" "}
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} lg={8} xl={6} className="mb-3 pb-3">
            <Container className="events-body p-4">
              <Row className="p-4" style={{ height: "100%" }}>
                <h2
                  className="text-center align-self-center"
                  style={{ top: "50%", color: "white" }}>
                  {loading ? (
                    <Spinner animation="grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : results === null ? (
                    "Search for attractions for your itinerary!"
                  ) : results.elements.length === 0 ? (
                    "No results"
                  ) : (
                    ""
                  )}
                </h2>

                {failed ? <h2>failed</h2> : null}
                {results
                  ? results.elements.map((element, i) =>
                      element.tags.name ? (
                        <CustomCard
                          id={i}
                          name={
                            element.tags["name:en"]
                              ? element.tags["name:en"]
                              : element.tags.name
                          }
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
                          image={element.tags.image}
                        />
                      ) : (
                        ""
                      )
                    )
                  : ""}
              </Row>
            </Container>
            {/* <Pagination className="mt-2 justify-content-center">
              <Pagination.Item key={1} active={1 === activePage}>
                1
              </Pagination.Item>
              <Pagination.Item key={2} active={2 === activePage}>
                2
              </Pagination.Item>
              <Pagination.Item key={3} active={3 === activePage}>
                3
              </Pagination.Item>
            </Pagination> */}
          </Col>
          <Col xs={12} xl={3}>
            <Container className="wishlist-body p-4">
              <Row>
                <Col>
                  <h2>Wishlist</h2>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setWishlist([]);
                    }}
                    className="border-0 ms-auto float-end">
                    Clear all
                    <BsTrash3 className="ms-1"></BsTrash3>
                  </Button>
                </Col>
              </Row>
              <Row className="wishlist-pois p-2">
                {wishlist
                  ? wishlist.map((element, i) => (
                      <div className="wishlist-card p-2 ps-4 mb-2 align-items-center">
                        <p className="my-auto">{element.name}</p>
                        {/* latitude={element.lat}
                        longitude={element.lon} */}
                        <Button
                          onClick={() => {
                            setWishlist(
                              wishlist.filter((e) => e.name !== element.name)
                            );
                          }}
                          className="bg-transparent border-0 ms-auto">
                          <BsX></BsX>
                        </Button>
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
