import React from "react";

import SearchBar from "./SearchBar";
// import SearchCategories from "./SearchCategories";
// import Filters from "./Filters";

import "./Search.scss";

const Search = () => {
  return (
    <section className="searchFilterBar">
      <SearchBar />
      {/* <Filters /> */}
      {/* <SearchCategories /> */}
    </section>
  );
};

export default Search;
