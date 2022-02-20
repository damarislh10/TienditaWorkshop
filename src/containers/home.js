import React from 'react'
import BannerComponent from '../components/BannerComponent'
import ListComponent from '../components/ListComponent'

const Home = () => {
  return (
      <div>
    <BannerComponent/>
    <h2 style={{ margin: "5%"}}>Ofertas</h2>
    <ListComponent/>
    </div>
  )
}

export default Home