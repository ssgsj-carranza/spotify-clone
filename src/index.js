//Tech used:
//spotify API
//user authentication
//Material UI
//React context API
//React + React hooks




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DataLayer} from './DataLayer';
import reducer, {initialState} from './reducer';

ReactDOM.render(
  <React.StrictMode inititalState={initialState} reducer={reducer}>
    <DataLayer>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

