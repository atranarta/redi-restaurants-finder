import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";

import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;
