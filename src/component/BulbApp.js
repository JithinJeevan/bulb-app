import React, { useState } from "react";
import './BulbApp.css';

const BulbApp = () => {

  const [color,setColor]=useState('grey');
  const [text,setText]=useState('OFF');

  const [colour,setColour]=useState('grey');
  const [texts,setTexts]=useState('OFF');

  var count = false;
  
  const colorChange=(value,text)=>{
    
      if (!count){
        count = true;
        setColor(value='orange');
        setText(text="ON");

       
         
        
      }

      else   {
        count = false;
        setColor(value='grey');
        setText(text="OFF");

        setColour(value='grey');
        setTexts(text="OFF");
          
      }
      

      
      return (value,text); 
      

  }

  const colourChange=(value,text)=>{
    
    if (!count){
      count = true;
      setColour(value='orange');
      setTexts(text="ON");   
      
    }

    else   {
      count = false;
      

      setColour(value='grey');
      setTexts(text="OFF");
        
    }
    

    
    return (value,text); 
    

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

