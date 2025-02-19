import Itinerary from "../models/itinerary.js";
import * as itineraryService from "../services/itineraryService.js";

export function getAllItineraries(req, res) {
  try {
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
    itineraryService.findItinerariesByUserId(req.body.itineraryId, (result) => {
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

export function createItinerary(req, res) {
  try {
    const itinerary = new Itinerary(
      req.body.name,
      req.body.startDate,
      req.body.endDate,
      req.body.tags
    );
    itineraryService.createItinerary(itinerary, () => {
      res.status(200);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function updateUser(req, res) {
  try {
    const currentUsername = req.body.username;
    const currentPassword = req.body.password;
    const newUsername = req.body.newUsername;
    const newPassword = req.body.newPassword;
    const user = new User(newUsername, newPassword);
    userService.updateUser(currentUsername, user, () => {
      res.status(200);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function updateProfileName(req, res) {
  try {
    const userId = req.params.userId;
    const newProfileName = req.body.newProfileName;
    console.log("userId", userId);
    console.log("profileName", newProfileName);

    userService.updateProfileName(userId, newProfileName, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function updateProfileImage(req, res) {
  try {
    const userId = req.params.userId;
    const newProfileImage = req.body.newProfileImage;
    console.log("userId", userId);
    console.log("profileImage", newProfileImage);

    userService.updateProfileName(userId, newProfileName, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function deleteUser(req, res) {
  try {
    const userId = req.params.userId;
    console.log("userId", userId);

    userService.deleteUser(userId, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
