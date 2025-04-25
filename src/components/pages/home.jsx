/**
 * En Route - Home page
 */

import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../styles/homepage.css";
import aboutUsImg from "../../images/aboutus.jpg";
import mountainsImg from "../../images/mountains.jpg";
import tokyoImg from "../../images/tokyo.jpg";
import newyorkImg from "../../images/newyork.jpg";
import signinImg from "../../images/signin.jpg";
import mapsImg from "../../images/maps.png";
import computerImg from "../../images/computer.png";
import japanImg from "../../images/japan.jpg";
import parisImg from "../../images/paris.jpg";
import cloud1Img from "../../images/cloud1.png";
import cloud2Img from "../../images/cloud2.png";
import cloud3Img from "../../images/cloud3.png";
import cloud4Img from "../../images/cloud4.png";
import cloud5Img from "../../images/cloud5.png";
import video from "../../images/video.mp4";
import { Card } from "react-bootstrap";

// Icons
//import profile from "../assets/img/Profile.jpeg";

const Home = () => {
  //this scirpt will be put into a javascript file don't worry

  let currentSlide = 1; // Track which slide is currently being displayed
  const totalSlides = 3; // Total number of slides
  let isContentVisible = false; // Track whether new content is visible

  function toggleContent() {
    console.log("toggle content");
    // Hide the current slide
    document.querySelector(`.slide${currentSlide}`).style.display = "none";

    // Move to the next slide
    currentSlide = (currentSlide % totalSlides) + 1;

    // Select the about-section element
    const aboutSection = document.querySelector(".about-section");

    // Update background image based on the current slide
    if (currentSlide === 1) {
      aboutSection.style.backgroundImage = aboutUsImg;
    } else if (currentSlide === 2) {
      aboutSection.style.backgroundImage = mountainsImg;
    } else if (currentSlide === 3) {
      aboutSection.style.backgroundImage = tokyoImg;
    }

    // Change the title dynamically
    document.querySelector(".about-section h2").innerText = `About Us`;

    // Show the new about us slide
    document.querySelector(`.slide${currentSlide}`).style.display = "block";

    // Change the arrow to left when on the last slide
    document.querySelector(".arrow").innerHTML =
      currentSlide === totalSlides ? "&#8592;" : "&#8594;";

    // Toggle state (not really necessary in this version)
    isContentVisible = true;
  }

  useEffect(() => {
    const computerImage = document.getElementById('computer-image');
    const dashboard = document.querySelector(".dashboard");
    const video = document.getElementById('computer-video');
    const stepOne = document.getElementById('step-one');
    const stepTwo = document.getElementById('step-two');
    const stepThree = document.getElementById('step-three');
    const stepFour = document.getElementById('step-four');

    let videoTimeout;

    computerImage.addEventListener('mouseenter', () => {
      document.body.classList.add('computer-hover-active');
      stepOne.innerText = "1.";
      stepTwo.innerText = "2.";
      stepThree.innerText = "3.";
      stepFour.innerText = "4.";

      // Delay showing the video
      videoTimeout = setTimeout(() => {
        video.style.display = 'block';
      }, 500); // 500ms = 0.5 seconds
    });

    computerImage.addEventListener('mouseleave', () => {
      document.body.classList.remove('computer-hover-active');
      stepOne.innerText = "Step One";
      stepTwo.innerText = "Step Two";
      stepThree.innerText = "Step Three";
      stepFour.innerText = "Step Four";

      // Cancel the timeout and hide the video immediately
      clearTimeout(videoTimeout);
      video.style.display = 'none';
    });
  })

  return (
    <>
      <div class="hero">
        <img src={signinImg} alt="Signin Image"/>
        {/*cloud animation update*/}
        <div class="clouds">
          <img src={cloud1Img} style={{"--i":1}}/>
          <img src={cloud2Img} style={{"--i":2}}/>
          <img src={cloud3Img} style={{"--i":3}}/>
          <img src={cloud4Img} style={{"--i":4}}/>
          <img src={cloud5Img} style={{"--i":5}}/>
        </div>
        <h1>Your Journey, Perfectly Planned.</h1>
        {!sessionStorage.getItem("profileName") ? (
            <Link to={"/sign-in"}>
              <button className="btn btn-primary" type="submit">
                Sign In
              </button>
            </Link>
        ) : (
            ""
        )}
      </div>

      {/* <!-- Dashboard Section --> */}
      <section class="dashboard">
        <img src={mapsImg} alt="Dashboard Image"/>
        <img src={computerImg} id="computer-image" alt="Computer Image"/>
        {/*Mock up video*/}
        <video id="computer-video" className="delayed-video" src={{video}} muted autoPlay loop
               playsInline></video>

        <p>A Step By Step Guide On How To Navigate Our Website</p>
      </section>

      <section class="dropdown-section">
        <div
            class="dropdown-tab"
            style={{}}>
          <span id={"step-one"}>Step One</span>
          <div class="dropdown-content">Sign in or create an account to unlock access to suggested itineraries and
            exclusive features.</div>
        </div>
        <div
          class="dropdown-tab"
          style={{}}>
          <span id={"step-two"}>Step Two</span>
          <div class="dropdown-content">After creating an account, select your destination on the interactive map.
          </div>
        </div>
        <div class="dropdown-tab" style={{}}>
          <span id={"step-three"}>Step Three</span>
          <div class="dropdown-content">Choose a suggested itinerary for your destination or create your own.</div>
        </div>
        <div
          class="dropdown-tab"
          style={{}}>
          <span id={"step-four"}> Step Four</span>
          <div class="dropdown-content">Save your itinerary and travel documents to your profile and wallet, and
            upload trip photos to personalize your page.</div>
        </div>
      </section>
      {/* <!-- About Us Section --> */}
      <div id="anchor"> </div>
      <div class="about-section" id="anchor">
        <div class="about-overlay"></div>
        <h2>About Us</h2>
        <div class="lines">
          <div class="line"></div>
        </div>

        {/* <!-- Arrow (loop function) --> */}
        <div class="arrow" onClick={toggleContent}>
          &#8594; {/* <!-- Right Arrow --> */}
        </div>

        {/* <!--Slide 1 --> */}
        <div class="new-content slide1">
          <p class="new-text">
            EnRoute Travel is revolutionizing the way people plan their trips by
            offering personalized itineraries tailored to individual interests,
            alongside expertly curated travel plans for those seeking
            inspiration.
            <br />
            <br />
            Our platform seamlessly integrates user preferences—whether it's
            adventure, culture, relaxation, or gastronomy—into customized travel
            schedules, ensuring every journey is uniquely fulfilling. <br />
            <br />
            For those who prefer ready-made plans, our carefully crafted
            itineraries take the hassle out of decision-making, providing
            seamless experiences backed by expert recommendations. <br />
            <br />
            At EnRoute Travel, we believe that planning a trip should be as
            enjoyable as the journey itself, which is why we focus on
            eliminating the stress of logistics, bookings, and scheduling.{" "}
            <br />
            <br />
            With our intuitive platform, real-time updates, and user-friendly
            design, we strive to make travel effortless, allowing our customers
            to focus on what truly matters—exploring the world with ease and
            confidence.
          </p>
        </div>

        {/* <!-- Slide 2 --> */}
        <div class="new-content slide2">
          <p class="new-text">
            At EnRoute Travel, we believe that every journey should be as unique
            as the traveler.
            <br />
            <br />
            Our smart itinerary builder curates experiences based on personal
            interests, combining hidden gems, must-see landmarks, and seamless
            travel logistics. Whether you're a thrill-seeker chasing adventure,
            a foodie indulging in local flavors, or a culture enthusiast
            exploring history, our platform ensures a tailor-made experience
            just for you. <br />
            <br />
            For those who prefer a hassle-free approach, our expertly crafted
            itineraries offer the perfect balance of structure and flexibility,
            allowing you to enjoy your trip without the stress of planning.
            <br />
            <br />
            With real-time updates, seamless booking integration, and
            user-friendly navigation, EnRoute Travel transforms trip planning
            into an effortless and exciting experience, giving you more time to
            explore, relax, and create unforgettable memories. <br />
            <br />
            Travel smarter, stress less, and let EnRoute Travel take you exactly
            where you want to go.
          </p>
        </div>

        {/* <!-- Slide 3 --> */}
        <div class="new-content slide3">
          <p class="new-text">
            EnRoute Travel was built by a passionate team of travel enthusiasts,
            tech innovators, and customer-first visionaries who share one
            mission—to make travel planning effortless and enjoyable for
            everyone. <br />
            <br />
            With backgrounds in software development, hospitality, and
            adventure-seeking, our team understands the challenges travelers
            face and has worked tirelessly to create an intuitive, reliable, and
            personalized experience.
            <br />
            <br />
            Every feature of our platform is designed with the traveler in mind,
            ensuring seamless itineraries, stress-free bookings, and
            unforgettable journeys. <br />
            <br />
            We believe that exploring the world should be exciting, not
            overwhelming, which is why we are committed to continuously
            improving our platform, listening to our users, and making sure
            every trip planned with EnRoute Travel is nothing short of
            extraordinary. <br />
            <br />
            Built by travelers, for travelers—because you deserve the best
            adventure, every time.
          </p>
        </div>
      </div>
      <section class="recommendations">
        <h2>
          Recommendations by <em>enRoute</em>
        </h2>
        <Container class="cards">
          <Row className="mt-4">
            <Col xs={12} md={6} lg={4}>
              <Card className="recommendation-card">
                <img src={newyorkImg} alt="Destination 1" height="110%" />
                <h3>Lazy New York City Itinerary</h3>
                <p>Some details here...</p>
                <button>View</button>
              </Card>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mt-xl-0 mt-sm-2 mt-xs-2 mt-md-0 mt-lg-0">
              <Card className="recommendation-card">
                <img src={tokyoImg} alt="Destination 2" />
                <h3>Cozy Tokyo Itinerary</h3>
                <p>Some details here...</p>
                <button>View</button>
              </Card>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mt-xl-0 mt-sm-2 mt-xs-2 mt-md-0 mt-lg-0">
              <Card className="recommendation-card">
                <img src={parisImg} alt="Destination 3" />
                <h3>Adventurous Paris Itinerary</h3>
                <p>Some details here...</p>
                <button>View</button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
