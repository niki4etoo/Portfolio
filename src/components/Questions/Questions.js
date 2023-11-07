import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// languages
import bg from '../../languages/bg-questions.json';
import en from '../../languages/en-questions.json';

// styles
import './questions.css';

const userAnswers = { category: "", difficulty: "", answers: [] };

const Questions = (props) => {

    const [questions, setQuestions] = useState(props.questions);

    userAnswers.category = props.category;
    userAnswers.difficulty = props.difficulty;

    // languages ( BG | EN)
    let ll = {}; // Object for language from the bg-questions/en-questions
    (props.lang) ? ll = en : ll = bg;

    // questions states
    const [index, setIndex] = useState(0);
    const [isThereMoreQuestions, setIsThereMoreQuestions] = useState(true);
    const [isDone, setDone] = useState(false);

    const [disableButton, setDisableButton] = useState({ next: false, prev: true });

    // navigation references ( previous and next )
    const nextRef = useRef(null);
    const prevRef = useRef(null);

    const handleAnswers = (e) => {
        userAnswers.answers.push(e.target.outerText);
        if (questions.length - 1 === 0) {
            console.log("Done!");
            console.log("Answers: ", userAnswers.answers);
            setIsThereMoreQuestions(false);
            setDone(true);
        } else {
            setQuestions((questions) => {
                return questions.toSpliced(index, 1); // removing the answered question
            });
            if(index+1 === questions.length) setIndex(index => index - 1); // last question, so index must be decremented ( last question is removed )
        }
    }

    const QuestionsNavigation = () => {

        const navigateNext = () => {
            if (index + 1 === questions.length - 1) {
                setDisableButton((state) => { return { ...state, next: true } }); // disable next questions
            }

            if (questions[index + 1] !== undefined) {
                setDisableButton((state) => { return { ...state, prev: false } }); // enable prev questions
                setIndex(index => index + 1);
            }
        }

        const navigateBack = () => {
            if (index - 1 === 0) {
                setDisableButton((state) => { return { ...state, prev: true } }); // disable prev button
                setIndex(index => index - 1);
            }

            if (index - 1 > 0) {
                setDisableButton((state) => { return { ...state, next: false } }); // enable next button
                setIndex(index => index - 1);
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
                            <h2>{questions[index].question}</h2>
                        </div>
                        <div className="answers__questions">
                            {
                                questions[index].answers.map(answer => (
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