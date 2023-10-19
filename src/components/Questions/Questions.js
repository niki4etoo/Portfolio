import React from "react";


//Styles
import '../../styles/questions.css';

const Questions = (props) => {

    //Languages ( BG | EN)

    let l = {};

    (props.lang) ? l = props.en : l = props.bg;

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

    const handleAnswers = (e) => {
        console.log(e);
    }

    return (
        <>
            <div className="container__questions">
                <div className="question__questions">
                    <h2>{questions[0].question}</h2>
                </div>
                <div className="answers__questions">
                    <div className="answer__questions" onClick={(e) => handleAnswers(e)}>{questions[0].answers[0]}</div>
                    <div className="answer__questions" onClick={(e) => handleAnswers(e)}>{questions[0].answers[1]}</div>
                    <div className="answer__questions" onClick={(e) => handleAnswers(e)}>{questions[0].answers[2]}</div>
                </div>
            </div>
        </>
    );
}

export default Questions;