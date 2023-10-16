import React, { useState } from "react";
import { useLocation } from "react-router-dom";

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

import Navigation from "./Navigation/Navigation";
import Menu from "./Menu";

//Styles
import '../styles/questions.css';

const Questions = (props) => {

    //Languages ( BG | EN)
    const { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang);

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    let l = {};
    (currentLanguage) ? l = en : l = bg;

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className="border">
                <div className="container__questions">
                    <div className="cell__questions header__questions">Category</div>
                    <div className="cell__questions header__questions">Difficulty</div>
                    <div className="cell__questions header__questions">Options</div>

                    {/* Technical questions about the stack */}
                    <div className="cell__questions">Technical</div>
                    <div className="cell__questions">Easy/Medium/Hard</div>
                    <div className="cell__questions">Status/Start</div>

                    {/* Personal questions about self-aware and purpose driven */}
                    <div className="cell__questions">Personal</div>
                    <div className="cell__questions">Easy/Medium/Hard</div>
                    <div className="cell__questions">Status/Start</div>

                    {/* Work questions about purpose, time, money */}
                    <div className="cell__questions">Work</div>
                    <div className="cell__questions">Easy/Medium/Hard</div>
                    <div className="cell__questions">Status/Start</div>

                    {/* Entertainment questions about fun, chill-out and better understanding */}
                    <div className="cell__questions">Entertainment</div>
                    <div className="cell__questions">Easy/Medium/Hard</div>
                    <div className="cell__questions">Status/Start</div>
                </div>
            </div>
            <Menu lang={currentLanguage} />
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={currentLanguage} />
                <span className="slider round"></span>
            </label>
        </>
    );

}

export default Questions;