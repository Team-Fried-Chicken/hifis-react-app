import React from "react";
import "./menu_tablet.css";
import { ReactComponent as SVCPagingLogo } from "./svgLogo-paging.svg";
import { ReactComponent as SVCScrollingLogo } from "./svgLogo-scrolling.svg";
import { ReactComponent as SVCListsLogo } from "./svgLogo-lists.svg";
const MenuTablets = () => {
  return (
    <div className="menu-container">
      <div className="menu-item first-item">
        <div className="item-content">
          <SVCPagingLogo className="logo-svg" />
          <span>Live serveys - Paging</span>
        </div>
      </div>
      <div className="menu-item second-item">
        <div className="item-content">
          <SVCScrollingLogo className="logo-svg" />
          <span>Live serveys - Scrolling</span>
        </div>
      </div>
      <div className="menu-item third-item">
        <div className="item-content">
          <SVCListsLogo className="logo-svg" />
          <span>Survey Lists</span>
        </div>
      </div>
    </div>
  );
};

export default MenuTablets;
