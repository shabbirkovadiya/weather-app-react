import React, { useState } from "react";
import "./App.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async (e) => {    
    e.preventDefault();
    if (!city) return;

    // Example API: OpenWeatherMap (replace with your own API key)
    const apiKey = "ea4beb82642bab3fe7111bd72cdfc22a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container">
      {/* Search Input */}
      <div className="weather-header">
        <form className="weather-search" onSubmit={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="city-name"
            placeholder="Search your city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
      </div>

      {/* Main Weather Data */}
      {weather== null ? (<h2>Search City</h2>
      ): (
        <div className="weather-body">
          <h1 className="weather-city">{weather.name}</h1>
          <p className="weather-date-time">
            {new Date().toLocaleString()}
          </p>

          <div className="weather-data">
            <p className="weather-forecast">{weather.weather[0].main}</p>
            <div className="weather-icon">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
          </div>

          <p className="weather-temperature">
            {weather.main.temp}°C
          </p>

          <div className="weather-minmax">
            <p className="weather-min">Min: {weather.main.temp_min}°C</p>
            <p className="weather-max">Max: {weather.main.temp_max}°C</p>
          </div>
        </div>
      )}

      {/* Extra Info */}
      {weather && (
        <section className="weather-info">
          <div className="weather-card">
            <i className="fa-solid fa-temperature-half"></i>
            <div>
              <p>Feels Like</p>
              <p className="weather-feelsLike">
                {weather.main.feels_like}°C
              </p>
            </div>
          </div>

          <div className="weather-card">
            <i className="fa-solid fa-droplet"></i>
            <div>
              <p>Humidity</p>
              <p className="weather-humidity">{weather.main.humidity}%</p>
            </div>
          </div>

          <div className="weather-card">
            <i className="fa-solid fa-wind"></i>
            <div>
              <p>Wind</p>
              <p className="weather-wind">{weather.wind.speed} m/s</p>
            </div>
          </div>

          <div className="weather-card">
            <i className="fa-solid fa-gauge-high"></i>
            <div>
              <p>Pressure</p>
              <p className="weather-pressure">{weather.main.pressure} hPa</p>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
