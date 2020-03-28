import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux'; 
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';

import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore}>
    <Router><App/></Router>
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Provider store={configureStore}>
//     <Router><App/></Router>
//   </Provider>
//   ,document.getElementById('root')
// );

