import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBook from "../../../Hooks/useBook";
import Cart from "../../Shared/Cart/Cart";
import "./Home.css";

const Home = () => {
  const [books] = useBook();
  return (
    <div>
      <section className="row mx-auto container my-5">
        <h1 className="text-center text-primary">Our Inventory Items</h1>
        {books.slice(0, 6).map((book) => (
          <Cart key={book._id} book={book} />
        ))}
        <Link className="text-center mb-3" to="/allbook">
          Show all Book
        </Link>
      </section>
    </div>
  );
};

export default Home;
