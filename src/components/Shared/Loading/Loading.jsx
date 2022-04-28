import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "300" }}
      className="w-100 d-flex justify-content-center"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
