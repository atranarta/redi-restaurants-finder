import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import "./Restaurant.scss";

const Restaurant = ({ restaurants }) => {
  let { name } = useParams();

  if (restaurants.length === 0) {
    return <>Please return to Home page...</>;
  }

  const rest = restaurants.filter((item) => item.name === name)[0];

  return (
    <>
      <div className="RestaurantCard">
        <img src={rest.photos[0].links[1]} alt="restaurant" />
        <div className="textbox">
          <h2>
            {rest.name} • <span>{"$".repeat(rest.price_level)}</span>
          </h2>
          <p className="rating">
            {rest.rating} <span>({rest.user_ratings_total})</span>
          </p>
          <p className="address">{rest.formatted_address}</p>
          <p style={{ textTransform: "capitalize" }}>
            Cuisine: {rest.cuisine},{" "}
            <span>({rest.dietaryRestrictions} is available)</span>
          </p>
          <p className="openTime">
            Open from {rest.opening_hours.hours.open} to{" "}
            {rest.opening_hours.hours.close}
          </p>
          <p className="contactForm">
            <span>
              {rest.social.phone}, {rest.social.email}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

function mapReduxStateToProps(reduxState) {
  return { restaurants: reduxState.restaurants };
}

export default connect(mapReduxStateToProps)(Restaurant);
