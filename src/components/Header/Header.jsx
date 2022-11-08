import React from "react";
import "./../../assets/logo.png";
import "./header.scss";
import Img from "./../../assets/man.png";
import Button from "../Button/Button";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useEffect } from "react";

const Header = () => {
  function settingHeight(event) {
    let header = document.querySelector("header"),
      headerContainer = document.querySelector("header .container");
    header.style.height = headerContainer.offsetHeight + "px";
  }
  window.onload = settingHeight;
  window.onresize = settingHeight;
  return (
    <header>
      <div className="container">
        <div className="person">
          <img src={Img} className="person-img" />
        </div>
        <div className="person-info">
          <h2 className="title">I am a front end developer</h2>
          <p className="bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            soluta harum earum consequuntur assumenda, nihil repellat placeat id
            alias quis!
          </p>
          <SocialLinks />
          <a href="#">
            <Button>contact us</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
