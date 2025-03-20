import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Elements = ({}) => {
  return (
    <article>
      <h1>Elements</h1>
      <Button
        style={{
          backgroundColor: "#b1f8b6",
          borderColor: "#b1f8b6",
          color: "black",
        }}
        type="submit"
        className="w-100">
        Sign In!
      </Button>
    </article>
  );
};

export default Elements;
