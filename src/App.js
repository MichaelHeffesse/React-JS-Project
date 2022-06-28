import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './components/NavBar';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Routes/Home';
import About from './Routes/About';
import OfferDetails from './Routes/OfferDetails';
import Services from './Routes/Services';

function App() {


  return (
    <>

    <BrowserRouter>
      <NavBar items={4}/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/offerdetails" element={<OfferDetails/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="*" element={<h1>Ooops! No hemos encontrado lo que buscabas, lo sentimos mucho  </h1>}/>
      </Routes>
    </BrowserRouter>

    </>



  );
}

export default App;
