import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { List } from 'react-bootstrap-icons';

import { ReactComponent as TPCLogo} from '../../assets/images/new logo.svg';

import './Navigation.scss';


function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="#home">
          < TPCLogo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="tpc_responsive_nav">< List size='2rem'/></Navbar.Toggle>
        <Navbar.Collapse id="tpc_responsive_nav">
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about_us">About Us</Nav.Link>
            <Nav.Link href="our_facility">Our Facility</Nav.Link>
            <Nav.Link href="pickleball">Pickleball</Nav.Link>
            <Nav.Link href="contact_us">Contact Us</Nav.Link>
            <button className="nav_create_account" href="#">Create An Account</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation