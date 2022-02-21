   
import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import GetProductById from "../selectors/GetProductById";
import { BsDash, BsPlus } from "react-icons/bs";
import ListComponent from "./ListComponent";
import Swal from "sweetalert2";
import '../styles/DetailProduct.css'


const DetailProduct = () => {
  const { id } = useParams();
  const navige = useNavigate();
  
  let idS = 0;
  let nombre = "";
  let imageS = "";
  let priceS = "";
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

  const aletD = ()=>{
    Swal.fire("Good job!", "Eliminado Producto!", "success");
  }

  return (
    <Modal.Dialog size="lg">
      <Modal.Header closeButton onClick={() => {
            navige("/");
          }}>
      </Modal.Header>
      <Row>
        <Col className="m-5 w-30">
          <img src={imageS} alt="img" />
        </Col>
        <Col className="w-70">
          <Modal.Title className="title__modal">
              {nombre}
              <br />
              <small>{priceS}</small>
          </Modal.Title>
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
              <div className="footer__modal">
                <div className="ticket__modal">
                  <BsDash />
                  <small className="ticket__value">250g</small>
                  <BsPlus />
                </div>
                <Button
                  className="colBtn__modal btn__green"
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
                <Button
                  variant="danger"
                  className="colBtn__modal"
                  onClick={() => {
                    const local = JSON.parse(
                      localStorage.getItem("productCard")
                    );
                    const buscado = local.find(
                      (data) => data.id === Number(idS)
                    );

                    local.forEach((element, index) => {
                      if (element.id === buscado.id) {
                        local.splice(index, 1); // elimine
                        localStorage.setItem(
                          "productCard",
                          JSON.stringify(local)
                        );
                        aletD()
                        JSON.parse(localStorage.getItem("productCard"));
                      }
                    });
                  }}
                >
                  Eliminar
                </Button>
              </div>
          </Modal.Footer>
        </Col>
      </Row>
      <h3 className="title__product">Productos relacionados</h3>
      <ListComponent />
    </Modal.Dialog>
  );
};

export default DetailProduct;