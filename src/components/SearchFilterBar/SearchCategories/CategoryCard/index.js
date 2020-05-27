import React from "react";

import "./CategoryCard.scss";

// Component displays one category as a checkbox
const CategoryCard = ({ cuisine }) => {
  return (
    <label className="categoryCard">
      <input type="checkbox" className="categoryCheckbox"></input>
      <span className="categoryName">{cuisine}</span>
    </label>
  );
};

export default CategoryCard;
