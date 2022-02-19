import React, { useEffect, useState } from 'react'
import { urlProduct } from '../helpers/url'
import ProductCard from './ProductCard'
import { Row } from 'react-bootstrap'



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
      <Row style={{width:"90%",margin: "5%", overflow:"auto", boxShadow: "none",flexWrap: "nowrap" }} className="row-card" lg={6}>
            {product.map((pr) =>(
            <ProductCard key={pr.id}{...pr}/>
            ))}
      </Row>
    </div>
  )
}

export default ListComponent
