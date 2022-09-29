import React from "react"
import './Header.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


function Header (){
     return(

        <div className="header">
        
         
            <nav>
              
                <ul className="button">
                    <Link to="/"className="homeUno"><Button>HOME</Button></Link>
                    <Link to="/proyecto"className="proyectoDos"><Button>PROYECTO</Button></Link>
                    <Link to="/skill"className="skillTres"><Button>SKILL</Button></Link>
                    <Link to="/contacto"className="contactoCuatros"><Button>CONTACTO</Button> </Link>   
                </ul>
            
            </nav>
           
        </div>

        
     )
}
export default Header;