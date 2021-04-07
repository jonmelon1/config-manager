import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';

const MenuButtons: React.FC = () => {
  return (
    <div className="menubuttons">
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Welcome
        </h1>
      </Jumbotron>
      <h2>Buttons</h2>
      <ButtonsShowcase />
      <h2>Toasts</h2>
      <ToastsShowcase />
    </Container>
    </div>
  );
};

export default MenuButtons;
