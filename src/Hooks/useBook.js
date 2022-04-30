import { useEffect, useState } from "react";

const useBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);

  return [books, setBooks];
};

export default useBook;
