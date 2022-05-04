import React, { useEffect } from 'react';
import './styles/App.css';
//import { UserContext } from './context/userContext';
//import { UserContextType } from './@types/user';
//import WebSocket from 'ws';


function SonnenPage() {
  const [value, setValue] = React.useState("")
  var exampleSocket = new WebSocket("ws://localhost:3001");
  useEffect(() => {
    exampleSocket.onopen = function (event) {
      console.log("connected")
    }
  });
 
  exampleSocket.onmessage = function (event) {
    if (event.data instanceof Blob) {
      console.log("ist blob")
      const reader = new FileReader();
      //let test5=""

      reader.onload = () => {
          console.log("Result: " + reader.result);
          const test5: string = reader.result as string;
          setValue(test5)
      };
      reader.readAsText(event.data);
      
  } else {
    console.log("hier")
      console.log("Result: " + event.data);
  }

    //setValue(event.data)
    //const data1 =event.data
    //console.log(JSON.stringify(event.data));
    //console.log(data1.text());
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
