import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from '../../Navigation/Navigation';
import Questions from '../Questions';
import LanguageSwitch from "../../LanguageSwitch";

//Languages
import bg from '../../../languages/Questions/bg-personal.json';
import en from '../../../languages/Questions/en-personal.json';

//Styles
import '../../../styles/questions.css';

const Personal = (props) => {
    //Languages ( BG | EN)

    const { state } = useLocation(); // getting user lang selection

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false); // setting language by last user selection

    const location = useLocation(); //using location hook with state for difficulty options


    let l = {};
    (props.lang) ? l = en : l = bg;

    const Title = (props) => {
        (props.lang) ? l = en : l = bg;

        let option = "";
        switch (location.state.difficulty.value) {
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
            <div className="personal__questions container">
                <h2>{l.category}{" -> "}{l.title}</h2>
                <h3>{l.difficulty}: {option}</h3>
            </div>
        );

    }


    return (
        <>
            <Navigation navigate="/questions" confirm={false} lang={currentLanguage} />
            <Title lang={currentLanguage} />
            <Questions category={l.type} difficulty={location.state.difficulty.value} en={en} bg={bg} lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );
}

export default Personal;