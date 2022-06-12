import React from "react";
import location from "../icons/location.svg";

export default function TodayWeather({ weatherData }) {
  function setTempToC(temp) {
    return Math.round(temp - 273.15);
  }

  return (
    <div className="app-main-content">
      <img
        className="image"
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
        alt="weather-image"
      />
      <span className="app-main-temp">
        {setTempToC(weatherData.main.temp)}
        <span className="app-main-gr">°C</span>
      </span>
      <span className="app-main-weather">{weatherData.weather[0].main}</span>
      <div className="app-main-footer">
        <div className="app-main-date">
          <span className="footer-text">Today</span>
          <span className="footer-text">
            {Date(weatherData.dt).slice(0, 10)}
          </span>
        </div>
        <span className="footer-text">
          <img className="location-icon" src={location} />
          {weatherData.name}
        </span>
      </div>
    </div>
  );
}
