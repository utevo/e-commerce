import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, provideUserProfileDocument } from './firebase/utils'

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      provideUserProfileDocument(user)

      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInAndSignOnPage} />
        </Switch>
      </div>
    );
  }
}

export default App
