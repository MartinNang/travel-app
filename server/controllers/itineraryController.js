import Itinerary from "../models/itinerary.js";
import * as itineraryService from "../services/itineraryService.js";

export function getAllItineraries(req, res) {
  try {
    console.log("response:", res);
    console.log("getting all itineraries");
    itineraryService.getAllItineraries((result) => {
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

export function findItinerariesByName(req, res) {
  try {
    itineraryService.findItinerariesByName(req.body.itineraryName, (result) => {
      if (result.length === 1) {
        res.status(200);
      } else if (result.length === 0) {
        res.status(403);
      }
      res.send(result);
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function findItinerariesByUserEmail(req, res) {
  try {
    console.log("email", req.params.email);
    itineraryService.findItinerariesByUserEmail(req.params.email, (result) => {
      if (result.length === 1) {
        res.status(200);
      } else if (result.length === 0) {
        res.status(403);
      }
      console.log("found itinerary:", result);
      res.send(result);
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function createItinerary(req, res) {
  try {
    const itinerary = new Itinerary(
      req.body.name,
      req.body.startDate,
      req.body.endDate,
      req.body.tags
    );
    const userEmail = req.params.email;
    console.log("itinerary", itinerary);
    console.log("user email", userEmail);
    itineraryService.createItinerary(userEmail, itinerary, () => {
      res.status(200);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function updateItinerary(req, res) {
  try {
    const userEmail = req.params.email;
    const oldItineraryName = req.body.oldItineraryName;
    const itinerary = new Itinerary(
      req.body.name,
      req.body.startDate,
      req.body.endDate,
      req.body.tags
    );
    itineraryService.updateItinerary(
      userEmail,
      oldItineraryName,
      itinerary,
      (result) => {
        res.status(200);
      }
    );
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function deleteItinerary(req, res) {
  try {
    const itineraryId = req.params.itineraryId;
    console.log("itineraryId", itineraryId);

    itineraryService.deleteItinerary(itineraryId, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
