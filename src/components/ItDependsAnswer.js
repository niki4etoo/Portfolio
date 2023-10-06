import React, { useState, useRef } from "react";

import Navigation from "./Navigation";
import QuestionAnimations from "./QuestionAnimations";
import AnsweredQuestions from './AnsweredQuestions';

import qa from '../Decisions/questionsAndAnswers.json';

import '../styles/quiz.css';

const  userAnswers = [];

const ItDependsAnswer = () => {

    const questionRef = useRef(null);

    const answersRef = useRef([]);

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    const handle = (answer) => {
        userAnswers.push(answer);

        if(index === qa.depends.questions.length-1){
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
                            {qa.depends.questions[index].question}
                        </div>

                        <div className="quiz-answers">

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.depends.questions[index].answers[0])}>
                                {qa.depends.questions[index].answers[0]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.depends.questions[index].answers[1])}>
                                {qa.depends.questions[index].answers[1]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.depends.questions[index].answers[2])}>
                                {qa.depends.questions[index].answers[2]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.depends.questions[index].answers[3])}>
                                {qa.depends.questions[index].answers[3]}
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default ItDependsAnswer;