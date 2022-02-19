import React, { useEffect, useState } from 'react'
import { urlProduct } from '../helpers/url'

const GetProductById = (id1) => {

    const [product, setProduct] = useState([])
    console.log(id1)
    useEffect(() => {
        getData()
    }, [])

    const getData = async() =>{
        const resp = await fetch(urlProduct);
        const data = await resp.json();
        setProduct(data)
      };

       return product.find((p)  => Number(p.id) === Number(id1));
}

export default GetProductById;