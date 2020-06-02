import React from "react";

import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchField">
      <input
        className="search"
        placeholder="Enter restaurant name here..."
        type="text"
      />
      <button>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
