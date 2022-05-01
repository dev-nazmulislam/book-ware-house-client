import React, { useEffect, useState } from "react";
import useBook from "../../../Hooks/useBook";
import Update from "../Update/Update";

const UpdateQuntity = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(books);

  useEffect(() => {
    fetch(
      `https://mighty-dusk-49836.herokuapp.com/bookbytext?search=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [searchText]);
  return (
    <div>
      <h1 className="my-4">Update Quntity</h1>
      <input
        className="w-100 rounded-pill p-2"
        onBlur={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search Book for Update."
      />
      {books.map((book) => (
        <Update key={book._id} book={book} />
      ))}
    </div>
  );
};

export default UpdateQuntity;
