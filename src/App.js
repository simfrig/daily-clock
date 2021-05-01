import React, { useState } from "react";





function App() { 

  
  
  const [greetings, setGreetings] = useState('');
  let date = new Date();
  let specificTime = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})

  let hour = date.getHours();

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
    <h1 className = "title">{specificTime}</h1>
    <span>{greetings}</span> 
    </div>
</div>
  );
}

export default App;