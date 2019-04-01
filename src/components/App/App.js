import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'pcln-design-system'
import '../../App.css';
import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import * as ROUTES from '../../constants/routes'

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <Navigation />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
