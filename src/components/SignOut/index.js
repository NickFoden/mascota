import React from 'react';
import { Button } from 'pcln-design-system'

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button
    onClick={firebase.doSignOut}
    color='lightOrange'
    size='small'
  >
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
