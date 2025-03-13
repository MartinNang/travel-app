import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Alert,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AlertDismissible from "./alertDismissible";

const ItineraryTable = ({}) => {
  const [isEdit, setEdit] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  axios.defaults.baseURL = "http://localhost:8080";
  // axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
  axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

  useEffect(() => {
    fetchItineraries();
  }, []);

  function fetchItineraries() {
    axios
      .get("/api/itineraries")
      .then((response) => {
        let itineraries = response.data;
        if (itineraries) {
          setItineraries(itineraries);
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
        <h2>Itineraries</h2>
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
              <th>Itinerary ID</th>
              <th>Name</th>
              <th>User ID</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {itineraries.map((itinerary, i) => (
              <tr className="mb-3">
                <td>{itinerary.itineraryId}</td>
                <td>{itinerary.itineraryName}</td>
                <td>{itinerary.userId}</td>
                <td>{itinerary.startDate}</td>
                <td>{itinerary.endDate}</td>
              </tr>
            ))}{" "}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default ItineraryTable;
