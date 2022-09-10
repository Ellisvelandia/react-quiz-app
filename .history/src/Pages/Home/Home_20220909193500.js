import React from "react";
import "./Home.css";
import { MenuItem, TextField } from "@mui/material";
import { Categories } from "../../Data/";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Setting</span>
        <div className="settings_select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
          />
          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Category"
            variant="outlined"
          >
            {Categories}
            <MenuItem></MenuItem>
          </TextField>
        </div>
      </div>
      <img src="/quiz.svg" alt="quiz img" className="banner" />
    </div>
  );
};

export default Home;
