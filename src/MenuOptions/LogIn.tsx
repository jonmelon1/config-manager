import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { RestClient } from "../RestClient"

export default function LogIn() {
    
  var username = "admin";
  let [token, setToken] = React.useState<Array<any>>([])

	React.useEffect(() => {
		RestClient.getToken(username)
		          .then(token => setToken(token))
              .catch((err: any) => alert(err))
	}, [])
  
  
  return (
      <div className="token">
        heihei token her

      </div>
    );
  }