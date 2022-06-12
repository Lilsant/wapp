import React from "react";
import "./DailyForecast.css";
export default function DailyForecast({ data }) {
  const date = data.dt;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="forecast-box">
      <span className="forecast-date">{`${
        days[new Date(date * 1000).getDay()]
      }, ${new Date(date * 1000).getDate()}.0${
        new Date(date * 1000).getMonth() + 1
      }`}</span>
      <img
        className="forecast-image"
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      ></img>
      <div className="forecast-temp">
        <span className="forecast-temp-main">
          {Math.round(data.temp.max - 273.15)}℃
        </span>
        <span className="forecast-temp-avrg">
          {Math.round(data.temp.eve - 273.15)}℃
        </span>
      </div>
    </div>
  );
}
