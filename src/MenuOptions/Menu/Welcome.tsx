import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Welcome() {
  return (
    <div className="welcome">
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Welcome
        </h1>
      </Jumbotron>
    </Container>
    </div>
  );
};

export default Welcome;
