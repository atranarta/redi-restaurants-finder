import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import FilterComponent from "./components/List/FilterComponent";

import { actionTypes } from "./redux-store/actionTypes";

import "./index.scss";

const apiLink = "https://redi-final-restaurants.herokuapp.com/restaurants";

const App = ({ dispatch, restaurants }) => {
  useEffect(() => {
    async function fetchData() {
      dispatch({ type: actionTypes.startLoading, payload: { error: false } });
      try {
        const response = await fetch(apiLink);
        const data = await response.json();
        const restaurants = data.results;
        dispatch({ type: actionTypes.loadSuccess, payload: { restaurants } });
      } catch (error) {
        dispatch({ type: actionTypes.loadError, payload: { error } });
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route path="/restaurants/:name">
            <Restaurant />
          </Route>
          <Route path="/">
            <FilterComponent />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return { restaurants: reduxState.restaurants };
}
export default connect(mapStateToProps)(App);
