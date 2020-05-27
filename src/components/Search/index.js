import React from "react";

import SearchBar from "./SearchBar";
// import SearchCategories from "./SearchCategories";

import "./Search.scss";

export class Search extends React.Component {
  render() {
    return (
      <section className="searchComponent">
        <SearchBar />
        {/* <SearchCategories /> */}
      </section>
    );
  }
}

export default Search;
