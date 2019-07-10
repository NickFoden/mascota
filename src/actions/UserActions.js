import { auth } from "../firebase";
import {
  CLEAR_USER_PROPS,
  SET_AUTH_USER,
  SET_USER_PROPS
} from "../constants/Types";

export const clearUserProps = () => {
  return { type: CLEAR_USER_PROPS };
};

export const setAuthUser = payload => {
  return { SET_AUTH_USER, payload };
};

export const loadUser = id => {
  console.log("Load this user " + id);
  return { SET_USER_PROPS, id };
};

export const resetPassword = email => auth.sendPasswordResetEmail(email);

export const signIn = (email, password) =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      return "loggedIn";
    })
    .catch(err => {
      return `error ${err}`;
    });

export const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signOut = () => auth().signOut();
