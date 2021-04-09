import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { RestClient } from "../RestClient"
import { useParams } from "react-router-dom";
import EditEnvironment from './EditEnvironment'
import DeleteConfiguration from './DeleteConfiguration'
import EditConfiguration from './EditConfiguration'

export default function WebPageConfigurations({header, subheader}: any) {
    
  
  let [environments, setAvailableEnvironments] = React.useState<Array<any>>([])

	React.useEffect(() => {
		RestClient.getEnvironments()
		          .then(environments => setAvailableEnvironments(environments))
              .catch((err: any) => alert(err))
	}, [])
  
  
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
          <div className="addEnvDiv">
          <Button size="sm" variant="success" className="addEnvButton">
            Add Environment
          </Button>
          </div>
          
        
          {environments.map((props: any, i: any) =>
            <div>
                <Card>
                    <Card.Header>
                    <div className="buttons">
                        <div className="listButton">
                        <Accordion.Toggle as={Button} variant="primary" eventKey={i+1} className="availEnvButton">
                            {props.environmentName}
                        </Accordion.Toggle>
                        </div>
                        <div className="listButton">
                        <React.Fragment>
                              {EditEnvironment(props)}
                        </React.Fragment>
                        </div>
                    </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i+1}>
                        <Card.Body className="cardBody-1">
                          <div className="environmentDescription">
                            <b>Environment ID: </b>{props.id}<br/>    
                            <b>Environment Name: </b>{props.description}<br/> 
                          </div>                        
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey={i+100}>
                      <Card.Body className="cardBody-1">
                      
                      </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>            
          )}
        </Accordion> 
      </div>
    );
  }