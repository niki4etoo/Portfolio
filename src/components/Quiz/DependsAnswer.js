import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import QuizContainer, { userAnswers } from "./QuizContainer";
import AnsweredQuestions from './AnsweredQuestions';

import Messages from './Messages';

//Languages
import en from '../../languages/en.json';

import '../../styles/quiz.css';
import '../../styles/togglelanguages.css';



const DependsAnswer = () => {

    const { state } = useLocation(); // getting user selection of lang

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
            {questionsAnswered &&
                <>
                    <Navigation userAnswers={userAnswers} confirm={false} lang={currentLanguage} index={index} />
                    <div className="answered">
                        <Messages success={true} lang={currentLanguage} />
                        <AnsweredQuestions lang={currentLanguage} questions={userAnswers} questionsCount={en.quiz.depends.questions.length} page="/depends" />
                    </div>
                </>
            }
            {
                questionsToAnswer &&
                <>
                    <Navigation userAnswers={userAnswers} confirm={true} lang={currentLanguage} index={index} />
                    <QuizContainer
                        setQuestionsToAnswer={setQuestionsToAnswer} questionsToAnswer={questionsToAnswer}
                        setQuestionsAnswered={setQuestionsAnswered} questionsAnswered={questionsAnswered}
                        setIndex={setIndex} index={index}
                        type="depends" lang={currentLanguage} />
                </>
            }
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={currentLanguage} />
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default DependsAnswer;