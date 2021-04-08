import React from 'react';
import WebPage from './WebPage';

const parameters1 = {
  buttonText: "environment x",
  buttonVariant: 'primary',
  cardBody: 'Info about each item will come here somehow',
}


const availableEnvironments = {
  header: "Available Environments",
  subheader: "List of Environments in Database",
  listHeaders: [parameters1]
}

export default function AvailableEnvironments() {
  return (
    <React.Fragment>
      <WebPage {...availableEnvironments} />
    </React.Fragment>
  );
}

