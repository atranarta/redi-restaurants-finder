import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Restaurants from "./components/Restaurants";

import { actionTypes } from "./redux-store/actionTypes";
import PageNotFound from "./components/PageNotFound";

import "./index.scss";

const apiLink = "https://redi-final-restaurants.herokuapp.com/restaurants";

const App = ({ dispatch }) => {
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
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route path="/restaurants/:name">
            <Restaurant />
          </Route>
          <Route exact path="/">
            <Restaurants />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

function mapReduxStateToProps(reduxState) {
  return { restaurants: reduxState.restaurants };
}

export default connect(mapReduxStateToProps)(App);
