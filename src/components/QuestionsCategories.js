import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Languages

import bg from '../languages/bg-questions.json';
import en from '../languages/en-questions.json';

import Navigation from "./Navigation/Navigation";
import Menu from "./Menu";

//Styles
import '../styles/questionscategories.css';

const QuestionsCategories = (props) => {

    //Languages ( BG | EN)
    let { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    let l = {};
    (currentLanguage) ? l = en : l = bg;


    const [difficulty, setDifficulty] = useState([
        { category: "technical", option: "Easy" },
        { category: "personal", option: "Easy" },
        { category: "work", option: "Easy" },
        { category: "entertainment", option: "Easy" },
    ]
    ); // Default is easy

    const Difficulty = (props) => {
        let l = {};
        (props.lang) ? l = en : l = bg;

        const handleSelectedOption = (e) => {
            difficulty.map((val) => {
                if(val.category === props.category){
                    val.option = e.target.options[e.target.options.selectedIndex].value; // update the option of the specified category
                }
                return val.option;
            });

            setDifficulty(difficulty);
        }

        return (
            <>
                <select name="difficulty" className="difficulty" onChange={handleSelectedOption}>
                    <option value="Easy">{l.questions.select.easy}</option>
                    <option value="Medium">{l.questions.select.medium}</option>
                    <option value="Hard">{l.questions.select.hard}</option>
                </select>
            </>
        );
    }

    const navigate = useNavigate();

    const Buttons = (props) => {
        let l = {};
        (props.lang) ? l = en : l = bg;

        const handleStatus = () => {
            //to do
        }

        const handleStart = () => {
            console.log("Start with: ", difficulty);

            let choice = difficulty.find( val => {
                if(val.category === props.category){ //compare selection input category with button category
                    return val.option;
                }
                return null;
            });

            console.log(choice);
            navigate(`/questions/${props.category}/`, { state: { difficulty: choice, lang: currentLanguage } });
        }

        return (
            <>
                <button className="buttons" type="button" onClick={handleStatus}>{l.questions.buttons.status}</button>
                <button className="buttons" type="button" onClick={handleStart}>{l.questions.buttons.start}</button>
            </>
        );
    }


    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className="border">
                <div className="container__questions-category">
                    <div className="cell__questions-category header__questions">{l.questions.category.title}</div>
                    <div className="cell__questions-category header__questions">{l.questions.difficulty}</div>
                    <div className="cell__questions-category header__questions">{l.questions.options}</div>

                    {/* Technical questions about the stack */}
                    <div className="cell__questions-category">{l.questions.category.technical}</div>
                    <div className="cell__questions-category"><Difficulty category={"technical"} lang={currentLanguage} /></div>
                    <div className="cell__questions-category"><Buttons category={"technical"} lang={currentLanguage} /></div>

                    {/* Personal questions about self-aware and purpose driven */}
                    <div className="cell__questions-category">{l.questions.category.personal}</div>
                    <div className="cell__questions-category"><Difficulty category={"personal"} lang={currentLanguage} /></div>
                    <div className="cell__questions-category"><Buttons category={"personal"} lang={currentLanguage} /></div>

                    {/* Work questions about purpose, time, money */}
                    <div className="cell__questions-category">{l.questions.category.work}</div>
                    <div className="cell__questions-category"><Difficulty category={"work"} lang={currentLanguage} /></div>
                    <div className="cell__questions-category"><Buttons category={"work"} lang={currentLanguage} /></div>

                    {/* Entertainment questions about fun, chill-out and better understanding */}
                    <div className="cell__questions-category">{l.questions.category.entertainment}</div>
                    <div className="cell__questions-category"><Difficulty category={"entertainment"} lang={currentLanguage} /></div>
                    <div className="cell__questions-category"><Buttons category={"entertainment"} lang={currentLanguage} /></div>
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

export default QuestionsCategories;