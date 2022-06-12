import React, { useEffect, useState } from "react";
import "./Main.css";
import Info from "../Info/Info";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodayWeather from "../TodayWeather/TodayWeather";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Main() {
  const [weatherData, setWeatherData] = useState();
  const [isSearchPanel, setSearchPanel] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cityList, setCityList] = useState(["London", "Moscow"]);
  const [currentCity, setCurrentCity] = useState(["London"]);

  function addCity(cityName) {
    setCityList((cityList) => [cityName, ...cityList]);
  }

  function changeCurrentCity(id) {
    setCurrentCity((currentCity) => cityList[id]);
  }

  useEffect(() => {
    setWeatherData();
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=7ef450c887640af790deffb91bbf44d6`
    )
      .then((res) => {
        if (res.status >= 200 && res.status < 300) return res.json();
        else {
          let error = new Error(res.statusText);
          throw error;
        }
      })
      .then((data) => {
        setWeatherData(data);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [currentCity]);

  return (
    <>
      {isSearchPanel ? (
        <div className="app-main">
          <div className="app-main-head">
            <button
              className="button"
              onClick={() => setSearchPanel(!isSearchPanel)}
            >
              Search for places
            </button>
          </div>
          {!isLoading ? (
            !isError ? (
              <TodayWeather weatherData={weatherData} />
            ) : null
          ) : (
            <LoadingSpinner />
          )}
        </div>
      ) : (
        <SearchPanel
          closeSearchPanel={() => {
            setSearchPanel(!isSearchPanel);
          }}
          cityList={cityList}
          addCity={addCity}
          changeCurrentCity={changeCurrentCity}
        />
      )}
      <div className="app-info">
        {!isLoading ? (
          !isError ? (
            <Info lon={weatherData.coord.lon} lat={weatherData.coord.lat} />
          ) : (
            <ErrorMessage />
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}
