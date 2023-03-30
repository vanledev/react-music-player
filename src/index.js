import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Home from './compo/Home';
import reportWebVitals from './report/reportWebVitals';


import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
