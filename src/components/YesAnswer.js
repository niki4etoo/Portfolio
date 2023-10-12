import React, { useState } from "react";

import Navigation from "./Navigation";
import QuizContainer from "./QuizContainer";
import AnsweredQuestions from './AnsweredQuestions';

import Messages from './Messages';

//Languages
import en from '../languages/en.json';

import '../styles/quiz.css';
import '../styles/togglelanguages.css';

const userAnswers = [];

const YesAnswer = () => {

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(false);

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    return (
        <>
            <Navigation lang={currentLanguage} index={index} />
            {questionsAnswered &&
                <div className="answered">
                    <Messages success={true} lang={currentLanguage} />
                    <AnsweredQuestions lang={currentLanguage} questions={userAnswers} questionsCount={en.quiz.yes.questions.length} page="/yes" />
                </div>
            }
            {
                questionsToAnswer &&
                <QuizContainer 
                    setQuestionsToAnswer={setQuestionsToAnswer} questionsToAnswer={questionsToAnswer}
                    setQuestionsAnswered={setQuestionsAnswered} questionsAnswered={questionsAnswered}
                    setIndex={setIndex} index={index}
                    type="yes" lang={currentLanguage} />
            }
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} />
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default YesAnswer;