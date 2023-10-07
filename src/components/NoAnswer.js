import React, { useState, useRef } from "react";

import Navigation from "./Navigation";

import qa from '../Decisions/questionsAndAnswers.json';
import QuestionAnimations from "./QuestionAnimations";
import AnsweredQuestions from './AnsweredQuestions';

import '../styles/quiz.css';

const  userAnswers = [];

const NoAnswer = () => {

    const questionRef = useRef(null);

    const answersRef = useRef([]);

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    const handle = (answer) => {
        userAnswers.push(answer);

        if(index === qa.no.questions.length-1){
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
                    <div className="message-success">You answered all the questions. Congratulations! You win a gum with a few coins!</div>
                    <AnsweredQuestions questions={userAnswers} page="/no" />
                </div>
            }
            {
                questionsToAnswer &&
                
                    <div className="quiz-container">
                        <div ref={questionRef} className="quiz-question">
                            {qa.no.questions[index].question}
                        </div>

                        <div className="quiz-answers">

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.no.questions[index].answers[0])}>
                                {qa.no.questions[index].answers[0]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.no.questions[index].answers[1])}>
                                {qa.no.questions[index].answers[1]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.no.questions[index].answers[2])}>
                                {qa.no.questions[index].answers[2]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.no.questions[index].answers[3])}>
                                {qa.no.questions[index].answers[3]}
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default NoAnswer;