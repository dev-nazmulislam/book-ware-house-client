import React, { useEffect, useState } from "react";
import Cart from "../../Shared/Cart/Cart";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <section className="row mx-auto container my-5">
        <h1 className="text-center text-primary">Our Inventory Items</h1>
        {books.map((book) => (
          <Cart key={book._id} book={book} />
        ))}
      </section>
    </div>
  );
};

export default Home;
