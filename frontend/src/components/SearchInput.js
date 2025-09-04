import React from "react";
import "../css/SearchInput.css";

const SearchInput = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder={placeholder || "Search..."}
    />
  );
};

export default SearchInput;
