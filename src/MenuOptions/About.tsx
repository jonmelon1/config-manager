import React from 'react';
import WebPage from './WebPage';


const about = {
  header: "About",
  subheader: "Configuration Manager made by Jeanette & Jon Eirik",
  listHeaders: []
}

export default function About() {
  return (
    <React.Fragment>
      <WebPage {...about} />
    </React.Fragment>
  );
}

