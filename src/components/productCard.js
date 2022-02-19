import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProductCard = () => {
  
  return (
        <Card style={{ width: '18rem' }}>
          <small>32% dto.</small>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>$26.82/kg <small>$39.9/kg</small></Card.Title>
            <Card.Text>
              limon con semilla
            </Card.Text>
            <Button variant="success">Agregar</Button>
          </Card.Body>
        </Card>
  )
}

export default ProductCard