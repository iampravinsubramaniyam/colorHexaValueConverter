import './App.css';
import ColorGenerator from './ColorGenerator.js';
import GetColor from './GetColor.js';
import { useState } from 'react';
import Toggle from './Toggle.js'

function App() {
  
  const [color,setColor] = useState('');
  const [textColor,setTextColor] = useState('black');

  const mainStyle ={
    width: "600px",
    height: "600px",
    display :"flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    gap: '30px',
    boxShadow: "1px 2px 5px black"
  }


  const handleClick = () =>{
      textColor === "white" ? setTextColor("black"):setTextColor("white");
  }


  return (
    <main style = {mainStyle}>
        <ColorGenerator
            color = {color}
            textColor = {textColor}
        />

        <GetColor
            color = {color}
            setColor = {setColor}
        />

        <Toggle 
            handleClick={handleClick}
        />

    </main>
  
  );
}

export default App;
