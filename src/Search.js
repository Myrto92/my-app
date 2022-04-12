import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9130c6c3f81e5410c4080fc310e5279d&units=metric`;
    axios.get(url).then(displayTemperature);
  }

  function defineCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={defineCity} />
      <button className="btn btn-info" type="submit">
        Search{" "}
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>temperature:{Math.round(weather.temperature)}°C</li>
          <li>humidity:{weather.humidity}%</li>
          <li>description:{weather.description}</li>
          <li>wind: {weather.wind}km/h</li>
          <img src={weather.icon} alt="weather" />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
