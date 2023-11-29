// src/AuthContainer.js
import React, { useState } from "react";
import "./AuthContainer.css"; // Import the CSS file for AuthContainer styling

const AuthContainer = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Add your authentication logic here
		console.log("Username:", username);
		console.log("Password:", password);
		// You can perform authentication and navigate to the next screen
	};

	return (
		<div className="auth-container">
			<div className="login-container">
				<h2>LOG IN</h2>
				<form>
					<input
						placeholder="username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						placeholder="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className="forgot-password">
						<a href="/forgot-password">Forgot Password?</a>
					</div>
					<div className="login-button">
						<button type="button" onClick={handleLogin}>
							Login
						</button>
					</div>
				</form>
			</div>
			<img src="path/to/your/image.jpg" alt="Your Image" />
		</div>
	);
};

export default AuthContainer;
