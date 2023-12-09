import React from "react";
import Question from "./question";
import "./servey_progress.css";
import scroll from "../../images/svgLogo-scrolling-grey.png"
import page from "../../images/svgLogo-paging-grey.png"
import { Link } from "react-router-dom";


const SurveyProgress = () => {
  return (
    <div className="surveyProgressContainer">
      <ul>
        <div className="pagingTag">
          <img src={page} alt="" />
          <Link to="/addevent"><p>Live surveys - Paging</p></Link>
        </div>

        <Question />
        <Question />
        <Question />
        <Question />

        <div className="scrollingTag ">
          <img src={scroll} alt="" />
          <Link to="/addevent-scrolling"> <p>Live&nbsp;surveys&nbsp;-&nbsp;Scrolling</p></Link>

        </div>
      </ul>
    </div>
  );
};

export default SurveyProgress;
