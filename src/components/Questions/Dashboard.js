import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Questions from './Questions';

// languages
import bgTechnical from '../../languages/Questions/bg-technical.json';
import enTechnical from '../../languages/Questions/en-technical.json';

import bgPersonal from '../../languages/Questions/bg-personal.json';
import enPersonal from '../../languages/Questions/en-personal.json';

import bgWork from '../../languages/Questions/bg-work.json';
import enWork from '../../languages/Questions/en-work.json';

import bgEntertainment from '../../languages/Questions/bg-entertainment.json';
import enEntertainment from '../../languages/Questions/en-entertainment.json';

// styles
import './questions.css';

const Dashboard = () => {

    // languages ( BG | EN)
    const { state } = useLocation();

    const [currentLanguage] = useState(state?.lang || false); // setting language by last user selection

    let l = {};

    let en = {};
    let bg = {};
    
    switch (state.category) {
        case "technical":
            en = enTechnical;
            bg = bgTechnical;
            break;
        case "work":
            en = enWork;
            bg = bgWork;
            break;
        case "personal":
            en = enPersonal;
            bg = bgPersonal;
            break;
        case "entertainment":
            en = enEntertainment;
            bg = bgEntertainment;
            break;
        default:
    }

    (currentLanguage) ? l = en : l = bg;
    
    // questions
    let option = "";
    let questions = [];

    switch (state.difficulty) {
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
    console.log(questions);
    const Title = (props) => {
        (props.lang) ? l = en : l = bg;

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

export default Dashboard;