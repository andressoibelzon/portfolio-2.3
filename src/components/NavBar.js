import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav,} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import {GoMarkGithub} from 'react-icons/go'
import { GrLinkedinOption } from 'react-icons/gr'



export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/andres-soibelzon-06b14b191/" target="_blank"><GrLinkedinOption color="white"/></a>
                <a href="https://github.com/andressoibelzon" target="_blank"><GoMarkGithub color="white"/></a>
            </div>
            <a href='mailto:a.soibelzon@gmail.com' target="_blank"><button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button></a>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

