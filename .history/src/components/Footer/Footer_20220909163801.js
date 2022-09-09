import React from "react";

const Footer = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      Made with 🍕
      <a
        href="https://github.com/Ellisvelandia/react-quiz-app"
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
    </div>
  );
};

export default Footer;
