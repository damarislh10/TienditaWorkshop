import React, { useEffect, useState } from 'react'
import { urlProduct } from '../helpers/url'

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
      
    </div>
  )
}

export default ListComponent
