import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { RestClient } from "../RestClient"


export default function AddEnv() {
    return (
        <React.Fragment>
            <AddEnvironment/>
        </React.Fragment>
    )
}

function AddEnvironment () {

    const [value, setValue] = React.useState(0) 
    
	const handleSubmit = (e: any) => {
		e.preventDefault();
        handleClose();
		let environment = {
			environmentName:         (document.getElementById("environmentName") as HTMLInputElement).value,
			description:        (document.getElementById("environmentDescription") as HTMLInputElement).value,

		}
		RestClient.addEnvironment(environment)
		          .then( () => {
					  window.alert('Environment Registered')
                      setValue(value => value + 1)
				  })
				  .catch( (e: any) => alert(e))
	}

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className="addEnvButton">
        <Button variant="info" onClick={handleShow}>
        Add Environment
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Environment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group>
                Environment Name<Form.Control        type="text" id="environmentName" maxLength={10} placeholder="Environment Name" />
                <br />
                Environment Description<Form.Control type="text" id="environmentDescription"     maxLength={30} placeholder="Description" />
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
        </div>
    )
}