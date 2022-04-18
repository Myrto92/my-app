import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, SetUnit] = useState("celsius");
  function convertToFar(event) {
    event.preventDefault();
    SetUnit("farehneit");
  }
  function convertToCels(event) {
    event.preventDefault();
    SetUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">
          {Math.round(props.celsius)}
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={convertToFar}>
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let farehneitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">
          {Math.round(farehneitTemp)}
          <span className="unit">
            <a href="/" onClick={convertToCels}>
              °C
            </a>{" "}
            | °F
          </span>
        </span>
      </div>
    );
  }
}
