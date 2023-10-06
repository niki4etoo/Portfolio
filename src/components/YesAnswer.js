import React, { useState, useRef } from "react";

import Navigation from "./Navigation";
import QuestionAnimations from "./QuestionAnimations";
import AnsweredQuestions from './AnsweredQuestions';

import qa from '../Decisions/questionsAndAnswers.json';

import '../styles/quiz.css';

const  userAnswers = [];

const YesAnswer = () => {

    const questionRef = useRef(null);

    const answersRef = useRef([]);

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    const handle = (answer) => {
        userAnswers.push(answer);

        if(index === qa.yes.questions.length-1){
            setQuestionsAnswered(prev => !prev);
            setQuestionsToAnswer(prev => !prev);
        } else {
            QuestionAnimations(questionRef, answersRef, setIndex);
        }
    }

    return (
        <>
        <Navigation />
            { questionsAnswered && 
                <div className="answered">
                    <span className="message-success">You answered all the questions. Congratulations! You win a gum with a few coins!</span>
                    <AnsweredQuestions questions={userAnswers} />
                </div>
            }
            {
                questionsToAnswer &&
                
                    <div className="quiz-container">
                        <div ref={questionRef} className="quiz-question">
                            {qa.yes.questions[index].question}
                        </div>

                        <div className="quiz-answers">

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.yes.questions[index].answers[0])}>
                                {qa.yes.questions[index].answers[0]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.yes.questions[index].answers[1])}>
                                {qa.yes.questions[index].answers[1]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.yes.questions[index].answers[2])}>
                                {qa.yes.questions[index].answers[2]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.yes.questions[index].answers[3])}>
                                {qa.yes.questions[index].answers[3]}
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default YesAnswer;