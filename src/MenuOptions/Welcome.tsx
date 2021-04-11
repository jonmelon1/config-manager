import React from 'react';
import WebPage from './WebPage';
import superhero from './homeImage.png'


const welcome = {
  header: "Welcome",
  subheader: "",
  listHeaders: []
}

export default function Welcome() {
  return (
    <div>
    <React.Fragment>
      <WebPage {...welcome} />
    </React.Fragment>
    <div className="welcomeImage">
      <img src={superhero}/>
    </div>
    </div>
    
    
  );
}

