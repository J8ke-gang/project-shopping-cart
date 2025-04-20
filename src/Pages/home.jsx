import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="welcome-section">
        <h1 className="welcome">Welcome to the Fake Store</h1>
        <p className="description">
          Click below to browse all our awesome fake products.
        </p>
      </div>

      <div className="button-section">
        <Link className="browse-button" to="/shop">
          Browse Our Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
