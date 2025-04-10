import Itinerary from "../models/itinerary.js";
import * as itineraryService from "../services/itineraryService.js";

export function getAllItineraries(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all itineraries");
    itineraryService.getAllItineraries(conn, (result) => {
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

export function findItinerariesByName(conn, req, res) {
  try {
    itineraryService.findItinerariesByName(
      conn,
      req.params.itineraryName,
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

export function findItinerariesByUserId(conn, req, res) {
  try {
    console.log("finding itineraries by userId", req.params.userId);
    itineraryService.findItinerariesByUserId(
      conn,
      req.params.userId,
      (result) => {
        if (result.length === 1) {
          res.status(200);
        } else if (result.length === 0) {
          res.status(404);
        }
        console.log("found itinerary:", result);
        res.send(result);
      }
    );
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function createItinerary(conn, req, res) {
  try {
    const userId = req.params.userId;
    const itinerary = new Itinerary(
      req.body.name,
      userId,
      req.body.startDate,
      req.body.endDate,
      req.body.createdAt,
      req.body.updatedAt,
      req.body.type
    );
    console.log("itinerary", itinerary);
    console.log("userId", userId);
    itineraryService.createItinerary(conn, itinerary, () => {
      res.status(200);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function updateItinerary(conn, req, res) {
  try {
    const itineraryId = req.params.itineraryId;
    console.log("updating itinerary", req.body);
    const itinerary = new Itinerary(
      req.body.name,
      null,
      req.body.startDate,
      req.body.endDate,
      null,
      req.body.updatedAt,
      req.body.type
    );
    itineraryService.updateItinerary(conn, itineraryId, itinerary, (result) => {
      res.status(200);
      res.send(result);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function deleteItinerary(conn, req, res) {
  try {
    const itineraryId = req.params.itineraryId;
    console.log("itineraryId", itineraryId);

    itineraryService.deleteItinerary(conn, itineraryId, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
