import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie/";

const SubFooter = () => {
  const [formState, setFormState] = useState({
    loading: null,
    error: null,
  });

  const navigate = useNavigate();

  const handleSubscribe = async () => {
    try {
      setFormState({ loading: true, error: null });

      // get the email from session storage
      const email = sessionStorage.getItem("email");

      // check if the email is not null
      if (email === null) {
        navigate("/sign-in");
        return;
      }

      const response = await axios.postForm("/users/1/newsletter", {
        email,
      });

      setFormState({ ...formState, loading: false });
      console.log("Subscribed successfully:", response.data);
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setFormState({ ...formState, error: "Failed to subscribe" });
    }
  };

  return (
    <Container fluid className="subfooter">
      <Row>
        <Col xs={12} md={{ span: 4, offset: 2 }}>
          <h2>Jet-Set in Your Inbox</h2>
          <h5>
            Travel Tips, Hidden Gems & Exclusive Itineraries Delivered Monthly.
          </h5>
        </Col>

        <Col
          xs={12}
          md={{ span: 4, offset: 1 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          {/*With the Bootstrap "Button", the CSS class "subscribe-btn" is not recognized
                   Hence why the regular "button" is used here. */}
          <button
            className="subscribe-btn"
            onClick={handleSubscribe}
            disabled={formState.loading}
          >
            {formState.loading
              ? "Subscribing..."
              : "Subscribe for more information..."}
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default SubFooter;
