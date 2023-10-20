import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

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
                if (val.category === props.category) {
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

            let choice = difficulty.find(val => {
                if (val.category === props.category) { //compare selection input category with button category
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

    // Convert categories into an array with unique id
    const entries = Object.entries(l.questions.categories); 
    const categories = [];
    entries.map((value) => {
        return categories.push([ value[0], value[1], uuidv4()]);
    })

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className="border">
                <div className="container__questions-category" >
                    {
                        categories.map((a) => (
                            <div key={a[2]}>
                                <div className="cell__questions-category">{a[1]}</div>
                                <div className="cell__questions-category"><Difficulty category={a[0]} lang={currentLanguage} /></div>
                                <div className="cell__questions-category"><Buttons category={a[0]} lang={currentLanguage} /></div>
                            </div>
                        ))
                    }
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