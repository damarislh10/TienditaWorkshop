import React, { useEffect, useState } from 'react'
import { urlProduct } from '../helpers/url'
import ProductCard from './ProductCard'
<<<<<<< HEAD
import {Carousel, Row} from 'react-bootstrap'
=======
import {Carousel} from 'react-bootstrap'
import "../styles/DetailProduct.css";

>>>>>>> b5a30f038ce7b8651fb36d875656836c636d82bd

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
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div>
<<<<<<< HEAD
      {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
        <Row style={{ boxShadow: "none",flexWrap: "nowrap" }} className="row-card" lg={6}>
=======
      <Carousel className='carrusel' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
>>>>>>> b5a30f038ce7b8651fb36d875656836c636d82bd
          {product.map((pr) =>(
          <ProductCard key={pr.id}{...pr}/>
          ))}
          </Row>
      {/* </Carousel> */}
      
    </div>
  )
}

export default ListComponent
