import React, { Component } from "react";
import { Container, Label, Input, Button } from "pcln-design-system";
import { signIn } from "../actions";
// import * as ROUTES from "../constants/Routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const labelStyle = {
  fontSize: "14pt"
};

// const SignInPage = () => (
//   <div>
//     <h1>Sign In</h1>
//     <SignInForm />
//   </div>
// );

class SignIn extends Component {
  state = { ...INITIAL_STATE };

  signInUser = () => {
    const { email, password } = this.state;
    signIn(email, password).then();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    return (
      <Container maxWidth={400}>
        <h1>Welcome again!</h1>
        <Label htmlFor="email" style={labelStyle}>
          Email
        </Label>
        <br />
        <Input
          id="email"
          name="email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="hello@example.com"
        />
        <br />
        <Label htmlFor="password" style={labelStyle}>
          Password
        </Label>
        <br />
        <Input
          id="password"
          name="password"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
          type="password"
        />
        {error && <p>{error.message}</p>}
        <br />
        <Button onClick={this.signInUser} disabled={isInvalid}>
          Lets help some pets
        </Button>
      </Container>
    );
  }
}

export default SignIn;
