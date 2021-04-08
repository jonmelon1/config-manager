import React from 'react';
import WebPage from '../MenuOptions/WebPage';

const parameters1 = {
  buttonText: "View list",
  buttonVariant: 'danger',
  cardBody: 'Info about each item will come here somehow',
}

const parameters2 = {
  buttonText: "View list",
  buttonVariant: 'success',
  cardBody: 'Info about each item will come here somehow',
}

const parameters3 = {
  buttonText: "View list",
  buttonVariant: 'danger',
  cardBody: 'Info about each item will come here somehow',
}


const test = {
  header: "Test",
  subheader: "Options",
  listHeaders: [parameters1, parameters2, parameters3]
}

export default function Test() {
  return (
    <React.Fragment>
      <WebPage {...test} />
    </React.Fragment>
  );
}

