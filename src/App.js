// src/App.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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


const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<AuthContainer/>}></Route>
				<Route path="/PitsurveyScroll" element={<SurveyScroll/>}></Route>
			</Routes>
			<Footer />
		</Router>
		
		
		//<div>
			//{/* Always render Header */}
			//<Header />
			//{/* Conditionally render AuthContainer based on screen width */}
			//{/* <AuthContainer /> */}
			//{/* <NewSurvey /> */}
			//{/* <EndSurvey /> */}
			//{/* <LayoutDesktop /> */}
			//<SurveyScroll />
			//{/* <SurveyLists /> */}
			//{/* Always render Footer */}
			//<Footer />
		//</div>
	);
};

export default App;
