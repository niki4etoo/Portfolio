import React, { useState } from "react";

import Navigation from "../Navigation/Navigation";
import QuizContainer from './QuizContainer';
import AnsweredQuestions from './AnsweredQuestions';

import Messages from './Messages';

//Languages
import en from '../../languages/en.json';

import '../../styles/quiz.css';
import '../../styles/togglelanguages.css';
import { useLocation } from "react-router-dom";

const userAnswers = [];

const NoAnswer = () => {

    const { state } = useLocation(); // getting user lang selection

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang); // setting language by last user selection

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    return (
        <>
            <Navigation confirm={true} lang={currentLanguage} index={index} />
            {questionsAnswered &&
                <div className="answered">
                    <Messages success={true} lang={currentLanguage} />
                    <AnsweredQuestions lang={currentLanguage} questions={userAnswers} questionsCount={en.quiz.no.questions.length} page="/no" />
                </div>
            }
            {
                questionsToAnswer &&
                <QuizContainer 
                    setQuestionsToAnswer={setQuestionsToAnswer} questionsToAnswer={questionsToAnswer}
                    setQuestionsAnswered={setQuestionsAnswered} questionsAnswered={questionsAnswered}
                    setIndex={setIndex} index={index}
                    type="no" lang={currentLanguage} />
            }
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={currentLanguage} />
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default NoAnswer;