import React from "react";

import Navigation from "./Navigation";

import '../styles/quiz.css';

const YesAnswer = () => {

    const handleToBeLived = () => {
        console.log(`Here we go! Excellent`);
    }

    const handleToBeUnderstood = () => {
        console.log(`Very good! Wisdom Seeker`);
    }

    const handleIDoNotKnow = () => {
        console.log(`You should know. Find the answers`);
    }

    const handleToGetRicher = () => {
        console.log(`The life is one of the best teachers, and yes, you get richer`);
    }

    return (
        <>
        <Navigation />
        <div className="yes-quiz-container">
            <div className="yes-quiz-question">
                What is the purpose of life?
            </div>

            <div className="yes-quiz-answers">
                <div className="yes-quiz-answer" onClick={handleToBeLived}>
                    To be lived
                </div>

                <div className="yes-quiz-answer" onClick={handleToBeUnderstood}>
                    To be underdstood
                </div>

                <div className="yes-quiz-answer" onClick={handleIDoNotKnow}>
                    I don't know
                </div>

                <div className="yes-quiz-answer" onClick={handleToGetRicher}>
                    To get richer
                </div>
            </div>
            
        </div>
        </>
    );
}

export default YesAnswer;