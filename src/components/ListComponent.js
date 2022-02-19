<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/productCard';
=======
import React, { useEffect, useState } from 'react'
import { urlProduct } from '../helpers/url'
>>>>>>> 6289a2e3b8a1db84c1593d6daf4bb1cd6e7f57e0

const ListComponent = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    getData()
  }, [])


  const getData = async() =>{
    const resp = await fetch(urlProduct);
    const data = await resp.json();
    console.log(data)
  }
  
  return (
    <div>
       <ProductCard/>
    </div>
  )
}

export default ListComponent
