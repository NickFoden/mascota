import React from "react";
import trademarksAnimals from "../assets/trademarksAnimals.jpg";
import styles from "./styles.module.css";

const HomePage = () => (
  <section className={styles.firstSection}>
    <h1> Home </h1>
    <img
      src={trademarksAnimals}
      className={styles.heroImage}
      alt="trademarksAnimals"
    />
  </section>
);

export default HomePage;
