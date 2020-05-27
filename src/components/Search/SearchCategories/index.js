import React from "react";

import "./SearchCategories.scss";
import CategoryCard from "./CategoryCard";

export class SearchCategories extends React.Component {
  render() {
    return (
      <div className="searchCategories">
        <CategoryCard cuisine="Italian" />
        <CategoryCard cuisine="Asian" />
        <CategoryCard cuisine="German" />
      </div>
    );
  }
}

export default SearchCategories;
