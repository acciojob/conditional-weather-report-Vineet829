import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Determine temperature color
  const temperatureColor = temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p style={{ fontSize: "18px", margin: "10px 0" }}>
        Temperature:{" "}
        <span style={{ color: temperatureColor }}>{temperature}</span>
      </p>
      <p style={{ fontSize: "18px", margin: "10px 0" }}>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;