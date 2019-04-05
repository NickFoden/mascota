import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { withFirebase } from '../Firebase'
import { Container, Label, Input, Button } from 'pcln-design-system'
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const labelStyle = {
  fontSize: "14pt",
}

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
  </div>
);

class SignInFormBase extends Component {
  state = { ...INITIAL_STATE }

  signInUser = () => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

  }

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';
    return (
      <Container maxWidth={400}>
        <h1>Welcome again!</h1>
        <Label htmlFor='email' style={labelStyle}>Email</Label>
        <br></br>
        <Input
          id='email'
          name='email'
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          placeholder='hello@example.com'
        />
        <br></br>
        <Label htmlFor='password' style={labelStyle}>Password</Label>
        <br></br>
        <Input
          id='password'
          name='password'
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
          type='password'
        />
        {error && <p>{error.message}</p>}
        <br>
        </br>
        <Button
          onClick={this.signInUser}
          disabled={isInvalid}
        >
          Lets help some pets
        </Button>
      </Container>
    )
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase)

export default SignInPage;

export { SignInForm }
