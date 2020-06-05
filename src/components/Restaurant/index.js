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
          <h2>{rest.name}</h2>
          <p>{rest.formatted_address}</p>
          <p style={{ textTransform: "capitalize" }}>
            Cuisine: {rest.cuisine}, {rest.dietaryRestrictions}
          </p>
          <p>Rating: {rest.rating}</p>
          <p>
            Open from {rest.opening_hours.hours.open} to{" "}
            {rest.opening_hours.hours.open}
          </p>
          <p>{rest.social.phone}</p>
          <p>{rest.social.email}</p>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
