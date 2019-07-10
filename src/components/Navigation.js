import React, { Component } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import SignOutButton from "./SignOut";
import * as ROUTES from "../constants/Routes";
import styles from "./styles.module.css";

class Navigation extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to={ROUTES.HOME} className={styles.linkStyle}>
          Home
        </Link>
        <Link to={ROUTES.LANDING} className={styles.linkStyle}>
          Landing
        </Link>
        <Link to={ROUTES.SIGN_IN} className={styles.linkStyle}>
          Sign In
        </Link>
        {this.props.auth && <SignOutButton />}
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.user.auth,
  user: state.user.currentUserProps
});

export default connect(mapStateToProps)(Navigation);
