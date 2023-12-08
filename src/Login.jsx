
import React, { useState } from "react";
import "./Login.css";
import handshake from "../src/images/hand.png";
import smallLogo from "../src/images/logosmall.png"
import darkCircle from "../src/images/circle.svg"
import whiteCircle from "../src/images/white-circle.svg"
import darkkCircle from "../src/images/darkk-circle.svg"
import { ReactComponent as SVCExclamationLogo } from "./images/exclamation.svg";
import ErrorImage from "./images/loginError.png";

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

	const handleLogin = () => {

		console.log("Username:", username);
		console.log("Password:", password);

	};

	return (
		<div className="auth-container">
			<div className="login-container">
				<div className="langbox">
					<img src={smallLogo} alt="logo" />
					<button>EN</button>
				</div>
				<h2>LOG IN</h2>

				<form action="/welcome" method="post">
					<input
						placeholder="username"
						type="text"
						value=""
						onChange={(e) => setUsername(e.target.value)} required
					/>
					<input
						placeholder="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)} required
					/>
					<div className="forgot-password">
						<a href="">Forgot Password?</a>
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
	);
};

export default Login;
