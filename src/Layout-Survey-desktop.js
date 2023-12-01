import React from "react";
import "./Layout-Survey-desktop.css";


// This page is a template. To use it, copy, change the name, and put your content in "put content here."
const LayoutDesktop = () => {
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

export default LayoutDesktop;
