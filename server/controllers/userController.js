import User from "../models/user.js";
import * as userService from "../services/userService.js";

export function getAllUsers(req, res) {
  try {
    userService.getAllUsers((result) => {
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

export function findUser(req, res) {
  try {
    const user = new User(req.body.username, req.body.password);
    userService.findUser(user, (result) => {
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

export function createUser(req, res) {
  try {
    const user = new User(req.body.username, req.body.password);
    userService.createUser(user, () => {
      res.status(200);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
