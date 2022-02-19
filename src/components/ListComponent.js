import React, { useEffect, useState } from 'react';
import ProductCard from '../components/productCard';

const ListComponent = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {

  }, [])


  const getData = async() =>{
    const resp = await fetch()
  }
  
  return (
    <div>
       <ProductCard/>
    </div>
  )
}

export default ListComponent
