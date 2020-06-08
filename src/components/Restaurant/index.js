import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import BackButton from "./BackButton";
import "./Restaurant.scss";

const Restaurant = ({ restaurants }) => {
  let { name } = useParams();

  if (restaurants.length === 0) {
    return <>Please return to Home page...</>;
  }

  const restaurant = restaurants.filter((item) => item.name === name)[0];
  return (
    <>
      <BackButton />
      <div className="RestaurantCard">
        <img src={restaurant.photos[0].links[1]} alt="restaurant" />
        <div className="textbox">
          <h2>
            {restaurant.name} •{" "}
            <span>{"$".repeat(restaurant.price_level)}</span>
          </h2>
          <p className="rating">
            {restaurant.rating} <span>({restaurant.user_ratings_total})</span>
          </p>
          <p className="address">{restaurant.formatted_address}</p>
          <p style={{ textTransform: "capitalize" }}>
            Cuisine: {restaurant.cuisine},{" "}
            <span>({restaurant.dietaryRestrictions} is available)</span>
          </p>
          <p className="openTime">
            Open from {restaurant.opening_hours.hours.open} to{" "}
            {restaurant.opening_hours.hours.close}
          </p>
          <p className="contactForm">
            <span>
              {restaurant.social.phone}, {restaurant.social.email}
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
