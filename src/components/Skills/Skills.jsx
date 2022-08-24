import React from "react";
import Button from "../Button/Button";
import SubTitle from "../SubTitle/SubTitle";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="wrapper">
          <div className="title-part">
            <SubTitle>why choose us?</SubTitle>
            <h2 className="title">some of my skills</h2>
          </div>
          <div className="details">
            <div className="techs">
              <ul>
                <li className="tech">
                  <div className="text">
                    <p className="tech-name">html</p>
                    <p className="percentage">70%</p>
                  </div>
                  <div className="bar"></div>
                </li>
                <li className="tech">
                  <div className="text">
                    <p className="tech-name">css</p>
                    <p className="percentage">80%</p>
                  </div>
                  <div className="bar"></div>
                </li>
                <li className="tech">
                  <div className="text">
                    <p className="tech-name">javascript</p>
                    <p className="percentage">90%</p>
                  </div>
                  <div className="bar"></div>
                </li>
                <li className="tech">
                  <div className="text">
                    <p className="tech-name">react js</p>
                    <p className="percentage">70%</p>
                  </div>
                  <div className="bar"></div>
                </li>
              </ul>
            </div>
            <div className="about-me-details">
              <h2 className="title">every day is a new challenge</h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                explicabo tempora consectetur doloremque nemo facilis ut
                repellat itaque ipsum, officiis sequi dolores ex aspernatur eum
                eius ratione impedit voluptatum amet. Lorem, ipsum dolor sit
                <br />
                <br />
                amet consectetur adipisicing elit. Numquam at facere modi! Quos
                saepe a aperiam, ex provident explicabo dolorum?
              </p>
              <a href="#">
                <Button>hire me</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
