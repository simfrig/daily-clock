import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton'






function App() { 

  setInterval(myGreetings);
  setInterval(currentTime);

  let date = new Date();
  let hour = date.getHours();

  const [greetings, setGreetings] = useState('');
  const [time, setTime] = useState('');
  
  

  function currentTime() {
  let date = new Date();
  setTime(date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}));
  }

  

    function myGreetings() {
      if (hour < 12) {
      setGreetings("Good Morning Toronto!");
    } if (hour > 12) {
      setGreetings("Good Afternoon Toronto!");
    } if (hour > 17) {
      setGreetings("Good Evening Toronto!")
    } if (hour > 21) {
      setGreetings("Goodnight Toronto!")
    }
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

window.onLoad = weatherBalloon("Toronto")



*/


let Seoul = "Seoul";
let Toronto = "Toronto";


  return ( 
<div className = "App" >
    <div className = "time">
    <h1 className = "title">{time}</h1>
    <span>{greetings}</span> 
    </div>

  <div className="weatherWidget">
    <h1 className="description">CLOUDY</h1>
    <h1 className="temp">9 Degree Celsius</h1>
  </div>

  
  
  <div className="locationAdd">
  <Dropdown>
    <Dropdown.Toggle id="dropdownButton"> 
      +
    </Dropdown.Toggle> 
    <Dropdown.Menu className="dropdown-menu" align="right">
      <Dropdown.Item className="dropdown-item"as="button">{Seoul ? Toronto : Seoul}</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
   

   

    
  </div>
  
</div>
  );

  
}

export default App;