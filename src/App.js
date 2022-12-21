import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logements';
import Error from './pages/Error';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/apropos' element={<About/>}/>
                <Route path='/logements/:id' element={<Logement/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
                
        </BrowserRouter>
    )
}
