import React, { useState } from 'react';
import "./Sidebar.css";
import icon from "../Assets/icons/Vector-5.png";
import logo from "../Assets/icons/NFTify.png";
import token_icon from "../Assets/icons/Vector-1.png";
import pair_icon from  "../Assets/icons/Vector.png"
import fb from "../Assets/icons/facebook.png";
import twitter from "../Assets/icons/twitter.png";
import linkedin from "../Assets/icons/linkedin.png";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const nav = useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState("token");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    nav(`/${menuItem}`);

  };

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={icon} alt="image-icon" />
        <img src={logo} alt="NFTify logo" />
      </div>
      <ul className="menu">
        <li className={`menuItem ${activeMenuItem === "token" ? "active" : ""}`} onClick={() => handleMenuItemClick("token")}>
          <img src={token_icon} alt="Token Address icon" />
          <span>Token Address</span>
        </li>
        <li className={`menuItem ${activeMenuItem === "pair" ? "active" : ""}`} onClick={() => handleMenuItemClick("pair")}>
            <img src={pair_icon} alt="Pair Address icon" />
            <span>Pair Address</span>
        </li>
      </ul>
      <div className="socials">
        <img src={fb} alt="facebook icon" />
        <img src={linkedin} alt="linkedin icon" />
        <img src={twitter} alt="twitter icon" />
      </div>
    </div>
  )
}

export default Sidebar;
