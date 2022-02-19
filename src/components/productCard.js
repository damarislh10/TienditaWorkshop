import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ProductCard = ({ id, descuento, name, price, price2, image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <small>{descuento}</small>

      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {price} <small>{price2}</small>
        </Card.Title>
        <Card.Text>{name}</Card.Text>
        <Link to={`/product/${id}`}>
          <Button variant="success">Agregar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
