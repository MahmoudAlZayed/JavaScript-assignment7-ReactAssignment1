import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function ToBuyList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  function InputChange(e) {
    setNewItem(e.target.value);
  }

  function addItem() {
    if (newItem.trim() !== "") {
      setItems((i) => [...i, newItem]);
      setNewItem("");
    }
  }

  function deleteItem(index) {
    const updateItems = items.filter((_, i) => i !== index);
    setItems(updateItems);
  }

  function moveItemUp(index) {
    if (index > 0) {
      const updateItems = [...items];
      [updateItems[index], updateItems[index - 1]] = [
        updateItems[index - 1],
        updateItems[index],
      ];
      setItems(updateItems);
    }
  }

  function moveItemDown(index) {
    if (index < items.length - 1) {
      const updateItems = [...items];
      [updateItems[index], updateItems[index + 1]] = [
        updateItems[index + 1],
        updateItems[index],
      ];
      setItems(updateItems);
    }
  }

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
              <Nav.Link href="todolist">To Buy List</Nav.Link>

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
      <div className="to-buy-list">
        <h1>To-Buy-List</h1>

        <div className="input-addBtn-container">
          <Form.Control
            className="item-input"
            type="text"
            placeholder="Enter an item..."
            value={newItem}
            onChange={InputChange}
          />
          <Button variant="success" className="add-button" onClick={addItem}>
            Add
          </Button>
        </div>
        <div className="list-container">
          <ListGroup class="list">
            {items.map((item, index) => (
              <ListGroup.Item className="list-items" variant="dark" key={index}>
                <span className="text">{item}</span>
                <Button
                  variant="danger"
                  className="delete-button"
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </Button>
                <Button
                  variant="light"
                  className="move-button"
                  onClick={() => moveItemUp(index)}
                >
                  Up
                </Button>
                <Button
                  variant="dark"
                  className="move-button"
                  onClick={() => moveItemDown(index)}
                >
                  Down
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </>
  );
}
export default ToBuyList;
