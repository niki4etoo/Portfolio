import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

//Styles
import '../../styles/questions.css';

//Languages
import bg from '../../languages/bg-questions.json';
import en from '../../languages/en-questions.json';

const userAnswers = { category: "", difficulty: "", answers: [] }; // Storing user answers

const Questions = (props) => {

    //User Answers object - setting category and difficulty
    userAnswers.category = props.category;
    userAnswers.difficulty = props.difficulty;

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

    const [disableButton, setDisableButton] = useState({ next: false, prev: true });

    //Navigation References ( previous and next )
    const nextRef = useRef(null);
    const prevRef = useRef(null);

    const handleAnswers = (e) => {

        if (questions[next + 1] !== undefined) {
            setNext(next => next + 1);
        }

        if (questions[next + 1] === undefined) {
            console.log("Done!");
            setIsThereMoreQuestions(false);
            setDone(true);
        }
    }

    const QuestionsNavigation = (props) => {

        const navigateNext = () => {
            if (next + 1 === questions.length - 1) {
                setDisableButton((state) => { return { ...state, next: true } }); // disable next questions
            }

            if (questions[next + 1] !== undefined) {
                setDisableButton((state) => { return { ...state, prev: false } }); //enable prev questions
                setNext(next => next + 1);
            }

            if (questions[next + 1] === undefined) { //Quiz Finished
                setIsThereMoreQuestions(false);
                setDone(true);
            }
        }

        const navigateBack = () => {
            if (next - 1 === 0) {
                setDisableButton((state) => { return { ...state, prev: true } }); //disable prev button
                setNext(next => next - 1);
            }

            if (next - 1 > 0) {
                setDisableButton((state) => { return { ...state, next: false } });; //enable next button
                setNext(next => next - 1);
            }
        }

        return (
            <div className="navigation-container__questions">
                <div ref={prevRef} className="navigation-back__questions">
                    <button onClick={() => navigateBack()} disabled={disableButton.prev}>{ll.questions.navigation.prevQuestion}</button>
                </div>
                <div ref={nextRef} className="navigation-next__questions">
                    <button onClick={() => navigateNext()} disabled={disableButton.next}>{ll.questions.navigation.nextQuestion}</button>
                </div>
            </div>
        );
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
                        <QuestionsNavigation />
                    </>
                }
                {
                    isDone &&
                    <>
                        <div className="success__message__questions">
                            <h3>{ll.questions.success.message}</h3>
                            <div className="navigation__questions">
                                <div className="navigation__questions item">
                                    <Link to='/questions'>{ll.questions.navigation.backCategory}</Link>
                                </div>
                                <div className="navigation__questions item">
                                    <Link to='/'>{ll.questions.navigation.home}</Link>
                                </div>

                            </div>

                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default Questions;