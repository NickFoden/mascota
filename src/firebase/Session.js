import React from "react";
import { connect } from "react-redux";
import { auth } from "./index";
import { clearUserProps, loadUser, setAuthUser } from "../actions";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { setAuthUser, clearUserProps, loadUser } = this.props.actions;

      auth.onAuthStateChanged(authUser => {
        authUser
          ? setAuthUser(authUser) && loadUser(authUser.uid)
          : clearUserProps();
      });
    }

    render() {
      return <Component />;
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      actions: {
        clearUserProps: function() {
          dispatch(clearUserProps());
        },
        loadUser: function(uid) {
          dispatch(loadUser(uid));
        },
        setAuthUser: function(authUser) {
          dispatch(setAuthUser(authUser));
        }
      }
    };
  };

  return connect(
    null,
    mapDispatchToProps
  )(WithAuthentication);
};

export default withAuthentication;
