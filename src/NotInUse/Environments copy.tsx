import React from 'react';
import WebPage from '../MenuOptions/WebPage';

const parameters1 = {
  buttonText: "Add new environment",
  buttonVariant: 'success',
  cardBody: 'Textbox?',
}

const parameters2 = {
  buttonText: "Edit description of existing environment",
  buttonVariant: 'warning',
  cardBody: 'list of environments and textbox?',
}


const environments = {
  header: "Environments",
  subheader: "Options",
  listHeaders: [parameters1, parameters2]
}

export default function Environments() {
  return (
    <React.Fragment>
      <WebPage {...environments} />
    </React.Fragment>
  );
}

