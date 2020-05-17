import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header'

import Homepage from './pages/Home/Homepage';
import Shoppage from './pages/Shop/Shoppage';
import SignInAndSignOn from './pages/SignInAndSignOn/SignInAndSignOn'


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/sign' component={SignInAndSignOn} />
      </Switch>
    </div>
  );
}

export default App;
