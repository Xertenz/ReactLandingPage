import React from "react";
import "./aboutme.scss";
import Image from "./../../assets/about_me.jpg";
import Button from "../Button/Button";
import SubTitle from "../SubTitle/SubTitle";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="wrapper">
          <div className="info">
            <SubTitle>about me</SubTitle>
            <h2 className="title">who am i and what i do ?</h2>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quod
              quasi tempore, aperiam maiores accusamus! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
              <br />
              <br />
              Eos quod quasi tempore, aperiam maiores accusamus! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Eos quod quasi
              tempore, aperiam maiores accusamus!
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quod
              quasi tempore, aperiam maiores accusamus! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
            </p>
            <a href="#">
              <Button className="download-cv">Download cv</Button>
            </a>
          </div>
          <div className="image">
            <img src={Image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
