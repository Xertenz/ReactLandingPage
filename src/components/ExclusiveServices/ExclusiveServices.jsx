import React from "react";
import Button from "../Button/Button";
import SubTitle from "../SubTitle/SubTitle";
import "./exclusive-services.scss";

const ExclusiveServices = () => {
  return (
    <section className="exclusive-services">
      <div className="container">
        <div className="wrapper">
          <SubTitle>looking for exclusive services?</SubTitle>
          <h1 className="title">get the best for your business</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quaerat vel reiciendis facere ab dolore.
          </p>
          <a href="#">
            <Button>Contact Us</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveServices;
