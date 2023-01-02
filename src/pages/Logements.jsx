import React from 'react';
import './_Logements.css';
import '../components/Logement_tags/_Logement_tags.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Carrousel from '../components/Carrousel/Carrousel';
import Collapse from '../components/Collapse/Collapse_logement';
import Host from '../components/Host/Host';
import Rate from '../components/Rate/Rate';
//import Error from './Error';
import Footer from '../components/Footer/Footer';
import LogementTags from '../components/Logement_tags/Logement_tags';
import { useNavigate } from "react-router-dom";

// Fonction principale pour l'affichage du logement sélectionné

export default function Logement() {

    const [logement, setLogement] = useState();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/data/logements.json')
          .then(res => res.json())
          .then(data => {
            const logement = data.find((item) => item.id === params.id);
            //console.log(logement.rating)
            //console.log(logement.host)
            //console.log(logement.tags)
            if (!logement) {
                navigate('/not-found')
            }
            setLogement(logement)
          });
      }, [navigate, params]); 

    return (
        
        <div className='logement'>
            <Header />
                <section className="logement_container">
                    {logement && <Carrousel props={logement.pictures} /> }
                        <div className="logement_ads">
                            <div className="logement_data">
                                <h1 className="logement_title">{logement &&  logement.title}</h1>
                                <p className="logement_location">{logement &&  logement.location}</p>
                                <div className="logement_tags">
                                {logement && logement.tags.map((tag, index) => (<LogementTags key={index} tag={tag} /> ))}
                                </div>
                            </div>
                            <div className="logement_rate_host">
                                {logement && <Host host={logement.host} />}
                                {logement && <Rate rating={logement.rating} />}
                            </div>
                        </div>
                        <div className="logement_collapses">
                            <Collapse type="column" title="description" name="Description" description={logement && logement.description} />
                            <Collapse type="column"  title="equipements" name="Equipements" list={logement && (logement.equipments).map((equipment, index) => (
                              <li className="equipements_liste" key={index}>{equipment}</li>))}/>
                        </div>
                </section>
            <Footer />
        </div>
        );
    
}

