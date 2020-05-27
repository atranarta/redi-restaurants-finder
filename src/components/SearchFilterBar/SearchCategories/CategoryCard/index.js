import React from "react";

import "./CategoryCard.scss";

export class CategoryCard extends React.Component {
  constructor({ cuisine }) {
    super({ cuisine });
    this.state = {
      category: cuisine,
    };
  }
  render() {
    return (
      <label className="categoryCard">
        <input type="checkbox" className="categoryCheckbox"></input>
        <span className="categoryName">{this.state.category}</span>
      </label>
    );
  }
}

export default CategoryCard;
