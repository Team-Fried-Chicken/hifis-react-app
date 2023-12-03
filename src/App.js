// src/App.js
import React from "react";
import AuthContainer from "./AuthContainer";
import Footer from "./Footer";
import Header from "./Header";
import MenuTablets from "./Shared_Components/menu_tablet/menu_tablet";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";
import SurveyProgress from "./Shared_Components/survey_progress/servey_progress";
import LoginError from "./Shared_Components/login_error/LoginError";
import WelcomeHeader from "./Shared_Components/welcomeHeader/welcomeHeader";
const App = () => {
  return (
    <div>
      {/* Always render Footer */}
      <Header />
      {/* Conditionally render AuthContainer based on screen width */}
      <AuthContainer />
      <WelcomeHeader />
      {/* <LoginError /> */}
      {/* <MenuTablets /> */}
      {/* <SurveyProgress /> */}
      {/* <MenuDesktop /> */}
      {/* Always render Footer */}
      <Footer />
    </div>
  );
};

export default App;
