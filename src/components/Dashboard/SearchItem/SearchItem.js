import React from "react";
import { useParams } from "react-router-dom";

const SearchItem = () => {
  const { text } = useParams();

  return (
    <div>
      <h1>Search</h1>
    </div>
  );
};

export default SearchItem;
