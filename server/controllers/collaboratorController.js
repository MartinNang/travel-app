// import Event from "../models/event.js";
import * as collaboratorService from "../services/collaboratorService.js";

export function getAllCollaborators(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all collaborators");
    collaboratorService.getAllCollaborators(conn, (result) => {
      if (result) {
        res.status(200);
      }
      res.send(result);
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function findCollaboratorsByItineraryId(conn, req, res) {
  try {
    collaboratorService.findCollaboratorsByItineraryId(
      conn,
      req.params.itineraryId,
      (result) => {
        if (result.length === 1) {
          res.status(200);
        } else if (result.length === 0) {
          res.status(403);
        }
        res.send(result);
      }
    );
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function findItinerariesByCollaboratorUserId(conn, req, res) {
  try {
    collaboratorService.findItinerariesByCollaboratorUserId(
      conn,
      req.params.userId,
      (result) => {
        if (result.length === 1) {
          res.status(200);
        } else if (result.length === 0) {
          res.status(403);
        }
        res.send(result);
      }
    );
  } catch (code) {
    res.status(code);
    res.send();
  }
}
