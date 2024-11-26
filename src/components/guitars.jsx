import guitar1 from "../assets/Guitar1.jpg";
import guitar2 from "../assets/guitar2.jpg";
import guitar3 from "../assets/guitar3.jpg";
import guitar4 from "../assets/guitar4.jpg";
import guitar6 from "../assets/guitar6.jpg";
import guitar7 from "../assets/guitar7.jpg";
import guitar8 from "../assets/guitar8.jpg";
import { useState, createContext } from "react";
// export const quantity = createContext ();
// export const setQuantity = createContext ();
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Header from "./navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

import "/guitars.css";


function Guitar(props) {
  
  let [quantity1, setQuantity1] = useState(0);

  const increment1 = () => {
    setQuantity1(quantity1 + 1);
  };
  const decrement = () => {
    if (quantity1 > 0) setQuantity1(quantity1 - 1);
  };
  const reset = () => {
    if (quantity1 > 0) setQuantity1((quantity1 = 0));
  };

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
              <Nav.Link href="guitar-picks">Guitar-picks</Nav.Link>

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
                  className="add-to-cart-btn"
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
      {/* <quantity.Provider 
      
      value = {[quantity1, setQuantity1]} >
        <Header quantity1 ={quantity1} 
                setQuantity1={setQuantity1}
                
        />
        
        </quantity.Provider>
         */}
       

        

      <div className="guitars">
        <div className="guitar1-container guitar-container ">
          <img
            className="guitar1-img guitar-img"
            src={guitar1}
            alt="flamenco-guitar1"
          />
          <h2 className="guitar1-brand">ESTEVE 1F</h2>
          <p className="guitar1-price">16000kr</p>
          <Button
            className="add-to-cart-btn"
            variant="success"
            onClick={increment1}
          >
            +{" "}
          </Button>
          <Button
            className="remove-from-cart-btn"
            variant="danger"
            onClick={decrement}
          >
            -{" "}
          </Button>
        </div>
        <div className="guitar2-container guitar-container">
          <img
            className="guitar2-img  guitar-img"
            src={guitar2}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar2-brand">ESTEVE 2F</h2>
          <p className="guitar2-price">15000kr</p>
          <Button
            className="add-to-cart-btn"
            variant="success"
            onClick={increment1}
          >
            +{" "}
          </Button>
          <Button
            className="remove-from-cart-btn"
            variant="danger"
            onClick={decrement}
          >
            -{" "}
          </Button>
        </div>
        <div className="guitar3-container guitar-container">
          <img
            className="guitar3-img  guitar-img"
            src={guitar3}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar3-brand">ESTEVE 3F</h2>
          <p className="guitar3-price">14000kr</p>
          <Button
            className="add-to-cart-btn"
            variant="success"
            onClick={increment1}
          >
            +{" "}
          </Button>
          <Button
            className="remove-from-cart-btn"
            variant="danger"
            onClick={decrement}
          >
            -{" "}
          </Button>
        </div>
        <div className="guitar4-container guitar-container">
          <img
            className="guitar4-img  guitar-img"
            src={guitar4}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar3-brand">ESTEVE 4F</h2>
          <p className="guitar4-price">13000kr</p>
          <Button
            className="add-to-cart-btn"
            variant="success"
            onClick={increment1}
          >
            +{" "}
          </Button>
          <Button
            className="remove-from-cart-btn"
            variant="danger"
            onClick={decrement}
          >
            -{" "}
          </Button>
        </div>
        <div className="guitar8-container guitar-container">
          <img
            className="guitar8-img  guitar-img"
            src={guitar8}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar8-brand">ESTEVE 5F</h2>
          <p className="guitar8-price">13000kr</p>
          <Button
            className="add-to-cart-btn"
            variant="success"
            onClick={increment1}
          >
            +{" "}
          </Button>
          <Button
            className="remove-from-cart-btn"
            variant="danger"
            onClick={decrement}
          >
            -{" "}
          </Button>
        </div>
        <div className="guitar6-container guitar-container">
          <img
            className="guitar6-img guitar-img"
            src={guitar6}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar6-brand">ESTEVE 6F</h2>
          <p className="guitar6-price">12000kr</p>
          <Button
            className="add-to-cart-btn"
            variant="success"
            onClick={increment1}
          >
            +{" "}
          </Button>
          <Button
            className="remove-from-cart-btn"
            variant="danger"
            onClick={decrement}
          >
            -{" "}
          </Button>
        </div>
        <div className="guitar7-container guitar-container">
          <img
            className="guitar7-img  guitar-img"
            src={guitar7}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar7-brand">ESTEVE 7F</h2>
          <p className="guitar7-price">11000kr</p>
          <Button
            className="add-to-cart-btn"
            variant="success"
            onClick={increment1}
          >
            +{" "}
          </Button>
          <Button
            className="remove-from-cart-btn"
            variant="danger"
            onClick={decrement}
          >
            -{" "}
          </Button>
        </div>
        <div className="guitar8-container guitar-container">
          <img
            className="guitar8-img  guitar-img"
            src={guitar8}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar8-brand">ESTEVE 8F</h2>
          <p className="guitar8-price">10000kr</p>
          <Button
            className="add-to-cart-btn"
            variant="success"
            onClick={increment1}
          >
            +{" "}
          </Button>
          <Button
            className="remove-from-cart-btn"
            variant="danger"
            onClick={decrement}
          >
            -{" "}
          </Button>
        </div>
      </div>
      

    </>
  );
}

export default Guitar;
