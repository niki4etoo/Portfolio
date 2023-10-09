import React from "react";
import { Link } from 'react-router-dom';

import times from '../Decisions/answeredTimes.json';

import '../styles/quiz.css';


const AnsweredQuestions = (props) => {
    console.log(props.questions.length);
    console.log(props.questionsCount);
    return (
        <div className="answer-list">
            <div className="user-answer-title">Your answers</div>
            <div className="user-answer-times">{times.list[(props.questions.length / props.questionsCount) - 1]}</div>
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
                <Link to={props.page}>Again?</Link>
            </div>

        </div>
    );
}

export default AnsweredQuestions;