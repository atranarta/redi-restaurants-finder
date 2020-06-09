import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Restaurants from "./components/Restaurants";
import Footer from "./components/Footer";

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
          <Route path="/">
            <Restaurants />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
