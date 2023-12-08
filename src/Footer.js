import React from "react";
import "./Footer.css";
import Hifislogo from "./images/hifis-logo.svg";
const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-flex">
				<div className="flex-item-container">
					<div className="footer-flex-item">
						<p className="bold" id="about1">About</p>
						<a href="https://www.infrastructure.gc.ca/homelessness-sans-abri/hifis-sisa/index-eng.html" className="p about-group" id="about2">HIFIS</a>
						<a href="https://www.infrastructure.gc.ca/homelessness-sans-abri/hifis-sisa/release-notes-mises-a-jour-eng.html" className="p about-group" id="about3">Release Note</a>
						<a href="mailto:support@hifis.ca" className="p about-group" id="about4">Contact</a>
					</div>
				</div>

				<div className="flex-item-container">
					<div className="footer-flex-item">
						<p className="bold" id="term1">Terms of Service</p>
						<a href="https://demo.hifis.ca/License/EULA?currentCulture=en-CA" className="p" id="term2">End-User License Agreement (EULA)</a>
						<a href="https://www.infrastructure.gc.ca/homelessness-sans-abri/hifis-sisa/dpa-etd-eng.html" className="p" id="term3">Data Provision Agreement (DPA)</a>
					</div>
				</div>

				<div className="flex-item-container">
					<div className="footer-flex-item">
						<p className="bold" id="sup1">Support</p>
						<a href="https://homelessnesslearninghub.ca/?sfid=4533&_sft_categ=hifis" className="p" id="sup2">Homelessness Learning Hub</a>
						<a href="https://homelessnesslearninghub.ca/library/resources/hifis-user-guide/" className="p" id="sup3">HIFIS User Guide</a>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p className="bold center" id="hifis-footer"> HIFIS</p>
				<img src={Hifislogo} alt="HIFIS logo" height={25} id="HIFISlogo-footer" />
				<p className="bold center" id="full-text-footer">HOMELESS INDIVIDUALS AND FAMILIES INFORMATION SYSTEM</p>
			</div>

		</div>
	);
};

export default Footer;
