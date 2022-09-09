import React from "react";
import "./Home.css";
import { TextField } from "@mui/material";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Setting</span>
        <div className="settings_select">
          <TextField 
          style){{}}
          />
        </div>
      </div>
      <img src="/quiz.svg" alt="quiz img" className="banner" />
    </div>
  );
};

export default Home;
