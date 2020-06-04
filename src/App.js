import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import FilterComponent from "./components/List/FilterComponent";

import "./index.scss";

const apiLink = "https://redi-final-restaurants.herokuapp.com/restaurants";

function App() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios
      .get(apiLink)
      .then((res) => {
        setContent(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route path="/restaurants/:name">
            <Restaurant rests={content} />
          </Route>
          <Route path="/">
            <FilterComponent rests={content} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
