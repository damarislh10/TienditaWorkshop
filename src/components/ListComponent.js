import React, { useEffect, useState } from 'react'
import { urlProduct } from '../helpers/url'
import ProductCard from './ProductCard'
import {Carousel, Row} from 'react-bootstrap'
import "../styles/DetailProduct.css";



const ListComponent = () => {

  const [product, setProduct] = useState([])
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getData()
  }, [])


  const getData = async() =>{
    const resp = await fetch(urlProduct);
    const data = await resp.json();
    console.log(data)
    setProduct(data)
  }

  return (
          <Row style={{ boxShadow: "none",flexWrap: "nowrap" }} className="row-card" lg={6}>
            {product.map((pr) =>(
            <ProductCard key={pr.id}{...pr}/>
            ))}
          </Row>
  )
}

export default ListComponent
