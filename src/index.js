import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewSurvey from "./NewSurvey";
import NewSurveyScroll from "./NewSurvey-scrolling";
import EndSurvey from "./EndSurvey";
import SurveyScroll from "./Survey-scrolling";
import SurveyLists from "./Survey-lists";
import Welcome from "./WelcomePage";
import SurveyPaging from "./Survey-paging";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/addevent" element={<NewSurvey />} />
      <Route path="/addevent-scrolling" element={<NewSurveyScroll />} />
      <Route path="/surveypaging" element={<SurveyPaging />} />
      <Route path="/surveyscrolling" element={<SurveyScroll />} />
      <Route path="/surveyend" element={<EndSurvey />} />
      <Route path="/surveylists" element={<SurveyLists />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
