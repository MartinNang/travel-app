import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import adaptivePlugin from "@fullcalendar/adaptive";

const CreateItinerary = () => {
  const [wishlist, setWishlist] = useState([]);
  const [events, setEvents] = useState([]);
  const [tempEventTitle, setTempEventTitle] = useState("");
  const calendarRef = useRef(null); // Reference to FullCalendar
  const externalEventsRef = useRef(null); // Reference to external events container

  // Load wishlist from localStorage and make events draggable
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    if (externalEventsRef.current) {
      new Draggable(externalEventsRef.current, {
        itemSelector: ".fc-event",
        eventData: (eventEl) => {
          const data = JSON.parse(eventEl.getAttribute("data-event"));
          return { title: data.title, id: data.id };
        },
      });
    }
  }, []);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    if (!title) return;
  
    const newEvent = {
      id: Date.now().toString(), // unique ID
      name: title,
    };
  
    const updatedWishlist = [...wishlist, newEvent];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  
    e.target.reset(); // clear input
  };
  

  return (
    <article>
      <Container>
        <Row className="mt-4">
          <Col xs={12} md={8}>
            <FullCalendar
              ref={calendarRef}
              plugins={[timeGridPlugin, interactionPlugin, adaptivePlugin]}
              initialView="timeGridDay"
              slotMinTime="08:00:00"
              slotMaxTime="24:00:00"
              editable={true}
              selectable={true}
              droppable={true}
              weekends={true}
              events={events}
              eventContent={renderEventContent}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "timeGridDay,timeGridWeek",
              }}
              eventReceive={(info) => {
                const newEvent = {
                  title: info.event.title,
                  start: info.event.start,
                  id: info.event.id,
                };
              
                setEvents((prev) => [...prev, newEvent]);
                info.revert(); // Prevent duplicate
              
                // clear temp input after drop
                setTempEventTitle("");
              }}
              
              

            />


            {/* Save button (logic to add) */}
            <Row className="p-3 mt-auto">
              <Col className="d-flex justify-content-end">
                <Button>Save</Button>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={1}></Col>

          <Col xs={12} md={3} className="d-flex flex-column">
          <Container
            id="external-events"
            ref={externalEventsRef}
            className="wishlist-body p-4 flex-grow-1 d-flex flex-column justify-content-between"
          >
            <div>
              <Row>
                <h3>Wishlist</h3>
              </Row>

              <Row>
                {wishlist.map((event) => (
                  <div
                    key={event.id}
                    className="wishlist-card p-2 ps-4 mb-2 fc-event"
                    draggable="true"
                    data-event={JSON.stringify({
                      title: event.name,
                      id: event.id,
                    })}
                  >
                    {event.name}
                  </div>
                ))}
              </Row>
            </div>

            {/* Form at the bottom */}
            <Form onSubmit={handleAddToWishlist}>
              <Form.Group controlId="formWishlistEvent">
                <Form.Label> <h4 style={{color:"white"}}>Add my own event</h4></Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter event title"
                  required
                />
              </Form.Group>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>

    </article>
  );
};

export default CreateItinerary;

// Renders the event inside the calendar
function renderEventContent(eventInfo) {
  const viewType = eventInfo.view.type; // "timeGridDay" or "timeGridWeek"
  
  return (
    <div className="fc-event-content">
      {viewType === "timeGridDay" && (
        <>
          <b>{eventInfo.timeText} </b>
          <i>{eventInfo.event.title}</i>
        </>
      )}

      {viewType === "timeGridWeek" && (
        <>
          <i>{eventInfo.event.title}</i>
        </>
      )}
    </div>
  );
}
