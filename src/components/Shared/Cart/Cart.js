import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebaseInit";

const Cart = ({ book }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [stockQuantity, setStockQuantity] = useState(book.stockQuantity);
  const { bookName, author, publishar, description, photo, price } = book;

  const handleUpdateBook = (id) => {
    const newQuantity = book.stockQuantity - 1;
    setStockQuantity(newQuantity);
    const updatedBook = book;
    updatedBook.stockQuantity = newQuantity;

    // send data to the server
    const url = `http://localhost:5000/book/${id}`;
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
  };
  return (
    <div className="col-4 mb-4">
      <div className="card p-2">
        <img className="card-img-top" src={photo} alt={bookName} />
        <div className="card-body">
          <h5>{bookName}</h5>
          <div className="d-flex justify-content-between mb-2">
            <small>
              by <Link to="/about">{author}</Link>
            </small>
            <small>Publication: {publishar}</small>
          </div>
          <p title={description}>
            {description.length >= 50
              ? description.slice(0, 50) + " ..."
              : description}
          </p>
          <div className="d-flex justify-content-between">
            <p className="text-danger">Price: {price}</p>
            <p>
              Stock:{" "}
              {stockQuantity < 1 ? (
                <span className="text-danger">Out of Stock</span>
              ) : (
                stockQuantity
              )}
            </p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-link">Manage Items</button>
          <button
            onClick={
              user ? () => handleUpdateBook(book._id) : () => navigate("/login")
            }
            className="btn btn-success"
          >
            Deleverd
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
