import React from "react";
import { useParams } from "react-router-dom";
import GetProductById from "../selectors/GetProductById";

const DetailProduct = () => {
  const { id } = useParams();

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
    <div>

    </div>
  );
};

export default DetailProduct;
