import React from "react";
import "./Layout-Survey-desktop.css";
import "./Survey-lists.css";
import bin from "./images/bin.svg"
import pen from "./images/pen.svg"
import Header from "./Header";
import Footer from "./Footer";
import MenuDesktop from "./Shared_Components/menu_desktop/menu_desktop";
// add data here for responsive
const ResponsiveTable = () => {
    return (
        <div className="table-box">
            <div className="row head-box">
                <h5>Survey No. 1</h5>
                <div className="row">
                    <a href=""><img src={pen} alt="" /></a>
                    <a href=""><img src={bin} alt="" /></a>
                </div>
            </div>
            <div className="row table-body">
                <h5>Time Taken</h5>
                <p>2023-11-15  7:26 PM</p>
            </div>
            <div className="row table-body">
                <h5>Status</h5>
                <p>Incomplete</p>
            </div>
            <div className="row table-body">
                <h5>Location</h5>
                <p>Ottawa</p>
            </div>
        </div>
    );
}



const SurveyLists = () => {
    return (
        <>
            <Header />
            <section className="section-desktop survey-list-section">
                <h1>Survey Lists</h1>
                <MenuDesktop className="WelcomeMenu" />
                <div className="subsection-container">
                    {/* progress bar */}
                    <div></div>

                    <div className="content-box">
                        {/* put content here */}
                        <p>Showing 10 entries</p>
                        <table>
                            <thead>
                                <th>Survey No.</th>
                                <th>Time taken</th>
                                <th>Status</th>
                                <th>Location</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2023-11-15  7:26 PM</td>
                                    <td>Incomplete</td>
                                    <td>Ottawa</td>
                                    <td>
                                        <a href=""><img src={pen} alt="" /></a>
                                        <a href=""><img src={bin} alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2023-11-15  7:26 PM</td>
                                    <td>Incomplete</td>
                                    <td>Ottawa</td>
                                    <td>
                                        <a href=""><img src={pen} alt="" /></a>
                                        <a href=""><img src={bin} alt="" /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <ResponsiveTable />
                    </div>

                </div>
            </section >
            <Footer />
        </>

    );
};

export default SurveyLists;
