import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

ReactDOM.render(
  // <App />,
  <Router>
    <Routes />
  </Router>,
  document.querySelector('#root')
);