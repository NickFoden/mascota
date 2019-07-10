import React, { Component } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import SignOutButton from "./SignOut";
import ROUTES from "../constants/routes";
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

        {this.props.auth ? (
          <SignOutButton />
        ) : (
          <Link to={ROUTES.SIGN_IN} className={styles.linkStyle}>
            Sign In
          </Link>
        )}
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.user.auth,
  user: state.user.currentUserProps
});

export default connect(mapStateToProps)(Navigation);
