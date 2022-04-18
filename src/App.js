import React from "react";
import "./App.css";
import Search from "./Search";
import Me from "./Me";
import WeatherIcon from "./WeatherIcon";

function App() {
  return (
    <div className="App">
      <div className="container contain">
        <div className="row">
          <div className="col-4">
            <Search />
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Me />
    </div>
  );
}

export default App;
