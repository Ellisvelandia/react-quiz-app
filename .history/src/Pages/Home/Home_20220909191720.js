import React from "react";
import "./Home.css";
import { TextField } from '@mui/material';

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
            // onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            // onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
             <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          ></TextField>
        </div>
      </div>
      <img src="/quiz.svg" alt="quiz img" className="banner" />
    </div>
  );
};

export default Home;
