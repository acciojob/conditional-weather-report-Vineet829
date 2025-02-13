import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Simulating the input { temperature: 25, conditions: "Sunny" }
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "400px",
        padding: "20px",
        border: "2px solid black",
        textAlign: "center",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;