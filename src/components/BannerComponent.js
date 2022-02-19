import React from 'react'
import { Card } from 'react-bootstrap'
import '../styles/BannerComponent.css'

const BannerComponent = () => {
  return (
    <Card className="content-center card__body">
    <Card.Img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1645290295/Productos/banner_dcmxm2.png" className="card__img" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title className='card__title'>¡Adquiere todos tus productos favoritos al mejor precio!</Card.Title>
    </Card.ImgOverlay>
  </Card>
  )
}
export default BannerComponent