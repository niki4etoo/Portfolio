import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styles
import '../../styles/questions.css';

//Languages
import bg from '../../languages/bg-questions.json';
import en from '../../languages/en-questions.json';


const QuestionsNavigation = () => {

    return (
        <>

        </>
    );
}

const Questions = (props) => {

    //Languages ( BG | EN)

    let l = {}; // Object for language from the selected category ( examples bg-work, en-technical etc.)
    let ll = {}; // Object for language from the bg-questions/en-questions

    (props.lang) ? l = props.en : l = props.bg;
    (props.lang) ? ll = en : ll = bg;

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
    const [isThereMoreQuestions, setIsThereMoreQuestions] = useState(true);
    const [isDone, setDone] = useState(false);

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
                        <QuestionsNavigation next={next} />
                    </>
                }
                {
                    isDone &&
                    <>
                        <div className="success__message__questions">
                            <h3>{ll.questions.success.message}</h3>
                            <div className="navigation">
                                <div className="navigation item">
                                    <Link to='/questions'>{ll.questions.navigation.back}</Link>
                                </div>
                                <div className="navigation item">
                                    <Link to='/'>{ll.questions.navigation.home}</Link>
                                </div>

                            </div>

                        </div>
                    </>
                }
                <QuestionsNavigation />
            </div>
        </>
    );
}

export default Questions;