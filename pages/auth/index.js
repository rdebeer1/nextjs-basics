import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name='Robert' age={26} />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, resject) => {
    setTimeout(() => {
      resolve({
        appName: 'nextjs-basics (Auth)'
      });
    }, 1000);
  });
  return promise;
}

export default authIndexPage;