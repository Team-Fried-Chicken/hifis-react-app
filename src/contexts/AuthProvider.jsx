import axios from "axios";
import Cookies from "js-cookie";
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	useMemo,
} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	//Retrive token value from cookie if it exists
	const [token, setToken_] = useState(Cookies.get("token"));

	//Set the token value, updates the token state using setToken_ and stores the token value in the cookie.
	const setToken = (newToken) => {
		setToken_(newToken);
	};

	//Set the default authorization header
	useEffect(() => {
		if (token) {
			axios.defaults.headers.common["Authorization"] = "Bearer " + token;
			Cookies.set("token", token);
		} else {
			delete axios.defaults.headers.common["Authorization"];
			Cookies.remove("token");
		}
	}, [token]);

	const contextValue = useMemo(
		() => ({
			token,
			setToken,
		}),
		[token]
	);
	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};


export const useAuth = () => {
	return useContext(AuthContext);
};

export default AuthProvider;
