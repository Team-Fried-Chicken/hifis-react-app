import React from "react";
import "./welcomeHeader.css";
import { ReactComponent as SVGMaple } from "./svgLogo-maple.svg";
import { ReactComponent as SVGEarth } from "./svgLogo-earth.svg";
import { ReactComponent as SVGHuman } from "./svgLogo-human.svg";
import { ReactComponent as SVGLogout } from "./svgLogo-logout.svg";
const WelcomeHeader = () => {
  return (
    <div className="WelcomeHeaderContainer">
      <div className="leftGroup">
        <SVGMaple className="Maple" />
        <span>HIFIS</span>
      </div>
      <div className="rightGroup">
        <SVGEarth className="Earth" />
        <SVGHuman className="Human" />
        <SVGLogout />
      </div>
    </div>
  );
};

export default WelcomeHeader;
