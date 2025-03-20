import User from "../models/user.js";
import * as userService from "../services/userService.js";

export async function getAllUsers(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all users");
    userService.getAllUsers(conn, (result) => {
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

export async function findUser(conn, req, res) {
  try {
    userService.findEmailPassword(
      conn,
      req.body.email,
      req.body.password,
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

export async function createUser(conn, req, res) {
  try {
    const user = new User(
      req.body.email,
      req.body.password,
      req.body.profileName,
      req.body.profileImage
    );
    userService.createUser(conn, user, (result) => {
      if (result) {
        res.status(201);
      } else {
        res.status(200);
      }
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export async function updateUser(conn, req, res) {
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

export async function updateProfileName(conn, req, res) {
  try {
    const userId = req.params.userId;
    const newProfileName = req.body.newProfileName;
    console.log("userId", userId);
    console.log("profileName", newProfileName);

    userService.updateProfileName(conn, userId, newProfileName, (result) => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export async function updateProfileImage(conn, req, res) {
  try {
    const userId = req.params.userId;
    const newProfileImage = req.body.newProfileImage;
    console.log("userId", userId);
    console.log("profileImage", newProfileImage);

    userService.updateProfileName(conn, userId, newProfileName, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export async function deleteUser(conn, req, res) {
  try {
    const userId = req.params.userId;
    console.log("userId", userId);

    userService.deleteUser(conn, userId, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
