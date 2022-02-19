import React, { useEffect, useState } from 'react'
import { urlProduct } from '../helpers/url'
import ProductCard from './ProductCard'
import { Row } from 'react-bootstrap'
import '../styles/ListComponent.css'


const ListComponent = () => {

  const [product, setProduct] = useState([])

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
    <div>
      <Row className="row-card card__list" lg={6}>
            {product.map((pr) =>(
            <ProductCard key={pr.id}{...pr}/>
            ))}
      </Row>
    </div>
  )
}

export default ListComponent
