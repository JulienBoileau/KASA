import React  from "react";
import { useState } from "react";
import "./_Carrousel.css";


export default function Carrousel({ props }) {
  
  const [current, updateCurrent] = useState(0);

  // Constante qui nous permet calculer le nombre d'images pour le logement

  const length = props.length;

  // On définit ici le défilement de l'image vers la précédente
  
  const prevSlide = () => {
    updateCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  // On définit ici le défilement de l'image vers la suivante 

  const nextSlide = () => {
    updateCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    
    <div className="carrousel">
      {props.map((picture, index) => {
        
        return ( 
         
         <div key={index} className={index === current ? "logement" : "logement_current_picture"}>
            {index === current && (
              <img src={picture} alt="Logement" className="logement_picture"/>
            )}
          </div>
        );
      })}

      {length > 1 ? (
        
        <>
          <div className="prev_slide" onClick={prevSlide}>
            <img src="/assets/LEFT_ARROW.png" alt="" className="prev_slide_arrow" />
          </div>
          <div className="next_slide" onClick={nextSlide}>
            <img src="/assets/RIGHT_ARROW.png" alt="" className="next_slide_arrow" />
          </div>
        </>

      ) 
      : null}
    </div>
  );
}