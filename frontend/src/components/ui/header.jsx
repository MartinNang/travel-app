/**
 * A header, containing a Bootstrap navbar, displayed on all pages
 */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsPerson } from "react-icons/bs";
import logoImg from "../../images/logo.png";
import { BACKEND_URL } from "../../App";
import { Form, Row, Col, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Header = () => {
  const location = useLocation();
  const [profileImage, setProfileImage] = useState(
    sessionStorage.getItem("profileImage")
  );
  const [searchTerm, setSearchTerm] = useState(""),
    onInput = ({ target: { value } }) => {
      setSearchTerm(value);
      console.log("search term", searchTerm);
      searchUsers(value);
    };
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie";

  useEffect(() => {
    console.log("scrolling to top");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  function searchUsers(value) {
    console.log("sending request:", value);
    setLoading(true);
    axios
      .get("/users/profileName/" + value)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setUsers(response.data);
          console.log("fetched users", users);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <header>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="navigation ">
        <Container fluid className="ms-5 me-5">
          <Navbar.Brand href="#" id="logo">
            <img
              src={logoImg}
              alt="Travel App Logo"
              width="100"
              height="auto"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto align-items-center"
              activeKey={location.pathname}>
              <Nav.Link
                href="/en-route/#"
                onClick={() => window.scrollTo(0, 0)}
                className="mx-3">
                home
              </Nav.Link>
              <Nav.Link
                href="/en-route/#/itineraries"
                onClick={() => window.scrollTo(0, 0)}
                className="mx-3">
                itineraries
              </Nav.Link>
              {/* <Nav.Link
                href="/en-route/#/feed"
                onClick={window.scrollTo(0, 0)}
                className="mx-3">
                myFeed
              </Nav.Link> */}
              <Nav.Link
                href="/en-route/#/events"
                onClick={() => window.scrollTo(0, 0)}
                className="mx-3">
                events
              </Nav.Link>
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle
                        className="bg-transparent"
                        id="user-search">
                        <Form.Control
                          type="text"
                          autoComplete="off"
                          placeholder="Search Users"
                          onChange={onInput}
                          className="mr-sm-2"
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <p>
                          {loading ? (
                            <Skeleton count={3} />
                          ) : (
                            users.map((user) => (
                              <Dropdown.Item
                                key={user}
                                eventKey={user}
                                href={`/en-route/#/profile/${user.id}`}>
                                {user.profileName}
                              </Dropdown.Item>
                            ))
                          )}
                        </p>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Form>
              {sessionStorage.getItem("profileName") ? (
                <Nav.Link
                  href={`/en-route/#/profile/${sessionStorage.getItem("id")}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mx-3">
                  {profileImage ? (
                    <img
                      id="profile-img"
                      alt={"profile"}
                      src={BACKEND_URL + profileImage}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "images/icon_set/user_profile.png";
                      }}></img>
                  ) : (
                    <BsPerson id="profile-icon" />
                  )}
                  {/* <Nav.Link
                    href="/en-route/#/profile"
                    onClick={window.scrollTo(0, 0)}>
                    {sessionStorage.getItem("profileName")}
                  </Nav.Link> */}
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
