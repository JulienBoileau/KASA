import React from 'react';
import "./_Collapse_logement.css";
import { useState } from 'react';
import arrowDown from "../../assets/ARROW_DOWN.png";
import arrowUp from "../../assets/ARROW_UP.png";

export default function Collapse(collapsedata) {
    

  const [Closed, setClosed] = useState(true)
    
    return Closed ? (
      <div className ="collapse_container">
        <button className ="collapse-button" onClick={() => setClosed(false)}>{collapsedata.name}
        <img className="arrowDown" src={arrowDown} alt="flèche vers le bas"></img>
        </button>
      </div>
    ) :
    (
        <div className ="collapse_container">
        <button className ="collapse-button" onClick={() => setClosed(true)}>{collapsedata.name}
        <img className="arrowUp" src={arrowUp} alt="flèche vers le haut"></img>
        </button>
        {collapsedata.description && <div className="collapse_description">{collapsedata.description}</div>}
        {collapsedata.list && <div className="collapse_description">
          <ul>{collapsedata.list}</ul>
          </div>}
      </div>
    )
}