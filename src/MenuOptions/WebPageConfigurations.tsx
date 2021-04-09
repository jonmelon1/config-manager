import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { RestClient } from "../RestClient"
import { useParams } from "react-router-dom";
import AddConfig from './AddConfiguration'
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
        
          {environments.map((props: any, i: any) =>
            <div>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="primary" eventKey={i+1} className="availEnvButton">
                            {props.environmentName}
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Button} variant="success" eventKey={i+100} className="addButton">
                            Add Configuration
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i+1}>
                        <Card.Body className="cardBody-1">
                          <div className="environmentDescription">
                            <b>Environment Name: </b>{props.description}<br/>
                            <b>Environment ID: </b>{props.id}<br/>                             
                          </div>
                          <br/><b>Configuration data:</b>
                          <ListGroup>
                            {props.configdatas.map((props2: any) =>
                            <div>
                              <ListGroup.Item>
                                <div>
                                  Configuration Name: {props2.configName}, 
                                  Application Name: {props2.application}
                                  <div className="buttons">
                                    <React.Fragment>
                                      <div className="listButton">
                                      {EditConfiguration(props2)}
                                      </div>
                                      <div className="listButton">
                                      {DeleteConfiguration(props2)}
                                      </div>
                                    </React.Fragment>
                                  </div>
                                </div>
                              </ListGroup.Item>
                            </div>
                            )}
                          </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey={i+100}>
                      <Card.Body className="cardBody-1">
                      <div>
                        <React.Fragment>
                              {AddConfig(props)}
                        </React.Fragment>
                      </div>
                      </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>            
          )}
        </Accordion> 
      </div>
    );
  }