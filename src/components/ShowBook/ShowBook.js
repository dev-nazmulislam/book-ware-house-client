import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebaseInit";
import useHistory from "../../Hooks/useHistory";
import { AiFillDelete } from "react-icons/ai";
import useBook from "../../Hooks/useBook";

const ShowBook = ({ book }) => {
  const [books, setBooks] = useBook();
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

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      // Send delete data to server
      const url = `https://mighty-dusk-49836.herokuapp.com/book/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = books.filter((book) => book._id !== id);
          setBooks(remaining);
        });

      // Create History Data
      const deletedBook = books.find((book) => book._id == id);

      const newHistory = {};
      newHistory.email = user.email;
      newHistory.bookName = deletedBook.bookName;
      newHistory.task = "Deleted";
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
            onClick={() => handleDelete(book._id)}
            className="btn text-danger btn-link"
          >
            {<AiFillDelete />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
