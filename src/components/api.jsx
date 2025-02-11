import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = ({}) => {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/users");
        setData(response.data);
        console.log("data response:", response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <article>
      <Container>
        <Row>
          <h1>API</h1>
        </Row>
        {data.map((user) => (
          <Row>{user.username}</Row>
        ))}{" "}
      </Container>
    </article>
  );
};

export default Api;
