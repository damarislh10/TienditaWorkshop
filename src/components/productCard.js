import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/ProductCard.css'


const ProductCard = ({ id, descuento, name, price, price2, image }) => {
  return (
    <Card className="card__body">
      <small className="card__ticket">{descuento}</small>

      <Card.Img variant="top" src={image} className="card__img"/>
      <Card.Body>
        <Card.Title className="card__price--primary">
          {price} <small className="card__price--secundary">{price2}</small>
        </Card.Title>
        <Card.Text>{name}</Card.Text>
        <Link to={`/product/${id}`}>
          <Button variant="success" className="btn__card">Agregar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
