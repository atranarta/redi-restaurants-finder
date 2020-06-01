import React, { useState, useEffect } from "react";
import axios from "axios";

import "./List.scss";

import Placeholder from "../../assets/images/Raspberry_in_Bowl.jpg";

const getRatingColor = (rating) => {
  if (rating <= 2.3) {
    return `#8B0000`
  } else if (rating <= 2.8) {
    return `#FF6347`
  } else if (rating <= 3.6) {
    return `#FFA500`
  } else if (rating <= 4.2) {
    return `#FFD700`
  } else {
    return `#00FF7F`
  }
}

//Custom-made API, containing 20 static result restaurants
const apiLink =
  "https://test-places-response.s3.eu-west-3.amazonaws.com/response.json";

// Component, performing fetching data from the API and displaying the total list of restaurants,
// including their names and addresses
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
  const [isOpen, setIsOpen] = useState(false);

  const filterRestaurantsByPrice = rest => {
    if (selectedPrice !== "" && typeof rest.price_level !== 'undefined') {
      return rest.price_level.toString() === selectedPrice;
    }

    return true;
  };

  const filterRestaurantsByOpen = rest => {
    if (isOpen) {
      return rest.opening_hours.open_now;
    }

    return true;
  };

  return (
    <>
      <div className="filterBox">
        <select name="price" id="price" onChange={event => setSelectedPrice(event.target.value)}>
          <option value="">Show all</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <label for="open">Open now</label>
        <input type="checkbox" id="open" name="open" onChange={() => setIsOpen(!isOpen)} />
      </div>
      <ul>
        {rests.filter(filterRestaurantsByPrice).filter(filterRestaurantsByOpen).map((rest) => (
          <li className="ListItem" key={rest.id}>
            <img src={Placeholder} alt="restaurant" />
            <div className="textbox">
              <h2>{rest.name}</h2>
              <p className="address">{rest.formatted_address}</p>
              <p className="price">{"$".repeat(rest.price_level)}</p>

              <div className="isOpen">
                {rest.opening_hours.open_now
                  ? (<p className="open">Open</p>)
                  : (<p className="closed">Closed</p>)}
              </div>
            </div>
            <p className="rating">
              <span className="rating-number" style={{ backgroundColor: getRatingColor(rest.rating) }}>{rest.rating}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
