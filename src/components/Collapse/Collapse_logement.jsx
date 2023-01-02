import React from 'react';
import "./_Collapse_logement.css";
import { useState } from 'react';
import arrowDown from "../../assets/ARROW_DOWN.png";
import arrowUp from "../../assets/ARROW_UP.png";

export default function Collapse(collapsedata) {
    

  const [closed, setClosed] = useState(true)

  const toogleDisplay = () => {
    setClosed(!closed);
  }

  return (
    <div className='collapse_container'>
      <button className='collapse-button' onClick={() => toogleDisplay()}>{collapsedata.name}
      <img className={closed? 'arrowDown':'arrowUp'} src={closed? arrowDown:arrowUp} alt='flèche'></img>
      </button>
      {!closed && collapsedata.description && (<div className='collapse_description'>{collapsedata.description}</div>)}
      {!closed && collapsedata.list && <div className="collapse_description">
          <ul>{collapsedata.list}</ul>
          </div>
      }
    </div>
  )  
}
