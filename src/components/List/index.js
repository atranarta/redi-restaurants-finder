import React from "react";
import { Link } from "react-router-dom";

import "./List.scss";

const List = ({ rests }) => {
  return (
    <>
      <ul>
        {rests.map((rest) => (
          <Link
            to={`/restaurants/${rest.name}`}
            style={{ textDecoration: "none" }}
            key={rest.id}
          >
            <li className="ListItem">
              <img src={rest.photos[0].links[1]} alt="restaurant" />
              <div className="textbox">
                <h2>{rest.name}</h2>
                <p className="address">{rest.formatted_address}</p>
                <p className="price">{"$".repeat(rest.price_level)}</p>

                <div className="isOpen">
                  {rest.opening_hours.open_now ? (
                    <p className="open">Open</p>
                  ) : (
                    <p className="closed">Closed</p>
                  )}
                </div>
              </div>
              <p className="rating">
                <span
                  className="rating-number"
                  style={{ backgroundColor: getRatingColor(rest.rating) }}
                >
                  {rest.rating}
                </span>
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

const getRatingColor = (rating) => {
  if (rating <= 2.3) {
    return `#8B0000`;
  } else if (rating <= 2.8) {
    return `#FF6347`;
  } else if (rating <= 3.6) {
    return `#FFA500`;
  } else if (rating <= 4.2) {
    return `#FFD700`;
  } else {
    return `#00FF7F`;
  }
};

export default List;
