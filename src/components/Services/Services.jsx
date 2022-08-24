import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import "./services.scss";
import serv1 from "../../assets/service-1.jpg";
import serv2 from "../../assets/service-2.jpg";
import serv3 from "../../assets/service-3.jpg";
import serv4 from "../../assets/service-4.jpg";
import serv5 from "../../assets/service-5.jpg";
import serv6 from "../../assets/service-6.jpg";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="wrapper">
          <SubTitle>my services</SubTitle>
          <h2 className="title">interactive services offered me</h2>
        </div>
        <div className="items">
          <div className="item">
            <div className="img">
              <img src={serv1} alt="" />
            </div>
            <div className="details">
              <h3 className="title">Web Designer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={serv2} alt="" />
            </div>
            <div className="details">
              <h3 className="title">Web Designer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={serv3} alt="" />
            </div>
            <div className="details">
              <h3 className="title">Web Designer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={serv4} alt="" />
            </div>
            <div className="details">
              <h3 className="title">Web Designer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={serv5} alt="" />
            </div>
            <div className="details">
              <h3 className="title">Web Designer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={serv6} alt="" />
            </div>
            <div className="details">
              <h3 className="title">Web Designer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
