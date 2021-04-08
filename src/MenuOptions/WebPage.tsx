import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function WebPage({header, subheader, listHeaders}: any) {
    return (
      <div className="configurations">
        
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">
                {header}
                </h1>
            </Jumbotron>
            <h2>{subheader}</h2>
        </Container>
        
        <Accordion defaultActiveKey="0">
        
          {listHeaders.map((props: any, i: any) =>
            <div>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant={props.buttonVariant} eventKey={i+1}>
                            {props.buttonText}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i+1}>
                        <Card.Body>{props.cardBody}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>            
          )}

        </Accordion> 
      </div>
    );
  }