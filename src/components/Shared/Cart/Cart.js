import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.Init";
import useHistory from "../../../Hooks/useHistory";

const Cart = ({ book }) => {
  const [histories, setHistories] = useHistory();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    bookName,
    stockQuantity,
    author,
    publishar,
    description,
    photo,
    price,
  } = book;

  const handleUpdateBook = (id) => {
    const updatedBook = book;
    updatedBook.stockQuantity = stockQuantity - 1;

    // send data to the server
    if (stockQuantity > 0) {
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
      newHistory.task = `Deleverd 1 Quantity`;
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
    <div className="col-12 col-md-6 col-lg-4 mb-2">
      <div className="card p-2">
        <img className="card-img-top w-100" src={photo} alt={bookName} />
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
          <button
            onClick={
              user
                ? () => navigate("/dashboard/manageitem")
                : () => navigate("/login")
            }
            className="btn btn-link"
          >
            Manage Items
          </button>
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
