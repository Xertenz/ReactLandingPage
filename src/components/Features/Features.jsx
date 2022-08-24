import React from "react";
import "./features.scss";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="wrapper">
          <div className="feature">
            <div className="feature-number">01</div>
            <div className="feature-info">
              <h3 className="feature-title">digital branding</h3>
              <p className="feature-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis atque, laborum possimus non cupiditate
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-number">02</div>
            <div className="feature-info">
              <h3 className="feature-title">team management</h3>
              <p className="feature-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis atque, laborum possimus non cupiditate
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-number">03</div>
            <div className="feature-info">
              <h3 className="feature-title">creative mind</h3>
              <p className="feature-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis atque, laborum possimus non cupiditate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
