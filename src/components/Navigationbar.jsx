import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './Navigationbar.css';

const Navigationbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">INNAVION</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#support&services">Support & Services</Nav.Link>
            <Nav.Link href="#Resources">Resources</Nav.Link>
            <NavDropdown title="About us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Know us</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Call us</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Meet us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Test the product</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#login">Login/Register</Nav.Link>
            <Nav.Link eventKey={2} href="#twitter">
                
                <img src="https://cdn5.vectorstock.com/i/1000x1000/13/84/twitter-icon-vector-20891384.jpg" alt="insta" width="20" height="20"/>
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            
        </div>
    )
}

export default Navigationbar;
