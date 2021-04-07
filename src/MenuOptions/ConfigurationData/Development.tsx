import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Development() {
  return (
    <div className="development">
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Development
        </h1>
      </Jumbotron>
      <h2>Options</h2>
      <div className="p-1">
    <Button variant="primary" className="mr-1">
      Show list
    </Button>
    </div>
    </Container>
    </div>
  );
};

export default Development;
