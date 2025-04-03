import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap";
import React, { useEffect, useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"
import adaptivePlugin from "@fullcalendar/adaptive";




const CreateItinerary = ({}) => {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);


  const calendarRef = useRef(""); // Reference to FullCalendar instance

   // State to hold dynamic events
   const [events, setEvents] = useState([]);


  // Function to handle event creation from Wishlist
  const handleDropEvent = (info) => {
    const newEvent = {
      title: info.draggedEl.innerText, // Get event title from dragged element
      start: info.date, // Start date/time is the dropped position
    };

    setEvents([...events, newEvent]); // Add the new event to state

    // Optionally, update FullCalendar directly using the API
    const calendar = calendarRef.current.getApi();
    calendar.addEvent(newEvent); // Add the event to FullCalendar directly
  };


 // Function to handle event creation
  const handleAddEvent = (e) => {
    e.preventDefault();
    
    // Get the values from the form
    const title = e.target.title.value;
    const date = e.target.date.value;

    // Create the event object
    const newEvent = {
      title: title,
      start: new Date(date),
    };

    // Update the state to add the new event
    setEvents([...events, newEvent]);

    // Optionally, update FullCalendar directly using the API
   // const calendar = calendarRef.current.getApi();
    //calendar.addEvent(newEvent); // Add the event to FullCalendar directly
  };

  return (
    <article>
      <Container>
        <Row className="mt-4">

          <Col xs={12} md={8}>

            <FullCalendar
            ref = {calendarRef}
            plugins={[timeGridPlugin, interactionPlugin, adaptivePlugin]}
            initialView='timeGridDay'
            slotMinTime="08:00:00"
            slotMaxTime="24:00:00"
            editable={true}
            selectable={true}
            weekends={true}
            events={events}
            eventContent = {renderEventContent}    
            headerToolbar={{
              left: 'prev,next today', // Left side buttons (prev, next, today)
              center: 'title', // Center displays the title (month/day/week)
              right: 'timeGridDay,timeGridWeek', // Right side buttons for day and week views
            }}
            droppable={true} // Enable droppable events
            eventReceive={handleDropEvent} // Handle drop event
          />

           {/* Event Form */}
           <Row className="p-3 mt-4">
              <Col>
                <Form onSubmit={handleAddEvent}>
                  <Form.Group controlId="formEventTitle">
                    <Form.Label>Add other events to my schedule</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter event title" required />
                  </Form.Group>

                  <Form.Group controlId="formEventDate">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="datetime-local" name="date" required />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Add Event
                  </Button>
                </Form>
              </Col>
            </Row>
          
            {/* Button Row */}
            <Row className="p-3 mt-auto">
              <Col className="d-flex justify-content-end">
                <Button>Save</Button>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={1}></Col>


          <Col xs={12} md={3} className="d-flex flex-column">
            <Container className="wishlist-body p-4 flex-grow-1 d-flex flex-column">              
              <Row>
                <h3>Wishlist</h3>
              </Row>

              <Row>
                {wishlist.map((event) => (
                  <div key={event.id} className="wishlist-card p-2 ps-4 mb-2" draggable>
                    {event.name}
                  </div>
                ))}
              </Row>

              {/* Draggable Wishlist Events 
              <Row>
                {wishlist.map((event) => (
                  <Col key={event.id} className="mb-3">
                    <div
                      className="wishlist-item p-2 bg-light border rounded"
                      draggable="true"
                      onDragStart={(e) => {
                        e.dataTransfer.setData("eventId", event.id); // Set data for drag
                      }}
                    >
                      {event.title}
                    </div>
                  </Col>
                ))}
              </Row>*/}

              
              {/* I don't think we need this button for this page*/}
              {/*<Row className="m-2 mt-auto"> 
                <Button id="create-itinerary-btn" href={"#/create-itinerary"}>
                  Create my own itinerary
                </Button>
              </Row>*/}
              
            </Container>
          </Col>
        </Row>
      </Container>


    </article>
  );
};

export default CreateItinerary;



function renderEventContent(eventInfo) {
  return(
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}