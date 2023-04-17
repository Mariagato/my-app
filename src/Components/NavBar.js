import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg"
import imag1 from "../assets/img/nav-icon1.svg"
import imag2 from "../assets/img/nav-icon2.svg"
import imag3 from "../assets/img/nav-icon3.svg"
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home"); // Corregido: useState en lugar de solo useSate
  // Usamos esto para cuando el usuario este bajando los colores cambien
  const [scrolled, setScrolled] = useState(false); // Corregido: setScrolled en lugar de seScrolled

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Corregido: setScrolled en lugar de seScrolled
      } else {
        setScrolled(false); // Corregido: setScrolled en lugar de seScrolled
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value); // Corregido: setActiveLink en lugar de SetActiveLink
  }

  return (
    <section className="home" id="home">
    <Router>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
      <Navbar.Brand href="/">
          <img src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
  
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#information" className={activeLink === 'information' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('information')}>Information</Nav.Link>
            <Nav.Link href="#photo" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('gallery')}>Photos</Nav.Link>
            <Nav.Link href="#subscribe" className={activeLink === 'subscribe' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('subscribe')}>Subscribe now!</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={imag1} alt=""/></a>
              <a href="#"><img src={imag2} alt=""/></a>
              <a href="#"><img src={imag3} alt=""/></a>
            </div>
          </span>
          </Navbar.Collapse>  
      </Container>
    </Navbar>
    </Router>
    </section>

  );
};



