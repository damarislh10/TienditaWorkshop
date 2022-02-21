import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/NavBarComponent.css'
import ModuleComponent from './ModuleComponent';


const NavBarComponent = () => {

  return (
    <Navbar bg="white" expand="lg" className='nav__bar'>
  <Container className='nav__bar'>
    <Navbar.Brand as={Link} to="/"><img
        src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1645290637/Productos/Tiendita_bigjt4.svg"
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    <Navbar aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto form__container">
      <Button className='btn__bar' onClick={() => <ModuleComponent/>}>
      <FiMapPin style={{fontSize: "30px", margin: "2%", color: "#FC462D"}}/>
        México City Marriott Reforma Hotel...
      </Button>
      </Nav>
    </Navbar.Collapse>
    <Button variant="success" className='btn__car'>
      <BsCart2 style={{fontSize: "22px"}}/>
    </Button>
  </Container>
</Navbar>


  )
}




export default NavBarComponent