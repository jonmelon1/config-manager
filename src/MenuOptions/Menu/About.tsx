import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <div className="about">
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          About
        </h1>
      </Jumbotron>
    </Container>
    </div>
  );
};

export default About;
