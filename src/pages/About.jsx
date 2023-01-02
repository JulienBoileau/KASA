import React from 'react';
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse_about";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function About() {
    return (
      <div>
      <Header />
        <main className="about-container">
            <Banner img="/assets/BANNER_ABOUT.png"/>
              <div className="collapses">
                <Collapse
                  type='row'
                  name='Fiabilité' 
                  description={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
                />
                <Collapse
                  type='row'
                  name='Respect'
                  description={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
                />
              <Collapse
                  type='row'
                  name='Service'
                  description={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
              />
              <Collapse
                  type='row'
                  name='Sécurité'
                  description={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
              />
            </div>
          </main>
        <Footer />
      </div>
      )
}

