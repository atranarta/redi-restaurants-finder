import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import eatingBeans from "../../assets/images/Bean Eater-1s-84px.svg";

import "./List.scss";

const List = ({ filteredRestaurants, loading }) => {
  return (
    <>
      {loading ? (
        <div className="preloader-wrapper">
          <img src={eatingBeans} className="preloader" alt="preloader"></img>
        </div>
      ) : null}
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.name}`}
            style={{ textDecoration: "none" }}
            key={restaurant.id}
          >
            <li className="ListItem">
              <img src={restaurant.photos[0].links[1]} alt="restaurant" />
              <div className="textbox">
                <h2>{restaurant.name}</h2>
                <p className="address">{restaurant.formatted_address}</p>
                <p className="price">{"$".repeat(restaurant.price_level)}</p>

                <div className="isOpen">
                  {restaurant.opening_hours.open_now ? (
                    <p className="open">Open</p>
                  ) : (
                    <p className="closed">Closed</p>
                  )}
                </div>
              </div>
              <p className="rating">
                <span
                  className="rating-number"
                  style={{ backgroundColor: getRatingColor(restaurant.rating) }}
                >
                  {restaurant.rating}
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
    return `#d34129`;
  } else if (rating <= 2.8) {
    return `#e4652d`;
  } else if (rating <= 3.6) {
    return `#f29946`;
  } else if (rating <= 4.2) {
    return `#feee66`;
  } else {
    return `#81bd65`;
  }
};

function mapReduxStateToProps(reduxState) {
  return {
    filteredRestaurants: reduxState.filteredRestaurants,
    loading: reduxState.loading,
  };
}

export default connect(mapReduxStateToProps)(List);
