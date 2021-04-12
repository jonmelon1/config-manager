import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { EncryptData } from './LogIn'


export default function LogInForm() {
  

  const handleSubmit = () => {
    var password = (document.getElementById("username") as HTMLInputElement).value
    var username = (document.getElementById("password") as HTMLInputElement).value
    handleClose()
    EncryptData(username, password)
  }
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
      <div className="logInButton">
        <Button variant="primary" onClick={handleShow}>
          Log in
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" id="username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" id="password"/>
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Log in</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
