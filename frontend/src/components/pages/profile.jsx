import React, { useState, useEffect } from "react";

import profilepic from "../../images/profile-pic.png";
import { useNavigate, useParams } from "react-router-dom";
import {Container, Row, Col, Button} from "react-bootstrap";
import Itinerary from "../ui/itinerary";
import axios from "axios";
import { BACKEND_URL } from "../../App";
// import Post from "../ui/post";
import Photo from "../ui/photo";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [itineraries, setItineraries] = useState([]);
  // const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState("");

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
        fetchPhotos();
        console.log("itineraries data response:", itineraries);
      })
      .catch((error) => {
        console.error(error);
        setItineraries([]);
        fetchPhotos();
      });
  }



  function fetchPhotos() {
    console.log("fetching photos for user with profileId:", profileId);
    axios
      .get("/postImages/user/" + profileId)
      .then((response) => {
        setPhotos(response.data);

        console.log("photos data response:", photos);
        // console.log("post 1", photos[0].description);
      })
      .catch((error) => {
        console.error(error);
        setPhotos([]);
      });
  }

  return (
    <>
      <Container fluid className={"m-0 header"} >
        {isLoggedInUser ? (<Row>
        </Row>) : ""}
        <Row
          className={"w-100 h-100 align-items-center justify-content-center"}>
          <Col xs={6} xl={3} className={"profile-info justify-content-center"}>
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
          <Col xs={6} xl={3}>
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
          {/*<Col xs={4} xl={2} className={"stat-item"}>
            <p class="stat-number">200</p>
            <p class="stat-title">Followers</p>
          </Col>
          <Col xs={4} xl={2} className={"stat-item"}>
            <p class="stat-number">150</p>
            <p class="stat-title">Following</p>
          </Col>*/}
          <Col xs={4} xl={2} className={"stat-item"}>
            <p class="stat-number">{photos.length}</p>
            <p class="stat-title">Photos</p>
          </Col>
          {/*</div>*/}
          <Col
            xl={2}
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
                {/*<img src={settings} alt="Settings" className="settings-btn" />*/}
              </div>
            ) : /*(
              <button className="follow-btn">Follow</button>
            )*/""}
          </Col>
          {/*<Col className={ "d-flex align-items-center justify-content-center"}>*/}

          {/*</Col>*/}
          {/*</div>*/}
        </Row>
      </Container>

      <div class="separator"></div>
      <Container className={"tab-container"}>
        <div class="tabs">
          <h2
              class={`tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => handleTabClick("all")}>
            Overview
          </h2>
          <h2
              class={`tab ${activeTab === "itineraries" ? "active" : ""}`}
              onClick={() => handleTabClick("itineraries")}>
            Itineraries
          </h2>
          <h2
              class={`tab ${activeTab === "photos" ? "active" : ""}`}
              onClick={() => handleTabClick("photos")}>
            Photos
          </h2>
        </div>
      </Container>


      <Container
        class={`tab-content ${activeTab === "all" ? "active" : ""} container tab-container`}
        id="all">
        <Row>
          <Col xs={12} lg={6}>
            <Container>
              <Row id={"itineraries"}>
              {itineraries.map((itinerary) => (
                  <Col xs={12} xl={6}>
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
          </Col>

          <Col xs={12} lg={6}>
            <Container>
              <Row id={"photos"}>
                {photos.map((photo, index) => (
                    <Col xs={12} md={6} xl={4}>
                      <Photo
                          id={index}
                          imageSrc={photo.imagePath}
                      ></Photo>
                    </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container
        className={`tab-content ${activeTab === "itineraries" ? "active" : ""} container tab-container`}
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
      <Container
        className={`tab-content ${activeTab === "photos" ? "active" : ""} tab-container`}
        id="photos">
        <Row className="collage-container">

          {/*<div class="collage-item">*/}
          {/*  <img src={polaroid} alt="Polaroid Image" />*/}
          {/*</div>*/}

          {photos.map((photo, index) => (
              <Col xs={12} md={4} xl={3}>
                <Photo
                    id={index}
                    imageSrc={photo.imagePath}
                ></Photo>
              </Col>
          ))}

      
          </Row>
      </Container>
      {/*{isLoggedInUser ?*/}
          <Container>
            <Row>
              <p>Newsletter subscription: {user.newsletter ? "yes" : "no"}</p>
            </Row>
            <Row>
              <Button href={"#/create-post"} className={"mb-2"} disabled={itineraries.length === 0}>
                Create a new post
              </Button>
              <Button href={"#/events"} className={"mb-2"}>
                Create a new itinerary
              </Button>
            </Row>
          </Container>
          {/*: ""*/}
      {/*}*/}

    </>
  );
};

export default Profile;
