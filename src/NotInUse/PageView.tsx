import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import DropdownList from './DropdownList';

function PageView({header, h2, listinput}: any) {
    return (
      <div className="configurations">
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          {header}
        </h1>
      </Jumbotron>
      <h2>{h2}</h2>
      <div className="accordiation-1">
      <Accordion defaultActiveKey="0">
        <React.Fragment>
          <DropdownList {...listinput} />
        </React.Fragment>
      </Accordion>
    </div>
    </Container>
    </div>
    );
  };
  
  export default PageView;