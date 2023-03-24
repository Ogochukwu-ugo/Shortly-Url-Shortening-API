import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import { Container, Nav, NavItem } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi'
import './Header.css'

const Navlinks = [
  {
    title: "Features",
    href: "/"
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Resources",
    href: "/resources"
  },
];

function Header() {
  return (
    <Navbar expand="lg" className='navbar-main mx-auto'>
      <Container className='nav-container' >
        <Navbar.Brand href="/" className='logo'>
          <img src={Logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menuToggle">
          <GiHamburgerMenu className='menu'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='nav-gap'>
            {Navlinks.map((link) => (
              <NavItem key={link.title} className='nav-house'>
                <NavLink
                  to={link.href}
                  className={({
                    isActive 
                  }) => [
                    "text-center",
                    isActive ? " active-link " : " nav-plain",
                  ].join(" ")}
                >
                  {link.title}
                </NavLink>
              </NavItem>
            ))}
            <hr className='d-lg-none'/>
            <NavItem className='nav-btn'>
              <Nav.Link href='/login' className='logBtn '>
                Login
              </Nav.Link>
              <Nav.Link href='/signup' className='signBtn'>
                Sign Up
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;