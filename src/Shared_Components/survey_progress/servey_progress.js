import React from "react";
import Question from "./question";
import "./servey_progress.css";
import { ReactComponent as SVCPagingLogo } from "./svgLogo-paging.svg";
import { ReactComponent as SVCScrollingLogo } from "./svgLogo-scrolling.svg";
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
        <div className="scrollingTag ">
          <SVCScrollingLogo />
          <span>Live serveys - Scrolling</span>
        </div>
      </ul>
    </div>
  );
};

export default SurveyProgress;
