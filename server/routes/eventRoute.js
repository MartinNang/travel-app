import Event from "../models/event.js";
import * as eventService from "../services/eventService.js";

export async function getAllEvents(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all events");
    eventService.getAllEvents(conn, (result) => {
      if (result && result.length > 0) {
        res.status(200);
      } else {
        res.status(404);
      }
      res.send(result);
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export async function findEventsByItineraryId(conn, req, res) {
  try {
    eventService.findEventsByItineraryId(
      conn,
      req.body.itineraryId,
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

export async function findEventsByOverpassId(conn, req, res) {
  try {
    eventService.findEventsByOverpassId(
      conn,
      req.params.overpassId,
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

export async function createEvent(conn, req, res) {
  try {
    const event = new Event(
      req.body.itineraryId,
      req.body.overpassId,
      req.body.startTime,
      req.body.endTime
    );
    eventService.createEvent(
      conn,
      req.body.overpassId,
      event,
      (err, result) => {
        if (err) {
          res.status(500);
          res.send(err);
        } else {
          if (result) {
            res.status(404);
          } else {
            res.status(405);
          }
          res.send(err);
        }
      }
    );
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}

export async function updateEvent(conn, req, res) {
  try {
    const itineraryId = req.body.itineraryId;
    const overpassId = req.body.overpassId;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const event = new Event(itineraryId, overpassId, startTime, endTime);
    eventService.updateEvent(conn, overpassId, event, () => {
      res.status(200);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export async function deleteEvent(conn, req, res) {
  try {
    const overpassId = req.params.overpassId;
    console.log("overpassId", overpassId);

    eventService.deleteEvent(conn, overpassId, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
