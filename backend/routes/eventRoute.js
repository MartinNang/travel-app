import express from "express";
import * as eventController from "../controllers/eventController.js";

import { connect } from "../index.js";

export const eventRouter = express.Router();

eventRouter.get("/", (req, res, next) => {
  connect((conn) => eventController.getAllEvents(conn, req, res));
});

eventRouter.get("/itinerary/:itineraryId", (req, res, next) => {
  connect((conn) => eventController.findEventsByItineraryId(conn, req, res));
});

// eventRouter.get("/id/:id", (req, res, next) => {
//   connect((conn) => eventController.findEventsByid(conn, req, res));
// });

eventRouter.put("/:id", (req, res, next) => {
  connect((conn) => eventController.updateEvent(conn, req, res));
});

eventRouter.post("/", (req, res, next) => {
  connect((conn) => eventController.createEvent(conn, req, res));
});

eventRouter.delete("/:id", (req, res, next) => {
  connect((conn) => eventController.deleteEvent(conn, req, res));
});
