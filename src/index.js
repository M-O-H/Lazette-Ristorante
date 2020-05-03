import React from 'react';
import ReactDOM from 'react-dom';
// Get the Default BootStrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Custom CSS to overwrite the Default BootStrap
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
