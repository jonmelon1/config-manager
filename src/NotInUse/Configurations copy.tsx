import React from 'react';
import WebPage from '../MenuOptions/WebPage';

const parameters1 = {
  buttonText: "Add item",
  buttonVariant: 'success',
  cardBody: 'Info about each item will come here somehow',
}

const parameters2 = {
  buttonText: "Edit item",
  buttonVariant: 'warning',
  cardBody: 'Info about each item will come here somehow',
}

const parameters3 = {
  buttonText: "Delete item",
  buttonVariant: 'danger',
  cardBody: 'Info about each item will come here somehow',
}


const configurations = {
  header: "Configurations",
  subheader: "Options",
  listHeaders: [parameters1, parameters2, parameters3]
}

export default function Configurations() {
  return (
    <React.Fragment>
      <WebPage {...configurations} />
    </React.Fragment>
  );
}

