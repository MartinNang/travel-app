import express from "express";
import * as locationController from "../controllers/locationController.js";

import { connect } from "../index.js";

export const locationRouter = express.Router();

locationRouter.get("/", function (req, res, next) {
  connect((conn) => locationController.getAllLocations(conn, req, res));
});

locationRouter.get("/:overpassId", (req, res) => {
  connect((conn) =>
    locationController.findLocationByOverpassId(conn, req, res)
  );
});
