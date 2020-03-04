import React from "react";
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";
import "./App.css";
import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Nav, NavDropdown, NavDropdownProps,NavItem,NavItemProps,Navbar, Button, FormControl, Form } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">BookStore.pl</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Główna</Nav.Link>
      <Nav.Link href="#koszyk">Koszyk</Nav.Link>
      <NavDropdown title="Konto" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Zaloguj</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Popularne</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Wydarzenia</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">O nas</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        <Header />
        <Carousel>
  <Carousel.Item>
    <img
      height="350"
      className="d-block w-100"
      src="obraz1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color: 'black', fontSize:"35px"}}>Certyfikowana księgarnia</h3>
      <p style={{color: 'black', fontSize:"25px"}}>Jedna z najlepszych księgarni internetowych w Polsce</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="350"
      className="d-block w-100"
      src="obraz2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 style={{color: 'black', fontSize:"35px"}}>Bierzemy udział w wydarzeniach</h3>
      <p style={{color: 'black', fontSize:"25px"}}>Bo czytanie nigdy nie było tak przyjemne</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="350"
      className="d-block w-100"
      src="obraz3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{ fontSize:"35px"}}>Zrób zapasy na zimę</h3>
      <p style={{fontSize:"25px"}}>Promocja trwa: Kup 3 w cenie 5</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<b></b>
        <Body />
        <Search />
      </div>
    );
  }
}

export default App;
