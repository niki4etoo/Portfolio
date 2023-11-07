
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../../Navigation/Navigation";
import Questions from "../Questions";

// languages
import bg from '../../../languages/Questions/bg-entertainment.json';
import en from '../../../languages/Questions/en-entertainment.json';

// styles
import '../questions.css';

const Entertainment = () => {

    // languages ( BG | EN)
    const { state } = useLocation();

    const [currentLanguage] = useState(state?.lang || false); // setting language by last user selection

    let l = {};
    (currentLanguage) ? l = en : l = bg;

    // entertainment questions
    let option = "";
    let questions = [];

    switch (state.difficulty.value) {
        case "Easy":
            option = l.difficultyOptions.easy;
            questions = l.questions.easy;
            break;
        case "Medium":
            option = l.difficultyOptions.medium;
            questions = l.questions.medium;
            break;
        case "Hard":
            option = l.difficultyOptions.hard;
            questions = l.questions.hard;
            break;
        default:
    }


    const Title = () => {

        return (
            <div className="container__titles__questions">
                <h2>{l.category}: <span className="italic">{l.title}</span></h2>
                <h3>{l.difficulty}: <span className="italic">{option}</span></h3>
            </div>
        );
    }

    return (
        <>
            <Navigation navigate="/questions" lang={currentLanguage} />
            <Title lang={currentLanguage} />
            <Questions category={l.type} questions={questions} lang={currentLanguage} />
        </>
    );
}

export default Entertainment;