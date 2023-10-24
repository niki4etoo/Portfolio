import React, { useState } from "react";


//Styles
import '../../styles/questions.css';

const QuestionsNavigation = () => {

    return (
        <>

        </>
    );
}

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

    const [next, setNext] = useState(0);
    const [ isThereMoreQuestions, setIsThereMoreQuestions ] = useState(true);
    const [ isDone, setDone ] = useState(false);
    
    const handleAnswers = (e) => {
        console.log(e);

        if (questions[next + 1] !== undefined) {
            setNext(next => next + 1);
        }

        if (questions[next + 1] === undefined) {
            console.log("Done!");
            setIsThereMoreQuestions(false);
            setDone(true);
        }
    }

    return (
        <>
            <div className="container__questions">
                {
                    isThereMoreQuestions &&
                    <>
                        <div className="question__questions">
                            <h2>{questions[next].question}</h2>
                        </div>
                        <div className="answers__questions">
                            {
                                questions[next].answers.map(answer => (
                                    <div key={answer} className="answer__questions" onClick={(e) => handleAnswers(e)}>{answer}</div>
                                ))
                            }
                        </div>
                    </>
                }
                {
                    isDone &&
                    <>
                        <div className="successMessageQuestions">
                            <h3>Done!</h3>
                        </div>
                    </>
                }
                <QuestionsNavigation />
            </div>
        </>
    );
}

export default Questions;