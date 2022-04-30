import React from "react";
import useBook from "../../Hooks/useBook";
import Cart from "../Shared/Cart/Cart";

const AllBooks = () => {
  const [books] = useBook();
  return (
    <section className="row mx-auto container my-5">
      <h1 className="text-center text-primary">All Books Collection</h1>
      {books.map((book) => (
        <Cart key={book._id} book={book} />
      ))}
    </section>
  );
};

export default AllBooks;
