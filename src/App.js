import React, { useState } from "react";

// api initialize --------
//  example-> https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const api = {
  key: "954e7fdad02b2614a54118fd952d9064",
  base: "https://api.openweathermap.org/data/2.5/",
};

// get today's date --------------

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const d = new Date();
let day = weekday[d.getDay()];

today = dd + " " + mm + " " + yyyy + ", " + day;

// get image from static file

var fav = require("./assets/faviconAnuj.ico");

// App start
export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  // const icon = weather.weather[0].icon;

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div>
      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 12
              ? "backgroundMainWarm"
              : "backgroundMain"
            : "backgroundMain"
        }
      >
        <div className="main">
          <h2 className="h2">☁️ Weather Forecast ☁️</h2>
          <div className="outputArea">
            <div className="searchBar">
              <input
                type="text"
                name="city"
                placeholder="City name "
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>

            {typeof weather.main != "undefined" ? (
              <div className="results">
                <div className="result1">
                  <div className="cityInfo">
                    <h3 className="boldFont">
                      {weather.name}, {weather.sys.country}
                    </h3>
                    <p style={{ fontSize: "1.2rem" }}>{today}</p>
                  </div>
                  <div className="info">
                    <div className="temp">
                      <h1 className="h1">{Math.round(weather.main.temp)} °C</h1>
                      <h2 className="h2">{weather.weather[0].main}</h2>
                    </div>

                    <div className="logo">
                      <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        style={{ width: "9em" }}
                        alt="icon.."
                      />
                    </div>
                  </div>
                </div>
                <div className="result2">
                  <div className="detail">
                    <p>Feels like</p>
                    <div className="value">
                      <p className="yellow">{weather.main.feels_like} °C</p>
                    </div>
                  </div>
                  <div className="detail">
                    <p>Wind speed</p>
                    <div className="value">
                      <p className="yellow">{weather.wind.speed} kph</p>
                    </div>
                  </div>
                  <div className="detail">
                    <p>Humidity</p>
                    <div className="value">
                      <p className="yellow">{weather.main.humidity} %</p>
                    </div>
                  </div>
                  <div className="detail">
                    <p>Max Temp.</p>
                    <div className="value">
                      <p className="yellow">{weather.main.temp_max} °C</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="cityInfo">
              <p style={{ fontSize: "0.8rem" }}>
                © {new Date().getFullYear()} weatherSick, Anuj Kumar Inc.{" "}
                <img
                  src={fav}
                  style={{ width: "1em", marginBottom: "-2px" }}
                  alt="fav"
                />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
