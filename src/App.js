import React from "react";
import Header from "./components/Header";
import List from "./components/Main/List";

import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <List />
    </div>
  );
}

export default App;
