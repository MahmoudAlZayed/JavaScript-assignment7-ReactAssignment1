import { TbGuitarPick } from "react-icons/tb";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import React from "react";
import { SwatchesPicker } from "react-color";

function GuitarPicks() {
  let [color, setColor] = useState("");
  let [hide, setHide] = useState(false);

  // const change = (color) => {
  //   setColor(color);
  // };
  useEffect(() => {
    document.getElementById("pick").style.color = color;
  }, [color]);

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="guitar-picks">
        <TbGuitarPick id="pick" className="pick1" />
        <Button
          className="changeColor-btn"
          button
          variant="secondary"
          onClick={() => setHide(!hide)}
        >
          {hide ? "Close color picker" : "open color picker"}
        </Button>
        {hide && (
          <SwatchesPicker
            className="changeColor"
            onChange={(updateColor) => setColor(updateColor.hex)}
          />
        )}
      </div>
    </>
  );
}
export default GuitarPicks;
