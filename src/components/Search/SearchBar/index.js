import React from "react";

import "./SearchBar.scss";

export class SearchBar extends React.Component {
  render() {
    return (
      // <div className="searchBar">
      <div className="searchField">
        <input
          className="search"
          placeholder="Enter restaurant name here..."
          type="text"
        />
        <button>
          <i class="fa fa-search"></i>
        </button>
      </div>
      // </div>
    );
  }
}

export default SearchBar;
