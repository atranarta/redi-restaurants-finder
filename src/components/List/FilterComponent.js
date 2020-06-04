import React, { useState } from "react";
import List from "./index";

import FilterItem from "./FilterItem";

export const FilterComponent = ({ rests }) => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCuisine, setselectedCuisine] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [
    selectedDietaryRestrictions,
    setSelectedDietaryRestrictions,
  ] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  const filteredRests = rests
    .filter(filterRestaurantsByPrice)
    .filter(filterRestaurantsByCuisine)
    .filter(filterRestaurantsByType)
    .filter(filterRestaurantsByDietaryRestrictions)
    .filter(filterRestaurantsByOpen);

  return (
    <div>
      <div className="filterBox">
        <FilterItem
          title="Price"
          main={
            <select
              name="price"
              id="price"
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
          title="Cuisine"
          main={
            <select
              name="cuisine"
              id="cuisine"
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
          title="Type"
          main={
            <select
              name="type"
              id="type"
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

        <label htmlFor="open">Open now</label>
        <input
          type="checkbox"
          id="open"
          name="open"
          onChange={() => setIsOpen(!isOpen)}
        />
      </div>
      <List rests={filteredRests} />
    </div>
  );
};
