import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapsible="true">
            <Container>
              <Navbar.Brand href="/">TechShop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/cart">Cart</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
}

export default Header
