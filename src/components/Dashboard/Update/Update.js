import React from "react";
import "./Update.css";

const Update = ({ book }) => {
  const { bookName, author, photo } = book;
  return (
    <div className="card-container p-2 my-3 d-flex flex-column flex-md-row ">
      <img src={photo} alt="" />
      <div className="ms-2">
        <h5>{bookName}</h5>
        <p>{author}</p>

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div class="input-group my-2">
            <input
              type="number"
              class="form-control"
              placeholder="Add Quantity"
            />
            <button class="btn btn-outline-secondary" type="button">
              Add
            </button>
            <button class="btn btn-outline-secondary" type="button">
              Deleverd
            </button>
          </div>
          <div class="input-group my-2">
            <button
              class="btn btn-outline-secondary text-danger"
              type="button"
              disabled
            >
              Price: 200
            </button>
            <input
              type="number"
              class="form-control"
              placeholder="Updated Price"
            />
            <button class="btn btn-outline-secondary text-danger" type="button">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
