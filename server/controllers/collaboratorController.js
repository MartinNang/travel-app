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
      req.body.itineraryName,
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

export function findCollaboratorsByUserId(conn, req, res) {
  try {
    collaboratorService.findCollaboratorsByUserId(
      conn,
      req.body.itineraryName,
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
