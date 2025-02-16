/**
 * A header, containing a Bootstrap navbar, displayed on all pages
 */

import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("scrolling to top");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <header>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="navigation">
        <Container>
          {/* <Navbar.Brand href="/CS7025-portfolio/#" id="logo"> */}
          <Navbar.Brand href="#" id="logo">
            <img src={"../images/logo.png"} alt="Travel App Logo" width="100" height="auto"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" activeKey={location.pathname}>
              <Nav.Link href="/travel-app/#" onClick={window.scrollTo(0, 0)}>
                home
              </Nav.Link>
              <Nav.Link href="/travel-app/#/itineraries" onClick={window.scrollTo(0,0)}>
                itineraries
              </Nav.Link>
              <Nav.Link href="/travel-app/#/feed" onClick={window.scrollTo(0,0)}>
                myFeed
              </Nav.Link>
              <Nav.Link href="/travel-app/#/search" onClick={window.scrollTo(0, 0)}>
                events
              </Nav.Link>
              <Nav.Link href="/travel-app/#/api" onClick={window.scrollTo(0, 0)}>
                api
              </Nav.Link>
              
              {/* <NavDropdown title="projects" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/CS7025-portfolio/#/projects/games">
                  games
                </NavDropdown.Item>
                <NavDropdown.Item href="/CS7025-portfolio/#/projects/music">
                  music
                </NavDropdown.Item>
                <NavDropdown.Item href="/CS7025-portfolio/#/projects/repositories">
                  repositories
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/CS7025-portfolio/#/projects">
                  all
                </NavDropdown.Item>
              </NavDropdown> 
              <Nav.Link href="/CS7025-portfolio/#/contact">contact</Nav.Link>*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div class="bg-rect header-rect"></div>
      </Navbar>
    </header>
  );
};

export default Header;
