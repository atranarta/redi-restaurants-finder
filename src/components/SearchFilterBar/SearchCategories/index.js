import React from "react";

import "./SearchCategories.scss";
import CategoryCard from "./CategoryCard";

const SearchCategories = () => {
  return (
    <div className="searchCategories">
      <CategoryCard cuisine="Italian" />
      <CategoryCard cuisine="Asian" />
      <CategoryCard cuisine="German" />
    </div>
  );
};

export default SearchCategories;
