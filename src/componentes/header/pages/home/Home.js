import { Button } from 'bootstrap';
import React from 'react';
import './App.css';
import Home from "";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div className='home'>

      <Button>Menu</Button>
      <Button>Proyecto</Button>
      <Button>Skill</Button>
      <Button>Contactos</Button>
    </div>
  );
}

export default Home;