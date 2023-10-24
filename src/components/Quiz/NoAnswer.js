import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import LanguageSwitch from "../LanguageSwitch";
import Navigation from "../Navigation/Navigation";
import QuizContainer, { userAnswers } from './QuizContainer';
import AnsweredQuestions from './AnsweredQuestions';
import Messages from './Messages';

//Languages
import en from '../../languages/en.json';

//Styles
import '../../styles/quiz.css';
import '../../styles/togglelanguages.css';

const NoAnswer = () => {

    const { state } = useLocation(); // getting user lang selection

    const [index, setIndex] = useState(0); // index of the questions

    const [question, setQuestion] = useState({ toAnswer: true, answered: false });

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false); // setting language by last user selection

    return (
        <>
            {question.answered &&
                <>
                    <Navigation confirm={false} lang={currentLanguage} index={index} />
                    <div className="answered">
                        <Messages success={true} lang={currentLanguage} />
                        <AnsweredQuestions lang={currentLanguage} questions={userAnswers} questionsCount={en.quiz.no.questions.length} page="/no" />
                    </div>
                </>
            }
            {question.toAnswer &&
                <>
                    <Navigation confirm={true} userAnswers={userAnswers} lang={currentLanguage} index={index} />
                    <QuizContainer
                        setter={setQuestion}
                        setIndex={setIndex} index={index}
                        type="no" lang={currentLanguage} />
                </>
            }
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );
}

export default NoAnswer;