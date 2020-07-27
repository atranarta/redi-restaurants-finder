import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import FilterItem from "./FilterItem";

import "./Filters.scss";
import { actionTypes } from "../../redux-store/actionTypes";

const Filters = ({ dispatch, restaurants }) => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCuisine, setselectedCuisine] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [
    selectedDietaryRestrictions,
    setSelectedDietaryRestrictions,
  ] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch({
      type: actionTypes.filterAction,
      payload: { filteredRestaurants },
    });
  });

  const filterRestaurantsByPrice = (rest) => {
    if (selectedPrice !== "" && typeof rest.price_level !== "undefined") {
      return rest.price_level.toString() === selectedPrice;
    }

    return true;
  };

  const filterRestaurantsByCuisine = (rest) => {
    if (selectedCuisine !== "") {
      return rest.cuisine === selectedCuisine;
    }

    return true;
  };

  const filterRestaurantsByType = (rest) => {
    if (selectedType === "delivery") {
      return rest.delivery;
    }

    if (selectedType === "pickup") {
      return rest.pickup;
    }

    return true;
  };

  const filterRestaurantsByDietaryRestrictions = (rest) => {
    if (selectedDietaryRestrictions !== "") {
      return rest.dietaryRestrictions === selectedDietaryRestrictions;
    }

    return true;
  };

  const filterRestaurantsByOpen = (rest) => {
    if (isOpen) {
      return rest.opening_hours.open_now;
    }

    return true;
  };

  const filterRestaurantsByName = (rest) => {
    if (search !== "") {
      return rest.name.toLowerCase().includes(search.toLowerCase());
    }

    return true;
  };

  const removeFilters = () => {
    setSelectedPrice("");
    setselectedCuisine("");
    setSelectedType("");
    setSelectedDietaryRestrictions("");
    setIsOpen(false);
    setSearch("");
  };

  const filteredRestaurants = restaurants
    .filter(filterRestaurantsByName)
    .filter(filterRestaurantsByPrice)
    .filter(filterRestaurantsByCuisine)
    .filter(filterRestaurantsByType)
    .filter(filterRestaurantsByDietaryRestrictions)
    .filter(filterRestaurantsByOpen);

  return (
    <div className="filterSearchBox">
      <div className="filterBox">
        <FilterItem
          title="Cuisine"
          main={
            <select
              name="cuisine"
              id="cuisine"
              value={selectedCuisine}
              onChange={(event) => setselectedCuisine(event.target.value)}
            >
              <option value="">Show all</option>
              <option value="italian">Italian</option>
              <option value="chinese">Chinese</option>
              <option value="thai">Thai</option>
              <option value="mexican">Mexican</option>
              <option value="indian">Indian</option>
              <option value="turkish">Turkish</option>
            </select>
          }
        />

        <FilterItem
          title="Price"
          main={
            <select
              name="price"
              id="price"
              value={selectedPrice}
              onChange={(event) => setSelectedPrice(event.target.value)}
            >
              <option value="">Show all</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          }
        />

        <FilterItem
          title="Type"
          main={
            <select
              name="type"
              id="type"
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value="">Show all</option>
              <option value="delivery">Delivery</option>
              <option value="pickup">Pickup</option>
            </select>
          }
        />

        <FilterItem
          title="Dietary Restrictions"
          main={
            <select
              name="dietaryRestrictions"
              id="dietaryRestrictions"
              value={selectedDietaryRestrictions}
              onChange={(event) =>
                setSelectedDietaryRestrictions(event.target.value)
              }
            >
              <option value="">Show all</option>
              <option value="Kosher">Kosher</option>
              <option value="Halal">Halal</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Lactose free">Lactose Free</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>
          }
        />

        <div className="isOpenCheckbox">
          <label htmlFor="open">Open now:</label>
          <input
            type="checkbox"
            id="open"
            name="open"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <div className="searchResetWrap">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter restaurant name here..."
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
        </div>

        <button onClick={removeFilters}>Remove all filters</button>
      </div>
    </div>
  );
};

function mapReduxStateToProps(reduxState) {
  return { restaurants: reduxState.restaurants };
}

export default connect(mapReduxStateToProps)(Filters);
