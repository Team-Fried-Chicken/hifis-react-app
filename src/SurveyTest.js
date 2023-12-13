import React, { useState, useEffect } from "react";
import "./Layout-Survey-desktop.css";
import "./Survey-lists.css";
import bin from "./images/bin.svg";
import pen from "./images/pen.svg";
import Header from "./Header";
import Footer from "./Footer";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";
import axios from "axios";
// add data here for responsive

const TheQuestions = (entry, surveyAnswers) => {
    {
        entry.Type === "Single Selection Dropdown" && (
            <>
                <select name="answers">
                    <option key="-1">Select...</option>
                    {surveyAnswers
                        .filter((item) => item.QuestionID === entry.QuestionID)
                        .map((answer) => (
                            <option key={answer.OptionID}>{answer.Options}</option>
                        ))}
                </select>
            </>
        )
    }

    {
        entry.Type === "Text" && (
            <>
                {surveyAnswers
                    .filter((item) => item.QuestionID === entry.QuestionID)
                    .map((answer) => (
                        <input type="text" name={answer.OptionID} />
                    ))}
            </>
        )
    }

    {
        entry.Type === "Yes / No" && (
            <>
                <select name="answers">
                    <option key="-1">Select...</option>
                    {surveyAnswers
                        .filter((item) => item.QuestionID === entry.QuestionID)
                        .map((answer) => (
                            <option key={answer.OptionID}>{answer.Options}</option>
                        ))}
                </select>
            </>
        )
    }
}

const AllQuestions = () => {
    const [surveyEntries, setSurveyEntries] = useState([]);
    const [surveyAnswers, setSurveyAnswers] = useState([]);

    useEffect(() => {
        const fetchSurveyData = async () => {
            try {
                const entriesResponse = await axios.get("http://localhost:3001/api/questions");
                const answersResponse = await axios.get("http://localhost:3001/api/answers");

                if (entriesResponse.status === 200 && answersResponse.status === 200) {
                    setSurveyEntries(entriesResponse.data);
                    setSurveyAnswers(answersResponse.data);
                } else {
                    console.error("Failed to fetch survey data");
                }
            } catch (error) {
                console.error("Error during fetch:", error);
            }
        };

        fetchSurveyData();
    }, []);

    return (
        <>
            <div>
                {surveyEntries.map((entry, i) => (
                    <div key={entry.QuestionID}>
                        <p><strong>{i + 1}</strong> {entry.Question}</p>

                        <select name="answers">
                            <option key="-1">Select...</option>
                            {surveyAnswers
                                .filter((item) => item.QuestionID === entry.QuestionID)
                                .map((answer) => (
                                    <option key={answer.OptionID}>{answer.Options}</option>
                                ))}
                        </select>

                        {entry.Subquestion.length > 0 && (
                            <>
                                {entry.Subquestion.map((sub, j) => (
                                    <div key={sub.QuestionID}>
                                        <p><strong>{i + 1 + "." + j}</strong> {sub.Question}</p>
                                        {sub.QuestionID <= 51 && (
                                            <select name="answers">
                                                <option key="-1">Select...</option>
                                                {surveyAnswers
                                                    .filter((item) => item.QuestionID === sub.QuestionID)
                                                    .map((answer) => (
                                                        <option key={answer.OptionID}>{answer.Options}</option>
                                                    ))}
                                            </select>
                                        )}
                                        {sub.QuestionID > 51 && (
                                            <input type="text" id="{sub.QuestionID}"></input>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};


const SurveyTest = () => {
    return (
        <div>
            <Header></Header>
            <br></br>
            <br></br>
            <br></br>
            <h2>Test2</h2>
            <AllQuestions></AllQuestions>
            <Footer></Footer>
        </div>
    );
}



export default SurveyTest;
