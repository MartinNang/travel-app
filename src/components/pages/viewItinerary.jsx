import queryOverpass from "query-overpass";
import $ from "jquery";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "../ui/card";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ViewItinerary = () => {
  let { itineraryId } = useParams();
  const [itinerary, setItinerary] = useState([]);
  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);

  axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie";

  useEffect(() => {
    if (!loaded) {
      axios
        .get("/itineraries/" + itineraryId)
        .then((response) => {
          let itinerary = response.data;
          console.log("itinerary", itinerary);
          if (itinerary && itinerary.length > 0) {
            setItinerary(itinerary[0]);
            axios.get("/events/itinerary/" + itineraryId).then((response) => {
              let events = response.data;
              if (events && events.length > 0) {
                setEvents(events);
                console.log("events", events);
              }
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setLoaded(true);
    }
  }, [events, itinerary, loaded]);
let startDate = new Date (itinerary.start_date);
let endDate = new Date (itinerary.end_date);

  return (
    <div id="itinerary-container">
      <h1 id="itinerary-title">
        <strong> {itinerary.title} </strong>
      </h1>
      <div id="itinerary-columns">
        <div class="day-column" id="day1">
          <h2 class="day-title">{startDate.getDate()}</h2>
          
          {events.map((event) => (
            /*   <Col>
                  <Itinerary
                    id={itinerary.id}
                    title={itinerary.name}
                    startDate={itinerary.start_date}
                    endDate={itinerary.end_date}
                    type={itinerary.type}></Itinerary>
                </Col> */
                <>
                <div class="activity-card">
                <div class="tag-stack">
                  <div class="activity-tag">{event.start_time}</div>
                  <div class="activity-tag">{event.end_time}</div>
                </div>

                <div class="activity-name">{event.name}</div>
              </div>
              <div class="activity-line"></div>
              </>
              ))}

            </div>
        </div>
      </div>
    
  );
};

export default ViewItinerary;
