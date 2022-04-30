import React from "react";
import { Table } from "react-bootstrap";
import useBook from "../../../Hooks/useBook";
import { AiFillDelete } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";

const ManageItem = () => {
  const [books, setBooks] = useBook();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/book/${id}`;
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Author</th>
            <th>Publishar</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr key={i}>
              <td>#</td>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
              <td>{book.publishar}</td>
              <td>{book.stockQuantity}</td>
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
