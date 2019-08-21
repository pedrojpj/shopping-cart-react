import React from "react";
import "./App.css";

import Provider from "./Provider";
import Cart from "./Cart";
import List from "./List";

function App() {
  return (
    <div className="App">
      <Provider>
        <Cart />
        <List />
      </Provider>
    </div>
  );
}

export default App;
