import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import "./latest-blog.scss";
import img1 from "../../assets/service-1.jpg";
import img2 from "../../assets/service-2.jpg";
import img3 from "../../assets/service-3.jpg";

const LatestBlog = () => {
  return (
    <section className="latest-blog">
      <div className="container">
        <div className="title-part">
          <SubTitle>latest blog</SubTitle>
          <h2 className="title">read insprirational story every week</h2>
        </div>
        <div className="wrapper">
          <div className="items">
            <div className="item">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="details">
                <p className="post-date">29 FEB, 2020</p>
                <h3 className="post-title">
                  the most popular new top business apps
                </h3>
                <a href="#" className="read-more">
                  <span>read more</span>
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={img2} alt="" />
              </div>
              <div className="details">
                <p className="post-date">29 FEB, 2020</p>
                <h3 className="post-title">
                  the best marking top management tools
                </h3>
                <a href="#" className="read-more">
                  <span>read more</span>
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={img3} alt="" />
              </div>
              <div className="details">
                <p className="post-date">29 FEB, 2020</p>
                <h3 className="post-title">
                  3 WooCommerce plugins to boost sales
                </h3>
                <a href="#" className="read-more">
                  <span>read more</span>
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
