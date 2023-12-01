import React from "react";
import "./Layout-Survey-desktop.css";
import "./EndSurvey.css";
import PagingIcon from "./images/paging-c.svg";
import ScrollIcon from "./images/scroll-c.svg";
import surveyListsIcon from "./images/surveylist-c.svg";
import image from "./images/walk.png";
import circle from "./images/circle.svg";

const MenuBox = (props) => {
    return (
        <a href="">
            <div className="menu-container">
                <div className="icon-container">
                    <img src={props.icon} alt={props.alt} />
                </div>
                <h3>{props.content}</h3>
            </div>
        </a>

    );
}

const EndSurvey = () => {
    return (
        <section className="section-desktop endsurvey-section">
            <h1>End of survey</h1>


            <div className="subsection-container">
                {/* progress bar */}
                <div>Shang </div>

                <div className="content-box">
                    <h2>Thank you for participating in this year's PiT Count!</h2>
                    {/* put content here */}
                    <div className="grid-three">
                        <div>
                            <MenuBox icon={PagingIcon} alt="Paging Icon" content="Live surveys - Paging" />
                        </div>
                        <div>
                            <MenuBox icon={ScrollIcon} alt="Scrolling Icon" content="Live surveys - Scrolling" />
                        </div>
                        <div>
                            <MenuBox icon={surveyListsIcon} alt="Survey Icon" content="Survey Lists" />
                        </div>
                    </div>
                    <img src={image} alt="" className="image-display" />
                    <img src={circle} alt="" className="image-display-circle" />
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

export default EndSurvey;
