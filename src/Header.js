import React, { useState } from "react";
import "./Header.css"; // Import your CSS file
import Hifislogo from "./Hifislogo";

const Header = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className={`header ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
			<div className="left-buttons">
				<Hifislogo />
				<button type="button">EN</button>
			</div>
			<div className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/contact">Contact</a>
			</div>
			<button className="toggle-button" onClick={toggleMobileMenu}>
				{isMobileMenuOpen ? "Close" : "Menu"}
			</button>
		</div>
	);
};

export default Header;
