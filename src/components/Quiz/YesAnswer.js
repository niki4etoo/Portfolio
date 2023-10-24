import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import LanguageSwitch from "../LanguageSwitch";
import Navigation from "../Navigation/Navigation";
import QuizContainer, { userAnswers } from "./QuizContainer";
import AnsweredQuestions from './AnsweredQuestions';
import Messages from './Messages';

//Languages
import en from '../../languages/en.json';

//Styles
import '../../styles/quiz.css';
import '../../styles/togglelanguages.css';

const YesAnswer = () => {

    const { state } = useLocation(); // getting user choice for lang

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false); // Setting language by last user selection

    return (
        <>

            {questionsAnswered &&
                <>
                    <Navigation confirm={false} lang={currentLanguage} index={index} />
                    <div className="answered">
                        <Messages success={true} lang={currentLanguage} />
                        <AnsweredQuestions lang={currentLanguage} questions={userAnswers} questionsCount={en.quiz.yes.questions.length} page="/yes" />
                    </div>
                </>
            }
            {
                questionsToAnswer &&
                <>
                    <Navigation confirm={true} userAnswers={userAnswers} lang={currentLanguage} index={index} />
                    <QuizContainer
                        setQuestionsToAnswer={setQuestionsToAnswer} questionsToAnswer={questionsToAnswer}
                        setQuestionsAnswered={setQuestionsAnswered} questionsAnswered={questionsAnswered}
                        setIndex={setIndex} index={index}
                        type="yes" lang={currentLanguage} />
                </>
            }
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );
}

export default YesAnswer;