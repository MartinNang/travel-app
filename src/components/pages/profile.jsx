import React, { useState, useEffect } from "react";

import profilepic from "../../images/profile-pic.png";
import polaroid from "../../images/polaroid.png";
import settings from "../../images/settings.png";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Itinerary from "../ui/itinerary";
import axios from "axios";
import { BACKEND_URL } from "../../App";
import Pagination from "react-bootstrap/Pagination";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [itineraries, setItineraries] = useState([]);
  const [user, setUser] = useState("");
  const [active, setActive] = useState(1);

  let { profileId } = useParams();
  console.log("profile id:", profileId);

  const [isLoggedInUser, setIsLoggedInUser] = useState(
    profileId === sessionStorage.getItem("id")
  );
  console.log(
    "is this the profile page of the currently logged in user?",
    isLoggedInUser
  );

  const [profileImage, setProfileImage] = useState(
    isLoggedInUser ? sessionStorage.getItem("profileImage") : undefined
  );

  const navigate = useNavigate();

  axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie";

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    console.log("user", user.id, "url", profileId);
    if (!user || user.id !== parseInt(profileId)) {
      console.log("fetch data");
      fetchData();
    }
    setIsLoggedInUser(profileId === sessionStorage.getItem("id"));
    // setProfileImage(sessionStorage.getItem("profileImage"));
  }, [user, itineraries, activeTab, profileId, isLoggedInUser, profileImage]);

  function fetchData() {
    console.log("fetching user with profileId:", profileId);
    axios
      .get("/users/" + profileId)
      .then((response) => {
        let users = response.data;
        if (users && users.length > 0) {
          setUser(users[0]);
          setProfileImage(users[0].profileImage);
          console.log("user", users[0]);
          fetchItineraries();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function fetchItineraries() {
    console.log("fetching itineraries for user with profileId:", profileId);
    axios
      .get("/itineraries/user/" + profileId)
      .then((response) => {
        let itineraries = response.data;
        setItineraries(itineraries);

        console.log("itineraries data response:", itineraries);
      })
      .catch((error) => {
        console.error(error);
        setItineraries([]);
      });
  }

  return (
    <>
      <Container fluid className={"m-0 header"}>
        <Row
          className={"w-100 h-100 align-items-center justify-content-center"}>
          <Col xs={6} xl={2} className={"profile-info justify-content-center"}>
            <img
              src={profileImage ? BACKEND_URL + profileImage : profilepic}
              alt="User Profile"
              className="profile-pic"
              onError={({ currentTarget }) => {
                currentTarget.onError = null;
                currentTarget.src = "images/profile_page/profile-pic.png";
              }}
            />
          </Col>
          <Col xs={6} xl={2}>
            {/*<div class="user-details w-100">*/}
            <h1 class="username">{user.profileName}</h1>
            {/*<p class="status">This is a user status</p>*/}
            {/*</div>*/}
          </Col>

          {/*<div class="stats-follow">*/}
          {/*  <div class="stats">*/}
          <Col xs={4} xl={2} className={"stat-item"}>
            <p class="stat-number">{itineraries.length}</p>
            <p class="stat-title">Trips</p>
          </Col>
          <Col xs={4} xl={2} className={"stat-item"}>
            <p class="stat-number">200</p>
            <p class="stat-title">Followers</p>
          </Col>
          <Col xs={4} xl={2} className={"stat-item"}>
            <p class="stat-number">150</p>
            <p class="stat-title">Following</p>
          </Col>
          {/*</div>*/}
          <Col
            xl={1}
            className={"d-flex align-items-center justify-content-center"}>
            {isLoggedInUser ? (
              <div>
                {" "}
                <button
                  className="follow-btn bg-danger"
                  onClick={(e) => {
                    sessionStorage.removeItem("id");
                    sessionStorage.removeItem("email");
                    sessionStorage.removeItem("password");
                    sessionStorage.removeItem("profileImage");
                    sessionStorage.removeItem("profileName");
                    navigate("/");
                  }}>
                  Sign out
                </button>
                <img src={settings} alt="Settings" className="settings-btn" />
              </div>
            ) : (
              <button className="follow-btn">Follow</button>
            )}
          </Col>
          {/*<Col className={ "d-flex align-items-center justify-content-center"}>*/}

          {/*</Col>*/}
          {/*</div>*/}
        </Row>
      </Container>

      <div class="separator"></div>
      <div class="tabs">
        <div
          class={`tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => handleTabClick("all")}>
          Overview
        </div>
        <div
          class={`tab ${activeTab === "itineraries" ? "active" : ""}`}
          onClick={() => handleTabClick("itineraries")}>
          Itineraries
        </div>
        <div
          class={`tab ${activeTab === "photos" ? "active" : ""}`}
          onClick={() => handleTabClick("photos")}>
          Photos
        </div>
      </div>

      <Container
        class={`tab-content ${activeTab === "all" ? "active" : ""}`}
        id="all">
        <Row>
          <Col xs={6}>
            <Row id={"itineraries"}>
              {itineraries.map((itinerary) => (
                <Col>
                  <Itinerary
                    id={itinerary.id}
                    title={itinerary.name}
                    startDate={itinerary.start_date}
                    endDate={itinerary.end_date}
                    type={itinerary.type}></Itinerary>
                </Col>
              ))}
            </Row>
          </Col>

          <Col class="all-photo-collage-container">
            <div class="all-photo-row">
              <div class="all-photo">
                <img src={polaroid} alt="Event 1" />
              </div>
              <div class="all-photo">
                <img src={polaroid} alt="Event 2" />
              </div>
              <div class="all-photo">
                <img src={polaroid} alt="Event 3" />
              </div>
            </div>
            <div class="all-photo-row">
              <div class="all-photo">
                <img src={polaroid} alt="Event 4" />
              </div>
              <div class="all-photo">
                <img src={polaroid} alt="Event 5" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className={`tab-content ${activeTab === "itineraries" ? "active" : ""}`}
        id="itineraries">
        <Row>
          {itineraries.map((itinerary) => (
            <Col xs={4}>
              <Itinerary
                id={itinerary.id}
                title={itinerary.name}
                startDate={itinerary.start_date}
                endDate={itinerary.end_date}
                type={itinerary.type}></Itinerary>
            </Col>
          ))}
        </Row>
      </Container>
      <div
        class={`tab-content ${activeTab === "photos" ? "active" : ""}`}
        id="photos">
        <div class="collage-container">
          <div class="collage-item">
            <img src={polaroid} alt="Polaroid Image" />
          </div>
          <div class="collage-item">
            <img src={polaroid} alt="Polaroid Image" />
          </div>
          <div class="collage-item">
            <img src={polaroid} alt="Polaroid Image" />
          </div>
          <div class="collage-item">
            <img src={polaroid} alt="Polaroid Image" />
          </div>
          <div class="collage-item">
            <img src={polaroid} alt="Polaroid Image" />
          </div>
          <div class="collage-item">
            <img src={polaroid} alt="Polaroid Image" />
          </div>
          <div class="collage-item">
            <img src={polaroid} alt="Polaroid Image" />
          </div>
          <div class="collage-item">
            <img src={polaroid} alt="Polaroid Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
