import { useState } from "react";
import { useLocation } from "react-router-dom";

import LanguageSwitch from "../../LanguageSwitch";
import Navigation from "../../Navigation/Navigation";
import MainQuiz, { userAnswers } from '../MainQuiz';
import AnsweredQuestions from '../AnsweredQuestions';
import Messages from '../Messages';

// language
import en from '../../../languages/en-mainquiz.json';

// styles
import '../quiz.css';
import '../../../styles/togglelanguages.css';

const NoAnswer = () => {

    const { state } = useLocation(); // getting user lang selection

    const [question, setQuestion] = useState({ toAnswer: true, answered: false });

    // languages ( BG | EN)
    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false); // setting language by last user selection

    return (
        <>
            {question.answered &&
                <>
                    <Navigation lang={currentLanguage} />
                    <div className="answered-container__quiz">
                        <div className="answered__quiz">
                            <Messages success={true} lang={currentLanguage} />
                            <AnsweredQuestions setter={setQuestion} lang={currentLanguage} questions={userAnswers} questionsCount={en.no.questions.length} page="/no" />
                        </div>
                    </div>

                </>
            }
            {question.toAnswer &&
                <>
                    <Navigation userAnswers={userAnswers} lang={currentLanguage} />
                    <MainQuiz
                        setter={setQuestion}
                        type="no" lang={currentLanguage} />
                </>
            }
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );
}

export default NoAnswer;