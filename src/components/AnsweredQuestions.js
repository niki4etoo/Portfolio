import React from "react";
import { Link } from 'react-router-dom';

import times from '../Decisions/answeredTimes.json';

import '../styles/quiz.css';


const AnsweredQuestions = (userAnswers, page) => {
    return (
        <div className="answer-list">
            <div className="user-answer-title">Your answers</div>
            <div className="user-answer-times">{times.list[0]}</div> {/* To Do: iterate over each string in the list */}
            <ol className="roman">
                {
                    userAnswers.questions.map((a, k) => {
                        return (
                            <li key={k}>&nbsp;{a}</li>
                        )
                    })
                }
            </ol>
            <div className="back-again">
                <Link to={page}>Again?</Link>
            </div>
            
        </div>
    );
}

export default AnsweredQuestions;