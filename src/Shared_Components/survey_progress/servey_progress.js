import React from "react";
import Question from "./question";

const SurveyProgress = () => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <Question />
        <Question />
        <Question />
        <Question />
      </ul>
    </div>
  );
};

export default SurveyProgress;
