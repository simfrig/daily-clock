import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";







function App() { 

  const [time, setTime] = useState('');
  const [city, setCity] = useState('Toronto');

  setInterval(currentTime);

  let date = new Date();
  let hour = date.getHours();

 const cities = {
   Toronto: "Toronto",
   Seoul: "Seoul"
 }

function changeCity() {
 (city === cities.Toronto? setCity(cities.Seoul): setCity(cities.Toronto))
}




  function myGreetings() {
      if (hour < 12) {
      return "Good Morning " + city + "!";
    } if (hour > 12) {
      return "Good Afternoon "+ city + "!";
    } if (hour > 17) {
      return "Good Evening "+ city + "!";
    } if (hour > 21) {
      return "Goodnight "+ city + "!";
    }
  }

 

  function currentTime() {
    let date = new Date();
  
  (city === cities.Toronto 
    ? setTime(date.toLocaleTimeString("en-GB", {hour: '2-digit', minute:'2-digit'})) 
  : setTime(date.toLocaleTimeString("ko-KR", {timeZone: "Asia/Seoul", hour: '2-digit', minute:'2-digit', hour12: false})));   
  }



  

/* Weather Api Code */


/* CODE COMMENTED OUT TO NOT EXCEED OPEN WEATHER API LIMIT
function weatherBalloon(cityName) {
  let key = "2bd5bebeca4a3808cf5577330fe777d4"
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key)
  .then(function(resp) {return resp.json()}) // Convert data to json
  .then(function(data) {
  drawWeather(data); // Call drawWeather
  })
  .catch(function() {
      //Catch any errors
  });
}

const [description, setDescription] = useState("");
const [temp, setTemp] = useState("");




function drawWeather(d) {
  let celcius = Math.round(parseFloat(d.main.temp)-273.15);
  setDescription(d.weather[0].description);
  setTemp(celcius + '°C');
}

window.onLoad = weatherBalloon(city)

*/











  return ( 
  <div className = {(city === cities.Seoul? "App-Seoul" : "App")} >
    <div className = "time">
    <h1 className = "title">{time}</h1>
    <span>{myGreetings()}</span> 
    </div>

  <div className="weatherWidget">
    <h1 className="description">Cloudy</h1>
    <h1 className="temp">9 Degree Celsius</h1>
  </div>

  
  
  <div className="locationAdd">
  <Dropdown>
    <Dropdown.Toggle id="dropdownButton"> 
      +
    </Dropdown.Toggle> 
    <Dropdown.Menu className="dropdown-menu" align="right">
      <Dropdown.Item 
      className="dropdown-item"
      as="button"
      onClick={changeCity}
      >
      {(city === cities.Toronto? "Seoul": "Toronto")}
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
    
  </div>
  
</div>
  );

  
}

export default App;