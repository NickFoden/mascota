import { auth, db } from "../firebase";
import {
  CLEAR_USER_PROPS,
  SET_AUTH_USER,
  SET_USER_PROPS
} from "../constants/Types";

export const clearUserProps = () => {
  return { type: CLEAR_USER_PROPS };
};

export const setAuthUser = authUser => ({
  type: SET_AUTH_USER,
  payload: authUser
});

export const setCurrentUserProps = payload => {
  return { type: SET_USER_PROPS, payload };
};

export const loadUser = uid => {
  debugger;
  return dispatch => {
    const userRef = db.collection(`users`).doc(uid);
    userRef.get().then(doc => {
      const currentUser = doc.data();
      dispatch(setCurrentUserProps(currentUser));
    });
  };
};

export const resetPassword = email => auth.sendPasswordResetEmail(email);

export const signIn = (email, password) => {
  //we try and log them in
  return auth.signInWithEmailAndPassword(email, password).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //if they dont exist yet then we register them
    if (errorCode === "auth/user-not-found") {
      return signUp(email, password);
    } else {
      alert(errorMessage);
      console.log(error);
    }
  });
};

export const signUp = (email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      createUser(authUser.user.uid, email);
    })
    .catch(error => {
      alert(error);
    });
};

export const signOut = () => {
  auth.signOut().catch(err => {
    console.error(err);
  });
};

export const createUser = (uid, email) => {
  const DocRef = db.collection("users").doc(`${uid}`);

  return DocRef.set({
    email,
    signedUp: Date.now(),
    uid,
    userType: "guest"
  }).then(uid => {
    loadUser(uid);
  });
};
