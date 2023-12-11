import { useState, useEffect } from "react";
import "./NewSurvey.css";
import image from "./images/walk.png";
import circleGrey from "./images/circle-grey.svg";
import Header from "./Header";
import Footer from "./Footer";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";
import axios from "axios";
import { useAuth } from "./contexts/AuthProvider";

const apiUrl = "http://localhost:3001/api";

const getCurrentTime = () => {
	const now = new Date();
	const options = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};
	return now.toLocaleString("en-US", options);
};

const NewSurvey = () => {
	const [surveyData, setSurveyData] = useState({
		surveyNo: "", // fetch from backend
		pitShift: "",
		timeTaken: getCurrentTime(), //well be current date and time
		location: "",
		comment: "",
	});

	const { token, user } = useAuth();

	const [predictedSurveyNo, setPredictedSurveyNo] = useState("");

	const [pitShiftOptions] = useState([
		`${
			user.username
		}, ${new Date().toLocaleDateString()}, @ FROM 8 AM to 12 PM`,
		`${
			user.username
		}, ${new Date().toLocaleDateString()}, @ FROM 12 PM to 4 PM`,
		`${user.username}, ${new Date().toLocaleDateString()}, @ FROM 4 PM to 8 PM`,
		`${
			user.username
		}, ${new Date().toLocaleDateString()}, @ FROM 8 PM to 12 AM`,
	]);

	const authAxios = axios.create({
		baseURL: apiUrl,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	useEffect(() => {
		// Fetch predicted next surveyNo from the backend
		const fetchPredictedSurveyNo = async () => {
			try {
				const response = await authAxios.get(`/predictedSurveyNo`);
				setPredictedSurveyNo(response.data.predictedSurveyNo);
			} catch (error) {
				console.error("Error fetching predicted surveyNo:", error);
			}
		};

		fetchPredictedSurveyNo();
	}, [token, authAxios]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post("/api/createsurvey", surveyData);

			if (response.status === 200) {
				// Survey created successfully
				// You might want to redirect the user or perform other actions
			} else {
				// Handle error response
				console.error("Failed to create survey");
			}
		} catch (error) {
			// Handle network or other errors
			console.error("Error creating survey:", error);
		}
	};

	return (
		<>
			<Header />
			<section className="new-survey">
				<h1>Add PiT survey live</h1>
				<MenuDesktop className="WelcomeMenu" />
				<h2>Survey Details - Scrolling</h2>
				<form
					action="/surveyscrolling"
					className="add-surveyform"
					method="post"
				>
					{/* one box input */}
					<div className="question-container">
						<label htmlFor="surveyNo">Survey No.</label>
						<div className="input-container">
							<input
								type="text"
								name="predictedSurveyNo"
								id="predictedSurveyNo"
								className="input-box"
								value={predictedSurveyNo}
								disabled
							/>
						</div>
					</div>

					{/* one box input */}
					<div className="question-container">
						<label htmlFor="pitShift">
							PiT Shift <span className="add-color">*</span>
						</label>
						<div className="input-container">
							<select
								name="pitShift"
								id="pitShift"
								className="input-box drp-box"
								value={surveyData.pitShift}
								onChange={(e) =>
									setSurveyData((prevData) => ({
										...prevData,
										pitShift: e.target.value,
									}))
								}
							>
								{pitShiftOptions.map((option, index) => (
									<option key={index} value={option}>
										{option}
									</option>
								))}
							</select>
							<p className="error-ms">This field is required</p>
						</div>
					</div>

					{/* one box input */}
					<div className="question-container">
						<label htmlFor="timeTaken">Time Taken</label>
						<div className="input-container">
							<input
								type="text"
								name="timeTaken"
								id="timeTaken"
								className="input-box"
								value={surveyData.timeTaken}
								disabled
							/>
						</div>
					</div>

					{/* one box input */}
					<div className="question-container">
						<label htmlFor="location">
							Location<span className="add-color">*</span>
						</label>
						<div className="input-container">
							<input
								type="text"
								name="location"
								id="location"
								className="input-box"
							/>
							<p className="error-ms">This field is required</p>
						</div>
					</div>

					{/* one box input */}
					<div className="question-container">
						<label htmlFor="comment">Comment</label>
						<div className="input-container">
							<textarea name="comment" id="comment" rows="5"></textarea>
							<p className="error-ms"></p>
						</div>
					</div>
					<img src={image} alt="decoration image" className="image" />
					<img
						src={circleGrey}
						alt="decoration image"
						className="circleimage"
					/>

					{/* submit btn */}
					<div className="btn-container">
						<div className="next-btn">
							<button>Begin</button>
						</div>
						<div></div>
					</div>
				</form>
			</section>
			<Footer />
		</>
	);
};

export default NewSurvey;
