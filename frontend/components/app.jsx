import React from 'react';
import DisplayContainer from './display/display_container';
import FilterFormContainer from './filter_form/filter_form_container';

const App = () => (
  <div id="app">
    <FilterFormContainer />
    <DisplayContainer />
  </div>
);

export default App;
