import queryOverpass from "query-overpass";
import $ from "jquery";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "../ui/card";
import Day from "../ui/day";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewItinerary = () => {
  let { itineraryId } = useParams();
  const [itinerary, setItinerary] = useState([]);
  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [days, setDays] = useState([]);

  axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie";

  function createDays(events) {
      let days = new Map();
      let i = 0;
      // let previousDate = Date.parse(events[0].startDate);
      for (; i < events.length; i++) {
          // get date
          const event = events[i];
          console.log("event", event);
          let eventStartDate = new Date(event.start_time).setHours(0, 0, 0, 0);
          console.log("eventStartDate", eventStartDate, event.start_time);
          // create new day entry
          const doesDayExist = !!days.get(eventStartDate);
          console.log("has this entry been created already?", doesDayExist)

          if (doesDayExist) {
              console.log("before:", days.get(eventStartDate));
              let day = days.get(eventStartDate);
              day.push(event);
              days.set(eventStartDate, day);
              console.log("after:", days.get(eventStartDate));
          } else {
              days.set(eventStartDate, [event]);
          }
      }
      console.log("days", days);
      setDays(days);
  }

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
                createDays(events);
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
          <Container>
              <Row>
                  {Array.from(days.entries()).map((day, index) => (
                      <Col xs={12} lg={6} className={"mb-3"}>
                          <Day key={index} day={day}>
                          </Day>
                      </Col>

                  ))}
              </Row>

          </Container>

      </div>
    </div>
    
  );
};

export default ViewItinerary;
