import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <section className="row px-0 mx-0">
        <div className="col-12 col-md-2 shadow asid-menu ">
          <h3 className="text-primary mt-4 p-3">Dashboard</h3>
        </div>
        <div className="col-12 col-md-10">
          <section class="container px-4">
            <div class="row gx-3 my-4">
              <div class="col">
                <div
                  style={{ backgroundColor: "#1FA9D7" }}
                  class="text-light p-3 border rounded shadow"
                >
                  <p className="fs-3 text-center">{books.length}</p>
                  <h4 className="text-center">Products</h4>
                </div>
              </div>
              <div class="col">
                <div
                  style={{ backgroundColor: "#63C2DF" }}
                  class="text-light p-3 border rounded shadow"
                >
                  <p className="fs-3 text-center">
                    {books.reduce((a, b) => +a + +b.stockQuantity, 0)}
                  </p>
                  <h4 className="text-center">Quantity</h4>
                </div>
              </div>
              <div class="col">
                <div
                  style={{ backgroundColor: "#FEC106" }}
                  class="text-light p-3 border rounded shadow"
                >
                  <p className="fs-3 text-center">
                    {books.reduce(
                      (a, b) => +a + +b.price * +b.stockQuantity,
                      0
                    )}
                  </p>
                  <h4 className="text-center">Price</h4>
                </div>
              </div>
              <div class="col">
                <div
                  style={{ backgroundColor: "#F96C6C" }}
                  class="text-light p-3 border rounded shadow"
                >
                  <p className="fs-3 text-center">00</p>
                  <h4 className="text-center">User Login</h4>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-center text-primary">All Products</h2>
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
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr>
                    <td>#</td>
                    <td>{book.bookName}</td>
                    <td>{book.author}</td>
                    <td>{book.publishar}</td>
                    <td>{book.stockQuantity}</td>
                    <td>{book.price}</td>
                    <td>
                      <button className="btn btn-link">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
