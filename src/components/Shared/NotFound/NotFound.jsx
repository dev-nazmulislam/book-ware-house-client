import React from "react";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div>
        <h1 className="fs-1">404</h1>
      </div>
      <div>
        <h2 className="fs-4">Oops! You're lost.</h2>
        <p>The page you are looking for was not found.</p>
      </div>
    </div>
  );
};

export default NotFound;
