import React, { Component } from "react";
import { Link } from "@reach/router";
import { Flex } from "pcln-design-system";
import { connect } from "react-redux";
import SignOutButton from "./SignOut";
import * as ROUTES from "../constants/Routes";

const linkStyle = {
  color: "white",
  padding: "20px",
  width: "25%"
};
class Navigation extends Component {
  render() {
    return (
      <div>
        <Flex color="white" bg="blue">
          <Link to={ROUTES.HOME} style={linkStyle}>
            Home
          </Link>
          <Link to={ROUTES.LANDING} style={linkStyle}>
            Landing
          </Link>
          <Link to={ROUTES.SIGN_IN} style={linkStyle}>
            Sign In
          </Link>
          <Link to={ROUTES.SIGN_UP} style={linkStyle}>
            Sign Up
          </Link>
          {this.props.auth && <SignOutButton />}
        </Flex>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.user.auth,
  user: state.user.currentUserProps
});

export default connect(mapStateToProps)(Navigation);
