import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import results from 'presidential-election-data';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore({data: results, filters: {voterParties: ["democrat", "republican", "other"], voteType: "popular", years: "2016", currentState: "CA"}});
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});
