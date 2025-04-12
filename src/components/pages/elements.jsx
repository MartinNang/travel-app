import React from "react";
import Button from "react-bootstrap/Button";

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
