import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible({ variant, heading, message, show, setShow }) {
  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  return;
}

export default AlertDismissible;
