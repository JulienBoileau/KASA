import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "./_Error.css";

export default function Error() {
  
    return (
      <div>
        <Header />
        <div className="error_container">
          <div className="error_number">404</div>
          <div className="error_text">Oups! La page que vous demandez n'existe pas.</div>
          <Link className="error_link" to="/" title="Retour vers page d'accueil">
            Retourner sur la page d'accueil
          </Link>
        </div>
    </div>
  
  );
}
