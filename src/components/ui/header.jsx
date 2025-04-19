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

const Header = () => {
  const location = useLocation();
  const [profileImage, setProfileImage] = useState(
    sessionStorage.getItem("profileImage")
  );

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
              {sessionStorage.getItem("profileName") ? (
                <Nav.Link
                  href={`/en-route/#/profile/${sessionStorage.getItem("id")}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mx-3">
                  {profileImage ? (
                    <img
                      id="profile-img"
                      alt={"profile"}
                      src={BACKEND_URL + profileImage} ></img>
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
