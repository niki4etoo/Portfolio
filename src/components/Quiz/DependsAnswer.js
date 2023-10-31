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

const DependsAnswer = () => {

    const { state } = useLocation(); // getting user selection of lang

    const [index, setIndex] = useState(0);

    const [question, setQuestion] = useState({ toAnswer: true, answered: false });

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false); // setting language by last user selection

    return (
        <>
            {question.answered &&
                <>
                    <Navigation userAnswers={userAnswers} confirm={false} lang={currentLanguage} index={index} />
                    <div className="answered-container__quiz">
                        <div className="answered__quiz">
                            <Messages success={true} lang={currentLanguage} />
                            <AnsweredQuestions lang={currentLanguage} questions={userAnswers} questionsCount={en.quiz.depends.questions.length} page="/depends" />
                        </div>
                    </div>
                </>
            }
            {question.toAnswer &&
                <>
                    <Navigation userAnswers={userAnswers} confirm={true} lang={currentLanguage} index={index} />
                    <QuizContainer
                        setter={setQuestion}
                        setIndex={setIndex} index={index}
                        type="depends" lang={currentLanguage} />
                </>
            }
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );
}

export default DependsAnswer;