import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Container, Label, Input, Button, Heading } from 'pcln-design-system'
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
);

const lableStyle = {
  fontSize: "14pt",
}

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  confirmPass: '',
  error: null,
};

class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE }

  registerUser = () => {
    const { username, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const {
      username,
      email,
      password,
      confirmPass,
      error,
    } = this.state;

    const isInvalid =
      password !== confirmPass ||
      password === '' ||
      email === '' ||
      username === '';

    return (
      <Container maxWidth={400}>
        <h1>Welcome!</h1>
        <Label htmlFor='username' style={lableStyle}>Username</Label>
        <br></br>
        <Input
          id='username'
          value={username}
          onChange={e => this.setState({ username: e.target.value })}
          name='username'
        />
        <br></br>
        <Label htmlFor='email' style={lableStyle}>Email</Label>
        <br></br>
        <Input
          id='email'
          value={email}
          onChange={e => this.setState({ email: e.target.value })}
          name='email'
          type='email'
          placeholder='hello@example.com'
        />
        <br></br>
        <Label htmlFor='password' style={lableStyle}>Password</Label>
        <br></br>

        <Input
          id='password'
          value={password}
          onChange={e => this.setState({ password: e.target.value })}
          name='password'
          type='password'
        />
        <br></br>
        <Label htmlFor='confirmPass' style={lableStyle}>Confirm password</Label>
        <br></br>
        <Input
          id='confirmPass'
          value={confirmPass}
          onChange={e => this.setState({ confirmPass: e.target.value })}
          name='confirmPass'
          type='password'
        />
        <Heading.h5 color='red' style={lableStyle}>{
          this.state.error
            ? this.state.error.message
            : null
        }</Heading.h5>
        <Button
          onClick={this.registerUser}
          disabled={isInvalid}
        >
          Lets help some pets
          </Button>
      </Container>
    )
  }
};

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase)

export default SignUpPage;

export { SignUpForm }
