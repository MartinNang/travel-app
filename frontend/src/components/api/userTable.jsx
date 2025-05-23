import { Row, Button, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AlertDismissible from "../ui/alertDismissible";
import { BACKEND_URL } from "../../App";

const UserTable = ({}) => {
  const [isEdit, setEdit] = useState([]);
  const [users, setUsers] = useState([]);
  const [profileNames, setProfileNames] = useState([]);
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie/";
  console.log("base url", BACKEND_URL);
  axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
  axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

  const handleEdit = (i) => {
    // handle edit
    let newEdit = isEdit.slice();
    newEdit[i] = !newEdit[i];
    setEdit(newEdit);
  };

  const handleDelete = (userId) => {
    // handle delete
    axios.delete(`users/${userId}`).then(() => {
      // display success message
      console.log("deleted user with id", userId);
      setVariant("success");
      setHeading("Operation successful");
      setMessage("User was deleted.");
      setShow(true);
      // refresh table
      fetchUsers();
    });
  };

  const handleSave = (i, userId, newProfileName) => {
    console.log(`changing profile of user ${userId} to ${newProfileName}`);
    setEdit(!isEdit);
    axios
      .put(`users/${userId}/profileName`, {
        newProfileName: newProfileName,
      })
      .then(() => {
        // display success message
        setVariant("success");
        setHeading("Operation successful");
        setMessage("Profile name was updated.");
        setShow(true);
        console.log("updated username");
        // refresh table
        fetchUsers();
      });
  };

  const handleInputChange = (event, index) => {
    let newProfileNames = profileNames.slice();
    newProfileNames[index] = event.target.value;
    setProfileNames(newProfileNames);
  };

  const handleKeyPress = (event, i, userId, newProfileName) => {
    if (event.key === "Enter" && isEdit[i]) {
      handleSave(i, userId, newProfileName);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    axios
      .get("users")
      .then((response) => {
        let users = response.data;
        if (users) {
          let newEdit = [];
          let newProfileNames = [];
          for (let i = 0; i < users.length; i++) {
            newEdit.push(false);
            newProfileNames.push(response.data[i].profileName);
          }
          setUsers(users);
          setEdit(newEdit);
          setProfileNames(newProfileNames);
        }
        console.log("data response:", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Row>
        <h2>Users</h2>
      </Row>
      <Row>
        <AlertDismissible
          variant={variant}
          heading={heading}
          message={message}
          show={show}
          setShow={setShow}></AlertDismissible>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Profile name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr className="mb-3">
                <td>{user.id}</td>
                <td>
                  {!isEdit[i] ? (
                    users[i].profileName
                  ) : (
                    <input
                      type="text"
                      id={"pName-" + i}
                      name={"pName-" + i}
                      // value={users[i].profileName}
                      onChange={(e) => handleInputChange(e, i)}
                      onKeyDown={(e) =>
                        handleKeyPress(e, i, user.id, profileNames[i])
                      }
                    />
                  )}
                </td>
                <td>
                  {isEdit[i] ? (
                    <Button
                      onClick={() =>
                        handleSave(i, user.userId, profileNames[i])
                      }>
                      Save
                    </Button>
                  ) : (
                    <Button onClick={() => handleEdit(i)}>Edit</Button>
                  )}
                </td>
                <td>
                  <Button onClick={() => handleDelete(user.userId)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default UserTable;
