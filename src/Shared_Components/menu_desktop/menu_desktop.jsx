import React from "react";
import "./menu_desktop.css";
import SVCListsLogo from "../../images/svgLogo-lists.png"
import SVCScrollingLogo from "../../images/svgLogo-scrolling.png"
import SVCPagingLogo from "../../images/svgLogo-paging.png"
import { Link } from "react-router-dom";

const MenuDesktop = () => {
  return (
    <div className="topmenu-container">
      <Link to="/addevent">
        <div className="menu-item first-item">
          <img src={SVCPagingLogo} alt="Logo-svg" />
          <h4>Live&nbsp;surveys&nbsp;-&nbsp;Paging</h4>
        </div>
      </Link>

      <Link to="/addevent-scrolling">
        <div className="menu-item second-item">
          <img src={SVCScrollingLogo} alt="Logo-svg" />
          <h4>Live&nbsp;surveys&nbsp;-&nbsp;Scrolling</h4>
        </div>
      </Link>

      <Link to="/surveylists">
        <div className="menu-item third-item">
          <img src={SVCListsLogo} alt="Logo-svg" />
          <h4>Survey&nbsp;Lists</h4>
        </div>
      </Link>
    </div>
  );
};

export default MenuDesktop;
