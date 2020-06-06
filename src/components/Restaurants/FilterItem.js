import React from "react";

const FilterItem = props => {
  return (
    <div className="filterItem">
      <p className="title">{props.title}:</p>
      <>
        {props.main}
      </>
    </div>
  )
};

export default FilterItem;
