import React from 'react';
import DisplayContainer from './display/display_container';
import FilterFormContainer from './filter_form/filter_form_container';
import Splash from './splash/splash';
import Underlay from './underlay/underlay';

const App = () => (
  <div id="app">
    <Splash />
    <FilterFormContainer />
    <DisplayContainer />
    <Underlay />
  </div>
);

export default App;
