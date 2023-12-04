import React, { useEffect, useState } from "react";
import WelcomeHeader from "./Shared_Components/welcomeHeader/welcomeHeader";

import "./QuestionPage.css";
import SurveyProgress from "./Shared_Components/survey_progress/servey_progress";
import Footer from "./Footer";

const QuestionPage = () => {
  const [showSurveyProgress, setShowSurveyProgress] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the screen width
      setShowSurveyProgress(window.innerWidth > 1024);
    };

    // Set the initial state
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="QuestionPageContainer">
      <WelcomeHeader />
      <h1>Add PiT survey live</h1>
      <div className="ProgressAndQuestions">
        {showSurveyProgress && <SurveyProgress className="SurveyProgress" />}
        <div className="QuestionContainer">
          <input
            type="button"
            name=""
            value="X  Abandon your survey"
            className="AbandonButton"
          />

          <div className="Question">
            <p>1.Where do you live tonight?</p>
            <select>
              <option value="">Select an option</option>
              <option value="">Home</option>
            </select>
          </div>
          <div className="BackAndNext">
            <input type="button" name="" value="Back" className="BackButton" />
            <input type="button" name="" value="Next" className="NextButton" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionPage;
