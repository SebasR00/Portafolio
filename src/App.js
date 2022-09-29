import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import Header from "./componentes/header/Header";
import Home from "./pages/home/Home";
import Proyecto from "./pages/proyectos/Proyecto";
import Skill from "./pages/skill/Skill";
import Contacto from "./pages/contacto/Contacto";




function App() {
  return (
    
    <>
    <HashRouter>
     <Header/>
     <Routes>
      
       <Route path='/' element={<Home />} />
       <Route path='/proyecto' element={<Proyecto />} />
       <Route path='/skill' element={<Skill />} />
       <Route path='/contacto' element={<Contacto />} />
     <Route path ='*' element={<p>Not found </p>} />
     </Routes>

    </HashRouter>
    </>
  );
}

export default App;

