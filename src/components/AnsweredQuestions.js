import React from "react";
import '../styles/quiz.css';


const AnsweredQuestions = (userAnswers) => {
    return (
        <>
            <div className="user-answer-title">Your answers</div>
            {
                userAnswers.questions.map((a, k) => {
                    return (
                        <div className="user-answer" key={k}>{k+1}.&nbsp;<span id="blue">{a}</span></div>
                    )
                })
            }
        </>
    );
}

export default AnsweredQuestions;