import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.svg';
import { Container, Nav, NavItem } from 'react-bootstrap';
import './Header.css'

// const SIGNUP = "SignUp";
// const LOGIN = "Login" ;

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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='nav-gap'>
            {Navlinks.map((link) => (
              <NavItem key={link.title} className='nav-house'>
                <Nav.Link
                  href={link.href}
                  id="navLink"
                  className={({
                    active 
                  }) => [
                    "text-center",
                    active ? "active-link " : " ",
                  ].join(" ")}
                >
                  {link.title}
                </Nav.Link>
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









// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import { Container, Nav, NavItem } from 'react-bootstrap';
// import './Header.css'

// const SIGNUP = "SignUp";
// const LOGIN = "Login" ;

// const Navlinks = [
//   {
//     title: "Features",
//     href: "/"
//   },
//   {
//     title: "Pricing",
//     href: "/pricing"
//   },
//   {
//     title: "Resources",
//     href: "/resources"
//   },
//   {
//     title: "Login",
//     href: "/login"
//   },
//   {
//     title: "SignUp",
//     href: "/signup"
//   },
// ];

// function Header() {
//   return (
//     <Navbar expand="lg" className='navbar-main'>
//       <Container className='nav-container' >
//         <Navbar.Brand href="/" className='logo'>Shortly</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className=' nav-gap ml-auto'>
//             {Navlinks.map((link) => (
//               <NavItem key={link.title} className='nav-house'>
//                 <Nav.Link
//                   href={link.href}
//                   className={({
//                     active
//                   }) => [
//                     "text-center",
//                     active ? "color--vdarkvoilet" : "",
//                     link.title === LOGIN ? "logBtn nav-btn ml-5" :
//                       link.title === SIGNUP ? "signBtn nav-btn active-bg--cyan active-color--gray ml-3 " : "",
//                   ].join(" ")}
//                 >
//                   {link.title}
//                 </Nav.Link>
//               </NavItem>
//             ))}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;



