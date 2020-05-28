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
  return (
    <main>
      {rests.map((rest) => (
        <li className="ListItem" key={rest.id}>
          <div className="textbox">
            <h2>{rest.name}</h2>
            <p className="address">{rest.formatted_address}</p>
            <div className="details">
              <p className="price">{"$".repeat(rest.price_level)}</p>
              <p className="rating">
                Rating: <span className="rating-number" style={{ backgroundColor: getRatingColor(rest.rating) }}>{rest.rating}</span>
              </p>
              <p className="isOpen">
                {rest.opening_hours.open_now ? (
                  <span className="open">Open</span>
                ) : (
                    <span className="closed">Closed</span>
                  )}
              </p>
            </div>
          </div>
          <img src={Placeholder} alt="restaurant" />
        </li>
      ))}
    </main>
  );
};

export default List;
