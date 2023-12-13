import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useAuth } from "./contexts/AuthProvider";

const Header = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { setToken } = useAuth();
	const navigate = useNavigate();

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLogout = () => {
		setToken();
		setTimeout(() => {
			navigate("/");
		}, 3000);
	};
	return (
		<div className={`header ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
			{/* <div className="nav-img left">
				<img src={Hifislogo} alt="HIFIS logo" />
				<h1 id="text-logo"> HIFIS</h1>
			</div> */}
			<Link to="/welcome">
				<div className="nav-img left">
					<img src={Hifislogo} alt="HIFIS logo" />
					<h1 id="text-logo">HIFIS</h1>
				</div>
			</Link>
			<div className={`nav-links ${isMobileMenuOpen ? "show " : " nav-right"}`}>
				<a href="" className="nav-right">
					<img src={LangIcon} alt="Language" />
					<p>EN</p>
				</a>
				<a href="" className="nav-right">
					<img src={UserIcon} alt="Account" />
					<p>Account</p>
				</a>
				<a
					href="/"
					className="nav-right"
					onClick={(e) => {
						e.preventDefault();
						handleLogout();
					}}
				>
					<img src={SignoutIcon} alt="Logout" />
					<p>Logout</p>
				</a>
			</div>
			{/* <button className="toggle-button" onClick={toggleMobileMenu}>
				{isMobileMenuOpen ? "Close" : "Menu"}
			</button> */}

			{/* hamberger */}
			<div className="right-hamberger">
				<a href="/" className="lang">
					<img src={LangIcon} alt="Language" />
				</a>
				<a href="#side-drawer" className="hamburger">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</a>
			</div>
			{/* after click */}
			<aside id="side-drawer">
				{/* <div className="nav-img left left-side-drawer">
					<img src={Hifislogo} alt="HIFIS logo" />
					<h1 id="text-logo"> HIFIS</h1>
				</div> */}
				<Link to="/">
					<div className="nav-img left left-side-drawer">
						<img src={Hifislogo} alt="HIFIS logo" />
						<h1 id="text-logo"> HIFIS</h1>
					</div>
				</Link>
				<header>
					<div className="right-hamberger">
						<a href="/" className="lang">
							<img src={LangIcon} alt="Language" />
						</a>
						<a href="#" className="hamburger">
							<span className="bar"></span>
							<span className="bar"></span>
							<span className="bar"></span>
						</a>
					</div>
				</header>

				<ul id="mysideBar">
					<a href="/addevent" className="nav-right ">
						<div className="icon-side">
							<img src={PagingIcon} alt="Live surveys - Paging" />
						</div>
						<p>Live surveys - Paging</p>
					</a>
					<a href="/addevent-scrolling" className="nav-right ">
						<div className="icon-side">
							<img src={ScrollIcon} alt="Live surveys - Scrolling" />
						</div>
						<p>Live surveys - Scrolling</p>
					</a>
					<a href="/surveylists" className="nav-right ">
						<div className="icon-side">
							<img src={surveyListsIcon} alt="Survey Lists" />
						</div>
						<p>Survey Lists</p>
					</a>
					<a href="" className="nav-right ">
						<div className="icon-side">
							<img src={usercIcon} alt="Account" />
						</div>
						<p>Account</p>
					</a>
					<a href="/" className="nav-right ">
						<div className="icon-side">
							<img src={SignoutcIcon} alt="Logout" />
						</div>
						<p>Logout</p>
					</a>
				</ul>
			</aside>
		</div>
	);
};

export default Header;
