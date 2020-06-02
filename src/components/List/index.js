import React, { useState, useEffect } from "react";
import axios from "axios";

import FilterItem from "./FilterItem";

import "./List.scss";

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

const apiLink = "https://redi-final-restaurants.herokuapp.com/restaurants";

const List = () => {
  const [rests, setRests] = useState([]);
  useEffect(() => {
    axios
      .get(apiLink)
      .then((res) => {
        setRests(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filterRestaurantsByPrice = rest => {
    if (selectedPrice !== "" && typeof rest.price_level !== "undefined") {
      return rest.price_level.toString() === selectedPrice;
    }

    return true;
  };

  const filterRestaurantsByType = rest => {
    if (selectedType === 'delivery') {
      return rest.delivery;
    }

    if (selectedType === 'pickup') {
      return rest.pickup;
    }

    return true;
  };

  const filterRestaurantsByDietaryRestrictions = rest => {
    if (selectedDietaryRestrictions !== "") {
      return rest.dietaryRestrictions === selectedDietaryRestrictions;
    }

    return true;
  }

  const filterRestaurantsByOpen = rest => {
    if (isOpen) {
      return rest.opening_hours.open_now;
    }

    return true;
  };

  return (
    <>
      <div className="filterBox">

        <FilterItem
          title='Price:'
          main={<select
            name="price"
            id="price"
            onChange={event => setSelectedPrice(event.target.value)}
          >
            <option value="">Show all</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>}
        />

        <FilterItem
          title='Type:'
          main={<select
            name="type"
            id="type"
            onChange={event => setSelectedType(event.target.value)}
          >
            <option value="">Show all</option>
            <option value="delivery">Delivery</option>
            <option value="pickup">Pickup</option>
          </select>}
        />

        <FilterItem
          title='Dietary Restrictions:'
          main={<select
            name="dietaryRestrictions"
            id="dietaryRestrictions"
            onChange={event => setSelectedDietaryRestrictions(event.target.value)}
          >
            <option value="">Show all</option>
            <option value="Kosher">Kosher</option>
            <option value="Halal">Halal</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Lactose free">Lactose Free</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>}
        />

        <label for="open">Open now</label>
        <input
          type="checkbox"
          id="open"
          name="open"
          onChange={() => setIsOpen(!isOpen)}
        />

      </div>
      <ul>
        {rests
          .filter(filterRestaurantsByPrice)
          .filter(filterRestaurantsByOpen)
          .filter(filterRestaurantsByType)
          .filter(filterRestaurantsByDietaryRestrictions)
          .map((rest) => (
            <li className="ListItem" key={rest.id}>
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
          ))}
      </ul>
    </>
  );
};

export default List;
