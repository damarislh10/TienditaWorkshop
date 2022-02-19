import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GetProductById from "../selectors/GetProductById";
import { BsDash, BsPlus } from "react-icons/bs";
import ListComponent from "./ListComponent";
import Swal from "sweetalert2";

const DetailProduct = () => {
  const { id } = useParams();
  console.log(id);

  let idS = 0;
  let nombre = "";
  let descuentoS = "";
  let imageS = "";
  let priceS = "";
  let price2S = "";
  let product = GetProductById(id);

  if (product !== undefined) {
    console.log(product);
    const { id, name, image, price } = product;
    idS = id;
    nombre = name;
    imageS = image;
    priceS = price;
  } else {
    product = [];
  }

  const alertaC = () => {
    Swal.fire("Good job!", "Producto añadido!", "success");
  };
  return (
    <Modal.Dialog size="lg">
      <Row>
        <Col className="m-5 w-30">
          <img src={imageS} alt="img" />
        </Col>
        <Col className="w-70">
          <Modal.Header closeButton>
            <Modal.Title>
              {nombre}
              <br />
              <small>{priceS}</small>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <small>Precio con IVA incluido</small>
            <p>
              Peso aproximado por pieza puede variar de acuerdo al peso real
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">
                  Selecciona la madurez que deseas
                </Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Por elegir</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col className="">
                <div>
                  <BsDash />
                  <small>250g</small>
                  <BsPlus />
                </div>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    let persons = [];
                    const key = JSON.parse(localStorage.getItem("productCard"));
                    if (key !== null) {
                      key.push(product);
                      localStorage.setItem("productCard", JSON.stringify(key));
                      alertaC();
                    } else {
                      persons.push(product);
                      localStorage.setItem(
                        "productCard",
                        JSON.stringify(persons)
                      );
                    }
                  }}
                  variant="success"
                >
                  Agregar
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Col>
      </Row>
      <h3>Productos relacionados</h3>
      <ListComponent />
    </Modal.Dialog>
  );
};

export default DetailProduct;
