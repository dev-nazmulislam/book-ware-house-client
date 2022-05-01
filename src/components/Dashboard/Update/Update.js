import React from "react";
import "./Update.css";

const Update = ({ book }) => {
  const { bookName, author, photo } = book;
  return (
    <div className="card-container p-2 my-4 d-flex flex-column flex-md-row ">
      <img src={photo} alt="" />
      <div className="ms-2">
        <h5>{bookName}</h5>
        <p>{author}</p>

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="input-group my-2">
            <input
              type="number"
              className="form-control"
              placeholder="Add Quantity"
            />
            <button className="btn btn-outline-secondary" type="button">
              Add
            </button>
            <button className="btn btn-outline-secondary" type="button">
              Deleverd
            </button>
          </div>
          <div className="input-group my-2">
            <button
              className="btn btn-outline-secondary text-danger"
              type="button"
              disabled
            >
              Price: 200
            </button>
            <input
              type="number"
              className="form-control"
              placeholder="Updated Price"
            />
            <button
              className="btn btn-outline-secondary text-danger"
              type="button"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
