import React from "react";
import "./numbers.scss";

const Numbers = () => {
  return (
    <section className="numbers">
      <div className="container">
        <div className="wrapper">
          <div className="items">
            <div className="item">
              <h1 className="title">520%</h1>
              <p className="text">awards winning</p>
            </div>
            <div className="item">
              <h1 className="title">99%</h1>
              <p className="text">satisfied clients</p>
            </div>
            <div className="item">
              <h1 className="title">3325</h1>
              <p className="text">creative projects</p>
            </div>
            <div className="item">
              <h1 className="title">54380</h1>
              <p className="text">lines of code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
