import React from "react";
import "./NewSurvey.css";
import image from "./images/walk.png";
import circleGrey from "./images/circle-grey.svg";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";

const NewSurvey = () => {
    let navigate = useNavigate();
    return (
        <>
            <Header />
            <section className="new-survey">
                <h1>Add PiT survey live</h1>
                <MenuDesktop className="WelcomeMenu" />
                <h2>Survey Details - Scrolling</h2>
                <form action="/surveyscrolling" className="add-surveyform" method="post">

                    {/* one box input */}
                    <div className="question-container">
                        <label htmlFor="surveyNo">Survey No.</label>
                        <div className="input-container">
                            <input type="text" name="surveyNo" id="surveyNo" className="input-box" disabled />
                        </div>
                    </div>

                    {/* one box input */}
                    <div className="question-container">
                        <label htmlFor="pitShift">PiT Shift <span className="add-color">*</span></label>
                        <div className="input-container">
                            <select name="pitShift" id="pitShift" className="input-box drp-box">
                                <option value="">Volvo</option>
                                <option value="">Saab</option>
                                <option value="">Mercedes</option>
                                <option value="">Audi</option>
                            </select>
                            <p className="error-ms">This field is required</p>
                        </div>
                    </div>

                    {/* one box input */}
                    <div className="question-container">
                        <label htmlFor="timeTaken">Time Taken</label>
                        <div className="input-container">
                            <input type="text" name="timeTaken" id="timeTaken" className="input-box" disabled />
                        </div>
                    </div>

                    {/* one box input */}
                    <div className="question-container">
                        <label htmlFor="location">Location<span className="add-color">*</span></label>
                        <div className="input-container">
                            <input type="text" name="location" id="location" className="input-box" />
                            <p className="error-ms">This field is required</p>
                        </div>
                    </div>

                    {/* one box input */}
                    <div className="question-container">
                        <label htmlFor="comment">Comment</label>
                        <div className="input-container">
                            <textarea name="comment" id="comment" rows="5"></textarea>
                            <p className="error-ms"></p>
                        </div>
                    </div>
                    <img src={image} alt="decoration image" className="image" />
                    <img src={circleGrey} alt="decoration image" className="circleimage" />

                    {/* submit btn */}
                    <div className="btn-container">
                        <label>
                            <button type="button" className="back-btn" onClick={() => navigate(-1)}>Back</button>
                        </label>
                        <div className="next-btn">
                            <button>Begin</button>
                        </div>
                        <div></div>
                    </div>
                </form>
            </section >
            <Footer />
        </>

    );
};

export default NewSurvey;
