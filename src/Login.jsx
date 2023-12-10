import React, { useState, useEffect } from "react";
import "./Login.css";
import handshake from "../src/images/hand.png";
import smallLogo from "../src/images/logosmall.png"
import darkCircle from "../src/images/circle.svg"
import whiteCircle from "../src/images/white-circle.svg"
import darkkCircle from "../src/images/darkk-circle.svg"
import { ReactComponent as SVCExclamationLogo } from "./images/exclamation.svg";
import ErrorImage from "./images/loginError.png";
import { useAuth } from "./contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios"

const LoginError = () => {
	return (
		<div className="loginErrorContainer">
			<div className="errorContainer">
				<img src={ErrorImage} alt="errorImage" />
				<div className="errorInfoContainer">
					<SVCExclamationLogo />
					<h3>Incorrect Username or Password</h3>
				</div>
				<a href="" className="errorCloseButton">X</a>
			</div>
		</div>
	);
};

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setToken } = useAuth();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
		  const response = await axios.post("http://localhost:3001/auth/login", {
			username: username,
			password: password,
		  });
	  
		  if (response.status === 200) {
			const data = response.data;
			console.log("Login successful:", data);
	  
			setToken("token", data.accessToken);
			navigate("/welcome");

			} else {
				const error = await response.json();
				console.error("Login failed:", error.message);
				// You can handle login failure, show an error message, etc.
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	};

	return (
		<>
		<div className="auth-container">
			<div className="login-container">
				<div className="langbox">
					<img src={smallLogo} alt="logo" />
					<button>EN</button>
				</div>
				<h2>LOG IN</h2>

				<form onSubmit={handleLogin}>
					<input
						placeholder="username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)} required
					/>
					<input
						placeholder="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)} required
					/>
					<div className="forgot-password">
						<a href="https://demo.hifis.ca/Account/ForgetPassword?Length=7">Forgot Password?</a>
					</div>
					<div className="login-button">
						<button>Login</button>
					</div>
				</form>
			</div>
			<img src={handshake} alt="handshake" id="login-image" />
			<img src={darkCircle} alt="handshake" id="dark-circle" />
			<img src={whiteCircle} alt="handshake" id="white-circle" />
			<img src={darkkCircle} alt="handshake" id="green-circle" />
			<LoginError />
		</div>
		<Footer/>
		</>
	);
};

export default Login;
