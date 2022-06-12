import React from "react";
import loading from "../icons/loading.svg";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return <img className="loading-icon" src={loading} />;
}
