import React from "react";

import SearchBar from "./SearchBar";
// import SearchCategories from "./SearchCategories";
// import Filters from "./Filters";

import "./Search.scss";

export class Search extends React.Component {
  render() {
    return (
      <section className="searchFilterBar">
        <SearchBar />
        {/* <Filters /> */}
        {/* <SearchCategories /> */}
      </section>
    );
  }
}

export default Search;
