import React, { useState } from "react";
import './BulbApp.css';

const BulbApp = () => {

  const [color,setColor]=useState('grey');
  const [text,setText]=useState('OFF');

  const [colour,setColour]=useState('grey');
  const [texts,setTexts]=useState('OFF');

  const colorChange=()=>{
    if (text=="OFF"){
      setColor('grey');
      setText("ON");
    }
    else   {
      setColor('orange');
      setText("OFF");    
    }  
}
const colourChange=()=>{  
  if (texts==="OFF"){
    setColour('grey');
    setTexts("ON");
  }
  else   {
    setColour('orange');
    setTexts("OFF");    
  }  
}   
  
  



    
  return (
        <div id="bulb">
            <div id="first" style={{backgroundColor:color}}></div>
            <div id="second" style={{backgroundColor:colour}} ></div>
            <button className="btn" onClick={colorChange}>{text}</button>
            <button className="btn" id="btn2" onClick={colourChange}>{texts}</button>

        </div>
         )
};

export default BulbApp;

