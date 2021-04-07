import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

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
      <div className="p-1">
    <Button variant="primary" className="mr-1">
      Add
    </Button>
    <Button variant="warning" className="mr-1">
      Edit
    </Button>
    <Button variant="danger" className="mr-1">
      Delete
    </Button>

    </div>
    </Container>
    </div>
  );
};

export default Configurations;
