import React from "react";
import { Table } from "react-bootstrap";
import useBook from "../../../Hooks/useBook";
import { AiFillDelete } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import "./ManageItems.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseInit";
import useHistory from "../../../Hooks/useHistory";

const ManageItem = () => {
  const [books, setBooks] = useBook();
  const [histories, setHistories] = useHistory();
  const [user] = useAuthState(auth);

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
    <section>
      <h2 className="text-primary">All Products</h2>
      <Table className="zoom" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th className="display-hide">Author</th>
            <th className="display-hide">Publishar</th>
            <th className="display-hide">Quantity</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr key={i}>
              <td>#</td>
              <td className="book-name">{book.bookName}</td>
              <td className="display-hide">{book.author}</td>
              <td className="display-hide">{book.publishar}</td>
              <td className="display-hide">{book.stockQuantity}</td>
              <td>{book.price}</td>
              <td>
                <Link
                  to={`/dashboard/manageitem/${book._id}`}
                  className="btn btn-link text-decoration-none"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="btn text-danger btn-link"
                >
                  {<AiFillDelete />}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Outlet />
    </section>
  );
};

export default ManageItem;
