import React, { useState } from "react";





function App() { 

  setInterval(myGreetings);
  
 
  
  
  const [greetings, setGreetings] = useState('');
  const [time, setTime] = useState('');
  

  let date = new Date();
  let hour = date.getHours();

  function currentTime() {
  setTime(date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}));
  }



   setInterval(currentTime);

    function myGreetings() {
      if (hour < 12) {
      setGreetings("Good Morning Toronto!");
    } else if (hour > 12) {
      setGreetings("Good Afternoon Toronto!");
    }
  }

  return ( 
<div className = "App" >
    <div className = "time">
    <h1 className = "title">{time}</h1>
    <span>{greetings}</span> 
    </div>
</div>
  );

  
}

export default App;