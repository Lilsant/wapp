import React from "react";
import "./DailyHightlights.css";
import windDirection from "../icons/wind-direction.svg";

export default function DailyHightlights({ data }) {
  function degToDirection(deg) {
    let value = deg / 22.5 + 0.5;
    let arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[Math.round(value % 16)];
  }

  return (
    <>
      <div className="app-info-highlights">
        <h2 className="hightlights-title">Today’s Hightlights</h2>
        <div className="hightlights-main">
          <div className="hightlights-main-box">
            <span className="hightlights-main-title">Wind status</span>
            <span className="hightlights-main-value">
              {Math.round(data.wind_speed)}
              <span className="hightlights-main-unit">mph</span>
            </span>
            <div className="wind-direction">
              <div
                className="wind-direction-container"
                style={{ transform: "rotate(" + data.wind_deg + "deg)" }}
              >
                <img className="wind-direction-icon" src={windDirection} />
              </div>
              <span className="hightlights-main-description">
                {degToDirection(data.wind_deg)}
              </span>
            </div>
          </div>
          <div className="hightlights-main-box">
            <span className="hightlights-main-title">Humidity</span>
            <span className="hightlights-main-value">
              {data.humidity}
              <span className="hightlights-main-unit">%</span>
            </span>
            <div className="meter">
              <span
                className="meter-value"
                style={{ width: data.humidity + "%" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className="app-info-description">
        <div className="hightlights-main-box secondary">
          <span className="hightlights-main-title">Cloudiness</span>
          <span className="hightlights-main-value">
            {data.clouds}
            <span className="hightlights-main-unit">%</span>
          </span>
        </div>
        <div className="hightlights-main-box secondary">
          <span className="hightlights-main-title">Air Pressure</span>
          <span className="hightlights-main-value">
            {data.pressure}
            <span className="hightlights-main-unit">mb</span>
          </span>
        </div>
      </div>
    </>
  );
}
