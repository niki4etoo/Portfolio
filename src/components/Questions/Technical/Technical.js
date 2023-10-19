import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../../Navigation/Navigation";

import Questions from '../Questions';

//Languages
import bg from '../../../languages/Questions/bg-technical.json';
import en from '../../../languages/Questions/en-technical.json';

//Styles
import '../../../styles/questions.css';

const Technical = (props) => {

    //Languages ( BG | EN)

    const { state } = useLocation(); // getting user lang selection

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false); // setting language by last user selection

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    const location = useLocation(); //using location hook with state for difficulty options

    let l = {};
    (currentLanguage) ? l = en : l = bg;

    

    const Title = (props) => {
        (props.lang) ? l = en : l = bg;
        
        let option = "";
        switch (location.state.difficulty.option) {
            case "Easy":
                option = l.difficultyOptions.easy;
                break;
            case "Medium":
                option = l.difficultyOptions.medium;
                break;
            case "Hard":
                option = l.difficultyOptions.hard;
                break;
            default:
        }

        return (
            <div className="technical__questions container">
                <h2>{l.category}{" -> "}{l.title}</h2>
                <h3>{l.difficulty}: {option}</h3>
            </div>
        );

    }


    return (
        <>
            <Navigation confirm={false} lang={currentLanguage} />
            <Title lang={currentLanguage} />

            <Questions category={l.type} difficulty={location.state.difficulty.option} en={en} bg={bg} />
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={currentLanguage} />
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default Technical;