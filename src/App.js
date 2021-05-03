import React, { useState } from "react";





function App() { 

  setInterval(myGreetings);
  setInterval(currentTime);

  const [greetings, setGreetings] = useState('');
  const [time, setTime] = useState('');
  
  let date = new Date();
  let hour = date.getHours();

  function currentTime() {
  let date = new Date();
  setTime(date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}));
  }

  

    function myGreetings() {
      if (hour < 12) {
      setGreetings("Good Morning Toronto!");
    } else if (hour > 12) {
      setGreetings("Good Afternoon Toronto!");
    }
  }

/* Weather Api Code */

function weatherBalloon(cityID) {
  let key = "2bd5bebeca4a3808cf5577330fe777d4"
  fetch("http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=" + key)
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
const [icon, setIcon] = useState("");



function drawWeather(d) {
  let celcius = Math.round(parseFloat(d.main.temp)-273.15);
  setIcon(`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`)
  setDescription(d.weather[0].description);
  setTemp(celcius + '°C');
}

window.onLoad = weatherBalloon(6167865)









  return ( 
<div className = "App" >
    <div className = "time">
    <h1 className = "title">{time}</h1>
    <span>{greetings}</span> 
    </div>

<div id="weatherWidget">
<img src={{icon}} />
<h1 className="description">{description}</h1>
<h1 className="temp">{temp}</h1>
</div>
</div>
  );

  
}

export default App;