import React from "react";
import "./Layout-Survey-desktop.css";
import "./Survey-paging.css";
import SurveyProgress from "./Shared_Components/survey_progress/servey_progress";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

// use this component for the question with dropdown
const DropdownQuestion = () => {
    return (
        <div className="survey-question-box">
            <label htmlFor="q1">Where do you live tonight?</label>
            <select name="q1" id="q1" className="answer-box">
                <option value="">Volvo</option>
                <option value="">Saab</option>
                <option value="">Mercedes</option>
                <option value="">Audi</option>
            </select>
            <p className="error-ms">This field is required</p>
        </div>
    );
}

//Use this when the questions are for "select all that apply."
// We change it to checkbox.
// ex. question number  1, 8b, 14, 15, 4 in optional, 6 in optional
const CheckListsQuestions = () => {
    return (
        <div className="checkbox">
            <label htmlFor="" className="h4">Specify Members</label>
            <div className="group-checkbox">
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>
                </div>
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>
                </div>
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>
                </div>
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>
                </div>
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>
                </div>
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>
                </div>
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>
                </div>
            </div>
        </div>
    );
}

//question no. 2, 4b
const AddTextQuestions = () => {
    return (
        <div className="addText">
            <label htmlFor="age" className="h4">Age</label>
            <div class="form-group">
                <input class="form-field" type="text" />
                <span>Years</span>
            </div>
        </div>
    );
}

//question number 4, 7, 14c
const CalDay = () => {
    return (
        <div className="calculate-days">
            <label htmlFor="age" className="h4">Duration</label>
            <div class="flex-coloum">
                <div className="flex-row">
                    <label htmlFor="" className="cal-label">Year(s)</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="flex-row">
                    <label htmlFor="" className="cal-label">Month(s)</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="flex-row">
                    <label htmlFor="" className="cal-label">Week(s)</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="flex-row">
                    <label htmlFor="" className="cal-label">Day(s)</label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div class="form-group">
                <input class="form-field" type="number" />
                <span>Day(s)</span>
            </div>
        </div>
    );
}

// This page is a template. To use it, copy, change the name, and put your content in "put content here."
const LayoutDesktop = () => {
    let navigate = useNavigate();
    return (
        <>
            <Header />
            <section className="section-desktop survey-paging">
                <h1>Add PiT survey live</h1>

                <div className="subsection-container">
                    {/* progress bar */}
                    <SurveyProgress />

                    <div className="content-box">

                        {/* abandon box */}
                        <button className="abandon-btn">&#x2716; Abandon your survey</button>

                        {/* put content here */}
                        <div className="question-box">
                            <DropdownQuestion />
                        </div>



                        {/* btn box */}
                        <div className="btn-container-question">
                            <button type="button" className="back-btn" onClick={() => navigate(-1)}>Back</button>
                            <button className="next-btn">Submit</button>
                        </div>
                    </div>

                </div>
            </section >
            <Footer />
        </>

    );
};

export default LayoutDesktop;
