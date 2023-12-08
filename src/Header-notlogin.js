import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Hifislogo from "./images/hifis-logo.svg";
import LangIcon from "./images/lang.svg";
import UserIcon from "./images/User.svg";
import SignoutIcon from "./images/signout.svg";
import PagingIcon from "./images/paging-c.svg";
import ScrollIcon from "./images/scroll-c.svg";
import surveyListsIcon from "./images/surveylist-c.svg";
import usercIcon from "./images/user-c.svg";
import SignoutcIcon from "./images/signout-c.svg";

const HeaderNotLogIn = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className={`header ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
			<div className="nav-img left">
				<img src={Hifislogo} alt="HIFIS logo" />
				<h1 id="text-logo"> HIFIS</h1>
			</div>
		</div>
	);
};

export default HeaderNotLogIn;
