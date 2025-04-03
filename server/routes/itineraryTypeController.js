import ItineraryType from "../models/itineraryType.js";
import * as itineraryTypeService from "../services/itineraryService.js";

export function getAllItineraryTypes(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all itineraryTypes");
    itineraryTypeService.getAllItineraryTypes(conn, (result) => {
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

export function findItineraryTypeById(conn, req, res) {
  try {
    itineraryTypeService.findItineraryTypeById(
      conn,
      req.body.itineraryTypeId,
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
