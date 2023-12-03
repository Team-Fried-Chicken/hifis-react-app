import React from "react";
import WelcomeHeader from "./Shared_Components/welcomeHeader/welcomeHeader";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";
import "./WelcomePage.css";
import Welcomepage from "./images/welcomepage.png";
import Footer from "./Footer";
const WelcomePage = () => {
  return (
    <div className="WelcomePageContainer">
      <WelcomeHeader className="WelcomeHeader" />
      <h1 className="WelcomeTitle">WELCOME TO HIFIS</h1>
      <MenuDesktop className="WelcomeMenu" />
      <div className="WelcomeContent">
        <div className="WelcomeMessage">
          <span>
            Lorem ipsum dolor sit amet consectetur. Fringilla egestas gravida a
            odio volutpat pellentesque. Platea integer turpis ut eget. Laoreet
            pharetra eros non sed proin platea. Enim curabitur semper dictum
            urna aliquet pulvinar vitae. Elit nulla amet id tellus duis eu quam
            blandit. Vitae euismod pretium porttitor ante imperdiet.
          </span>
        </div>
        <div className="WelcomeImage">
          <img src={Welcomepage} alt="wel" />
        </div>
      </div>
      <Footer className="WelcomeFooter" />
    </div>
  );
};

export default WelcomePage;
