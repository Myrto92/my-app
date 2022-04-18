import React from "react";
import "./App.css";
import Search from "./Search";
import Me from "./Me";

function App() {
  return (
    <div className="App">
      <Me />
      <div className="container contain">
        <div className="row">
          <div className="col-4">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
