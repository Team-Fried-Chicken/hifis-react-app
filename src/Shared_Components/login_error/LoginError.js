import React from "react";
import "./LoginError.css";
import { ReactComponent as SVCExclamationLogo } from "./exclamation.svg";
import ErrorImage from "../../images/loginError.png";
const LoginError = () => {
  return (
    <div className="errorContainer">
      <div className="errorcontentContainer">
        <div className="errorImageContainer">
          <img src={ErrorImage} alt="errorImage" />
        </div>
        <div className="errorInfoContainer">
          <div className="errorSvgContainer">
            <SVCExclamationLogo />
          </div>
          <div className="errorMessageContainer">
            <span>Incorrect Username or Password</span>
          </div>
        </div>
      </div>
      <div className="errorCloseButton">X</div>
    </div>
  );
};

export default LoginError;
