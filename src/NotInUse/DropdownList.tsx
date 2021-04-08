import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PageView from './PageView';

function DropdownList({button1, body1}: any) {
    return (
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
    );
  };
  
  export default DropdownList;