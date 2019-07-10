import React, { Component } from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "pcln-design-system";
import withAuthentication from "./firebase/Session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import SignInPage from "./components/SignIn";
import HomePage from "./components/Home";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <Navigation />
          <Router>
            <LandingPage path="/" />
            <Register path="/register" />
            <SignInPage path="/sign-in" />
            <HomePage path="/home" />
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default withAuthentication(App);
