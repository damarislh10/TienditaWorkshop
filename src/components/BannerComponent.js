import React from 'react'
import { Card } from 'react-bootstrap'

const BannerComponent = () => {
  return (
    <Card style={{ width: '90%', margin: '5%' }} className="bg-dark text-white content-center">
    <Card.Img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1645290295/Productos/banner_dcmxm2.png" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title style={{textAlign: "center", fontSize: "180%", marginTop: "6%"}}>¡Adquiere todos tus productos favoritos al mejor precio!</Card.Title>
    </Card.ImgOverlay>
  </Card>
  )
}
export default BannerComponent