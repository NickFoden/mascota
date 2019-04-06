import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'pcln-design-system'
import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes';

const linkStyle = {
  
  color: 'white',
  padding: '20px',
  width: '25%'
};
const Navigation = () => (
  <div>
    <Flex color='white' bg='blue'>
      <Link to={ROUTES.HOME} style={linkStyle}>Home</Link>
      <Link to={ROUTES.LANDING} style={linkStyle}>Landing</Link>
      <Link to={ROUTES.SIGN_IN} style={linkStyle}>Sign In</Link>
      <Link to={ROUTES.SIGN_UP} style={linkStyle}>Sign Up</Link>
      <SignOutButton />
    </Flex>
  </div >

);
export default Navigation;
