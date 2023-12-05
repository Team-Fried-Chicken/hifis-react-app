// src/App.js
import React from "react";
import AuthContainer from "./AuthContainer";
import NewSurvey from "./NewSurvey";
import LayoutDesktop from "./Layout-Survey-desktop";
import EndSurvey from "./EndSurvey";
import SurveyScroll from "./Survey-scrolling";
import SurveyLists from "./Survey-lists";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
  } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import MenuTablets from "./Shared_Components/menu_tablet/menu_tablet";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";
import SurveyProgress from "./Shared_Components/survey_progress/servey_progress";
import LoginError from "./Shared_Components/login_error/LoginError";
import WelcomeHeader from "./Shared_Components/welcomeHeader/welcomeHeader";
import WelcomePage from "./WelcomePage";
import QuestionPage from "./QuestionPage";
import MiniLoginPage from "./Ipad mini/MiniLoginPage";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<AuthContainer/>}></Route>
				<Route path="/PitsurveyScroll" element={<SurveyScroll/>}></Route>
				<Route path="/QuestionPage" element={<QuestionPage />}></Route>
			</Routes>
			<Footer />
		</Router>
		
		
		//<div>
			//{/* Conditionally render AuthContainer based on screen width */}
      //{/* <AuthContainer /> */}
      //{/* <MiniLoginPage /> */}
      //<QuestionPage />
      //{/* <WelcomeHeader /> */}
      //{/* <LoginError /> */}
      //{/* <MenuTablets /> */}
      //{/* <SurveyProgress /> */}
      //{/* <MenuDesktop /> */}
      //{/* Always render Footer */}
      //{/* <WelcomePage /> */}
		//</div>
	);
};

export default App;
