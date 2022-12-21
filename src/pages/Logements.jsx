import React from 'react';
import axios from 'axios';
import './_Logements.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Carrousel from '../components/Carrousel/Carrousel';
import Collapse from '../components/Collapse/Collapse';
import Host from '../components/Host_and_rate/Host';
import Rate from '../components/Host_and_rate/Rate';
import Error from './Error';
import Footer from '../components/Footer/Footer';
import LogementTags from '../components/Logement_tags/Logement_tags';



export default function Logement() {
        const [data, setData] = useState([]);
        const { logementId } = useParams();

        useEffect(() => {
            axios.get("http://localhost:3000/logements.json").then((res) => setData(res.data));
          }, []);

          const logement = data.find((item) => item.id === logementId);
          if (!logement) {
            return <Error />;
          }


        return (
            
        <div className='logement'>
            <Header />
                <section className="logement_container">
                    <Carrousel props={logement.pictures} />
                        <div className="logement_ads">
                            <div className="logement_data">
                                <h1 className="logement_title">{logement.title}</h1>
                                <p className="logement_location">{logement.location}</p>
                                <div className="logement_tags">
                                {logement.tags.map((tag, index) => (<LogementTags key={index} getTag={tag} /> ))}
                                </div>
                            </div>
                            <div className="logement_rate_host">
                                <Rate rating={logement.rating} />
                                <Host host={logement.host} />
                            </div>
                        </div>
                        <div className="logement_collapses">
                            <Collapse title="description" content={logement.description} />
                            <Collapse title="equipements" content={(logement.equipments).map((equipment, index) => (
                                <li className="equipements_liste" key={index}>{equipment}</li>))}/>
                        </div>
                </section>
            <Footer />
        </div>
        );
}

