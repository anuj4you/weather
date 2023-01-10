import React from "react";

// api initialize --------
//  example-> https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const api = {
  key: "954e7fdad02b2614a54118fd952d9064",
  base: "",
};

// get today's date --------------

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

const d = new Date();
let day = weekday[d.getDay()];

today = day + " " + mm + " " + dd + " " + yyyy;

// get image from static file
var cloud = require('./assets/cloud.png')
var fav = require('./assets/faviconAnuj.ico')

// App start
export default function App() {
  return (
    <div>
      <div className="backgroundMain">
        <div className="main">
          <h2 className="h2">☁️ Weather Forecast ☁️</h2>
          <div className="outputArea">
            <div className="searchBar">
              <input type="text" name="city" placeholder="City name " />
            </div>

            <div className="results">
              <div className="result1">
                <div className="cityInfo">
                  <h3 className="boldFont">Toronto</h3>
                  <p style={{fontSize: "1.2rem"}}>{today}</p>
                </div>
                <div className="info">
                  <div className="temp">
                    <h1 className="h1">5 °C</h1>
                    <h2 className="h2">Clouds</h2>
                  </div>

                  <div className="logo">
                  <img src={cloud} style={{width: "9em"}} alt="clouds"/>
                  </div>
                </div>
              </div>
              <div className="result2">
                <div className="detail">
                  <p>Feels like</p>
                  <div className="value">
                    <p className="yellow">5 °C</p>
                  </div>
                </div>
                <div className="detail">
                  <p>Wind speed</p>
                  <div className="value">
                    <p className="yellow">12 kph</p>
                  </div>
                </div>
                <div className="detail">
                  <p>Humidity</p>
                  <div className="value">
                    <p className="yellow">30%</p>
                  </div>
                </div>
                <div className="detail">
                  <p>Max Temp.</p>
                  <div className="value">
                    <p className="yellow">8 °C</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cityInfo">
                  
                  <p style={{fontSize: "0.8rem"}}>© {new Date().getFullYear()} weatherSick, Anuj Kumar Inc. <img src={fav} style={{width: "1em", marginBottom: "-2px"}} alt="fav"/> </p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
