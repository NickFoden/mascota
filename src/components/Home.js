import React from "react";
import trademarksAnimals from "../assets/trademarksAnimals.jpg";

const HomePage = () => (
  <div>
    <h1> Home Page </h1>
    <img
      src={trademarksAnimals}
      className="App-trademarksAnimals"
      alt="trademarksAnimals"
    />
  </div>
);

export default HomePage;
