import React from "react";
import "./social-links.scss";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <ul>
        <li>
          <a href="#">
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
