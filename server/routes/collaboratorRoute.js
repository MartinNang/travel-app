import express from "express";
import * as collaboratorController from "../controllers/collaboratorController.js";

import { connect } from "../index.js";

export const collaboratorRouter = express.Router();

collaboratorRouter.get("/", (req, res, next) => {
  connect((conn) => collaboratorController.getAllCollaborators(conn, req, res));
});

collaboratorRouter.get("/:itineraryId", (req, res, next) => {
  connect((conn) =>
    collaboratorController.findCollaboratorsByItineraryId(conn, req, res)
  );
});

// collaboratorRouter.get("/:userId", (req, res, next) => {
//   connect((conn) =>
//     collaboratorController.findItinerariesByCollaboratorUserId(conn, req, res)
//   );
// });
