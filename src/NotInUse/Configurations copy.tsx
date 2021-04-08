import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Configurations() {
  return (
    <div className="configurations">
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Configurations
        </h1>
      </Jumbotron>
      <h2>Options</h2>
      <div className="accordiation-1">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="success" eventKey="0">
              Add Item
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>add item...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="warning" eventKey="1">
              Edit Item
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>list of items with edit options</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="danger" eventKey="2">
              Delete Item
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>list of items with delete option</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    </Container>
    </div>
  );
};

export default Configurations;
