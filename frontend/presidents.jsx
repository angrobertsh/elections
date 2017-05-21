import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import results from 'presidential-election-data';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore({data: results});
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});
