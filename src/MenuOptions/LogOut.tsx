import React from 'react';
import WebPage from './WebPage';


const logOut = {
  header: "Log Out",
  subheader: "This will be a log out page",
  listHeaders: []
}

export default function LogOut() {
  return (
    <React.Fragment>
      <WebPage {...logOut} />
    </React.Fragment>
  );
}

