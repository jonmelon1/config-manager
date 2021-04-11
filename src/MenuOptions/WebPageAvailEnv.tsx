import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { RestClient } from "../RestClient"

export default function WebPageAvailEnv({header, subheader}: any) {
    
  
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
        
          {environments.map((props: any, i: any) =>
            <div>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="primary" eventKey={i+1} className="availEnvButton">
                            {props.environmentName}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i+1}>
                        <Card.Body className="cardBody-1">
                          <div className="environmentDescription">
                            <b>Environment Name: </b>{props.description}<br/>             
                          <br/><b>Configuration data:</b>
                          </div>
                          <ListGroup>
                            {props.configdatas.map((props2: any) =>
                            <div>
                              <ListGroup.Item>
                              <b> Configuration Name: </b>{props2.configName}, 
                              <b> Application Name: </b>{props2.application}, 
                              <b> Configuration Value: </b>{props2.configValue}, 
                              <b> Timestamp: </b>{props2.timestamp}
                              </ListGroup.Item>
                            </div>
                            )}
                          </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>            
          )}
        </Accordion> 
      </div>
    );
  }