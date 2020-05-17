import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Home/Homepage';
import Shoppage from './pages/Shop/Shoppage';
import Header from './components/Header/Header'


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
