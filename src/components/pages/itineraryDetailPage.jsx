import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import itineraryData from "../../data/itinerariesTexts.json";
import CoverflowCarousel from "../ui/coverflowCarousel";
import "../../styles/ItineraryDetailPage.css";

const ItineraryDetailPage = ({ city, category }) => {
  const [activeIndex, setActiveIndex] = useState(0); // tracks which day is active

  const cityItinerary = itineraryData[city]?.find(
    (itinerary) => itinerary.category === category
  );

  if (!cityItinerary) {
    return <div>Itinerary not found for this city and category.</div>;
  }

  const dailyCards = cityItinerary.days.map((day, index) => (
    <div className="day-card" key={index}>
      <h2 className="day-title">
        {day.day_nb} - {day.day_title}
      </h2>
      <p className="day-activity">
        {day.day_description || "Details coming soon!"} {/* Alternative if no description is found */}
      </p>
    </div>
  ));

  const dailyPhotos = cityItinerary.days[activeIndex].day_images.slice(0, 5).map((img, index) => ( // slice(0,5) makes sure there are only 5 photos
    <img
      key={index}
      src={`./${img}`}
      alt={`polaroid-${index}`}
      className="polaroid"
    />
  ));


  return (
    <div className="itinerary-container">
      <Container>
        {/* Title section */}
        <Row>
          <Col>
            <div className="title-section">
              <div className="tour-title">{cityItinerary.title}</div>
            </div>
          </Col>
        </Row>

        {/* Day cards - Itineraries description */}
        <Row className="itineraries-description-cards">
          <Col>
            <CoverflowCarousel items={dailyCards} onSlideChange={setActiveIndex} />
          </Col>
        </Row>

        {/* Button - Positioned at the bottom right */}
        <Row className="justify-content-end">
          <Col xs="auto">
            <Button className="btn-pdf">Download as PDF</Button>
          </Col>
        </Row>

          <div className="images-polaroids">
            {dailyPhotos}
          </div>
      </Container>
    </div>
  );
};

export default ItineraryDetailPage;
