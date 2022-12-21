import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/LOGO.png';
import './_Header.css';

export default function Header() {
    return (
        <header>
            <nav className='header_container'>
                <div className='logo'>
                    <NavLink to='/'>
                        <img src={Logo} alt="logo kasa"/>
                    </NavLink>
                </div>
                <ul className='menu'>
                    <NavLink to='/'>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to='/apropos'>
                        <li>À propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
};