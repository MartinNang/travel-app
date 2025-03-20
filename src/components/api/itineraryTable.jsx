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
import AlertDismissible from "../alertDismissible";
import { BACKEND_URL } from "../../App";

const ItineraryTable = ({}) => {
  const [isEdit, setEdit] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
  axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

  useEffect(() => {
    fetchItineraries();
  }, []);

  function fetchItineraries() {
    axios
      .get("/itineraries")
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
                <td>{itinerary.id}</td>
                <td>{itinerary.name}</td>
                <td>{itinerary.user_id}</td>
                <td>{itinerary.start_date}</td>
                <td>{itinerary.end_date}</td>
              </tr>
            ))}{" "}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default ItineraryTable;
