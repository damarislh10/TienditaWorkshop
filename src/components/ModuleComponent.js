import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FiMapPin } from "react-icons/fi";
import '../styles/ModuleComponent.css'

const ModuleComponent = () => {
  const navige = useNavigate();
  return (
    <Modal.Dialog size="lg">
          <Modal.Header closeButton onClick={() => {
            navige("/");
          }}>
            <Modal.Title>
             <h3>¿Dónde quieres recibir tu pedido?</h3>
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <p>Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección</p>
            <Form>
                <Row>
                    <Col>
                        <FiMapPin style={{fontSize: "30px", position:"absolute"}}/>
                        <Form.Select aria-label="Default select example" style={{float: "end"}}>
                        <option className='w-100'>México</option>
                        <option value="1"> México City Marriott Reforma Hotel</option>
                        <option value="2"> México City International Airport</option>
                        <option value="3"> México City Mexico</option>
                        </Form.Select> 
                    </Col>
                </Row>
                <Row>  
                    <Button variant="success" className='btn__modal'>
                        Buscar
                    </Button>
                </Row>
            </Form>
        </Modal.Body>
    </Modal.Dialog>
  )
}

export default ModuleComponent
