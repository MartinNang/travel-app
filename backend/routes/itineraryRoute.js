import express from "express";
import * as itineraryController from "../controllers/itineraryController.js";

import { connect } from "../index.js";

export const itineraryRouter = express.Router();

itineraryRouter.get("/", (req, res, next) => {
  connect((conn) => itineraryController.getAllItineraries(conn, req, res));
});

itineraryRouter.get("/name/:name", (req, res, next) => {
  connect((conn) => itineraryController.findItinerariesByName(conn, req, res));
});

itineraryRouter.get("/user/:userId", (req, res, next) => {
  connect((conn) =>
    itineraryController.findItinerariesByUserId(conn, req, res)
  );
});

itineraryRouter.put("/:itineraryId", (req, res, next) => {
  connect((conn) => itineraryController.updateItinerary(conn, req, res));
});

itineraryRouter.post("/:userId", (req, res, next) => {
  connect((conn) => itineraryController.createItinerary(conn, req, res));
});

itineraryRouter.delete("/:itineraryId", (req, res, next) => {
  connect((conn) => itineraryController.deleteItinerary(conn, req, res));
});
