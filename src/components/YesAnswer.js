import React, { useState, useRef } from "react";

import Navigation from "./Navigation";

import qa from '../Decisions/questionsAndAnswers.json';

import '../styles/quiz.css';

const  userAnswers = [];

const YesAnswer = () => {

    const questionRef = useRef(null);

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    const handle = (answer) => {
        userAnswers.push(answer);

        if(index === qa.yes.questions.length-1){
            setQuestionsAnswered(prev => !prev);
            setQuestionsToAnswer(prev => !prev);
            console.log(userAnswers);
        } else {
            setIndex(index => index+1);
        }
    }

    return (
        <>
        <Navigation />
            { questionsAnswered && 
                <div className="answered">You answered all the questions. Congratulations! You win a gum with a few coins!</div>
            }
            {
                questionsToAnswer &&
                    <div className="yes-quiz-container">
                        <div ref={questionRef} className="yes-quiz-question">
                            {qa.yes.questions[index].question}
                        </div>

                        <div className="yes-quiz-answers">
                            <div className="yes-quiz-answer" onClick={() => handle(qa.yes.questions[index].answers[0])}>
                                {qa.yes.questions[index].answers[0]}
                            </div>

                            <div className="yes-quiz-answer" onClick={() => handle(qa.yes.questions[index].answers[1])}>
                                {qa.yes.questions[index].answers[1]}
                            </div>

                            <div className="yes-quiz-answer" onClick={() => handle(qa.yes.questions[index].answers[2])}>
                                {qa.yes.questions[index].answers[2]}
                            </div>

                            <div className="yes-quiz-answer" onClick={() => handle(qa.yes.questions[index].answers[3])}>
                                {qa.yes.questions[index].answers[3]}
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default YesAnswer;