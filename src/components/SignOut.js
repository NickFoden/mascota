import React from "react";
import { Button } from "pcln-design-system";
import { signOut } from "../actions";

const SignOutButton = () => (
  <Button onClick={signOut} color="lightOrange" size="small">
    Sign Out
  </Button>
);

export default SignOutButton;
