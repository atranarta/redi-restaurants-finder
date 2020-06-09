import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Restaurants from "./components/Restaurants";
import PageNotFound from "./components/PageNotFound";

import "./index.scss";

const App = () => {
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

export default App;
