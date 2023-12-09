import React from "react";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";
import "./WelcomePage.css";
import Welcomepage from "./images/welcomepage.png";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "./contexts/AuthProvider";

const WelcomePage = () => {
  const { setToken } = useAuth();

  return (
    <>
      <Header />
      <section className="section-desktop WelcomePageContainer">
        <h1>WELCOME TO HIFIS</h1>
        <MenuDesktop className="WelcomeMenu" />
        <div className="WelcomeContent">
          <p>
            Lorem ipsum dolor sit amet consectetur. Fringilla egestas gravida a
            odio volutpat pellentesque. Platea integer turpis ut eget. Laoreet
            pharetra eros non sed proin platea. Enim curabitur semper dictum
            urna aliquet pulvinar vitae. Elit nulla amet id tellus duis eu quam
            blandit. Vitae euismod pretium porttitor ante imperdiet.
          </p>
          <img src={Welcomepage} alt="wel" />
        </div>
      </section>
    </>

  );
};

export default WelcomePage;
