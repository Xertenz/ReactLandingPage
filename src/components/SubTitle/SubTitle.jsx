import React from "react";
import "./subtitle.scss";

const SubTitle = (props) => {
  return <p className="sub-title">{props.children}</p>;
};

export default SubTitle;
