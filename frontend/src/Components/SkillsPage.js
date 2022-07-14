import React from "react";
import SideBar from "./SideBar";
import Skills from "./Skills";
import "react-pro-sidebar/dist/css/styles.css";
import '../App.css';


function SkillsPage() {
    return (
        <div className="App">
            <SideBar/>
            <Skills />
        </div>
    );
}


export default SkillsPage;