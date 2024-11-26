import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
// import React, {useContext } from "react";
// import {quantity} from "../components/guitars.jsx";
// import { setQuantity } from "../components/guitars.jsx";

// import  {quantity} from "../App.jsx";


// import Guitar from "./guitars";




function Header() {
    // const quantity1 = useContext(quantity);
    // const setQuantity1 = useContext (setQuantity);

    // const reset = () => {
    //     if (quantity1 > 0) setQuantity1((quantity1 = 0));
    //   };
  return (
    <>


      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>


              <Nav.Link href="about">about</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="contact" to="/contact">
                contact us  
              </Nav.Link>
              
              <Nav.Link>
                <p>
                  <FaShoppingCart className="shopping-icon" />
                {quantity1}
                </p>
              </Nav.Link>
              <Nav.Link>
                <Button
                  className="empty-cart-btn"
                  variant="dark"
                  onClick={reset}
                >
                  empty cart{" "}
                </Button>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      
    </>
  );
}

export default Header;
