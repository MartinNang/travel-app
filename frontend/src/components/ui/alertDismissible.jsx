import Alert from "react-bootstrap/Alert";

function AlertDismissible({ variant, heading, message, show, setShow }) {
  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
}

export default AlertDismissible;
