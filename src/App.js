import React from "react";
import Header from "./components/Header";
import SearchFilterBar from "./components/SearchFilterBar";
import List from "./components/List";

import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <SearchFilterBar />
        <List />
      </main>
    </div>
  );
}

export default App;
