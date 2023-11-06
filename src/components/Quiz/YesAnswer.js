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

    const [question, setQuestion] = useState({ toAnswer: true, answered: false });

    //Languages ( BG | EN)
    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false); // Setting language by last user selection

    return (
        <>

            {question.answered &&
                <>
                    <Navigation lang={currentLanguage} />
                    <div className="answered-container__quiz">
                        <div className="answered__quiz">
                            <Messages success={true} lang={currentLanguage} />
                            <AnsweredQuestions lang={currentLanguage} questions={userAnswers} questionsCount={en.quiz.yes.questions.length} page="/yes" />
                        </div>
                    </div>
                </>
            }
            {
                question.toAnswer &&
                <>
                    <Navigation userAnswers={userAnswers} lang={currentLanguage} />
                    <QuizContainer
                        setter={setQuestion}
                        type="yes" lang={currentLanguage} />
                </>
            }
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );
}

export default YesAnswer;