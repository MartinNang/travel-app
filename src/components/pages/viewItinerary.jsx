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

  return (
    <div id="itinerary-container">
      <h1 id="itinerary-title">
        <strong> {itinerary.title} </strong>
      </h1>
      <div id="itinerary-columns">
        <div class="day-column" id="day1">
          <h2 class="day-title">Day 1</h2>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 1</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 5</div>
          </div>
        </div>

        <div class="day-column" id="day2">
          <h2 class="day-title">Day 2</h2>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 1</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 5</div>
          </div>
        </div>

        <div class="day-column" id="day3">
          <h2 class="day-title">Day 3</h2>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 1</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 5</div>
          </div>
        </div>

        <div class="day-column" id="day4">
          <h2 class="day-title">Day 4</h2>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 1</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 5</div>
          </div>
        </div>

        <div class="day-column" id="day5">
          <h2 class="day-title">Day 5</h2>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 1</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>

            <div class="activity-name">ACTIVITY 5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItinerary;
