import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import GetProductById from "../selectors/GetProductById";
import {BsDash, BsPlus } from "react-icons/bs";
import ListComponent from './ListComponent';

const DetailProduct = () => {
  const { id } = useParams();
  console.log(id)

  let idS = 0;
  let nombre = "";
  let descuentoS = "";
  let imageS = "";
  let priceS = "";
  let price2S = "";
  let product = GetProductById(id);

  if (product !== undefined) {
    console.log(product);
    const { id, name, descuento, image, price, price2 } = product;
    idS = id;
    nombre = name;
    descuentoS = descuento;
    imageS = image;
    priceS = price;
    price2S = price2;
  } else {
    product = [];
  }
  return (
    <Modal.Dialog size="lg">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className='m-5 w-30'>
            <img src={imageS} alt="img"/>
          </Col>
          <Col className='w-70'>
            <h2>{nombre}<small>{priceS}</small></h2>
            <small>Precio con IVA incluido</small>
            <p>Peso aproximado por pieza puede variar de acuerdo al peso real</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Selecciona la madurez que deseas</Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Por elegir</option>
                </Form.Select>
              </Form.Group>
            </Form>
            <Row>
              <Col>
                <BsDash/>
                  <small>250g</small>
                <BsPlus/>
              </Col>
              <Col>
               <Button variant="success">Agregar</Button>  
              </Col>
            </Row>    
          </Col>
        </Row>
        <Row>
          <h3>Productos relacionados</h3>
          <ListComponent/>
        </Row>
      </Modal.Body>    
  </Modal.Dialog>

  )
};

export default DetailProduct
