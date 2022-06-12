import React, { useState } from "react";
import "./SearchPanel.css";
import close from "../icons/close.svg";
import next from "../icons/next.svg";

export default function SearchPanel({
  closeSearchPanel,
  cityList,
  addCity,
  changeCurrentCity,
}) {
  const [cityInput, setCityInput] = useState("");

  return (
    <div className="app-main">
      <div className="search-close">
        <button
          onClick={() => closeSearchPanel()}
          className="search-close-button"
        >
          <img className="search-close-icon" alt="close" src={close} />
        </button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCity(cityInput);
          setCityInput("");
        }}
        className="search-form"
      >
        <input
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
          className="search-input"
          placeholder="Add City"
          value={cityInput}
        />
        <button className="search-button">Add</button>
      </form>
      <ul className="search-list">
        {cityList.map((el, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                changeCurrentCity(i);
                closeSearchPanel();
              }}
              className="search-list-item"
            >
              {el}
              <img className="search-list-item-icon" alt="search" src={next} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
