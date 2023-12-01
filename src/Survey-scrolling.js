import React from "react";
import { useState } from "react";
import "./Layout-Survey-desktop.css";
import "./Survey-scrolling.css";

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


const SurveyScroll = () => {
    const [showQuestions1, setShowQuestions1] = useState(false);
    const [showQuestions2, setShowQuestions2] = useState(false);
    const [showQuestions3, setShowQuestions3] = useState(false);

    const onClick1 = () => { showQuestions1 ? setShowQuestions1(false) : setShowQuestions1(true) };
    const onClick2 = () => { showQuestions2 ? setShowQuestions2(false) : setShowQuestions2(true) };
    const onClick3 = () => { showQuestions3 ? setShowQuestions3(false) : setShowQuestions3(true) };

    return (
        <section className="section-desktop">
            <h1>Add PiT survey live</h1>
            <h2>Survey Details</h2>

            <div className="subsection-container">
                {/* progress bar */}
                <div>Shang </div>

                <div className="content-box">

                    {/* abandon box */}
                    <button className="abandon-btn">&#x2716; Abandon your survey</button>

                    {/* put content here */}
                    <div>
                        <div className="question-type" >
                            <h3 className="topic" onClick={onClick1}>Screen Questions</h3>
                            <div className="show-questions" >
                                {showQuestions1 ? <DropdownQuestion /> : null}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="question-type" >
                            <h3 className="topic topic2" onClick={onClick2}>Core Questions</h3>
                            <div className="show-questions" >
                                {showQuestions2 ? <DropdownQuestion /> : null}
                                {showQuestions2 ? <CheckListsQuestions /> : null}
                                {showQuestions2 ? <AddTextQuestions /> : null}
                                {showQuestions2 ? <CalDay /> : null}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="question-type" >
                            <h3 className="topic topic3" onClick={onClick3}>Optional Questions</h3>
                            <div className="show-questions" >
                                {showQuestions3 ? <DropdownQuestion /> : null}
                            </div>
                        </div>
                    </div>

                    {/* btn box */}
                    <div className="btn-container-question">
                        <button className="back-btn">Back</button>
                        <button className="next-btn">Submit</button>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default SurveyScroll;
