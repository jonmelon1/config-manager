import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { RestClient } from "../RestClient"


export default function DeleteConfiguration (configuration: any) {

    
	const handleSubmit = (e: any) => {
		e.preventDefault();

		RestClient.deleteConfiguration(configuration.id)
		          .then( () => {
					  window.alert('Configuration Deleted')

				  })
				  .catch( (e: any) => alert(e))
	}

    return (
        <div>
        <Form onSubmit={handleSubmit}>
                <Button as="input" variant="danger" size="sm" type="submit" value="Delete" />{' '}
        </Form>
        </div>
    )
}