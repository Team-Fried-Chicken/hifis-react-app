import React, { useState, useEffect } from "react";
import "./Layout-Survey-desktop.css";
import "./Survey-lists.css";
import bin from "./images/bin.svg";
import pen from "./images/pen.svg";
import Header from "./Header";
import Footer from "./Footer";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";
import axios from "axios";
import { useAuth } from "./contexts/AuthProvider";

const apiUrl = "http://localhost:3001/api";

// add data here for responsive
const ResponsiveTable = () => {
	return (
		<div className="table-box">
			<div className="row head-box">
				<h5>Survey No. 1</h5>
				<div className="row">
					<a href="">
						<img src={pen} alt="" />
					</a>
					<a href="">
						<img src={bin} alt="" />
					</a>
				</div>
			</div>
			<div className="row table-body">
				<h5>Time Taken</h5>
				<p>2023-11-15 7:26 PM</p>
			</div>
			<div className="row table-body">
				<h5>Status</h5>
				<p>Incomplete</p>
			</div>
			<div className="row table-body">
				<h5>Location</h5>
				<p>Ottawa</p>
			</div>
		</div>
	);
};

const SurveyLists = () => {
	const [surveyEntries, setSurveyEntries] = useState([]);
	const { token } = useAuth();

	const authAxios = axios.create({
		baseURL: apiUrl,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	useEffect(() => {
		const fetchSurveyData = async () => {
			try {
				const response = await authAxios.get(`/pitsurvey`);
				if (response.status === 200) {
					setSurveyEntries(response.data);
				} else {
					console.error("Failed to fetch survey data");
				}
			} catch (error) {
				console.error("Error during fetch:", error);
			}
		};
		fetchSurveyData();
	}, [token, authAxios]);

	return (
		<>
			<Header />
			<section className="section-desktop survey-list-section">
				<h1>Survey Lists</h1>
				<MenuDesktop className="WelcomeMenu" />
				<div className="subsection-container">
					{/* progress bar */}
					<div></div>

					<div className="content-box">
						<p>Showing {surveyEntries.length} entries</p>
						<table>
							<thead>
								<tr>
									<th>Survey No.</th>
									<th>Time Taken</th>
									<th>Status</th>
									<th>Location</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{surveyEntries.map((entry) => (
									<tr key={entry.id}>
										<td>{entry.SurveyNo}</td>
										<td>{entry.CreatedDate}</td>
										<td>{entry.SurveyStatus}</td>
										<td>{entry.Location}</td>
										<td>
											<a href="">
												<img src={pen} alt="" />
											</a>
											<a href="">
												<img src={bin} alt="" />
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<ResponsiveTable />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default SurveyLists;
