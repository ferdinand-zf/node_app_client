import React, { useEffect } from 'react';
import './styles/App.css';
import { UserContext } from './context/userContext';
import { UserContextType } from './@types/user';
//import WebSocket from 'ws';


function SonnenPage() {
  const [value, setValue] = React.useState("")
  var exampleSocket = new WebSocket("ws://localhost:3001");
  useEffect(() => {
    exampleSocket.onopen = function (event) {
      console.log("connected")
    }
  }, []);
 
  exampleSocket.onmessage = function (event) {
    setValue(event.data)
    console.log(event.data);
  }


  const handleClick = () => {

  }


  return (
    <div className='App'>
      <p>{value}</p>
      <button onClick={handleClick}>test</button>
    </div>
  );
}

export default SonnenPage;
