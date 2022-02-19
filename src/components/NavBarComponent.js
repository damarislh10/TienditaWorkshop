import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const NavBarComponent = () => {

  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img
        src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1645290637/Productos/Tiendita_bigjt4.svg"
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Form.Select aria-label="Default select example">
        <option>México</option>
        <option value="1">México City Marriott Reforma Hotel</option>
        <option value="2">México City International Airport</option>
        <option value="3">México City Mexico</option>
        </Form.Select>     
      </Nav>
    </Navbar.Collapse>
    <Button variant="success">Carrito</Button>
  </Container>
</Navbar>


  )
}




export default NavBarComponent