import React from 'react';
import axios from 'axios';
import './_Card.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Card() {
        const [data, setData] = useState([]);

        useEffect(() => {
            axios.get("http://localhost:3000/logements.json").then((res) => setData(res.data));
        }, []);

        return (
            <section className='cards-container'>
                {data.map((logement) => (
                    <NavLink to={`/logements/${logement.id}`} key={logement.id}>
                        <div className='cards'>
                            <img src={logement.cover} alt='appartement kasa' className='card-img'/>
                            <div className='card-title-container'>
                                <p className='card-title'>{logement.title}</p>
                            </div>
                        </div>
                    </NavLink>
                ))} 
            </section> 
        );
}
