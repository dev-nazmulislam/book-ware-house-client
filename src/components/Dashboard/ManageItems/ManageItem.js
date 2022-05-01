import React from "react";
import { Table } from "react-bootstrap";
import useBook from "../../../Hooks/useBook";
import { AiFillDelete } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import "./ManageItems.css";

const ManageItem = () => {
  const [books, setBooks] = useBook();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
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
