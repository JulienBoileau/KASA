import React from 'react';
import "./_Collapse.css";
import { useState } from 'react';
import arrowDown from "../../assets/ARROW_DOWN.png";
import arrowUp from "../../assets/ARROW_UP.png";

export default function Collapse(collapsedata) {
    

  const [closed, setClosed] = useState(true)

  const toogleDisplay = () => {
    setClosed(!closed);
  }
  
  return (
    <div className='collapse-container'>
      <button className='collapse-button' onClick={() => toogleDisplay()}>{collapsedata.name}
      <img className={closed? 'arrowDown':'arrowUp'} src={closed? arrowDown:arrowUp} alt='flèche'></img>
      </button>
      {!closed && (<div className='collapse-description'>{collapsedata.description}</div>)}
    </div>
  )
}



