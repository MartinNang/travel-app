import Itinerary from "../models/itinerary.js";
import * as itineraryService from "../services/itineraryService.js";
import * as eventService from "../services/eventService.js";

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

export function findItinerariesById(conn, req, res) {
  console.log("find itinerary by id", req.params.itineraryId);
  try {
    itineraryService.findItinerariesById(
      conn,
      req.params.itineraryId,
      (result) => {
        if (result.length === 1) {
          res.status(200);
        } else if (result.length === 0) {
          res.status(404);
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
    const events = req.body.events;
    if (events) {
      console.log("itinerary", itinerary);
      console.log("events", events);
      console.log("userId", userId);
      itineraryService.createItinerary(conn, itinerary, (result) => {
        const itineraryId = result.insertId.toString();

        console.log("itineraryId", itinerary);
        let updatedEvents = [];
        for (let e of events) {
          updatedEvents.push([e[0], itineraryId, e[1], e[2]]);
        }
        console.log("updated events", updatedEvents);

        eventService.createEvents(conn, updatedEvents, (result) => {
          res.status(200);
        });
      });
    } else {
      res.status(400);
      res.send({ error: "missing events" });
    }
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
      req.body.type
    );
    itineraryService.updateItinerary(conn, itineraryId, itinerary, (result) => {
      if (result) {
        res.status(200);
        const events = req.body.events;
        if (events) {
          let updatedEvents = [];
          for (let e of events) {
            updatedEvents.push([e[0], itineraryId, e[1], e[2]]);
          }
          console.log("updated events", updatedEvents);
          eventService.deleteEvents(conn, itineraryId, (result) => {
            if (result) {
              eventService.createEvents(conn, updatedEvents, (result) => {
                if (result) {
                  res.status(200);
                } else {
                  res.status(500);
                }
              });
            } else {
              res.status(500);
            }
          });
        }
      } else {
        res.status(500);
      }
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

    eventService.deleteEvents(conn, itineraryId, (result) => {
      if (result) {
        itineraryService.deleteItinerary(conn, itineraryId, (result) => {
          if (result) {
            res.status(204);
          } else {
            res.status(500);
          }
        });
      } else {
        res.status(500);
      }
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
