import React from "react";
import { Link } from 'react-router-dom';

//Languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

import '../../styles/quiz.css';
import '../../styles/togglelanguages.css';


const AnsweredQuestions = (props) => {

    if (props.lang) {
        return (
            <>
                <div className="answer-list__quiz">
                    <div className="user-answer-title__quiz">{en.stats.yourAnswers}</div>
                    <div className="user-answer-times__quiz">{en.times.list[(props.questions.length / props.questionsCount) - 1]}</div>
                    <ol className="roman__quiz">
                        {
                            props.questions.map((a, k) => {
                                return (
                                    <li key={k}>&nbsp;{a}</li>
                                )
                            })
                        }
                    </ol>
                    <div className="back-again__quiz">
                        <Link to={props.page} state={{ lang: props.lang }}>{en.stats.again}</Link>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="answer-list__quiz">
                    <div className="user-answer-title__quiz">{bg.stats.yourAnswers}</div>
                    <div className="user-answer-times__quiz">{bg.times.list[(props.questions.length / props.questionsCount) - 1]}</div>
                    <ol className="roman__quiz">
                        {
                            props.questions.map((a, k) => {
                                return (
                                    <li key={k}>&nbsp;{a}</li>
                                )
                            })
                        }
                    </ol>
                    <div className="back-again__quiz">
                        <Link to={props.page} state={{ lang: props.lang }}>{bg.stats.again}</Link>
                    </div>
                </div>
            </>
        );
    }


}

export default AnsweredQuestions;