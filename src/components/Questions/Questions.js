import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

//Styles
import '../../styles/questions.css';

const Questions = (props) => {

    //Languages ( BG | EN)

    const { state } = useLocation(); // getting user lang selection

    const currentLanguage = useState(state?.lang || false); // setting language by last user selection

    let l = {};

    (currentLanguage) ? l = props.en : l = props.bg;

    let questions = [];
    switch (props.difficulty) {
        case "Easy":
            questions = l.questions.easy;
                break;
        case "Medium":
            questions = l.questions.medium;
            break;
        case "Hard":
            questions = l.questions.hard;
            break;
        default:
    }

    console.log(questions);

    return (
        <>
            <div className="container__questions">
                <div className="question__questions">
                    <h2>{questions[0].question}</h2>
                </div>
                <div className="answers__questions">
                    <div className="answer__questions">{questions[0].answers[0]}</div>
                    <div className="answer__questions">{questions[0].answers[1]}</div>
                    <div className="answer__questions">{questions[0].answers[2]}</div>
                </div>
            </div>
        </>
    );
}

export default Questions;