import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Clock from 'react-live-clock';
import _ from 'lodash';







function App() { 


  const [city, setCity] = useState('Toronto');


  let date = new Date();
  let hour = date.getHours();
  let koreaHour = date.toLocaleTimeString("en-GB", {timeZone: "Asia/Seoul", hour: '2-digit'});
  
let Toronto = "Toronto";
let Seoul = "Seoul"

 
function changeCity() {
 (city === Toronto ? setCity(Seoul): setCity(Toronto));
}




  function myGreetings() {
    if (city === Toronto){
       if (hour < 12) {
      return "Good Morning " + city + "!";
    } if (hour > 12) {
      return "Good Afternoon "+ city + "!";
    } if (hour > 17) {
      return "Good Evening "+ city + "!";
    } if (hour > 21) {
      return "Goodnight "+ city + "!";
    } } else if (city === Seoul) {
       if (koreaHour < 12) {
      return "Good Morning " + city + "!";
    } if (koreaHour > 12) {
      return "Good Afternoon "+ city + "!";
    } if (koreaHour > 17) {
      return "Good Evening "+ city + "!";
    } if (koreaHour > 21) {
      return "Goodnight "+ city + "!";
    } }
  }
  

/* Weather Api Code */


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

window.onLoad = weatherBalloon((city === Toronto ? Toronto : Seoul))













  return ( 
  <div className = {(city === Seoul? "App-Seoul" : "App")} >
    <div className = "time">
    <h1 className = "title">{(city === Toronto? <Clock format={'h:mm a'} ticking={true} timezone={'America/New_York'} /> : <Clock format={'h:mm a'} ticking={true} timezone={'Asia/Seoul'} />)}</h1>
    <span>{myGreetings()}</span> 
    </div>

  <div className="weatherWidget">
  <h1 className="temp">{temp}</h1>
  <h1 className="description">{_.startCase(description)}</h1>
  </div>

  
  
  <div className="locationAddButton">
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
      {(city === Toronto? "Seoul" : "Toronto")}
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </div>
  
</div>

  );

  
}

export default App;