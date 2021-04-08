import React from 'react';
import WebPage from './WebPage';


const welcome = {
  header: "Welcome",
  subheader: "",
  listHeaders: []
}

export default function Welcome() {
  return (
    <React.Fragment>
      <WebPage {...welcome} />
    </React.Fragment>
  );
}

