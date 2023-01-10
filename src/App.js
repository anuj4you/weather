import React from "react";

// api initialize --------
//  example-> https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const api = {
  key: "954e7fdad02b2614a54118fd952d9064",
  base: "",
};

// today date --------------

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

export default function App() {
  return (
    <div>
    
      <div className="backgroundMain"> 
      <div className="main">
        <div className="outputArea">
          <h2>Weather Forecast</h2>
          <div className="searchBar">
            <input
              type="text"
              name="city"
              id="searchText"
              placeholder="Type city name here"
            />
          </div>

          <div className="results">
            <div className="result1">
              <div className="cityInfo">
                <h3>Toronto</h3>
                <p>{today}</p>
              </div>
              <div className="info">
                <div className="temp">
                  <p>current temp ...</p>
                  <p>Clouds...</p>
                </div>

                <div className="logo">logo/templogo.. ☁️</div>
              </div>
            </div>
            <div className="result2">
              <div className="detail">
                <p>feels like</p>
                <div className="value">
                  <p>5 celcius</p>
                </div>
              </div>
              <div className="detail">
                <p>Wind speed</p>
                <div className="value">
                  <p>12 kph</p>
                </div>
              </div>
              <div className="detail">
                <p>Humidity</p>
                <div className="value">
                  <p>30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      </div>
    </div>
  );
}
