import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import LanguageSwitch from '../../LanguageSwitch';
import Navigation from '../../Navigation/Navigation';
import MainQuiz, { userAnswers } from '../MainQuiz';
import AnsweredQuestions from '../AnsweredQuestions';
import Messages from '../Messages';

// languages
import en from '../../../languages/en-mainquiz.json';

// styles
import '../quiz.css';
import '../../../styles/togglelanguages.css';

const DependsAnswer = () => {

    const { state } = useLocation();

    const [question, setQuestion] = useState({ toAnswer: true, answered: false });

    // languages ( BG | EN)
    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false); // setting language by last user selection

    return (
        <>
            {question.answered &&
                <>
                    <Navigation userAnswers={userAnswers} lang={currentLanguage} />
                    <div className='answered-container__quiz'>
                        <div className='answered__quiz'>
                            <Messages success={true} lang={currentLanguage} />
                            <AnsweredQuestions setter={setQuestion} lang={currentLanguage} questions={userAnswers} questionsCount={en.depends.questions.length} page='/depends' />
                        </div>
                    </div>
                </>
            }
            {question.toAnswer &&
                <>
                    <Navigation userAnswers={userAnswers} lang={currentLanguage} />
                    <MainQuiz
                        setter={setQuestion}
                        type='depends' lang={currentLanguage} />
                </>
            }
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );
}

export default DependsAnswer;