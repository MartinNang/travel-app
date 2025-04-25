import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import adaptivePlugin from "@fullcalendar/adaptive";

const CreateItinerary = () => {
  const [wishlist, setWishlist] = useState([]); // Stores events the user wants to schedule (saved in localStorage)
  const [events, setEvents] = useState([]); // Stores scheduled events already added to the calendar
  const calendarRef = useRef(null); // Reference to FullCalendar
  const externalEventsRef = useRef(null); // Reference to the wishlisht container to make its elements draggable

  // Load wishlist from localStorage and sets drag-and-drop functionality to the wishlist items
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

  /* Handles form submission for adding custom event to the wishlist
   It retrieves the title from the form and create a new event object with a unique ID
   Updates the wishlist and resets the form input field after submission*/
  const handleAddToWishlist = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim(); // Removing any extra spaces (to avoid accidentally adding blank events)
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

    // Triggered when a wishlist item is dropped onto the calendar
    // Removes from wishlist, add to calendar, and prevent duplicates inside the calendar
    const handleReceiveWishlistEvent = (info) => {
      // 1. Remove from wishlist
      const data = JSON.parse(info.draggedEl.getAttribute("data-event"));
      const droppedId = data.id;
    
      setWishlist((prev) => {
        const updated = prev.filter((event) => event.id !== droppedId);
        localStorage.setItem("wishlist", JSON.stringify(updated));
        return updated;
      });
    
      // 2. Add to calendar events
      const newEvent = {
        title: info.event.title,
        start: info.event.start,
        id: info.event.id,
      };
    
      setEvents((prev) => [...prev, newEvent]);
    
      // 3. Prevent FullCalendar from keeping its internal copy
      info.revert();
    };

    const handleDeleteEvent = (event) => {
      if (window.confirm(`Delete the event "${event.title}"?`)) {
        setEvents((prevEvents) =>
          prevEvents.filter((e) => e.id !== event.id)
        );
        event.remove(); // Remove from the calendar visually
      }
    };
    

    const getUserId = () => {
      // key name must match whatever your login code stores
      return sessionStorage.getItem("id"); // returns null if missing
    };
    
    
  
  /* Sends the current itinerary (calendar state with event titles and times) to
   the backend API using POST request
   Also logs the result or errors*/
  const handleSave = async () => {
    const userId = getUserId();
    console.log("User ID from sessionStorage:", sessionStorage.getItem("id"));


    if (!userId) {
      alert("No user ID found. Make sure you are logged in!");
      return;
    }
  
    // Prepare the itinerary data
    const itinerary = {
      name: "TRIP TEST", 
      startDate: events[0]?.start ? events[0].start.toISOString().split("T")[0] : "", 
      endDate: events[events.length - 1]?.start ? events[events.length - 1].start.toISOString().split("T")[0] : "", 
      createdAt: null,
      updatedAt: null,
      type: "1",
      events: events.map((event) => [
        event.title,
        event.start ? event.start.toISOString() : "", 
        event.end ? event.end.toISOString() : event.start ? event.start.toISOString() : "" 
      ])
    };

    
    
  
    console.log("Itinerary to send:", itinerary); // Log the data structure before sending
  
    try {
      const res = await fetch(`https://2425-cs7025-group1.scss.tcd.ie/itineraries/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itinerary),
      });
  
      // Log response status and body
      console.log('Response Status:', res.status);
      const text = await res.text(); 
      console.log('Response Body:', text);
  
      if (!res.ok) throw new Error("Failed to save itinerary");

      alert("Itinerary saved successfully!");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Error saving itinerary.");
    }
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
                handleReceiveWishlistEvent(info);
              }}        
              eventClick={(info) => handleDeleteEvent(info.event)}
          
            />


            {/* Save button (logic to add) */}
            <Row className="p-3 mt-auto">
              <Col className="d-flex justify-content-end">
                <Button onClick={handleSave}>Save</Button>
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


/* Customizes how events appear in the calendar views (time or week grid) */
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
