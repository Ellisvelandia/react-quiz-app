import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Setting</span>
      </div>

      <img src="/quiz.svg" alt="quiz img" className="banner" />
    </div>
  );
};

export default Home;
