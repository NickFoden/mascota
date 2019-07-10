import { auth } from "../firebase/";

const CLEAR_USER_PROPS = "CLEAR_USER_PROPS";
export const clearUserProps = () => {
  return { type: CLEAR_USER_PROPS };
};

const SET_AUTH_USER = "SET_AUTH_USER";
export const setAuthUser = payload => {
  return { SET_AUTH_USER, payload };
};

export const loadUser = id => {
  console.log("Load this user " + id);
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
