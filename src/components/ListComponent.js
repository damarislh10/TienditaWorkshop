import React, { useEffect, useState } from 'react'
import { urlProduct } from '../helpers/url'
import ProductCard from './ProductCard'
import {Carousel} from 'react-bootstrap'

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
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ProductCard/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ListComponent
