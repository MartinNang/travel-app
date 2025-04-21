/**
 * An element displaying an itinerary
 * Currently used in the profile page
 */

import React from "react";
import polaroid from "../../images/polaroid.png";
import { Card, CardBody, CardHeader, CardLink } from "react-bootstrap";

const Itinerary = ({ id, title, startDate, endDate, type, events, images }) => {
  console.log("start:", startDate, "end:", endDate, "type:", type);
  return (
    <>
      <Card className="all-itinerary-container mb-3 w-100">
        <CardHeader className="all-itinerary-title">{title}</CardHeader>

        <CardBody className="all-itinerary-content">
          <div class="all-itinerary-text">
            <p>
              <strong>Start Date: </strong> {startDate ? startDate : "-"}
            </p>
            <p>
              <strong>End Date: </strong> {endDate ? endDate : "-"}
            </p>
            <p>
              <strong>Type: </strong> {type ? type : "-"}
            </p>
            {/* <p>
              <strong>Day 1 -</strong> More events
            </p>
            <p>
              <strong>Day 2 -</strong> Something new
            </p>
            <p>
              <strong>Day 3 -</strong> Great experience
            </p> */}
            <CardLink href={`/en-route/#/itinerary/${id}`}>view</CardLink>
          </div>

          {/* <div class="all-itinerary-images">
            <div class="all-itinerary-polaroid itinerary-rotated-left">
              <img src={polaroid} alt="Polaroid Image" />
            </div>
            <div class="all-itinerary-polaroid itinerary-rotated-right">
              <img src={polaroid} alt="Polaroid Image" />
            </div>
          </div> */}
          {/* 
          <div class="all-itinerary-text-right">
            <p>
              <strong>Day 4 -</strong> New fun
            </p>
            <p>
              <strong>Day 5 -</strong> Exciting stuff
            </p>
            <p>
              <strong>Day 6 -</strong> The last party
            </p>
          </div> */}
        </CardBody>
      </Card>
    </>
  );
};

export default Itinerary;
