/**
 * A header, containing a Bootstrap navbar, displayed on all pages
 */

import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsPerson } from "react-icons/bs";
const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("scrolling to top");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <header>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="navigation ">
        <Container fluid className="ms-5 me-5">
          <Navbar.Brand href="#" id="logo">
            <img
              src={"../images/logo.png"}
              alt="Travel App Logo"
              width="100"
              height="auto"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" activeKey={location.pathname}>
              <Nav.Link
                href="/travel-app/#"
                onClick={window.scrollTo(0, 0)}
                className="mx-3">
                home
              </Nav.Link>
              <Nav.Link
                href="/travel-app/#/itineraries"
                onClick={window.scrollTo(0, 0)}
                className="mx-3">
                itineraries
              </Nav.Link>
              {/* <Nav.Link
                href="/travel-app/#/feed"
                onClick={window.scrollTo(0, 0)}
                className="mx-3">
                myFeed
              </Nav.Link> */}
              <Nav.Link
                href="/travel-app/#/events"
                onClick={window.scrollTo(0, 0)}
                className="mx-3">
                events
              </Nav.Link>
              {sessionStorage.getItem("profileName") ? (
                <Nav.Link
                  href="/travel-app/#/profile"
                  onClick={window.scrollTo(0, 0)}
                  className="mx-3">
                  <BsPerson id="profile-icon" />
                  {/* <Nav.Link
                    href="/travel-app/#/profile"
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
