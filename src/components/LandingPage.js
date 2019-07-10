import React from "react";
import logo from "../assets/logo.svg";
import styles from "./styles.module.css";

const LandingPage = () => (
  <section className={styles.firstSection}>
    <h1>Landing </h1>
    <img src={logo} className={styles.heroImage} alt="logo" />
  </section>
);

export default LandingPage;
