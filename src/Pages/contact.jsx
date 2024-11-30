import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Map from "../assets/Map.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function TextControlsExample() {
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
              <Nav.Link href="ToBuylist">To Buy List</Nav.Link>

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

      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="email-input"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control className="message-input" type="text" />
        </Form.Group>

        <Button className="send-msg-btn" variant="primary" type="submit">
          Send
        </Button>
      </Form>
      <img className="map-img" src={Map} />
    </>
  );
}

export default TextControlsExample;
