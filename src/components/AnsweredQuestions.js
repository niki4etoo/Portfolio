import React from "react";
import { Link } from 'react-router-dom';

import times from '../Decisions/answeredCounter.json';

import '../styles/quiz.css';


const AnsweredQuestions = (userAnswers, page) => {
    
    return (
        <div className="answer-list">
            <div className="user-answer-title">Your answers</div>
            <div className="user-answer-times">{times.list[0]}</div>
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