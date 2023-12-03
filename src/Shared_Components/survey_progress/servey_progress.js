import React from "react";
import Question from "./question";
import "./servey_progress.css";
import { ReactComponent as SVCPagingLogo } from "./svgLogo-paging.svg";
const SurveyProgress = () => {
  return (
    <div className="surveyProgressContainer">
      <ul style={{ listStyle: "none" }}>
        <div className="pagingTag">
          <SVCPagingLogo />
          <span>Live serveys - Paging</span>
        </div>

        <Question />
        <Question />
        <Question />
        <Question />
      </ul>
    </div>
  );
};

export default SurveyProgress;
