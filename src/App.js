import React from 'react'
import './App.css';
import {useEffect, useState} from 'react';
function App() {
  
  const [greeting, setGreeting] = useState([]);
  
  
  useEffect(()=>{
    const getGreeting = async()=>{ 
      const response = await fetch("http://localhost:5001");
      const data = await response.json();
      
      setGreeting(data);
    }
    
    getGreeting();
  }, [])
  return (
    <div>
      {greeting.map(devices=>{
        return <div>
          <h1>{devices.greeting}</h1>
    </div>
          })}
              </div>
  
  );
}

export default App;