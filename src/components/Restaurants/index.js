import React, { useEffect } from "react";
import { connect } from "react-redux";

import List from "./List";
import Filters from "./Filters";

import { actionTypes } from "../../redux-store/actionTypes";

const apiLink = "https://redi-final-restaurants.herokuapp.com/restaurants";

const Restaurants = ({ dispatch }) => {
  useEffect(() => {
    async function fetchData() {
      dispatch({ type: actionTypes.startLoading, payload: { error: false } });
      try {
        const response = await fetch(apiLink);
        const data = await response.json();
        const restaurants = data.results;
        // Dispatching the list of all restaurants to the redux store
        dispatch({
          type: actionTypes.loadSuccess,
          payload: { restaurants },
        });
      } catch (error) {
        dispatch({ type: actionTypes.loadError, payload: { error } });
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Filters />
      <List />
    </div>
  );
};

function mapReduxStateToProps(reduxState) {
  return { restaurants: reduxState.restaurants };
}

export default connect(mapReduxStateToProps)(Restaurants);
