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

export default Restaurant;
