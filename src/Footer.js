// src/Footer.js
import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="container">
				<div className="footer-links">
					<p className="bold">About</p>
					<p className="bold">Terms of Service</p>
					<p className="bold">Support</p>
				</div>
				<div className="footer-links">
					<p>HIFIS</p>
					<p>End-User License Agreement (EULA)</p>
					<p>Homelessness Learning Hub</p>
				</div>
				<div className="footer-links">
					<p>Release Note</p>
					<p>Data Provision Agreement (DPA)</p>
					<p>HIFIS User Guide</p>
				</div>
				<div className="footer-links">
					<p>Contact</p>
				</div>
				<p className="bold">
					HOMELESS INDIVIDUALS AND FAMILIES INFORMATION SYSTEM
				</p>
			</div>
		</div>
	);
};

export default Footer;
