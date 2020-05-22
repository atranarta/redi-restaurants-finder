import React from "react";
import Header from "./components/Header";
// import Main from "./components/Main";
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
