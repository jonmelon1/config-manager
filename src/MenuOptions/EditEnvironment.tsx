import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { RestClient } from "../RestClient"
import Modal from 'react-bootstrap/Modal'


export default function EditEnv(props: any) {
    return (
        <React.Fragment>
            <EditEnvironment {...props} />
        </React.Fragment>
    )
}


function EditEnvironment(environment: any) {

    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
		e.preventDefault();
        handleClose();
		let newEnvironment = {
            id: environment.id,
			environmentName:    (document.getElementById('environmentName') as HTMLInputElement).value,
			description:        (document.getElementById('description') as HTMLInputElement).value,
		}
		RestClient.editEnvironment(newEnvironment)
		          .then( () => {
					  window.alert('Change Registered')
                      setValue(value => value + 1)
				  })
				  .catch( (e: any) => alert(e))
	}


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="warning" className="availEnvButton" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Environment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
                Environment Name<Form.Control        type="text" id="environmentName" maxLength={10} defaultValue={environment.environmentName} placeholder={environment.environmentName} />
                <br />
                Environment Description<Form.Control type="text" id="description"     maxLength={30} defaultValue={environment.description}     placeholder={environment.description} />
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
  
  

  