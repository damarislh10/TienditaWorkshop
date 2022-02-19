import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProductCard = ({id,name,price,image}) => {
  return (
      <Card style={{ width: '18rem' }}>
        <small>32% dto.</small>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{price} <small>$39.9/kg</small></Card.Title>
          <Card.Text>
           {name}
          </Card.Text>
          <Button variant="success">Agregar</Button>
        </Card.Body>
      </Card>
  )
}

export default ProductCard