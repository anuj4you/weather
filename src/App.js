import React from 'react';


// api initialize --------
//  example-> https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const api={
  key: "954e7fdad02b2614a54118fd952d9064",
  base: ""
}

// today date --------------

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;



export default function App() {
  return (
    <div className='app'>
    
    <main>
      <div className="searchBar">
        <input type="text" name="city" id="searchText" placeholder='Type city name here' />
        <button className='searchButton'>search</button>
      </div>

      <div className="cityInfo">
        <h3>Toronto</h3>
        <p>{today}</p>
      </div>

      <div className="results">
        <div className="temp">current temp ...</div>
        <div className="info"><p>Clouds...</p>
        <p>feels like</p></div>
        <div className="logo">logo</div>
      </div>
    </main>
    
    </div>
  )
}
