/**
 * An element displaying an itinerary
 * Currently used in the profile page
 */

import React from "react";
import { Card, CardBody, CardHeader, CardLink } from "react-bootstrap";

export class ItineraryType {
  static LAZY = "lazy";
  static ADVENTUROUS = "adventurous";
  static TOURISTIC = "touristic";
  static ORIGINAL = "original";

  static valueOf(num) {
    switch (num) {
      case 1:
        return this.LAZY;
      case 2:
        return this.ADVENTUROUS;
      case 3:
        return this.TOURISTIC;
      case 4:
        return this.ORIGINAL;
    }
  }
}

const Itinerary = ({ id, title, startDate, endDate, type}) => {
  console.log("start:", startDate, "end:", endDate, "type:", type);
  let start = new Date(startDate);
  let end = new Date(endDate);

  return (
    <>
      <Card className="all-itinerary-container mb-3 w-100">
        <CardHeader className="all-itinerary-title bg-transparent"><h3>{title}</h3></CardHeader>

        <CardBody className="all-itinerary-content">
          <div class="all-itinerary-text">
            <p>
              <strong>Start Date: </strong> {startDate ? start.toDateString() : "-"}
            </p>
            <p>
              <strong>End Date: </strong> {endDate ? end.toDateString() : "-"}
            </p>
            <p>
              <strong>Type: </strong> {type ? ItineraryType.valueOf(type) : "-"}
            </p>

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

        </CardBody>
      </Card>
    </>
  );
};

export default Itinerary;
