import React, { useState } from 'react'
import { RestClient } from "../RestClient"
import WebPage from './WebPage';
import LogInForm from './LogInForm'
import Configurations from './Configurations'

const logIn = {
  header: "Log In",
  subheader: "Please log in to view this page",
  listHeaders: []
}

var loggedIn: boolean;

loggedIn = true

function LogOut() {
  loggedIn = false
}

function BackDoorLogIn() {
  loggedIn = true
}

function LogInManager() {
  
  if (loggedIn == true) {
    return (
      <React.Fragment>
        <Configurations/>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <WebPage {...logIn} />
        <LogInForm/>
      </React.Fragment>
    )
  }
}


var CryptoJS = require("crypto-js");

function EncryptData(username: any, password: any) {


  var hash = CryptoJS.SHA256(password);
  var salt = CryptoJS.lib.WordArray.create([0x01020304, 0x05060708]);

  var keyiv = CryptoJS.PBKDF2(hash, salt, {
      keySize: (256 + 128) / 32,
      iterations: 1000
  });

  var key = CryptoJS.lib.WordArray.create(keyiv.words.slice(0, 8));
  var iv = CryptoJS.lib.WordArray.create(keyiv.words.slice(8, 12));

  var ciphertext = CryptoJS.AES.encrypt(username, key, {iv:iv});
  var cipherstring = ciphertext.toString();

  MatchToken(username, cipherstring)
}


function MatchToken(username: any, ciphertext: any) {

  let [token, setToken] = React.useState<Array<any>>([])

	React.useEffect(() => {
		RestClient.getToken(username)
		          .then(token => setToken(token))
              .catch((err) => alert(err))
	}, [])

  var incomingToken = JSON.stringify(token);
  var out = ciphertext
  var outToken = '{"token":"' + out + '"}'

  if (incomingToken == outToken) {

    loggedIn = true
  }
  else {
    loggedIn = false
  }
  LogInManager()
}

export {
  LogInManager,
  EncryptData,
  LogOut,
  BackDoorLogIn
}