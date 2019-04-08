import React, { Component } from 'react'
import { Navbar, Nav, NavItem ,Button} from 'react-bootstrap'
import './CustomNavBar.css'
import {Link,NavLink} from 'react-router-dom'
export default class CustomNavBar extends Component {
    render() {
        return (
       

          
          <Navbar collapseOnSelect className="navbar-custom" expand="lg"  variant="dark">
            <Navbar.Brand eventKey={4}  href="/" to="/" >LinkIt LLC</Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
          <Nav>
            <NavItem>
            <NavLink eventKey={1} componentClass={Link} href="Login" to="/Login">
                 
             < Button variant="primary" size="lg" href="/Login">Login</Button>
             </NavLink>
            </NavItem>
          </Nav>
         
  </Navbar.Collapse>
</Navbar>


   
        )
    }
}