import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { RestClient } from "../RestClient"
import Modal from 'react-bootstrap/Modal'


export default function EditConfig(props: any) {
    return (
        <React.Fragment>
            <EditConfiguration {...props} />
        </React.Fragment>
    )
}


function EditConfiguration(configdatas: any) {

    const [value, setValue] = React.useState(0) 

    let dateTime = new Date()

    const handleSubmit = (e: any) => {
		e.preventDefault();
        handleClose();
		let configuration = {
            id: configdatas.id,
			configName:     (document.getElementById('configName') as HTMLInputElement).value,
			application:    (document.getElementById('applicationName') as HTMLInputElement).value,
			configValue:    (document.getElementById('configValue') as HTMLInputElement).value,
            timestamp:       dateTime.toISOString(),
            environmentId:   configdatas.environmentId
		}
		RestClient.editConfiguration(configuration)
		          .then( () => {
					  window.alert('Configuration Registered')
                      setValue(value => value + 1)
				  })
				  .catch( (e: any) => alert(e))
	}


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="warning" size="sm" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Configuration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
                Configuration Name<Form.Control type="text" id="configName" placeholder={configdatas.configName} />
                <br />
                Application Name<Form.Control type="text" id="applicationName" placeholder={configdatas.application} />
                <br />
                Configuration Value<Form.Control type="text" id="configValue" placeholder={configdatas.configValue} />
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  

  