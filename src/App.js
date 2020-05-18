import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/utils'

import Header from './components/Header/Header'

import HomePage from './pages/Home/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SignInAndSignOnPage from './pages/SignInAndSignOn/SignInAndSignOnPage'

import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignInAndSignOnPage} />
        </Switch>
      </div>
    );
  }
}

export default App
