import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBarComponent = () => {

  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/"><img
        src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1645290637/Productos/Tiendita_bigjt4.svg"
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    <Navbar aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <FiMapPin style={{fontSize: "30px", margin: "2%", color: "#FC462D"}}/>
        <Form.Select aria-label="Default select example" style={{float: "end"}}>
        <option>México</option>
        <option value="1"> México City Marriott Reforma Hotel</option>
        <option value="2"> México City International Airport</option>
        <option value="3"> México City Mexico</option>
        </Form.Select>     
      </Nav>
    </Navbar.Collapse>
    <Button variant="success" style={{width: "6%", backgroundColor: "#0AC763", border: "none"}}><BsCart2 style={{fontSize: "22px"}}/></Button>
  </Container>
</Navbar>


  )
}




export default NavBarComponent