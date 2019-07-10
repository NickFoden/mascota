import React, { Component } from "react";
import { Container, Input, Button } from "pcln-design-system";
import { signIn } from "../actions";
// import styles from "./styles.module.css";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInPage extends Component {
  state = { ...INITIAL_STATE };

  signInUser = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    signIn(email, password);
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    return (
      <Container maxWidth={400} className="sign-in-container">
        <h1>Welcome again!</h1>
        <form>
          <Input
            id="email"
            name="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="hello@example.com"
          />
          <br />
          <Input
            autocomplete="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="password"
            type="password"
          />
          {error && <p>{error.message}</p>}
          <br />
          <Button onClick={e => this.signInUser(e)} disabled={isInvalid}>
            Lets help some pets
          </Button>
        </form>
      </Container>
    );
  }
}

export default SignInPage;
