// src/App.js
import React from "react";
import AuthContainer from "./AuthContainer";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
	return (
		<div>
			{/* Always render Footer */}
			<Header />
			{/* Conditionally render AuthContainer based on screen width */}
			<AuthContainer />

			{/* Always render Footer */}
			<Footer />
		</div>
	);
};

export default App;
