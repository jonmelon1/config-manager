import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Environments() {
  return (
    <div className="environments">
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Environments
        </h1>
      </Jumbotron>
      <h2>Options</h2>
      <div className="p-1">
    <Button variant="primary" className="mr-1">
      Add
    </Button>
    <Button variant="warning" className="mr-1">
      Edit description
    </Button>
    </div>
    </Container>
    </div>
  );
};

export default Environments;
