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
                <div className="answer-list">
                    <div className="user-answer-title">{en.stats.yourAnswers}</div>
                    <div className="user-answer-times">{en.times.list[(props.questions.length / props.questionsCount) - 1]}</div>
                    <ol className="roman">
                        {
                            props.questions.map((a, k) => {
                                return (
                                    <li key={k}>&nbsp;{a}</li>
                                )
                            })
                        }
                    </ol>
                    <div className="back-again">
                        <Link to={props.page}>{en.stats.again}</Link>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="answer-list">
                    <div className="user-answer-title">{bg.stats.yourAnswers}</div>
                    <div className="user-answer-times">{bg.times.list[(props.questions.length / props.questionsCount) - 1]}</div>
                    <ol className="roman">
                        {
                            props.questions.map((a, k) => {
                                return (
                                    <li key={k}>&nbsp;{a}</li>
                                )
                            })
                        }
                    </ol>
                    <div className="back-again">
                        <Link to={props.page}>{bg.stats.again}</Link>
                    </div>
                </div>
            </>
        );
    }


}

export default AnsweredQuestions;