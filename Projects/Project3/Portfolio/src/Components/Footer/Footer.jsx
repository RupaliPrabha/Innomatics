import React from "react";
import "./Footer.css";
import lindin_logo from "../../assets/linkdin-logo.png";
import github_logo from "../../assets/github-logo.png";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div>&copy; 2025 Rupali Prabha Bunkar. All rights reserved.</div>
      <div>Term of Services | Privacy Policy | Connect with me</div>
      <div className="footer-contact">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rupali-prabha-bunkar/"
        >
          <img src={lindin_logo} alt="" /> Linkdin
        </a>

        <hr style={{ height: "22px" }} />

        <a target="_blank" href="https://github.com/RupaliPrabha">
          <img src={github_logo} alt="" /> Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
