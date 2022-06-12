import React, { useState, useEffect } from "react";
import "./Info.css";
import DailyForecast from "../DailyForecast/DailyForecast";
import DailyHightlights from "../DailyHightlights/DailyHightlights";

export default function Info({ lat, lon }) {
  const [weatherData, setWeatherData] = useState();
  let dailyForecast;
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=7ef450c887640af790deffb91bbf44d6`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [lat]);

  if (weatherData) {
    dailyForecast = weatherData.daily.map((el, i) => {
      if (i < 5)
        return (
          <div key={i}>
            <DailyForecast data={el} />
          </div>
        );
      return null;
    });
  }

  return weatherData ? (
    <>
      <div className="container">
        <h2 className="hightlights-title">Week Forecast</h2>
        <div className="app-info-forecast">{dailyForecast}</div>
        <DailyHightlights data={weatherData.daily[1]} />
        <div className="app-info-footer">
          <span className="footer-text">Created by Lilsant</span>
        </div>
      </div>
    </>
  ) : null;
}
