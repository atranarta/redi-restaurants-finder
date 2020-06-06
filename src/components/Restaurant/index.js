import React from "react";

import "./Restaurant.scss";
import { useParams } from "react-router-dom";

const Restaurant = ({ rests }) => {
  let { name } = useParams();

  if (rests.length === 0) {
    return (
      <>Loading...</>
    );
  }

  const rest = rests.filter((item) => item.name === name)[0];

  return (
    <>
      <div className="RestaurantCard">
        <img src={rest.photos[0].links[1]} alt="restaurant" />
        <div className="textbox">
          <h2>{rest.name} • <span>{"$".repeat(rest.price_level)}</span></h2>
          <p className="rating">{rest.rating} <span>({rest.user_ratings_total})</span></p>
          <p className="address">{rest.formatted_address}</p>
          <p style={{ textTransform: "capitalize" }}>
            Cuisine: {rest.cuisine}, <span>({rest.dietaryRestrictions} is available)</span>
          </p>
          <p className="openTime">
            Open from {rest.opening_hours.hours.open} to {rest.opening_hours.hours.close}
          </p>
          <p className="contactForm"><span>{rest.social.phone}, {rest.social.email}</span></p>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
