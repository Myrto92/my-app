import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Me from "./Me";
function App() {
  return (
    <div className="App">
      <div className="container contain">
        <div className="row">
          <div className="col-4">
            <Search />
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Me />
    </div>
  );
}

export default App;
