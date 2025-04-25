import User from "../models/user.js";
import * as userService from "../services/userService.js";
import bcrypt from "bcrypt";


export async function getAllUsers(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all users");
    await userService.getAllUsers(conn, (result) => {
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
    await userService.findUserByEmail(conn, req.body.email, (result) => {
      console.log("find user by email result:", result);
      if (result.length > 0) {
        bcrypt.compare(
          req.body.password,
          result[0].password,
          function (err, compResult) {
            if (compResult) {
              console.log("Password match");
              res.status(200);
              res.send(result);
            } else {
              console.log("Password does not match");
              console.log("pw", req.body.password);
              console.log("hash", result[0].password);
              res.status(400);
              res.send({ error: "incorrect password" });
            }
          }
        );
      } else {
        res.status(404);
        res.send({ error: "incorrect user" });
      }
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export async function findUserById(conn, req, res) {
  try {
    await userService.findUserById(conn, req.params.userId, (result) => {
      if (result.length === 1) {
        res.status(200);
      } else if (result.length === 0) {
        res.status(404);
      }
      res.send(result);
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export async function findUserByProfileName(conn, req, res) {
  try {
    await userService.findUserByProfileName(
      conn,
      req.params.profileName,
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
    await userService.findUserByEmail(conn, user.email, (result) => {
      if (result.length > 0) {
        res.status(400);
        res.send({ error: "user already exists" });
      } else {
        userService.createUser(conn, user, (result) => {
          if (result) {
            res.status(200);
            res.send({ success: "registered new user" });
          } else {
            res.status(500);
            res.send({ error: "failed to register new user" });
          }
        });
      }
    });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}

export async function updateUser(conn, req, res) {
  try {
    const id = req.params.userId;

    const newEmail = req.body.newEmail;
    const newPassword = req.body.newPassword;
    const newProfileName = req.body.newProfileName;
    const newProfileImage = req.body.newProfileImage;

    const user = new User(
      newEmail,
      newPassword,
      newProfileName,
      newProfileImage
    );
    await userService.findUserByEmail(conn, newEmail, (result) => {
      if (result[0]) {
        res
          .status(400)
          .send({ error: "user with new email address already exists" });
      } else {
        userService.updateUser(conn, id, user, (result) => {
          if (result) {
            res.status(200).send();
          } else {
            res.status(500).send({ error: "failed to update user" });
          }
        });
      }
    });
  } catch (code) {
    res.status(code).send();
  }
}

export async function subscribeUserToNewsletter(conn, req, res) {
  try {
    const id = req.params.userId;

    await userService.subscribeUserToNewsletter(conn, id, (result) => {
        if (result) {
          res.status(200).send({ success: "subscribed user to newsletter" });
        } else {
          res.status(500).send({ error: "failed to subscribe user to newsletter" });
        }
    });

  } catch (code) {
    res.status(code);
    res.send();
  }
}

export async function updateProfileName(conn, req, res) {
  try {
    const userId = req.params.userId;
    const newProfileName = req.body.newProfileName;
    console.log("userId", userId);
    console.log("profileName", newProfileName);

    await userService.updateProfileName(
      conn,
      userId,
      newProfileName,
      (result) => {
        if (result) {
          res.status(204).send({ success: "updated user profile name" });
        }
      }
    );
  } catch (code) {
    res.status(code).send();
  }
}

export async function updateProfileImage(conn, req, res) {
  try {
    const userId = req.params.userId;
    const newProfileImage = req.body.newProfileImage;
    console.log("userId", userId);
    console.log("profileImage", newProfileImage);

    await userService.updateProfileName(conn, userId, newProfileName, () => {
      res.status(204);
      res.send();
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

    await userService.deleteUser(conn, userId, () => {
      res.status(204);
      res.send();
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}
