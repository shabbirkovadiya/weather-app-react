import React, { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import useDebounce from "./hooks/useDebounce";

export default function WeatherApp() {
  const navigate=useNavigate()
  const [city, setCity] = useState("himatnagar");
  const [weather, setWeather] = useState(null);
   let CityVal = useDebounce(city, 100);
   
  const apiKey = "ea4beb82642bab3fe7111bd72cdfc22a";
useEffect(() => {
  if (!CityVal) return;
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CityVal}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) {
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
      setWeather(null);
    }
  };
  fetchWeather();
}, [CityVal]);

   
  return (
    <section className="container">
      {/* Search Input */}
      <div className="weather-header">
        <div className="weather-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="city-name"
            placeholder="Search your city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button onClick={()=>navigate("/faqs")}>FAQs</button>
      </div>

      {/* Main Weather Data */}
      {weather== null ? (<h2>No City Found</h2>
      ): (
        <div className="weather-body">
          <h1 className="weather-city">{weather.name},{weather.sys.country}</h1>
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
