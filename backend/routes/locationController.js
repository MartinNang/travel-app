import Location from "../models/location.js";
import * as locationService from "../services/locationService.js";

export function getAllLocations(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all locations");
    locationService.getAllLocations(conn, (result) => {
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

export function findLocationByOverpassId(conn, req, res) {
  try {
    locationService.findLocationByOverpassId(
      conn,
      req.body.overpassId,
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

export function createLocation(conn, req, res) {
  try {
    const location = new Location(
      req.body.name,
      req.body.latitude,
      req.body.longitude,
      req.body.address,
      req.body.openingHours,
      req.body.phoneNr,
      req.body.link,
      req.body.type,
      req.body.operator,
      req.body.wheelchair,
      req.body.description,
      req.body.fee
    );
    const overpassId = req.params.overpassId;
    console.log("location", location);
    console.log("overpassId", overpassId);
    locationService.createItinerary(conn, overpassId, location, () => {
      res.status(200);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
