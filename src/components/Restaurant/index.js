import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import "./Restaurant.scss";

const Restaurant = ({ restaurants }) => {
  let { name } = useParams();

  if (restaurants.length === 0) {
    return <>Loading...</>;
  }

  const rest = restaurants.filter((item) => item.name === name)[0];

  return (
    <main>
      <div className="card">
        <img src={rest.photos[0].links[1]} alt="restaurant" />
        <div className="textbox">
          <h2>{rest.name}</h2>
          <p>{rest.formatted_address}</p>
          <p>{rest.social.phone}</p>
          <p>{rest.social.email}</p>
          <p>
            Open from {rest.opening_hours.hours.open} to{" "}
            {rest.opening_hours.hours.open}
          </p>
          <p>Rating: {rest.rating}</p>
          <p style={{ textTransform: "capitalize" }}>
            Food: {rest.cuisine}, {rest.dietaryRestrictions}
          </p>
        </div>
      </div>
    </main>
  );
};

function mapReduxStateToProps(reduxState) {
  return { restaurants: reduxState.restaurants };
}

export default connect(mapReduxStateToProps)(Restaurant);
