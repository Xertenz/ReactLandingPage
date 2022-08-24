import React from "react";
import "./footer.scss";
import logoImg from "../../assets/logo.png";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="part part-1">
            <div className="logo title">
              <a href="#">
                <img src={logoImg} alt="" />
              </a>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              perspiciatis nostrum voluptas?
            </p>
            <SocialLinks />
          </div>
          <div className="part part-2">
            <h2 className="title">quick links</h2>
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">portfolio</a>
              </li>
              <li>
                <a href="#">news</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
            </ul>
          </div>
          <div className="part part-3">
            <h2 className="title">recent posts</h2>
            <ul>
              <li>
                <a href="#" className="post-title">
                  The Most Popular New Top Business Apps
                </a>
                <p className="post-date">20 feb, 2020</p>
              </li>
              <li>
                <a href="#" className="post-title">
                  The Best Marking Top Management Tools
                </a>
                <p className="post-date">20 feb, 2020</p>
              </li>
              <li>
                <a href="#" className="post-title">
                  The Best Marking Top Management Tools
                </a>
                <p className="post-date">20 feb, 2020</p>
              </li>
            </ul>
          </div>
          <div className="part part-4">
            <h2 className="title">get in touch</h2>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              nihil et labium numquam
            </p>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>locaton: 27 division st. new york, NY 10002, USA</span>
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>phone: +44014799584</span>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <span>email: email.support@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright @2022, All right reserved</span>
          <span>
            Designed & Developed By <span className="dev-name">Ahmed</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
