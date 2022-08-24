import { useState } from "react";
import "./navbar.scss";
import Logo from "./../../assets/logo.png";

function Header() {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false);
  function toggleSidebar() {
    let sidebar = document.getElementById("nav-items");
    setIsActiveSidebar(!isActiveSidebar);
    sidebar.classList.toggle("active");
  }
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src={Logo} />
          </a>
        </div>
        <div className="nav-items" id="nav-items">
          <div
            onClick={toggleSidebar}
            className="hamburger-close"
            id="hamburger-close"
          ></div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div
          onClick={toggleSidebar}
          className="hamburger-open"
          id="hamburger-open"
        ></div>
      </div>
    </nav>
  );
}

export default Header;
