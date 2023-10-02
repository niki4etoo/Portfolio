import React from "react";

import Navigation from "./Navigation";

import MultiLevelTreeNode from "../Decisions/Tree";

import questions from '../Decisions/questions.json';

import '../styles/quiz.css';

const YesAnswer = () => {

    const test = new MultiLevelTreeNode(questions.personal.questions[0], [ "John", "Stefan", "Lily" ]);


    const handle = (question) => {
        console.log(`Question: ${question}`);
        console.log(test);
    }

    return (
        <>
        <Navigation />
        <div className="yes-quiz-container">
            <div className="yes-quiz-question">
                Questions
            </div>

            <div className="yes-quiz-answers">
                <div className="yes-quiz-answer" onClick={() => handle(questions.personal.questions[1])}>
                    {questions.personal.questions[1]}
                </div>

                <div className="yes-quiz-answer" onClick={() => handle(questions.technical.questions[2])}>
                    {questions.technical.questions[2]}
                </div>

                <div className="yes-quiz-answer" onClick={() => handle(questions.movies.questions[0])}>
                    {questions.movies.questions[0]}
                </div>

                <div className="yes-quiz-answer" onClick={() => handle(questions.movies.questions[1])}>
                    {questions.movies.questions[1]}
                </div>
            </div>
            
        </div>
        </>
    );
}

export default YesAnswer;