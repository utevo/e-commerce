import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header'

import HomePage from './pages/Home/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SignInAndSignOnPage from './pages/SignInAndSignOn/SignInAndSignOnPage'


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign' component={SignInAndSignOnPage} />
      </Switch>
    </div>
  );
}

export default App;
