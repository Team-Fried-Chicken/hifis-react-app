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

const ResponsiveTable = ({ surveyEntry, onDelete }) => {
	return (
		<div className="table-box">
			<div className="row head-box">
				<h5>{`Survey No. ${surveyEntry.SurveyNo}`}</h5>
				<div className="row">
					<a href={`edit/${surveyEntry.SurveyNo}`}>
						<img src={pen} alt="Edit" />
					</a>
					<a href="#" onClick={() => onDelete(surveyEntry.SurveyNo)}>
						<img src={bin} alt="Delete" />
					</a>
				</div>
			</div>
			<div className="row table-body">
				<h5>Time Taken</h5>
				<p>
					{new Date(surveyEntry.CreatedDate).toLocaleString("en-US", {
						month: "numeric",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric",
						hour12: true,
					})}
				</p>
			</div>
			<div className="row table-body">
				<h5>Status</h5>
				<p>{surveyEntry.SurveyStatus}</p>
			</div>
			<div className="row table-body">
				<h5>Location</h5>
				<p>{surveyEntry.Location}</p>
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

	const handleDelete = async (surveyNo) => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this survey?"
		);
		if (!confirmDelete) {
			return;
		}

		try {
			const response = await authAxios.delete(`/pitsurvey/${surveyNo}`);
			if (response.status === 200) {
				// Survey deleted successfully, update the state
				setSurveyEntries((prevEntries) =>
					prevEntries.filter((entry) => entry.SurveyNo !== surveyNo)
				);
			} else {
				console.error("Failed to delete survey");
			}
		} catch (error) {
			console.error("Error during delete:", error);
		}
	};

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
										<td>
											{new Date(entry.CreatedDate).toLocaleString("en-US", {
												month: "numeric",
												day: "numeric",
												year: "numeric",
												hour: "numeric",
												minute: "numeric",
												hour12: true,
											})}
										</td>
										<td>{entry.SurveyStatus}</td>
										<td>{entry.Location}</td>
										<td>
											<a href="">
												<img src={pen} alt="" />
											</a>
											<a href="#" onClick={() => handleDelete(entry.SurveyNo)}>
												<img src={bin} alt="Delete" />
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						{surveyEntries.map((entry) => (
							<ResponsiveTable
								key={entry.id}
								surveyEntry={entry}
								onDelete={handleDelete}
							/>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default SurveyLists;
