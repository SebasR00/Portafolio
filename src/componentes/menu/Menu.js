import { Button } from 'bootstrap';
import React from 'react';
import './App.css';
import Menu from "../../componentes/menu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
  return (
    <div className='menu'>

      <Button>Menu</Button>
      <Button>Proyecto</Button>
      <Button>Skill</Button>
      <Button>Contactos</Button>
    </div>
  );
}

export default Menu;