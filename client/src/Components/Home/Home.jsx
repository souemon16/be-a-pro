import React from "react";
import "./Home.css";
import shape from "../../Resources/Images/shape.png";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-container">
      <span className="big-circle-home"></span>
        <img src={shape} className="square" alt="" />
        <div className="home-heading">
          <h1 className="home-left">Get Professi</h1>{" "}
          <h1 className="home-right"> onal Worker</h1>
        </div>
        <div className="searchbar">
          <label htmlFor="search">
            <span className="home-left">By search </span>{" "}
            <span className="home-right">ing here:</span>
          </label>
          <input type="search" name="search" id="search" />
          <span className="focus-input-home"></span>
        </div>
      </div>

      <div className="search-result"></div>
    </React.Fragment>
  );
};

export default Home;
