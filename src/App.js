import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

const HoodiesPage = () => (
  <div>
    <h1>HOODIES PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hoodies' component={HoodiesPage} />
      </Switch>
    </div>
  );
}

export default App;
