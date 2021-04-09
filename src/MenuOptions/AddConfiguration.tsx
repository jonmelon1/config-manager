import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { RestClient } from "../RestClient"


export default function AddConfig(environment: any) {
    return (
        <React.Fragment>
            <AddConfiguration {...environment} />
        </React.Fragment>
    )
}

function AddConfiguration (environment: any) {

    const [value, setValue] = React.useState(0) 
    let dateTime = new Date()
    
	const handleSubmit = (e: any) => {
		e.preventDefault();
		let configuration = {
			configName:         (document.getElementById('configName') as HTMLInputElement).value,
			application:        (document.getElementById('applicationName') as HTMLInputElement).value,
			configValue:        (document.getElementById('configValue') as HTMLInputElement).value,
            timestamp:           dateTime.toISOString(),
            environmentId:       environment.id
		}
		RestClient.addConfiguration(configuration)
		          .then( () => {
					  window.alert('Configuration Registered')
					  e.target.reset()
					  environment.configdatas.push(configuration)
                      setValue(value => value + 1)
				  })
				  .catch( (e: any) => alert(e))
	}

    return (
        <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" id="configName" placeholder="Configuration Name" />
                <br />
                <Form.Control type="text" id="applicationName" placeholder="Application Name" />
                <br />
                <Form.Control type="text" id="configValue" placeholder="Value" />
                
            </Form.Group>
            <div className="submitButton">
                <Button as="input" variant="info" type="submit" value="Submit" />{' '}
            </div>
        </Form>
        </div>
    )
}