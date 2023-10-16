import React, { useState } from "react";
import { useLocation } from "react-router-dom";

//Languages

import bg from '../languages/bg-questions.json';
import en from '../languages/en-questions.json';

import Navigation from "./Navigation/Navigation";
import Menu from "./Menu";

//Styles
import '../styles/questions.css';

const Questions = (props) => {

    //Languages ( BG | EN)
    let { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
            console.log("1. Current language: ", currentLanguage);
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
            console.log("1. Current language: ", currentLanguage);
        }
    }

    let l = {};
    (currentLanguage) ? l = en : l = bg;
    const Difficulty = (props) => {
        let l = {};
        (props.lang) ? l = en : l = bg;

        return (
            <>
                <select name="difficulty" className="difficulty">
                    <option value="Easy">{l.questions.select.easy}</option>
                    <option value="Medium">{l.questions.select.medium}</option>
                    <option value="Hard">{l.questions.select.hard}</option>
                </select>
            </>
        );
    }
    
    const Buttons = (props) => {
        let l = {};
        (props.lang) ? l = en : l = bg;
    
        return (
            <>
                <button className="buttons" type="button">{l.questions.buttons.status}</button>
                <button className="buttons" type="button">{l.questions.buttons.start}</button>
            </>
        );
    }
    

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className="border">
                <div className="container__questions">
                    <div className="cell__questions header__questions">{l.questions.category.title}</div>
                    <div className="cell__questions header__questions">{l.questions.difficulty}</div>
                    <div className="cell__questions header__questions">{l.questions.options}</div>

                    {/* Technical questions about the stack */}
                    <div className="cell__questions">{l.questions.category.technical}</div>
                    <div className="cell__questions"><Difficulty lang={currentLanguage} /></div>
                    <div className="cell__questions"><Buttons lang={currentLanguage} /></div>

                    {/* Personal questions about self-aware and purpose driven */}
                    <div className="cell__questions">{l.questions.category.personal}</div>
                    <div className="cell__questions"><Difficulty lang={currentLanguage} /></div>
                    <div className="cell__questions"><Buttons lang={currentLanguage} /></div>

                    {/* Work questions about purpose, time, money */}
                    <div className="cell__questions">{l.questions.category.work}</div>
                    <div className="cell__questions"><Difficulty lang={currentLanguage} /></div>
                    <div className="cell__questions"><Buttons lang={currentLanguage} /></div>

                    {/* Entertainment questions about fun, chill-out and better understanding */}
                    <div className="cell__questions">{l.questions.category.entertainment}</div>
                    <div className="cell__questions"><Difficulty lang={currentLanguage} /></div>
                    <div className="cell__questions"><Buttons lang={currentLanguage} /></div>
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