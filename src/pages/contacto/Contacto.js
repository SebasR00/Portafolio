import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contacto () {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="nombre" placeholder="Enter email" />
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="celular" placeholder="Password" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Deja tu Mensaje</Form.Label>
          
          
          <Form.Control type="mensaje" placeholder="Password" />
        </Form.Group>

        

         
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    );
  }
  
  export default Contacto;