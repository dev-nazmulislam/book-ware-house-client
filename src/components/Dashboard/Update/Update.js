import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseInit";
import useHistory from "../../../Hooks/useHistory";
import "./Update.css";

const Update = ({ book }) => {
  const [histories, setHistories] = useHistory();
  const [user] = useAuthState(auth);
  const [quantity, setQuantity] = useState(0);
  const { bookName, stockQuantity, author, publishar, description, photo } =
    book;

  const handleAddedBook = (id) => {
    const updatedBook = book;
    updatedBook.stockQuantity = parseInt(stockQuantity) + parseInt(quantity);

    // send data to the server
    if (quantity >= 1) {
      const url = `https://mighty-dusk-49836.herokuapp.com/book/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Books Added successfully!!!");
        });

      // Create History Data
      const newHistory = {};
      newHistory.email = user.email;
      newHistory.bookName = bookName;
      newHistory.task = `Added ${quantity} Quantity`;
      newHistory.time = Date().toLocaleString();

      // Post New History Data to server
      fetch("https://mighty-dusk-49836.herokuapp.com/histories", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newHistory),
      })
        .then((res) => res.json())
        .then((result) => {
          const updatedHistory = [...histories, newHistory];
          setHistories(updatedHistory);
        });
    }
  };
  const handleDeleverdBook = (id) => {
    const updatedBook = book;
    updatedBook.stockQuantity = parseInt(stockQuantity) - parseInt(quantity);

    // send data to the server
    if (quantity >= 1 && updatedBook.stockQuantity > 0) {
      const url = `https://mighty-dusk-49836.herokuapp.com/book/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Books Delevard successfully!!!");
        });

      // Create History Data
      const newHistory = {};
      newHistory.email = user.email;
      newHistory.bookName = bookName;
      newHistory.task = `Deleverd ${quantity} Quantity`;
      newHistory.time = Date().toLocaleString();

      // Post New History Data to server
      fetch("https://mighty-dusk-49836.herokuapp.com/histories", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newHistory),
      })
        .then((res) => res.json())
        .then((result) => {
          const updatedHistory = [...histories, newHistory];
          setHistories(updatedHistory);
        });
    }
  };
  return (
    <div className="card-container p-2 my-4 d-flex flex-column flex-md-row ">
      <img src={photo} alt="" />
      <div className="ms-2">
        <h5>{bookName}</h5>
        <p>{author}</p>
        <p>Publishar: {publishar}</p>
        <p>{description}</p>

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="input-group my-2">
            <input
              type="number"
              className="form-control"
              placeholder="Add Quantity"
              onBlur={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={() => handleAddedBook(book._id)}
              className="btn btn-outline-secondary"
              type="button"
            >
              Add
            </button>
            <button
              onClick={() => handleDeleverdBook(book._id)}
              className="btn btn-outline-secondary"
              type="button"
            >
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
